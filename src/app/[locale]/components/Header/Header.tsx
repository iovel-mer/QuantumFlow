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
    <header className="bg-gradient-to-br container mx-auto sticky top-0 from-slate-950 via-slate-900 to-slate-950 shadow-md z-50">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between">
          {/* Logo and Brand */}
          <Link href={`/${locale}`}>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
                <Rocket size={20} className="sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white">
                  {t("brand.name")}
                </h1>
                <p className="text-xs text-slate-400 font-medium">{t("brand.slogan")}</p>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="flex items-center space-x-3">
            <Link href={`/${locale}/login`}>
              <Button className="flex cursor-pointer items-center gap-2 px-4 lg:px-6 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 transition-all duration-200 shadow-lg hover:shadow-xl border border-slate-600 hover:border-slate-500">
                <LogIn size={16} />
                {t("signIn")}
              </Button>
            </Link>
            <Link href={`/${locale}/register`}>
              <Button className="flex cursor-pointer hover:bg-blue-500 bg-blue-500 items-center gap-2 px-4 lg:px-6 py-2.5 rounded-xl text-sm font-semibold text-white shadow-lg">
                <UserPlus size={16} />
                {t("getStarted")}
              </Button>
            </Link>
            <LanguageSwitcher />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Mobile Header Row */}
          <div className="flex items-center justify-between mb-3">
            {/* Logo and Brand */}
            <Link href={`/${locale}`}>
              <div className="flex items-center space-x-2 sm:space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Rocket size={20} className="text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-bold text-white">
                    {t("brand.name")}
                  </h1>
                  <p className="text-xs text-slate-400 font-medium">{t("brand.slogan")}</p>
                </div>
              </div>
            </Link>

            {/* Mobile Menu Toggle - Compact */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20"
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button - Full Width */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-full p-3 text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg transition-all duration-300 bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 flex items-center justify-center gap-2 font-medium"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <>
                <X className="w-5 h-5" />
                <span>Close Menu</span>
              </>
            ) : (
              <>
                <Menu className="w-5 h-5" />
                <span>Open Menu</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-3 flex flex-col">
            <Link href={`/${locale}/login`} onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full justify-start gap-2 text-sm font-semibold bg-slate-700 text-white hover:bg-slate-600 py-3">
                <LogIn size={16} />
                {t("signIn")}
              </Button>
            </Link>
            <Link href={`/${locale}/register`} onClick={() => setIsMenuOpen(false)}>
              <Button className="w-full justify-start gap-2 text-sm font-semibold bg-blue-500 text-white hover:bg-blue-600 py-3">
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