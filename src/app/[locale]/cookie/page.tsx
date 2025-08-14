"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Header } from "../components/Header/Header"
import { ArrowRight, Home } from "lucide-react"

export default function CookiePage() {
  const t = useTranslations("Cookie")

  return (
    <>
      <Header />
      <main className="min-h-screen pt-6 sm:pt-8 md:pt-10 container mx-auto px-4 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className='p-4 sm:p-8 md:p-12 lg:p-20'>
          <Link 
            href="/" 
            className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group text-sm font-medium text-white'
          >
            <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
            {t('backToHome')}
            <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
          </Link>
        </div>
                 
        <div className="max-w-4xl mx-auto rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 sm:mb-6">{t("title")}</h1>
          <p className="text-white/70 mb-6 sm:mb-8 text-base sm:text-lg">{t("description")}</p>
          
          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-white leading-relaxed">
            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">🍪 {t("section1.title")}</h2>
              <p className="text-white/90">{t("section1.text")}</p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">📊 {t("section2.title")}</h2>
              <ul className="list-disc pl-5 space-y-2 text-white/80">
                {t.raw("section2.items").map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">🌐 {t("section3.title")}</h2>
              <p className="text-white/90">{t("section3.text")}</p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">⚙️ {t("section4.title")}</h2>
              <p className="text-white/90">{t("section4.text")}</p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">✅ {t("section5.title")}</h2>
              <p className="text-white/90">{t("section5.text")}</p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">🔁 {t("section6.title")}</h2>
              <p className="text-white/90">{t("section6.text")}</p>
            </section>
          </div>
        </div>
      </main>
    </>
  )
}