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

  const CryptoLogo = ({ coin, size = 48 }: { coin: MarketData; size?: number }) => {
    const hasError = imageErrors.has(coin.symbol)
    const logoSrc = `/assets/images/${coin.symbol.toLowerCase()}.png`

    if (hasError) {
      return (
        <div
          className="flex items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white font-bold text-base"
          style={{ width: size, height: size }}
        >
          {coin.symbol?.slice(0, 2) || "??"}
        </div>
      )
    }

    return (
      <Image
        src={logoSrc}
        width={size}
        height={size}
        alt={`${coin.name || coin.symbol} logo`}
        className="rounded-full object-contain"
        onError={() => handleImageError(coin.symbol)}
        unoptimized
      />
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white min-h-screen relative overflow-hidden">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium text-cyan-300 bg-gray-900/50 border border-cyan-500/30 mb-4 backdrop-blur-sm shadow-lg">
            <Activity className="w-3 h-3 text-cyan-400" />
            {t("badge")}
          </div>
          <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{t("title")}</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">{t("description")}</p>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-16 h-16 border-4 border-cyan-500 rounded-full animate-spin border-t-transparent"></div>
              <RefreshCw className="w-6 h-6 text-cyan-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin-slow" />
            </div>
            <p className="mt-6 text-gray-400 text-lg font-medium">{t("loading")}</p>
          </div>
        ) : error ? (
          <div className="text-center py-20">
            <div className="bg-gray-900/50 border border-red-500 rounded-xl p-8 max-w-md mx-auto shadow-lg">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="w-6 h-6 text-white" />
              </div>
              <p className="text-red-400 text-lg font-semibold">{error}</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {marketData.map((coin) => (
              <div
                key={coin.symbol}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center space-x-4">
                      <CryptoLogo coin={coin} size={48} />
                      <div>
                        <h4 className="font-bold text-lg text-white">{coin.name}</h4>
                        <p className="text-white/60 text-sm font-medium uppercase tracking-wider">{coin.symbol}</p>
                      </div>
                    </div>
                    <div
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm ${
                        coin.change >= 0
                          ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                          : "bg-red-500/20 text-red-300 border border-red-500/30"
                      }`}
                    >
                      {coin.change >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                      {formatChange(coin.change)}
                    </div>
                  </div>

                  <div className="mb-6">
                    <p className="text-3xl font-black text-white mb-1 tracking-tight">{formatPrice(coin.price)}</p>
                    <p className="text-white/50 text-sm flex items-center gap-1">
                      <BarChart3 className="w-3 h-3" />
                      {t("currentPrice")}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-white/70 font-medium">{t("movement")}</span>
                      <span className={`font-bold ${coin.change >= 0 ? "text-emerald-300" : "text-red-300"}`}>
                        {Math.abs(coin.change).toFixed(2)}%
                      </span>
                    </div>
                    <div className="relative w-full bg-white/10 rounded-full h-2 overflow-hidden">
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
