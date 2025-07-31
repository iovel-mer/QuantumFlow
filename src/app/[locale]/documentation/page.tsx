"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";

import React from 'react'

const page = () => {
  const t = useTranslations("docs");


  return (
    <>
      <Header/>
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative text-white py-12 px-6 md:px-20">
            <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

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