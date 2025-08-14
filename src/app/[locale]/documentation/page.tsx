"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";

import React from 'react'
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

const page = () => {
  const t = useTranslations("docs");


  return (
    <>
      <Header/>

    <main className="min-h-screen pt-6 sm:pt-8 md:pt-10 container mx-auto px-4 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
       <div className="p-20">
   <Link
                    href="/"
                    className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group text-sm font-medium text-white'
                  >
                    <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
                    {t('backToHome')}
                    <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
                  </Link>
 </div>
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-white">{t("title")}</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("whatIs.title")}</h2>
          <p className="text-white">{t("whatIs.text")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("blockchain.title")}</h2>
          <p className="text-white">{t("blockchain.text")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("popular.title")}</h2>
          <ul className="list-disc list-inside text-white space-y-1">
            <li><strong>Bitcoin (BTC):</strong> {t("popular.bitcoin")}</li>
            <li><strong>Ethereum (ETH):</strong> {t("popular.ethereum")}</li>
            <li><strong>Solana (SOL):</strong> {t("popular.solana")}</li>
            <li><strong>Ripple (XRP):</strong> {t("popular.ripple")}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("buy.title")}</h2>
          <ol className="list-decimal list-inside text-white space-y-1">
            <li>{t("buy.step1")}</li>
            <li>{t("buy.step2")}</li>
            <li>{t("buy.step3")}</li>
            <li>{t("buy.step4")}</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("tips.title")}</h2>
          <ul className="list-disc list-inside text-white space-y-1">
            <li>{t("tips.tip1")}</li>
            <li>{t("tips.tip2")}</li>
            <li>{t("tips.tip3")}</li>
            <li>{t("tips.tip4")}</li>
          </ul>
        </section>
      </div>
    </main>
    </>
  );
}


export default page