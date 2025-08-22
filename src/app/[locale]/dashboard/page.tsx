'use client';
import type React from 'react';
export const dynamic = 'force-dynamic';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';

import { DashboardLayout } from '@/components/dashboard-layout';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  TrendingUp,
  DollarSign,
  Wallet,
  ArrowUpDown,
  PiggyBank,
  Activity,
} from 'lucide-react';
import { getWalletSummary } from '@/app/api/balance/getWalletSummary';
import { getTradingAccounts } from '@/app/api/balance/getTradingAccounts';
import type {
  WalletSummaryResponse,
  CurrencyBreakdown,
} from '@/app/api/types/wallet-summary';
import type { TradingAccountDto } from '@/app/api/types/trading';
import { useUser } from './context/user-context';
import { AuthConfirmer } from '../components/authConfirmer';

import { EthIcon } from '@/components/ui/Icons/EthIcon';
import { BnbIcon } from '@/components/ui/Icons/BnbIcon';
import { UsdcIcon } from '@/components/ui/Icons/UsdcIcon';
import { UsdtIcon } from '@/components/ui/Icons/UsdtIcon';
import { XrpIcon } from '@/components/ui/Icons/XrpIcon';
import { postLogout } from '@/app/api/auth/postLogout';

interface DashboardData {
  walletSummary: WalletSummaryResponse | null;
  tradingAccounts: TradingAccountDto[];
}

