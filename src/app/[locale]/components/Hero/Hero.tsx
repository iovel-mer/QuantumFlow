"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { useLocale, useTranslations } from "next-intl"
import { getHeroMarketData, type MarketData } from "@/app/api/market/actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Coins } from "lucide-react"

export const Hero: React.FC = () => {
  const t = useTranslations("hero")
  const locale = useLocale();
  const [marketData, setMarketData] = useState<MarketData[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
          setError(null)
        } else {
          setError(result.error || "Failed to load data")
        }
      } catch (err) {
        setError("Failed to load market data")
        console.error("Hero data fetch error:", err)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const result = await getHeroMarketData()
        if (result.success) {
          setMarketData(result.data as any)
        }
      } catch (err) {
        console.warn("Failed to update hero data:", err)
      }
    }, 30000)
    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(price)
  }

  return (
    <section className="pb-60  mx-auto bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white pt-16 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-violet-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-3xl animate-pulse animation-delay-300"></div>
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(148, 163, 184, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(148, 163, 184, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      <div className="absolute top-32 left-16 w-2 h-2 bg-violet-400 rounded-full animate-ping opacity-70"></div>
      <div className="absolute top-48 right-24 w-1 h-1 bg-emerald-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-32 left-32 w-1.5 h-1.5 bg-teal-400 rounded-full animate-bounce opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl">
              <div className="flex space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse animation-delay-200"></div>
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse animation-delay-400"></div>
              </div>
              <span className="text-slate-200 text-sm font-medium tracking-wider">{t("liveMarkets")}</span>
            </div>

            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight">
                <span className="text-white">{t("nextGen")}</span>
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-emerald-400 to-teal-400 animate-pulse">
                  {t("trading")}
                </span>
                <br />
                <span className="text-slate-300">{t("platform")}</span>
              </h1>

              <div className="flex flex-wrap gap-6 text-sm font-mono text-slate-400">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span>{t("specs.execution")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                  <span>{t("specs.uptime")}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                  <span>{t("specs.grade")}</span>
                </div>
              </div>
            </div>

            <p className="text-xl text-slate-300 leading-relaxed max-w-2xl font-light">
              {t("description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={`/${locale}/register`} passHref>
                <Button className="group cursor-pointer relative px-8 py-4 bg-gradient-to-r from-violet-500 to-emerald-500 text-white font-semibold text-lg rounded-2xl hover:from-violet-400 hover:to-emerald-400 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-violet-500/25">
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{t("startTrading")}</span>
                    <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </Button>
              </Link>
              <Link href={`/${locale}/register`}  passHref>
                <Button variant="outline" className="px-8 bg-black cursor-pointer py-4 border-2 border-white/20 text-white font-semibold text-lg rounded-2xl hover:bg-white/5 hover:border-white/30 transition-all duration-300 backdrop-blur-xl">
                  {t("viewDemo")}
                </Button>
              </Link>
            </div>

            
          </div>

          <div className="lg:col-span-5">
            <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between p-6 border-b border-white/10 bg-gradient-to-r from-white/5 to-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full shadow-lg"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                    <div className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg"></div>
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{t("marketFeed")}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-emerald-400 text-xs font-medium uppercase tracking-wider">{t("live")}</span>
                </div>
              </CardHeader>

              <CardContent className="p-6">
                {loading ? (
                  <div className="flex items-center justify-center py-16">
                    <div className="space-y-4 text-center">
                      <div className="relative">
                        <div className="animate-spin rounded-full h-12 w-12 border-4 border-violet-400/30 border-t-violet-400 mx-auto"></div>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-400/20 to-emerald-400/20 animate-ping"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="text-slate-300 font-medium">{t("loading.title")}</div>
                        <div className="text-slate-500 text-sm">{t("loading.sub")}</div>
                      </div>
                    </div>
                  </div>
                ) : error ? (
                  <div className="text-center py-16">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    </div>
                    <div className="text-red-400 font-medium mb-2">{t("error.title")}</div>
                    <div className="text-slate-500 text-sm">{t("error.sub")}</div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {marketData.map((coin) => (
                      <div key={coin.symbol} className="group">
                        <div className="flex items-center justify-between p-5 bg-white/5 hover:bg-white/10 transition-all duration-300 rounded-2xl border border-white/5 hover:border-white/20">
                          <div className="flex items-center space-x-4">
                            <div className="text-2xl p-2 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-xl">
                              <div className="text-2xl p-2 bg-gradient-to-r from-violet-500/20 to-emerald-500/20 rounded-xl">
                              <img
    src={`/assets/images/${coin.symbol.toLowerCase()}.png`}
    alt={`${coin.symbol} logo`}
    className="w-8 h-8"
  />
                              </div>
                            </div>
                            <div>
                              <div className="text-white font-semibold text-lg">{coin.symbol}</div>
                              <div className="text-slate-400 text-sm">USD Pair</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-white font-bold text-xl mb-1">{formatPrice(coin.price)}</div>
                            <div className={`text-sm font-semibold px-3 py-1 rounded-full ${
                              coin.change >= 0
                                ? "text-emerald-400 "
                                : "text-red-400"
                            }`}>
                              {coin.change >= 0 ? "+" : ""}
                              {coin.change.toFixed(2)}%
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-6 border-t border-white/10 bg-gradient-to-r from-white/5 to-white/10">
                <div className="flex justify-between items-center text-sm text-slate-400 w-full">
                  <span>{t("updated")}: {mounted ? new Date().toLocaleTimeString() : "--:--:--"}</span>
                  <span>{t("volume")}: {marketData[0]?.volume || "$3.2T"}</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
