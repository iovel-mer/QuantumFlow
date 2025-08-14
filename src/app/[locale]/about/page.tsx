"use client";

import Link from "next/link";
import { Header } from "../components/Header/Header";
import { useTranslations } from "next-intl";
import { Home, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const t = useTranslations("about");

  return (
    <>
      <Header />
      <section className="min-h-screen container mx-auto relative bg-gradient-to-br  from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className='p-20'>
            <Link 
              href="/" 
              className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20   text-sm font-medium text-white'
            >
              <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
              {t('backToHome')}
              <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
         
       
        <section className="py-20 md:py-28 text-center px-6 md:px-10 max-w-5xl mx-auto">

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            {t("subtitle")}
          </p>
        </section>

       
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 max-w-6xl mx-auto pb-20">
          <div className=" p-6 rounded-2xl shadow border border-blue-100">
            <h2 className="text-2xl font-semibold mb-3 text-white">
              {t("missionTitle")}
            </h2>
            <p className="text-white">{t("missionText")}</p>
          </div>
          <div className="  p-6 rounded-2xl shadow border border-green-100">
            <h2 className="text-2xl font-semibold mb-3 text-white">
              {t("whoTitle")}
            </h2>
            <p className="text-white">{t("whoText")}</p>
          </div>
          <div className=" p-6 rounded-2xl shadow border border-purple-100">
            <h2 className="text-2xl font-semibold mb-3 text-white">
              {t("whyTitle")}
            </h2>
            <p className="text-white">{t("whyText")}</p>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className=" py-20 px-6 md:px-10">

          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
              {t("guidesTitle")}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className=" p-8 rounded-xl shadow-md border border-slate-200">
                <h3 className="font-semibold text-lg text-white mb-2">
                  {t("value1Title")}
                </h3>
                <p className="text-white">{t("value1Text")}</p>
              </div>
              <div className=" p-8 rounded-xl shadow-md border border-slate-200">
                <h3 className="font-semibold text-lg text-white mb-2">
                  {t("value2Title")}
                </h3>
                <p className="text-white">{t("value2Text")}</p>
              </div>
              <div className=" p-8 rounded-xl shadow-md border border-slate-200">
                <h3 className="font-semibold text-lg text-white mb-2">
                  {t("value3Title")}
                </h3>
                <p className="text-white">{t("value3Text")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
     
    </>
  );
};

