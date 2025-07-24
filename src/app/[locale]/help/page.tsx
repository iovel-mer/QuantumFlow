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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, Lightbulb } from "lucide-react";

const Page = () => {
  const t = useTranslations("help");

  return (
    <>
      <Header />
      <main className="bg-gray-50 text-gray-900 px-4 py-16 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 sm:text-5xl">
            {t("hero.title")}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>
        </section>

        {/* FAQ Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("faq.title")}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {["faq1", "faq2", "faq3", "faq4"].map((key, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-lg font-medium text-gray-800 hover:no-underline">
                  {t(`${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {t(`${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* Guides Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("guides.title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <BookOpen className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle className="text-xl font-semibold">
                  {t("guides.gettingStarted.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {t.raw("guides.gettingStarted.items").map((item: string, idx: number) => (
                    <li key={idx}>
                      <a href="#" className="text-indigo-600 hover:underline flex items-center">
                        <span className="mr-2">&bull;</span>{item}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <Lightbulb className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle className="text-xl font-semibold">
                  {t("guides.advanced.title")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-700">
                  {t.raw("guides.advanced.items").map((item: string, idx: number) => (
                    <li key={idx}>
                      <a href="#" className="text-orange-600 hover:underline flex items-center">
                        <span className="mr-2">&bull;</span>{item}
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default Page;
