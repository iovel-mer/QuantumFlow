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
      <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative flex items-center justify-center px-4 py-16">
                          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
        <Card className="max-w-4xl w-full border border-zinc-200 shadow-md rounded-2xl">
          <CardHeader className="space-y-3">
            <Link 
              href="/" 
              className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group text-sm font-medium text-white'
            >
              <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
              {t('backToHome')}
              <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
            </Link>
            <CardTitle className="text-4xl font-bold text-white">{t("title")}</CardTitle>
            <p className="text-white text-sm">{t("description")}</p>
          </CardHeader>
          <CardContent className="space-y-10 text-white leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-2">🍪 {t("section1.title")}</h2>
              <p>{t("section1.text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">📊 {t("section2.title")}</h2>
              <ul className="list-disc pl-5 space-y-2">
                {t.raw("section2.items").map((item: string, i: number) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">🌐 {t("section3.title")}</h2>
              <p>{t("section3.text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">⚙️ {t("section4.title")}</h2>
              <p>{t("section4.text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">✅ {t("section5.title")}</h2>
              <p>{t("section5.text")}</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">🔁 {t("section6.title")}</h2>
              <p>{t("section6.text")}</p>
            </section>

            
          </CardContent>
        </Card>
      </main>
    </>
  )
}
