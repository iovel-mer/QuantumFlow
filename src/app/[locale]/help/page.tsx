"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
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
  Home,
  ArrowRight,
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
      <main className="min-h-screen pt-6 sm:pt-8 md:pt-10 container mx-auto px-4 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
            <div className='p-20'>
              <Link 
                href="/" 
                className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group text-sm font-medium text-white'
              >
                <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
                {t('backToHome')}
                <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
              </Link>
            </div>
       
      
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-20">
            {/* Back to Home Link */}
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