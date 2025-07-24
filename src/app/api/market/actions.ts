'use server';

import type {
  TradingPair as BinanceTradingPair,
  Ticker as BinanceTicker,
} from '@/app/api/types/binance';

import { getTradingPairs, getTicker } from '@/app/api/binance/getBinance';

export type MarketData = {
  symbol: string;
  price: number;
  change: number;
  volume: string;
  icon: string;
  name: string;
};

export type TradingPair = {
  base: string;
  quote: string;
  volume: string;
  name: string;
};

// Helper function to format volume
const formatVolume = (volume: number) => {
  if (volume >= 1e9) return `${(volume / 1e9).toFixed(1)}B`;
  if (volume >= 1e6) return `${(volume / 1e6).toFixed(1)}M`;
  if (volume >= 1e3) return `${(volume / 1e3).toFixed(1)}K`;
  return volume.toFixed(0);
};

// Helper function to format price
const formatPrice = (price: number) => {
  if (price >= 1000) return price.toFixed(2);
  if (price >= 1) return price.toFixed(4);
  return price.toFixed(6);
};

// Get market data for hero section (BTC and ETH)
export async function getHeroMarketData() {
  try {
    const symbols = ['BTCUSDT', 'ETHUSDT'];
    const tickerPromises = symbols.map(async symbol => {
      try {
        const response = await getTicker(symbol);
        return response.success ? response.data : null;
      } catch (err) {
        console.warn(`Failed to fetch ticker for ${symbol}:`, err);
        return null;
      }
    });

    const tickers = await Promise.all(tickerPromises);
    const validTickers = tickers.filter(
      (ticker): ticker is BinanceTicker =>
        ticker !== null && ticker !== undefined
    );

    const heroData = validTickers.map(ticker => {
      const symbol = ticker.symbol.replace('USDT', '');
      return {
        symbol,
        name: symbol === 'BTC' ? 'Bitcoin' : 'Ethereum',
        icon: symbol === 'BTC' ? '₿' : 'Ξ',
        price: Number.parseFloat(ticker.lastPrice),
        change: Number.parseFloat(ticker.priceChangePercent),
        volume: formatVolume(Number.parseFloat(ticker.quoteVolume)),
      };
    });

    return { success: true, data: heroData };
  } catch (error) {
    console.error('Failed to fetch hero market data:', error);
    return { success: false, error: 'Failed to load market data' };
  }
}

// Get comprehensive market data for market section
export async function getMarketData() {
  try {
    const popularSymbols = [
      'BTCUSDT',
      'ETHUSDT',
      'ADAUSDT',
      'DOTUSDT',
      'BNBUSDT',
      'SOLUSDT',
    ];
    const coinNames = {
      BTC: 'Bitcoin',
      ETH: 'Ethereum',
      ADA: 'Cardano',
      DOT: 'Polkadot',
      BNB: 'Binance Coin',
      SOL: 'Solana',
    };
    const coinIcons = {
      BTC: '₿',
      ETH: 'Ξ',
      ADA: '₳',
      DOT: '●',
      BNB: '◆',
      SOL: '◎',
    };

    const tickerPromises = popularSymbols.map(async symbol => {
      try {
        const response = await getTicker(symbol);
        return response.success ? response.data : null;
      } catch (err) {
        console.warn(`Failed to fetch ticker for ${symbol}:`, err);
        return null;
      }
    });

    const tickers = await Promise.all(tickerPromises);
    const validTickers = tickers.filter(
      (ticker): ticker is BinanceTicker =>
        ticker !== null && ticker !== undefined
    );

    const marketData = validTickers.map(ticker => {
      const symbol = ticker.symbol.replace('USDT', '');
      return {
        symbol,
        name: coinNames[symbol as keyof typeof coinNames] || symbol,
        icon: coinIcons[symbol as keyof typeof coinIcons] || '●',
        price: Number.parseFloat(ticker.lastPrice),
        change: Number.parseFloat(ticker.priceChangePercent),
        volume: formatVolume(Number.parseFloat(ticker.quoteVolume)),
      };
    });

    return { success: true, data: marketData };
  } catch (error) {
    console.error('Failed to fetch market data:', error);
    return { success: false, error: 'Failed to load market data' };
  }
}

// Get trading pairs data
export async function getTradingPairsData() {
  try {
    const pairsResponse = await getTradingPairs('', 6, 0);
    const pairs = pairsResponse.success ? pairsResponse.data || [] : [];

    const transformedPairs = pairs
      .slice(0, 6)
      .map((pair: BinanceTradingPair, index: number) => {
        // Use deterministic volume based on index to avoid hydration mismatch
        const seed = index * 98765;
        const volume = (((seed * 9301 + 49297) % 233280) / 233280) * 1000000000;
        return {
          base: pair.baseAsset,
          quote: pair.quoteAsset,
          volume: formatVolume(volume),
          name: `${pair.baseAsset}/${pair.quoteAsset}`,
        };
      });

    return { success: true, data: transformedPairs };
  } catch (error) {
    console.error('Failed to fetch trading pairs:', error);
    return { success: false, error: 'Failed to load trading pairs' };
  }
}

// Get live ticker for a specific symbol
export async function getLiveTicker(symbol: string) {
  try {
    const response = await getTicker(symbol);
    if (response.success && response.data) {
      return {
        success: true,
        data: {
          symbol: response.data.symbol.replace('USDT', ''),
          price: Number.parseFloat(response.data.lastPrice),
          change: Number.parseFloat(response.data.priceChangePercent),
          volume: formatVolume(Number.parseFloat(response.data.quoteVolume)),
        },
      };
    }
    return { success: false, error: 'Failed to fetch ticker' };
  } catch (error) {
    console.error(`Failed to fetch ticker for ${symbol}:`, error);
    return { success: false, error: 'Failed to fetch ticker' };
  }
}
