"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";

const Page = () => {
  const t = useTranslations("security");

  return (
    <>
      <Header />

      <section className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative pt-0 text-white">
        {/* Optional Grid Background Layer */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        {/* HERO SECTION */}
        <section className="relative z-10 py-20 md:py-28 text-center px-6 md:px-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </section>

        {/* HIGHLIGHTS */}
        <section className="relative z-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 max-w-6xl mx-auto pb-20">
          <div className="p-6 rounded-2xl shadow border border-blue-100 bg-slate-800/30 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-3">
              {t("highlights.mission.title")}
            </h2>
            <p>{t("highlights.mission.text")}</p>
          </div>
          <div className="p-6 rounded-2xl shadow border border-green-100 bg-slate-800/30 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-3">
              {t("highlights.who.title")}
            </h2>
            <p>{t("highlights.who.text")}</p>
          </div>
          <div className="p-6 rounded-2xl shadow border border-purple-100 bg-slate-800/30 backdrop-blur">
            <h2 className="text-2xl font-semibold mb-3">
              {t("highlights.why.title")}
            </h2>
            <p>{t("highlights.why.text")}</p>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="relative z-10 py-20 px-6 md:px-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              {t("values.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="p-8 rounded-xl shadow-md border border-slate-500 bg-slate-800/30 backdrop-blur">
                <h3 className="font-semibold text-lg mb-2">
                  {t("values.empathy.title")}
                </h3>
                <p>{t("values.empathy.text")}</p>
              </div>
              <div className="p-8 rounded-xl shadow-md border border-slate-500 bg-slate-800/30 backdrop-blur">
                <h3 className="font-semibold text-lg mb-2">
                  {t("values.agility.title")}
                </h3>
                <p>{t("values.agility.text")}</p>
              </div>
              <div className="p-8 rounded-xl shadow-md border border-slate-500 bg-slate-800/30 backdrop-blur">
                <h3 className="font-semibold text-lg mb-2">
                  {t("values.transparency.title")}
                </h3>
                <p>{t("values.transparency.text")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