const formatCurrencyAmount = (amount: number, currency: string): string => {
  if (currency === 'USD' || currency === 'USDT' || currency === 'USDC') {
    return amount.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }
  const decimals = amount < 1 ? 6 : amount < 100 ? 4 : 2;
  return amount.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

const getWalletIcon = (currency: string, size: 'sm' | 'md' | 'lg' = 'md') => {
  const sizeClasses = { sm: 'h-4 w-4', md: 'h-6 w-6', lg: 'h-8 w-8' };
  const iconComponents: Record<string, React.ReactNode> = {
    ETH: <EthIcon className={sizeClasses[size]} />,
    BNB: <BnbIcon className={sizeClasses[size]} />,
    USDT: <UsdtIcon className={sizeClasses[size]} />,
    USDC: <UsdcIcon className={sizeClasses[size]} />,
    XRP: <XrpIcon className={sizeClasses[size]} />,
  };
  if (iconComponents[currency]) return iconComponents[currency];

  const textIconMap: Record<string, string> = {
    BTC: '₿',
    USD: '$',
    SOL: '◎',
    ADA: '₳',
    DOT: '●',
    LINK: '⬡',
    UNI: '🦄',
    AUD: 'A$',
    EUR: '€',
    GBP: '£',
  };
  return textIconMap[currency] || '◊';
};

const getCurrencyIconContainer = (
  currency: string,
  size: 'sm' | 'md' | 'lg' = 'md'
) => {
  const hasComponentIcon = ['ETH', 'BNB', 'USDT', 'USDC', 'XRP'].includes(currency);
  if (hasComponentIcon) {
    return <div className="flex items-center justify-center">{getWalletIcon(currency, size)}</div>;
  }
  const colors = getCurrencyColors(currency);
  const sizeClasses = { sm: 'h-4 w-4 text-xs', md: 'h-6 w-6 text-xs', lg: 'h-8 w-8 text-sm' };
  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold ${colors.bg} ${colors.text} ${colors.darkBg} ${colors.darkText}`}
    >
      {getWalletIcon(currency, size)}
    </div>
  );
};

const getCurrencyColors = (currency: string) => {
  const colorMap: Record<
    string,
    { bg: string; text: string; darkBg: string; darkText: string }
  > = {
    BTC: { bg: 'bg-orange-500', text: 'text-white', darkBg: 'dark:bg-orange-600', darkText: 'dark:text-white' },
    USD: { bg: 'bg-green-600', text: 'text-white', darkBg: 'dark:bg-green-700', darkText: 'dark:text-white' },
    SOL: { bg: 'bg-purple-500', text: 'text-white', darkBg: 'dark:bg-purple-600', darkText: 'dark:text-white' },
    ADA: { bg: 'bg-blue-700', text: 'text-white', darkBg: 'dark:bg-blue-800', darkText: 'dark:text-white' },
    DOT: { bg: 'bg-pink-500', text: 'text-white', darkBg: 'dark:bg-pink-600', darkText: 'dark:text-white' },
    LINK: { bg: 'bg-blue-600', text: 'text-white', darkBg: 'dark:bg-blue-700', darkText: 'dark:text-white' },
    UNI: { bg: 'bg-pink-600', text: 'text-white', darkBg: 'dark:bg-pink-700', darkText: 'dark:text-white' },
    AUD: { bg: 'bg-green-700', text: 'text-white', darkBg: 'dark:bg-green-800', darkText: 'dark:text-white' },
    EUR: { bg: 'bg-blue-800', text: 'text-white', darkBg: 'dark:bg-blue-900', darkText: 'dark:text-white' },
    GBP: { bg: 'bg-red-600', text: 'text-white', darkBg: 'dark:bg-red-700', darkText: 'dark:text-white' },
  };
  return colorMap[currency] || { bg: 'bg-gray-500', text: 'text-white', darkBg: 'dark:bg-gray-600', darkText: 'dark:text-white' };
};

const getPrimaryCurrency = (currencyBreakdown: CurrencyBreakdown[]): CurrencyBreakdown | null => {
  const currenciesWithBalance = currencyBreakdown.filter(c => c.totalBalance > 0);
  if (currenciesWithBalance.length === 0) {
    return currencyBreakdown.find(c => c.currency === 'USDT') || currencyBreakdown[0] || null;
  }
  return currenciesWithBalance.reduce((prev, current) => (current.usdEquivalent > prev.usdEquivalent ? current : prev));
};

const sortCurrencies = (currencies: CurrencyBreakdown[]): CurrencyBreakdown[] => {
  return currencies.sort((a, b) => {
    const aHas = a.totalBalance > 0 ? 1 : 0;
    const bHas = b.totalBalance > 0 ? 1 : 0;
    if (aHas !== bHas) return bHas - aHas;
    return b.usdEquivalent - a.usdEquivalent;
  });
};

export default function DashboardPage() {
  const t = useTranslations();
  const router = useRouter();
  const locale = useLocale();

  const { user, loading: userLoading, error: userError, refreshUser } = useUser();

  const [dashboardData, setDashboardData] = useState<DashboardData>({
    walletSummary: null,
    tradingAccounts: [],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');          // generic data error
  const [authError, setAuthError] = useState(false); // session/401 marker

  const fetchDashboardData = async () => {
    setLoading(true);
    setError('');
    try {
      const [walletSummaryResponse, accountsResponse] = await Promise.all([
        getWalletSummary(),
        getTradingAccounts(),
      ]);

      // If any call fails (commonly 401 when session expires), treat as auth error
      if (!walletSummaryResponse.success || !accountsResponse.success) {
        setAuthError(true);
        setLoading(false);
        return;
      }

      const walletSummary = walletSummaryResponse.data ?? null;
      const accounts = accountsResponse.data || [];

      setDashboardData({ walletSummary, tradingAccounts: accounts });
    } catch (err) {
      // Network/unknown error — safest to treat as auth if your backend returns 401 here
      setAuthError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!userLoading) fetchDashboardData();
  }, [userLoading]);

  const handleAuthConfirmed = async () => {
    await refreshUser();
    await fetchDashboardData();
  };

  // Centralized: when we detect authError OR userError from context → logout once and redirect
  useEffect(() => {
    if (!(authError || userError)) return;
    (async () => {
      try { await postLogout(); } catch {}
      router.replace(`/${locale}/login?reason=session`);
    })();
  }, [authError, userError, router, locale]);

  if (userLoading || loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto" />
          <p className="mt-4 text-muted-foreground">{t('dashboard.loading')}</p>
        </div>
      </div>
    );
  }

  // While redirecting due to session timeout, render nothing to avoid flicker
  if (authError || userError) return null;

  const { walletSummary, tradingAccounts } = dashboardData;
  const primaryAccount = tradingAccounts[0];
  const primaryCurrency = walletSummary ? getPrimaryCurrency(walletSummary.currencyBreakdown) : null;

  const tickets = walletSummary?.ticketBreakdown || [];
  const activeTickets = tickets.filter(t => t.ticketStatus === 0 || t.ticketStatus === 1);

  const getTicketStatusText = (status: number): string => {
    const statusMap = [
      t('dashboard.ticketStatus.pending'),
      t('dashboard.ticketStatus.processing'),
      t('dashboard.ticketStatus.completed'),
      t('dashboard.ticketStatus.cancelled'),
      t('dashboard.ticketStatus.failed'),
      t('dashboard.ticketStatus.rejected'),
    ];
    return statusMap[status] || statusMap[0];
  };

  const getUserName = (): string => (user ? `${user.firstName} ${user.lastName}` : '');

  return (
    <DashboardLayout>
      <AuthConfirmer onAuthConfirmed={handleAuthConfirmed} />
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {user ? `${t('dashboard.welcomeBack')} ${getUserName()}!` : t('dashboard.welcomeBackDefault')}
          </h1>
          <p className="text-muted-foreground">{t('dashboard.subtitle')}</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.primaryBalance')}</CardTitle>
              {walletSummary?.totalBtcEquivalent ? (
                getCurrencyIconContainer('BTC', 'md')
              ) : (
                <Wallet className="h-4 w-4 text-muted-foreground" />
              )}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {walletSummary?.totalBtcEquivalent ? (
                  <>
                    {formatCurrencyAmount(walletSummary.totalBtcEquivalent, 'BTC')}{' '}
                    <span className="text-lg text-muted-foreground">BTC</span>
                  </>
                ) : (
                  0
                )}
              </div>
              <div className="space-y-1">
                <p className="text-xs text-muted-foreground">
                  {walletSummary?.totalUsdEquivalent ? (
                    <>
                      ≈ $
                      {walletSummary.totalUsdEquivalent.toLocaleString('en-US', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </>
                  ) : (
                    `${walletSummary?.currencyBreakdown.length || 0} ${t('dashboard.currenciesAvailable')}`
                  )}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.totalUsdValue')}</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" color="green" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                $
                {walletSummary?.totalUsdEquivalent.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || '0.00'}
              </div>
              <p className="text-xs text-muted-foreground">
                {t('dashboard.available')} $
                {walletSummary?.totalAvailableBalance.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || '0.00'}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.activeTickets')}</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" color="#0078ff" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{walletSummary?.activeTickets || 0}</div>
              <p className="text-xs text-muted-foreground">
                {walletSummary?.totalTickets || 0} {t('dashboard.totalTickets')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.tradingActivity')}</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" color="yellow" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{walletSummary?.totalTradingOrders || 0}</div>
              <p className="text-xs text-muted-foreground">
                {walletSummary?.totalAccounts || 0}{' '}
                {(walletSummary?.totalAccounts || 0) !== 1 ? t('dashboard.accounts') : t('dashboard.account')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.totalDeposits')}</CardTitle>
              <ArrowUpDown className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                $
                {walletSummary?.totalDeposits.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || '0.00'}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.totalWithdrawals')}</CardTitle>
              <ArrowUpDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">
                $
                {walletSummary?.totalWithdrawals.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || '0.00'}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{t('dashboard.lockedBalance')}</CardTitle>
              <PiggyBank className="h-4 w-4 text-muted-foreground" color="gold" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                $
                {walletSummary?.totalLockedBalance.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                }) || '0.00'}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity and Currency Breakdown */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <Card className="col-span-4">
            <CardHeader>
              <CardTitle>{t('dashboard.recentTickets')}</CardTitle>
              <CardDescription>{t('dashboard.recentTicketsDescription')}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {(walletSummary?.ticketBreakdown || []).length === 0 ? (
                  <p className="text-sm text-muted-foreground">{t('dashboard.noRecentTickets')}</p>
                ) : (
                  (walletSummary?.ticketBreakdown || []).slice(0, 5).map(ticket => (
                    <div key={ticket.id} className="flex items-center space-x-4">
                      <div
                        className={`h-2 w-2 rounded-full ${
                          ticket.ticketStatus === 2
                            ? 'bg-green-500'
                            : ticket.ticketStatus === 4 || ticket.ticketStatus === 5
                            ? 'bg-red-500'
                            : 'bg-yellow-500'
                        }`}
                      />
                      <div className="flex-1 space-y-1">
                        <p className="text-sm font-medium">
                          {ticket.ticketType === 0
                            ? t('dashboard.depositRequest')
                            : t('dashboard.withdrawalRequest')}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          $
                          {ticket.amount.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        <Badge variant="outline" className="text-xs">
                          {[
                            t('dashboard.ticketStatus.pending'),
                            t('dashboard.ticketStatus.processing'),
                            t('dashboard.ticketStatus.completed'),
                            t('dashboard.ticketStatus.cancelled'),
                            t('dashboard.ticketStatus.failed'),
                            t('dashboard.ticketStatus.rejected'),
                          ][ticket.ticketStatus] || t('dashboard.ticketStatus.pending')}
                        </Badge>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>{t('dashboard.currencyBreakdown')}</CardTitle>
              <CardDescription>{t('dashboard.currencyBreakdownDescription')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {!walletSummary?.currencyBreakdown.length ? (
                <p className="text-sm text-muted-foreground">{t('dashboard.noCurrenciesFound')}</p>
              ) : (
                sortCurrencies(walletSummary.currencyBreakdown).map(currency => (
                  <div key={currency.currency} className="rounded-lg border p-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        {getCurrencyIconContainer(currency.currency, 'lg')}
                        <div>
                          <div className="flex items-center space-x-2">
                            <p className="font-medium">{currency.currency}</p>
                            {currency.availableBalance > 0 && (
                              <Badge variant="outline" className="text-xs px-1 py-0">
                                {t('dashboard.active')}
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {t('dashboard.available')}{' '}
                            {formatCurrencyAmount(currency.availableBalance, currency.currency)}
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">
                          {formatCurrencyAmount(currency.totalBalance, currency.currency)} {currency.currency}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          ≈ $
                          {currency.usdEquivalent.toLocaleString('en-US', {
                            minimumFractionDigits: 2,
                            maximumFractionDigits: 2,
                          })}
                        </p>
                      </div>
                    </div>
                    {currency.lockedBalance > 0 && (
                      <div className="mt-2 text-xs text-muted-foreground">
                        {t('dashboard.locked')}{' '}
                        {formatCurrencyAmount(currency.lockedBalance, currency.currency)} {currency.currency}
                      </div>
                    )}
                    <div className="mt-1 text-xs text-muted-foreground">
                      {currency.walletCount}{' '}
                      {currency.walletCount !== 1 ? t('dashboard.wallets') : t('dashboard.wallet')}
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
