"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";

const Page = () => {
  const t = useTranslations("security");

  return (
    <>
      <Header />
      <section className="min-h-screen bg-white text-slate-800">
        {/* HERO SECTION */}
        <section className="py-20 md:py-28 text-center px-6 md:px-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            {t("hero.title")}
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            {t("hero.subtitle")}
          </p>
        </section>

        {/* HIGHLIGHTS */}
        <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 md:px-10 max-w-6xl mx-auto pb-20">
          <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-2xl shadow border border-blue-100">
            <h2 className="text-2xl font-semibold mb-3 text-blue-800">
              {t("highlights.mission.title")}
            </h2>
            <p className="text-slate-700">{t("highlights.mission.text")}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl shadow border border-green-100">
            <h2 className="text-2xl font-semibold mb-3 text-green-800">
              {t("highlights.who.title")}
            </h2>
            <p className="text-slate-700">{t("highlights.who.text")}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl shadow border border-purple-100">
            <h2 className="text-2xl font-semibold mb-3 text-purple-800">
              {t("highlights.why.title")}
            </h2>
            <p className="text-slate-700">{t("highlights.why.text")}</p>
          </div>
        </section>

        {/* VALUES SECTION */}
        <section className="bg-slate-50 py-20 px-6 md:px-10">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              {t("values.title")}
            </h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {t("values.empathy.title")}
                </h3>
                <p className="text-slate-600">{t("values.empathy.text")}</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {t("values.agility.title")}
                </h3>
                <p className="text-slate-600">{t("values.agility.text")}</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                <h3 className="font-semibold text-lg text-slate-800 mb-2">
                  {t("values.transparency.title")}
                </h3>
                <p className="text-slate-600">{t("values.transparency.text")}</p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Page;
