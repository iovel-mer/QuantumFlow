"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Users, Clock, Home, ArrowRight } from "lucide-react";
import { Header } from "../components/Header/Header";

const ContactPage = () => {
  const t = useTranslations("contact");
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccessMessage("✅ Message sent successfully!");
    setTimeout(() => {
      router.push("/");
    }, 2000);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: t("general.title"),
      description: t("general.description"),
      hours: t("general.hours"),
    },
    {
      icon: Phone,
      title: t("technical.title"),
      description: t("technical.description"),
      hours: t("technical.hours"),
    },
    {
      icon: Users,
      title: t("partnership.title"),
      description: t("partnership.description"),
      hours: t("partnership.hours"),
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto">
          {/* Back to Home Link */}
          <div className='flex justify-start mb-8'>
            <Link 
              href="/" 
              className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 group text-sm font-medium text-white'
            >
              <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
              {t('backToHome')}
              <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
            </Link>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t("title")}
            </h1>
            <p className="text-lg text-white">{t("subtitle")}</p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
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
                    <p className="text-gray-500 flex items-center gap-2">
                      <Clock className="h-4 w-4" /> {item.hours}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="h-fit shadow-md border">
              <CardHeader>
                <CardTitle className="text-2xl text-white font-semibold">
                  {t("form.title")}
                </CardTitle>
                <CardDescription className="text-white">
                  {t("form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name">{t("form.name")}</Label>
                    <Input
                      className="text-white"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">{t("form.email")}</Label>
                    <Input
                      className="text-white"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">{t("form.subject")}</Label>
                    <Select name="subject">
                      <SelectTrigger className="text-white" id="subject">
                        <SelectValue placeholder={t("form.placeholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">
                          {t("form.options.general")}
                        </SelectItem>
                        <SelectItem value="technical">
                          {t("form.options.technical")}
                        </SelectItem>
                        <SelectItem value="billing">
                          {t("form.options.billing")}
                        </SelectItem>
                        <SelectItem value="partnership">
                          {t("form.options.partnership")}
                        </SelectItem>
                        <SelectItem value="other">
                          {t("form.options.other")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message">{t("form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("form.placeholderMessage")}
                      className="min-h-[120px] text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full text-base font-medium bg-black text-white hover:bg-black"
                  >
                    {t("form.button")}
                  </Button>

                  {successMessage && (
                    <p className="text-green-400 text-sm text-center mt-4">
                      {successMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;