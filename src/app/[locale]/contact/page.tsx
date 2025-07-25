"use client";

import { useTranslations } from "next-intl";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, MapPin, Clock } from "lucide-react";
import { Header } from "../components/Header/Header";

const Page = () => {
  const t = useTranslations("contact");

  const contactOptions = [
    {
      icon: Mail,
      title: t("general.title"),
      description: t("general.description"),
      email: "info@example.com",
      phone: "+1 (800) 123-4567",
      hours: t("general.hours"),
    },
    {
      icon: Phone,
      title: t("technical.title"),
      description: t("technical.description"),
      email: "support@example.com",
      phone: "+1 (800) 987-6543",
      hours: t("technical.hours"),
    },
    {
      icon: Users,
      title: t("partnership.title"),
      description: t("partnership.description"),
      email: "partnerships@example.com",
      phone: "+1 (800) 765-4321",
      hours: t("partnership.hours"),
    },
  ];

  const locations = [
    { city: t("locations.ny.title"), address: [t("locations.ny.line1"), t("locations.ny.line2"), t("locations.ny.line3")] },
    { city: t("locations.london.title"), address: [t("locations.london.line1"), t("locations.london.line2"), t("locations.london.line3")] },
    { city: t("locations.singapore.title"), address: [t("locations.singapore.line1"), t("locations.singapore.line2"), t("locations.singapore.line3")] },
  ];

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-white to-slate-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">{t("title")}</h1>
          <p className="text-lg text-gray-600">{t("subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
          <div className="space-y-6">
            {contactOptions.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <item.icon className="h-5 w-5 text-indigo-600" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-gray-700">
                  <p>Email: <a href={`mailto:${item.email}`} className="text-indigo-600 hover:underline">{item.email}</a></p>
                  <p>Phone: <a href={`tel:${item.phone}`} className="text-indigo-600 hover:underline">{item.phone}</a></p>
                  <p className="text-gray-500 flex items-center gap-2">
                    <Clock className="h-4 w-4" /> {item.hours}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="h-fit bg-white shadow-md border border-gray-100">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold">{t("form.title")}</CardTitle>
              <CardDescription>{t("form.description")}</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="name">{t("form.name")}</Label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">{t("form.email")}</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">{t("form.subject")}</Label>
                  <Select>
                    <SelectTrigger id="subject">
                      <SelectValue placeholder={t("form.placeholder")} />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">{t("form.options.general")}</SelectItem>
                      <SelectItem value="technical">{t("form.options.technical")}</SelectItem>
                      <SelectItem value="billing">{t("form.options.billing")}</SelectItem>
                      <SelectItem value="partnership">{t("form.options.partnership")}</SelectItem>
                      <SelectItem value="other">{t("form.options.other")}</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">{t("form.message")}</Label>
                  <Textarea id="message" placeholder={t("form.placeholderMessage")} className="min-h-[120px]" />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full text-base font-medium">
                {t("form.button")}
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-semibold text-center mb-10">{t("locations.title")}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <Card key={index} className="text-center">
                <CardHeader className="pb-2">
                  <MapPin className="h-6 w-6 mx-auto text-indigo-600 mb-2" />
                  <CardTitle className="text-lg font-medium">{loc.city}</CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-gray-600">
                  {loc.address.map((line, i) => <p key={i}>{line}</p>)}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="max-w-2xl mx-auto bg-indigo-50 border-indigo-200 shadow-sm">
          <CardHeader>
            <CardTitle>{t("response.title")}</CardTitle>
            <CardDescription>{t("response.description")}</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-gray-800 space-y-2">
            <p><strong>{t("response.chat")}:</strong> {t("response.chatDetail")}</p>
            <p><strong>{t("response.email")}:</strong> {t("response.emailDetail")}</p>
            <p><strong>{t("response.phone")}:</strong> {t("response.phoneDetail")}</p>
            <p><strong>{t("response.business")}:</strong> {t("response.businessDetail")}</p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Page;
