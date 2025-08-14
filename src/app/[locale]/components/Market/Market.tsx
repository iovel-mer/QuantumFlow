"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { getMarketData, type MarketData } from "@/app/api/market/actions"
import { TrendingUp, TrendingDown, Activity, RefreshCw, BarChart3 } from "lucide-react"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { log } from "console"

export const Market: React.FC = () => {
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())
  const t = useTranslations("Market")

  const fetchData = async () => {
    try {
      setLoading(true)
      const result = await getMarketData()
      console.log(result)
      if (result.success) {
        setMarketData(result.data as any)
        setError(null)
      } else {
        setError(result.error || t("errorGeneric"))
      }
    } catch (err) {
      setError(t("errorFetch"))
      console.error("Market data fetch error:", err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  }, [t])

  useEffect(() => {
    const interval = setInterval(() => {
      fetchData()
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    const fractionDigits = price >= 1000 ? 2 : price >= 1 ? 4 : 6
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: fractionDigits,
      maximumFractionDigits: fractionDigits,
    }).format(price)
  }

  const formatChange = (change: number) => {
    const sign = change >= 0 ? "+" : ""
    return `${sign}${change.toFixed(2)}%`
  }

  const handleImageError = (symbol: string) => {
    setImageErrors((prev) => new Set(prev).add(symbol))
  }

  const CryptoLogo = ({ coin }: { coin: MarketData }) => {
    const hasError = imageErrors.has(coin.symbol)
    const logoSrc = `/assets/images/${coin.symbol.toLowerCase()}.png`

    if (hasError) {
      return (
        <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-xs sm:text-sm">
          {coin.symbol?.slice(0, 2) || "??"}
        </div>
      )
    }

    return (
      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 relative">
        <Image
          src={logoSrc}
          fill
          alt={`${coin.name || coin.symbol} logo`}
          className="rounded-full object-contain"
          onError={() => handleImageError(coin.symbol)}
          unoptimized
        />
      </div>
    )
  }

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-30 container mx-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:15px_15px] sm:bg-[size:20px_20px] pointer-events-none"></div>

      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "15px 15px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-cyan-300 bg-gray-900/50 border border-cyan-500/30 mb-3 sm:mb-4 backdrop-blur-sm shadow-lg">
            <Activity className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-400" />
            {t("badge")}
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 sm:mb-4">{t("title")}</h3>
          <p className="text-sm sm:text-base lg:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light px-4">{t("description")}</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20">
            <div className="relative">
              <div className="w-12 h-12 sm:w-16 sm:h-16 border-2 sm:border-4 border-cyan-500 rounded-full animate-spin border-t-transparent"></div>
              <RefreshCw className="w-4 h-4 sm:w-6 sm:h-6 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" />
            </div>
            <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg font-medium">{t("loading")}</p>
          </div>
        ) : error ? (
          <div className="text-center py-12 sm:py-16 lg:py-20">
            <div className="bg-gray-900/50 border border-red-500 rounded-xl p-6 sm:p-8 max-w-xs sm:max-w-md mx-auto shadow-lg">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <p className="text-red-400 text-base sm:text-lg font-semibold">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {marketData.map((coin) => (
              <div
                key={coin.symbol}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-5 lg:p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4 sm:mb-5 lg:mb-6">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <CryptoLogo coin={coin} />
                      <div>
                        <h4 className="font-bold text-sm sm:text-base lg:text-lg text-white">{coin.name}</h4>
                        <p className="text-white/60 text-xs sm:text-sm font-medium uppercase tracking-wider">{coin.symbol}</p>
                      </div>
                    </div>
                    <div
                      className={`flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                        coin.change >= 0
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-red-500/20 text-red-300 border border-red-500/30"
                      }`}
                    >
                      {coin.change >= 0 ? <TrendingUp className="w-2.5 h-2.5 sm:w-3 sm:h-3" /> : <TrendingDown className="w-2.5 h-2.5 sm:w-3 sm:h-3" />}
                      <span className="text-xs sm:text-sm">{formatChange(coin.change)}</span>
                    </div>
                  </div>

                  <div className="mb-4 sm:mb-5 lg:mb-6">
                    <p className="text-xl sm:text-2xl lg:text-3xl font-black text-white mb-1 tracking-tight">{formatPrice(coin.price)}</p>
                    <p className="text-white/50 text-xs sm:text-sm flex items-center gap-1">
                      <BarChart3 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                      {t("currentPrice")}
                    </p>
                  </div>

                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center text-xs sm:text-sm">
                      <span className="text-white/70 font-medium">{t("movement")}</span>
                      <span className={`font-bold ${coin.change >= 0 ? "text-emerald-300" : "text-red-300"}`}>
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>
                    <div className="relative w-full bg-white/10 rounded-full h-1.5 sm:h-2 overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all duration-1000 ${
                          coin.change >= 0
                            ? "bg-gradient-to-r from-emerald-400 to-emerald-500"
                            : "bg-gradient-to-r from-red-400 to-red-500"
                        }`}
                        style={{ width: `${Math.min(100, Math.abs(coin.change) * 8)}%` }}
                      ></div>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}