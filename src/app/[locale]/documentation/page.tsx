"use client";

import { useLocale, useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";

import React from 'react'
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

const page = () => {
  const t = useTranslations("docs");
  const locale = useLocale()

  return (
    <>
      <Header/>
      <main className="min-h-screen pt-6 sm:pt-8 md:pt-10  mx-auto px-4 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        
        <div className='p-4 sm:p-8 md:p-12 lg:p-20'>
          <Link
            href={`/${locale}`}
            className='inline-flex items-center px-3 py-2 sm:px-4 bg-white/10 backdrop-blur-sm rounded-full border border-white/20  text-xs sm:text-sm font-medium text-white'
          >
            <Home className='h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
            {t('backToHome')}
            <ArrowRight className='h-3 w-3 sm:h-4 sm:w-4 ml-1 sm:ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
          </Link>
        </div>

        <div className="max-w-4xl mx-auto rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200">
          
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 sm:mb-8 md:mb-10 leading-tight">
            {t("title")}
          </h1>

          <div className="space-y-6 sm:space-y-8 md:space-y-10 text-white leading-relaxed">
            
            <section>
              <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                {t("whatIs.title")}
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                {t("whatIs.text")}
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                {t("blockchain.title")}
              </h2>
              <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                {t("blockchain.text")}
              </p>
            </section>

            <section>
              <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                {t("popular.title")}
              </h2>
              <ul className="list-disc list-inside text-white/90 space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed ml-4 sm:ml-6">
                <li>
                  <strong className="text-white">Bitcoin (BTC):</strong> {t("popular.bitcoin")}
                </li>
                <li>
                  <strong className="text-white">Ethereum (ETH):</strong> {t("popular.ethereum")}
                </li>
                <li>
                  <strong className="text-white">Solana (SOL):</strong> {t("popular.solana")}
                </li>
                <li>
                  <strong className="text-white">Ripple (XRP):</strong> {t("popular.ripple")}
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                {t("buy.title")}
              </h2>
              <ol className="list-decimal list-inside text-white/90 space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed ml-4 sm:ml-6">
                <li>{t("buy.step1")}</li>
                <li>{t("buy.step2")}</li>
                <li>{t("buy.step3")}</li>
                <li>{t("buy.step4")}</li>
              </ol>
            </section>

            <section>
              <h2 className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-white mb-2 sm:mb-3 lg:mb-4">
                {t("tips.title")}
              </h2>
              <ul className="list-disc list-inside text-white/90 space-y-2 sm:space-y-3 text-sm sm:text-base leading-relaxed ml-4 sm:ml-6">
                <li>{t("tips.tip1")}</li>
                <li>{t("tips.tip2")}</li>
                <li>{t("tips.tip3")}</li>
                <li>{t("tips.tip4")}</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}

export default page