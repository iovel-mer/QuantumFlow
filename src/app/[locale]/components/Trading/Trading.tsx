"use client"

import React from "react"
import { useLocale, useTranslations } from "next-intl"
import { CheckCircle, TrendingUp, Shield, Zap, DollarSign, HeadphonesIcon, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const Trading: React.FC = () => {
  const t = useTranslations("trade")
  const locale = useLocale();

  const featureIcons = [
    TrendingUp,
    Shield,
    Zap,
    DollarSign,
    HeadphonesIcon,
    Globe
  ]

  const features = [
    {
      icon: featureIcons[0],
      title: t("features.analytics.title"),
      description: t("features.analytics.description"),
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: featureIcons[1],
      title: t("features.security.title"),
      description: t("features.security.description"),
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: featureIcons[2],
      title: t("features.speed.title"),
      description: t("features.speed.description"),
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: featureIcons[3],
      title: t("features.fees.title"),
      description: t("features.fees.description"),
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: featureIcons[4],
      title: t("features.support.title"),
      description: t("features.support.description"),
      gradient: "from-red-500 to-rose-500"
    },
    {
      icon: featureIcons[5],
      title: t("features.access.title"),
      description: t("features.access.description"),
      gradient: "from-indigo-500 to-blue-500"
    }
  ]

  return (
    <section className="relative py-24 px-4  mx-auto overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-500/20 rounded-full blur-3xl -z-10" />
      
      <div className="text-center relative z-10">
        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 text-sm font-semibold text-white/90 shadow-lg hover:bg-white/15 transition-all duration-300">
          <CheckCircle className="w-4 h-4 text-emerald-400" />
          {t("badge")}
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white leading-tight tracking-tight">
          {t("title.line1")}{" "}
          <span className="bg-gradient-to-r from-purple-400 to-emerald-400 bg-clip-text text-transparent">
            {t("title.line2")}
          </span>
        </h2>

        {/* Description */}
        <p className="text-xl text-white/70 mb-16 max-w-3xl mx-auto leading-relaxed">
          {t("description")}
        </p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className="group relative bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20 overflow-hidden"
              >
                {/* Card gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`} />
                
                {/* Icon */}
                <div className={`relative mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-white/90 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed group-hover:text-white/80 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Hover accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </div>
            )
          })}
        </div>

        
      </div>
    </section>
  )
}