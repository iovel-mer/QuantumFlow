"use client"

import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Trading: React.FC = () => {
  const t = useTranslations("trade")
  const locale = useLocale();

  const features = [
    {
      icon: <CheckCircle className="text-green-500" />,
      title: t("features.analytics.title"),
      description: t("features.analytics.description")
    },
    {
      icon: <CheckCircle className="text-green-500" />,
      title: t("features.security.title"),
      description: t("features.security.description")
    },
    {
      icon: <CheckCircle className="text-green-500" />,
      title: t("features.speed.title"),
      description: t("features.speed.description")
    },
    {
      icon: <CheckCircle className="text-green-500" />,
      title: t("features.fees.title"),
      description: t("features.fees.description")
    },
    {
      icon: <CheckCircle className="text-green-500" />,
      title: t("features.support.title"),
      description: t("features.support.description")
    },
    {
      icon: <CheckCircle className="text-green-500" />,
      title: t("features.access.title"),
      description: t("features.access.description")
    }
  ]

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto text-center">
      <div className="mb-6 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-semibold text-green-700">
        {t("badge")}
      </div>
      <h2 className="text-4xl font-bold mb-4">
        {t("title.line1")} <span className="text-green-600">{t("title.line2")}</span>
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        {t("description")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <Link href={`/${locale}/login`}><Button className="text-lg px-6 py-3 rounded-xl">{t("cta")}</Button></Link>
      </div>
    </section>
  )
}
