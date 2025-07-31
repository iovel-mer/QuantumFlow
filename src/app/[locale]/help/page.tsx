"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sparkles,
  TrendingUp,
  Shield,
  Users,
  Zap,
} from "lucide-react";

const Page = () => {
  const t = useTranslations("help");

  const helpCategories = [
    {
      icon: TrendingUp,
      title: t("categories.trading.title"),
      description: t("categories.trading.description"),
      gradient: "from-blue-500 to-cyan-500",
      items: [
        t("categories.trading.items.0"),
        t("categories.trading.items.1"),
        t("categories.trading.items.2"),
      ],
    },
    {
      icon: Shield,
      title: t("categories.security.title"),
      description: t("categories.security.description"),
      gradient: "from-green-500 to-emerald-500",
      items: [
        t("categories.security.items.0"),
        t("categories.security.items.1"),
        t("categories.security.items.2"),
      ],
    },
    {
      icon: Users,
      title: t("categories.account.title"),
      description: t("categories.account.description"),
      gradient: "from-purple-500 to-pink-500",
      items: [
        t("categories.account.items.0"),
        t("categories.account.items.1"),
        t("categories.account.items.2"),
      ],
    },
    {
      icon: Zap,
      title: t("categories.features.title"),
      description: t("categories.features.description"),
      gradient: "from-orange-500 to-red-500",
      items: [
        t("categories.features.items.0"),
        t("categories.features.items.1"),
        t("categories.features.items.2"),
      ],
    },
  ];

  return (
    <>
      <Header />
      <main className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative px-4 py-16 sm:px-6 lg:px-8 mx-auto min-h-screen overflow-hidden text-white">
        {/* Grid Background */}
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        {/* Background Blur Effects */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>

        {/* Page Content */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-20">
            
          </section>

          {/* Help Categories Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">{t("browse.title")}</h2>
              <p className="text-white/70 text-lg">{t("browse.subtitle")}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {helpCategories.map((category, index) => {
                const IconComponent = category.icon;
                return (
                  <Card
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl`}
                    />
                    <CardHeader className="relative z-10 pb-3">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <CardTitle className="text-white text-lg font-bold group-hover:text-white/90 transition-colors">
                        {category.title}
                      </CardTitle>
                      <CardDescription className="text-white/70 group-hover:text-white/80 transition-colors">
                        {category.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10 pt-0">
                      <ul className="space-y-2">
                        {category.items.map((item, itemIndex) => (
                          <li
                            key={itemIndex}
                            className="text-white/60 text-sm hover:text-white/80 transition-colors cursor-pointer flex items-center gap-2"
                          >
                            <div className="w-1.5 h-1.5 bg-white/40 rounded-full"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                    />
                  </Card>
                );
              })}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Page;
