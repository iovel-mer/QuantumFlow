"use client"

import Link from "next/link"
import type React from "react"
import { useState } from "react"
import { LogIn, UserPlus, Rocket, Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/LanguageSwitcher"
import { useLocale, useTranslations } from "next-intl"

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale()
  const t = useTranslations("Header")

  return (
    <header className="bg-gradient-to-br sticky top-0 from-slate-950 via-slate-900 to-slate-950 shadow-md z-50">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link href={`/${locale}`}>
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <Rocket size={24} className="text-white" />
              </div>
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-white bg-clip-text ">
                {t("brand.name")}
              </h1>
              <p className="text-xs text-slate-400 font-medium">{t("brand.slogan")}</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href={`/${locale}/login`}>
              <Button className="flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 transition-all duration-200 shadow-lg hover:shadow-xl border border-slate-600 hover:border-slate-500">
                <LogIn size={16} />
                {t("signIn")}
              </Button>
            </Link>
            <Link href={`/${locale}/register`}>
              <Button className="flex bg-blue-500 items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white hover:from-emerald-500 hover:to-teal-500 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-emerald-500/25">
                <UserPlus size={16} />
                {t("getStarted")}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 flex flex-col items-start">
            <Link href={`/${locale}/login`} onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full justify-start gap-2 text-sm font-semibold bg-slate-700 text-white hover:bg-slate-600">
                <LogIn size={16} />
                {t("signIn")}
              </Button>
            </Link>
            <Link href={`/${locale}/register`} onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full justify-start gap-2 text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600">
                <UserPlus size={16} />
                {t("getStarted")}
              </Button>
            </Link>
            <div className="w-full">
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
