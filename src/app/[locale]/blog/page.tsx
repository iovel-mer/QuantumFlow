"use client"
import { Header } from "../components/Header/Header"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { BookOpen, Zap, Shield, HelpCircle, ArrowLeft, Clock, User } from "lucide-react"

const Page = () => {
  const t = useTranslations("resources.blog")

  const tableOfContents = [
    { id: "overview", title: t("overview.title") || "Overview", icon: BookOpen },
    { id: "quick-start", title: t("quickStart.title"), icon: Zap },
    { id: "authentication", title: t("authentication.title"), icon: Shield },
    { id: "faq", title: t("faq.title"), icon: HelpCircle },
  ]

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <Header />

      <main className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              Documentation
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl mb-6">
              {t("title")}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("subtitle")}</p>

            {/* Meta information */}
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Updated recently</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Table of Contents - Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className="flex items-center gap-3 w-full text-left p-2 rounded-lg hover:bg-gray-100 transition-colors text-sm text-gray-600 hover:text-gray-900"
                      >
                        <item.icon className="w-4 h-4" />
                        {item.title}
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="prose prose-lg prose-gray max-w-none dark:prose-invert">
                {/* Overview Section */}
                <section id="overview" className="mb-12">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <BookOpen className="w-6 h-6 text-blue-600" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 m-0">
                          {t("overview.title") || "Overview"}
                        </h2>
                      </div>
                      <p className="text-gray-700 leading-relaxed m-0">{t("overview.content")}</p>
                    </CardContent>
                  </Card>
                </section>

                {/* Quick Start Section */}
                <section id="quick-start" className="mb-12">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-100 rounded-lg">
                          <Zap className="w-6 h-6 text-green-600" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 m-0">{t("quickStart.title")}</h2>
                      </div>
                      <p className="text-gray-700 leading-relaxed m-0">{t("quickStart.content")}</p>
                    </CardContent>
                  </Card>
                </section>

                {/* Authentication Section */}
                <section id="authentication" className="mb-12">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Shield className="w-6 h-6 text-purple-600" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 m-0">{t("authentication.title")}</h2>
                      </div>
                      <p className="text-gray-700 leading-relaxed m-0">{t("authentication.content")}</p>
                    </CardContent>
                  </Card>
                </section>

                {/* FAQ Section */}
                <section id="faq" className="mb-12">
                  <Card>
                    <CardContent className="p-8">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-orange-100 rounded-lg">
                          <HelpCircle className="w-6 h-6 text-orange-600" />
                        </div>
                        <h2 className="text-2xl font-semibold text-gray-900 m-0">{t("faq.title")}</h2>
                      </div>

                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="api-url">
                          <AccordionTrigger className="text-left">{t("faq.apiUrl.question")}</AccordionTrigger>
                          <AccordionContent className="text-gray-700">{t("faq.apiUrl.answer")}</AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="report-bug">
                          <AccordionTrigger className="text-left">{t("faq.reportBug.question")}</AccordionTrigger>
                          <AccordionContent className="text-gray-700">{t("faq.reportBug.answer")}</AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </Card>
                </section>

                {/* Navigation Footer */}
                <div className="flex justify-between items-center pt-8 border-t">
                  <Button
                    variant="outline"
                    onClick={() => {
                      // Replace with your router logic
                      alert(t("backToHome"))
                    }}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {t("backToHome")}
                  </Button>

                  <div className="text-sm text-gray-500">Last updated: {new Date().toLocaleDateString()}</div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Page
