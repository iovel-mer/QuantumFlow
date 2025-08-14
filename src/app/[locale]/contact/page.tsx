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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const router = useRouter();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const isFormValid = formData.name.trim() !== "" && 
                     formData.email.trim() !== "" && 
                     formData.subject.trim() !== "" && 
                     formData.message.trim() !== "";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormValid) return;
   
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
      <div className="min-h-screen pt-6 sm:pt-8 md:pt-10 container mx-auto px-4 relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
        <div className='p-4 mb-10 sm:p-8 md:p-12 lg:p-20'>
          <Link 
            href="/" 
            className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20  text-sm font-medium text-white'
          >
            <Home className='h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300' />
            {t('backToHome')}
            <ArrowRight className='h-4 w-4 ml-2 rotate-180 group-hover:-translate-x-1 transition-transform duration-300' />
          </Link>
        </div>

        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
            {t("title")}
          </h1>
          <p className="text-base sm:text-lg text-white/80">{t("subtitle")}</p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 mb-12 sm:mb-16 md:mb-20">
            <div className="space-y-4 sm:space-y-6">
              {contactOptions.map((item, index) => (
                <Card key={index} className="bg-white/5 backdrop-blur-sm border border-white/10">
                  <CardHeader className="pb-3 sm:pb-4">
                    <CardTitle className="flex items-center gap-2 text-lg sm:text-xl text-white">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                      {item.title}
                    </CardTitle>
                    <CardDescription className="text-white/70 text-sm sm:text-base">{item.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm text-white/60 pt-0">
                    <p className="flex items-center gap-2">
                      <Clock className="h-3 w-3 sm:h-4 sm:w-4" /> {item.hours}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="h-fit shadow-xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <CardHeader className="pb-4 sm:pb-6">
                <CardTitle className="text-xl sm:text-2xl text-white font-semibold">
                  {t("form.title")}
                </CardTitle>
                <CardDescription className="text-white/70 text-sm sm:text-base">
                  {t("form.description")}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div className="grid gap-2">
                    <Label htmlFor="name" className="text-white text-sm sm:text-base">{t("form.name")}</Label>
                    <Input
                      className="text-white bg-white/10 border-white/20 placeholder:text-white/50"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email" className="text-white text-sm sm:text-base">{t("form.email")}</Label>
                    <Input
                      className="text-white bg-white/10 border-white/20 placeholder:text-white/50"
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject" className="text-white text-sm sm:text-base">{t("form.subject")}</Label>
                    <Select name="subject" value={formData.subject} onValueChange={(value) => handleInputChange("subject", value)}>
                      <SelectTrigger className="text-white bg-white/10 border-white/20" id="subject">
                        <SelectValue placeholder={t("form.placeholder")} />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-white/20">
                        <SelectItem value="general" className="text-white hover:bg-white/10">
                          {t("form.options.general")}
                        </SelectItem>
                        <SelectItem value="technical" className="text-white hover:bg-white/10">
                          {t("form.options.technical")}
                        </SelectItem>
                        <SelectItem value="billing" className="text-white hover:bg-white/10">
                          {t("form.options.billing")}
                        </SelectItem>
                        <SelectItem value="partnership" className="text-white hover:bg-white/10">
                          {t("form.options.partnership")}
                        </SelectItem>
                        <SelectItem value="other" className="text-white hover:bg-white/10">
                          {t("form.options.other")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="message" className="text-white text-sm sm:text-base">{t("form.message")}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder={t("form.placeholderMessage")}
                      className="min-h-[100px] sm:min-h-[120px] text-white bg-white/10 border-white/20 placeholder:text-white/50"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={!isFormValid}
                    className={`w-full text-sm sm:text-base font-medium transition-all duration-300 ${
                      isFormValid 
                        ? "bg-white text-black hover:bg-white/90 cursor-pointer" 
                        : "bg-white/20 text-white/50 cursor-not-allowed"
                    }`}
                  >
                    {t("form.button")}
                  </Button>
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