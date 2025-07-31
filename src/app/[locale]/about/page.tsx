"use client";


import { Header } from "../components/Header/Header";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("about");

  return (
    <>
      <Header />
      <section className="min-h-screen relative bg-gradient-to-br  from-slate-950 via-slate-900 to-slate-950 pt-0">
        <div className="absolute inset-0 z-0  bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        {/* HERO SECTION */}
        <section className="py-20 md:py-28 text-center px-6 md:px-10 max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t("title")}
          </h1>
          <p className="text-lg md:text-xl text-white leading-relaxed">
            {t("subtitle")}
          </p>
        </section>

        {/* HIGHLIGHTS */}
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

export default Page;
