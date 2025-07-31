'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";

export default function TermsOfService() {
  const t = useTranslations("terms");

  return (
    <>
      <Header/>
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative flex items-center justify-center px-4 py-16">
                  <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      <div className="max-w-4xl w-full  rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200">
        <div className="mb-6">
          <Link
            href="/"
            className="text-sm text-white hover:underline transition-all"
          >
            ← {t("goBackHome")}
          </Link>
        </div>
        <h1 className="text-4xl font-extrabold text-white mb-6">{t("title")}</h1>
        <section className="space-y-10 text-white leading-relaxed">
          {[...Array(8)].map((_, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-2">{t(`section${index + 1}.title`)}</h2>
              <p>{t(`section${index + 1}.description`)}</p>
            </div>
          ))}
        </section>

        
      </div>
    </main>
    
    </>
  );
}
