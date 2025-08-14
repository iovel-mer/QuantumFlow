'use client';

import Link from "next/link";
import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { ArrowRight, Home } from "lucide-react";

export default function TermsOfService() {
  const t = useTranslations("terms");

  return (
    <>
      <Header/>
    <main className="min-h-screen pt-10 container mx-auto relative bg-gradient-to-br  from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
       <div className='p-20'>
            <Link 
              href="/" 
              className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20   text-sm font-medium text-white'
            >
              <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
              {t('goBackHome')}
              <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
                 
      <div className="max-w-4xl mx-auto  rounded-2xl shadow-xl p-6 sm:p-10 border border-gray-200">
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
