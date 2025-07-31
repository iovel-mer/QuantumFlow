"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "../components/Header/Header"

const PrivacyPolicyPage = () => {
  const t = useTranslations("Privacy")

  return (
    <>
      <Header />
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <Card className="max-w-3xl w-full shadow-lg border">
          <CardHeader className="pb-4">
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
              ← {t("backToHome")}
            </Link>
            <CardTitle className="text-3xl font-bold text-primary mt-4">{t("title")}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {t("description")}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 text-foreground">
            <p className="text-sm text-muted-foreground">{t("lastUpdated")}</p>

            <ol className="space-y-6 list-decimal list-inside">
              {Array.from({ length: 9 }, (_, i) => {
                const section = i + 1
                return (
                  <li key={section}>
                    <h2 className="font-bold text-xl mb-2">{t(`section${section}.title`)}</h2>
                    <p className="text-base text-muted-foreground">{t(`section${section}.description`)}</p>
                    {t.raw(`section${section}.list`)?.length > 0 && (
                      <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                        {t.raw(`section${section}.list`).map((item: string, idx: number) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                )
              })}
            </ol>

            <div>
              <h2 className="font-bold text-xl mb-2">{t("section9.title")}</h2>
              <p className="text-base text-muted-foreground">{t("section9.description")}</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-muted-foreground">
                <li>
                  {t("contact.email")}:{" "}
                  <Link href="mailto:support@example.com" className="text-primary hover:underline">
                    support@example.com
                  </Link>
                </li>
                <li>
                  {t("contact.page")}:{" "}
                  <Link href="/contact" className="text-primary hover:underline">
                    /contact
                  </Link>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default PrivacyPolicyPage
