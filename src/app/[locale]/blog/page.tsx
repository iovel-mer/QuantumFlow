"use client";

import { useTranslations } from "next-intl";
import { Header } from "../components/Header/Header";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Zap,
  Shield,
  HelpCircle,
  Clock,
  User,
} from "lucide-react";

const Page = () => {
  const t = useTranslations("blog");

  const tableOfContents = [
    { id: "overview", title: t("overview.title"), icon: BookOpen },
    { id: "quickStart", title: t("quickStart.title"), icon: Zap },
    { id: "authentication", title: t("authentication.title"), icon: Shield },
    { id: "faq", title: t("faq.title"), icon: HelpCircle },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>
      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              {t("badge")}
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
              {t("subtitle")}
            </p>

            {/* Meta Info */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-white">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t("meta.readTime")}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{t("meta.updated")}</span>
              </div>
            </div>
          </div>

          
           

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg prose-gray max-w-none dark:prose-invert">
                {/* Overview */}
                <section id="overview" className="mb-12">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-semibold text-white m-0">
                          {t("overview.title")}
                        </h2>
                      </div>
                      <p className="text-white leading-relaxed m-0">
                        {t("overview.content")}
                      </p>
                    </CardContent>
                  </Card>
                </section>
              </article>
            </div>
          
        </div>
      </main>
    </div>
    </>
  );
};

export default Page;
