import { Diamond, Twitter, Github, Linkedin, Mail, MapPin, Phone, Shield, Award, Globe, Users, TrendingUp, Star, ArrowRight } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"
import Link from "next/link"

export const Footer = () => {
  const t = useTranslations("footer")
  const locale = useLocale();

  return (
    <footer id="about" className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64  rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64  rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

      <div className="relative z-10  text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-5 pt-14  border-b border-white/10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-4 mb-8">
                
                <h1 className="text-4xl font-black bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                  QuantumFlow
                </h1>
              </div>
              <p className="text-white text-lg leading-relaxed mb-8 max-w-md">
                {t("description")}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <div>
                      <p className="text-2xl font-bold text-white">10M+</p>
                      <p className="text-white/60 text-sm">{t("stats.users")}</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-emerald-400" />
                    <div>
                      <p className="text-2xl font-bold text-white">$2.5B</p>
                      <p className="text-white/60 text-sm">{t("stats.volume")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Company */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-purple-400" />
                  {t("sections.company.title")}
                </h4>
                <ul className="space-y-4 ">
                  {["about", "security"].map((key, index) => (
                    <li key={key}>
                      <Link
                        href={`/${locale}/${key}`}
                        className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{t(`sections.company.links.${key}`)}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  {t("sections.support.title")}
                </h4>
                <ul className="space-y-4">
                  {["help", "contact"].map((key, index) => (
                    <li key={index}>
                      <Link
                        href={`/${locale}/${key}`}
                        className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{t(`sections.support.links.${key}`)}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Resources */}
              <div>
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                  <Award className="w-5 h-5 text-blue-400" />
                  {t("sections.resources.title")}
                </h4>
                <ul className="space-y-4">
                  {["blog", "documentation"].map((key, index) => (
                    <li key={index}>
                      <Link
                        href={`/${locale}/${key}`}
                        className="group flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                      >
                        <span className="group-hover:translate-x-1 transition-transform duration-300">{t(`sections.resources.links.${key}`)}</span>
                        <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pt-6 flex flex-col lg:flex-row justify-between items-center pb-6 space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-white/60 text-sm ">© {new Date().getFullYear()} {t("rights")}</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6">
              {["terms", "privacy", "cookie"].map((key, index) => (
                <a
                  key={index}
                  href={`/${key}`}
                  className="text-white/60 hover:text-white text-sm transition-colors duration-300 hover:underline"
                >
                  {t(`legal.${key}`)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
