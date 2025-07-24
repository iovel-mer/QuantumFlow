"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useTranslations } from "next-intl"
import { TrendingUp, TrendingDown, Activity, RefreshCw, Zap, BarChart3, Timer } from "lucide-react"

// Mock data for demonstration
const mockMarketData = [
  { symbol: "BTC", name: "Bitcoin", price: 43250.67, change: 2.45, icon: "₿" },
  { symbol: "ETH", name: "Ethereum", price: 2680.34, change: -1.23, icon: "Ξ" },
  { symbol: "SOL", name: "Solana", price: 98.76, change: 5.67, icon: "◎" },
  { symbol: "ADA", name: "Cardano", price: 0.4521, change: 1.89, icon: "₳" },
  { symbol: "DOT", name: "Polkadot", price: 6.234, change: -0.87, icon: "●" },
  { symbol: "MATIC", name: "Polygon", price: 0.8943, change: 3.21, icon: "⬟" },
  { symbol: "AVAX", name: "Avalanche", price: 37.89, change: 4.56, icon: "▲" },
  { symbol: "LINK", name: "Chainlink", price: 14.67, change: -2.11, icon: "🔗" }
]

export const Market: React.FC = () => {
  const t = useTranslations("market")
  const [marketData, setMarketData] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setMarketData(mockMarketData)
        setError(null)
      } catch (err) {
        setError(t("error"))
        console.error("Market data fetch error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [t])

  useEffect(() => {
    const interval = setInterval(() => {
      setMarketData(prev => prev.map(coin => ({
        ...coin,
        price: coin.price * (1 + (Math.random() - 0.5) * 0.002),
        change: coin.change + (Math.random() - 0.5) * 0.5
      })))
    }, 15000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    const options = {
      style: "currency" as const,
      currency: "USD",
      minimumFractionDigits: price >= 1000 ? 2 : price >= 1 ? 4 : 6,
      maximumFractionDigits: price >= 1000 ? 2 : price >= 1 ? 4 : 6
    }
    return new Intl.NumberFormat("en-US", options).format(price)
  }

  return (
    <section id="portfolio" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="relative z-10 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6 text-white/90 hover:bg-white/15 transition-all duration-300">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <Activity className="w-4 h-4" />
              <span className="text-sm font-medium">{t("live")}</span>
              <Timer className="w-4 h-4 opacity-70" />
            </div>
            <h3 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-6 tracking-tight">
              {t("title")}
            </h3>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              {t("description")}
            </p>
          </div>

          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative mb-8">
                <div className="w-24 h-24 border-4 border-white/20 rounded-full animate-spin border-t-purple-400"></div>
                <div className="absolute inset-0 w-24 h-24 border-4 border-transparent rounded-full animate-spin border-t-blue-400 animate-reverse"></div>
                <Zap className="w-8 h-8 text-purple-400 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse" />
              </div>
              <p className="text-white/60 text-xl font-medium">{t("loading")}</p>
            </div>
          ) : error ? (
            <div className="text-center py-32">
              <div className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 rounded-2xl p-12 max-w-md mx-auto">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingDown className="w-8 h-8 text-red-400" />
                </div>
                <p className="text-red-300 text-xl font-semibold">{error}</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {marketData.map((coin, index) => (
                <div
                  key={coin.symbol}
                  className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 100}ms`, animation: 'fadeInUp 0.6s ease-out forwards' }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                          {coin.icon}
                        </div>
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
                        {coin.change >= 0 ? "+" : ""}
                        {coin.change.toFixed(2)}%
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
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-reverse { animation-direction: reverse; }
      `}</style>
    </section>
  )
}