"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";

import React from 'react'

const page = () => {
  const t = useTranslations("docs");


  return (
    <>
      <Header/>
    <main className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-indigo-700">{t("title")}</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("whatIs.title")}</h2>
          <p className="text-gray-700">{t("whatIs.text")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("blockchain.title")}</h2>
          <p className="text-gray-700">{t("blockchain.text")}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("popular.title")}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>Bitcoin (BTC):</strong> {t("popular.bitcoin")}</li>
            <li><strong>Ethereum (ETH):</strong> {t("popular.ethereum")}</li>
            <li><strong>Solana (SOL):</strong> {t("popular.solana")}</li>
            <li><strong>Ripple (XRP):</strong> {t("popular.ripple")}</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("buy.title")}</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-1">
            <li>{t("buy.step1")}</li>
            <li>{t("buy.step2")}</li>
            <li>{t("buy.step3")}</li>
            <li>{t("buy.step4")}</li>
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">{t("tips.title")}</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
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