'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";

export default function TermsOfService() {
  const t = useTranslations("terms");

  return (
    <>
      <Header/>
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-white flex items-center justify-center px-4 py-16">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:underline transition-all"
          >
            ← {t("goBackHome")}
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">{t("title")}</h1>
        <section className="space-y-10 text-gray-700 leading-relaxed">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-2">{t(`section${index + 1}.title`)}</h2>
              <p>{t(`section${index + 1}.description`)}</p>
            </div>
          ))}
        </section>

        <footer className="mt-12 text-center text-sm text-gray-500">
          {t("lastUpdated")}: July 18, 2025
        </footer>
      </div>
    </main>
    
    </>
  );
}
