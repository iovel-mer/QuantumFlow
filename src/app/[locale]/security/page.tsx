'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ShieldCheck,
  Lock,
  Banknote,
  Gem,
  Lightbulb,
  FileText,
  Fingerprint,
  Scale,
  Landmark,
  Wallet,
  ClipboardList,
  Eye,
  ArrowRight,
  CheckCircle,
  Home,
} from 'lucide-react';
import { Header } from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function SecurityPage() {
  const t = useTranslations('security');

  return (
    <>
      <Header />
      <main className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden'>
        {/* Animated background elements */}
        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse'></div>
          <div className='absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000'></div>
          <div className='absolute -bottom-40 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000'></div>
        </div>

        <div className='relative z-10'>
          {/* Hero Section */}
          <section className='container mx-auto text-center pt-20 pb-16 px-4 md:px-6'>
            <div className='animate-fade-in-up'>
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

              <div className='inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8'>
                <ShieldCheck className='h-5 w-5 text-green-400 mr-2' />
                <span className='text-sm font-medium'>{t('bankGradeSecurity')}</span>
              </div>
              
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight'>
                {t('title')}
              </h1>
              
              <p className='text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8'>
                {t('subtitle')}
              </p>

              <div className='flex flex-wrap justify-center gap-6 text-sm text-gray-400'>
                <div className='flex items-center'>
                  <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                  {t('features.encryption')}
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                  {t('features.multiSignature')}
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-4 w-4 text-green-400 mr-2' />
                  {t('features.monitoring')}
                </div>
              </div>
            </div>
          </section>

          {/* Key Security Pillars */}
          <section className='container mx-auto px-4 md:px-6 mb-20'>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {/* Asset Protection */}
              <Card className='group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25'>
                <CardHeader className='pb-4'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl group-hover:from-green-400 group-hover:to-emerald-400 transition-all duration-300'>
                      <ShieldCheck className='h-8 w-8 text-white' />
                    </div>
                    <CardTitle className='text-2xl font-bold text-white group-hover:text-green-300 transition-colors'>
                      {t('assetProtection.title')}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <Lock className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('assetProtection.coldStorage.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('assetProtection.coldStorage.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <Banknote className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('assetProtection.insurance.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('assetProtection.insurance.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <Wallet className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('assetProtection.accounts.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('assetProtection.accounts.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technical Security */}
              <Card className='group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25'>
                <CardHeader className='pb-4'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300'>
                      <Fingerprint className='h-8 w-8 text-white' />
                    </div>
                    <CardTitle className='text-2xl font-bold text-white group-hover:text-blue-300 transition-colors'>
                      {t('technical.title')}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <Gem className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('technical.multiSig.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('technical.multiSig.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <Lock className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('technical.encryption.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('technical.encryption.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <Eye className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('technical.monitoring.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('technical.monitoring.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Compliance */}
              <Card className='group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 md:col-span-2 lg:col-span-1'>
                <CardHeader className='pb-4'>
                  <div className='flex items-center space-x-4 mb-4'>
                    <div className='p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300'>
                      <Scale className='h-8 w-8 text-white' />
                    </div>
                    <CardTitle className='text-2xl font-bold text-white group-hover:text-purple-300 transition-colors'>
                      {t('compliance.title')}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className='space-y-6'>
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <Landmark className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('compliance.regulatory.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('compliance.regulatory.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <ClipboardList className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('compliance.audits.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('compliance.audits.description')}
                      </p>
                    </div>
                  </div>
                  
                  <div className='flex items-start space-x-4 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300'>
                    <div className='p-2 bg-gray-500/20 rounded-lg'>
                      <FileText className='h-5 w-5 text-gray-300' />
                    </div>
                    <div className='flex-1'>
                      <h3 className='font-semibold text-white mb-2'>
                        {t('compliance.transparency.title')}
                      </h3>
                      <p className='text-sm text-gray-400 leading-relaxed'>
                        {t('compliance.transparency.description')}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          
        </div>
      </main>
      <Footer />
      
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </>
  );
}