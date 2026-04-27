"use client";

import { useState, useEffect } from "react";

const marketData = [
  { pair: "USD / AED", name: "US DOLLAR", rate: "3.6725", buy: "3.6700", sell: "3.6750", trend: "up", percent: "+0.01%" },
  { pair: "EUR / AED", name: "EURO", rate: "3.9842", buy: "3.9800", sell: "3.9880", trend: "up", percent: "+0.15%" },
  { pair: "GBP / AED", name: "BRITISH POUND", rate: "4.6310", buy: "4.6250", sell: "4.6380", trend: "down", percent: "-0.08%" },
  { pair: "INR / AED", name: "INDIAN RUPEE", rate: "0.0442", buy: "0.0440", sell: "0.0445", trend: "up", percent: "+0.02%" },
  { pair: "XAU / USD", name: "GOLD (OUNCE)", rate: "2345.50", buy: "2344.00", sell: "2347.00", trend: "up", percent: "+0.85%" },
  { pair: "CAD / AED", name: "CANADIAN DOLLAR", rate: "2.6840", buy: "2.6800", sell: "2.6880", trend: "up", percent: "+0.05%" },
  { pair: "AUD / AED", name: "AUSTRALIAN DOLLAR", rate: "2.4150", buy: "2.4100", sell: "2.4200", trend: "down", percent: "-0.12%" },
  { pair: "CHF / AED", name: "SWISS FRANC", rate: "4.0520", buy: "4.0480", sell: "4.0580", trend: "up", percent: "+0.21%" },
];

export default function MarketCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const length = marketData.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % length);
    }, 3000);
    return () => clearInterval(timer);
  }, [isPaused, length]);

  const getCardStyle = (index: number) => {
    // Calculate shortest distance in a circular array
    let diff = index - currentIndex;
    if (diff > length / 2) diff -= length;
    if (diff < -length / 2) diff += length;

    const absDiff = Math.abs(diff);

    // Visibility: hide items that are too far
    if (absDiff > 2) {
      return { opacity: 0, pointerEvents: "none" as any, zIndex: 0, transform: `translateX(${diff > 0 ? 800 : -800}px) scale(0.6)` };
    }

    const scale = absDiff === 0 ? 1.05 : 0.85 - absDiff * 0.1;
    const translateX = diff * 260; // 260px distance between centers
    const opacity = absDiff === 0 ? 1 : 1 - absDiff * 0.4;
    const zIndex = 20 - absDiff;

    return {
      transform: `translateX(${translateX}px) scale(${scale})`,
      opacity,
      zIndex,
    };
  };

  return (
    <div 
      className="relative w-full h-[460px] flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Centered Heading */}
      <div className="flex flex-col items-center text-center gap-4 z-40 mb-12 relative">
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-3">
            <h2 className="font-headline font-black text-3xl tracking-tight uppercase">Market Watch</h2>
            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-live"></span>
              <span className="text-[9px] font-bold tracking-widest text-primary">LIVE</span>
            </div>
          </div>
          <p className="text-sm text-on-surface-variant font-medium tracking-wide">
            Last updated: <span suppressHydrationWarning>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
          </p>
        </div>
        <button className="font-label font-bold text-[10px] text-primary tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity uppercase mt-2">
          VIEW ALL MARKETS <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
        </button>
      </div>

      {/* Background glow for the center active card */}
      <div className="absolute top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[80px] pointer-events-none z-0"></div>

      <div className="relative w-[340px] h-[240px] perspective-1000">
        {marketData.map((market, idx) => {
          const style = getCardStyle(idx);
          const isCenter = style.zIndex === 20;

          return (
            <div
              key={idx}
              className={`absolute top-0 left-0 w-full bg-surface-container-high border-2 ${isCenter ? 'border-primary/50 shadow-[0_0_40px_rgba(238,0,0,0.15)] bg-surface' : 'border-black/5 shadow-lg'} p-6 rounded-2xl transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer group`}
              style={style}
              onClick={() => setCurrentIndex(idx)}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="font-label text-[10px] tracking-[0.2em] text-primary font-black mb-1 uppercase">{market.name}</div>
                  <div className="font-headline font-black text-xl text-on-surface tracking-tight uppercase italic">{market.pair}</div>
                </div>
                <div className={`flex items-center gap-1.5 text-[10px] font-black px-2 py-1 rounded shadow-sm ${market.trend === 'up' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-primary/10 text-primary border border-primary/20'}`}>
                  <span className="material-symbols-outlined text-[14px] font-bold">
                    {market.trend === 'up' ? 'trending_up' : 'trending_down'}
                  </span>
                  {market.percent}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <div className="font-headline font-black text-4xl text-on-surface tabular-nums tracking-tighter drop-shadow-sm">{market.rate}</div>
                  <div className="text-[10px] font-label font-bold text-on-surface-variant uppercase tracking-widest">AED</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-0 border-t border-black/5 pt-4">
                <div className="border-r border-black/5 pr-4">
                  <div className="text-[9px] font-label font-black text-on-surface-variant/60 tracking-[0.2em] mb-1 uppercase">Bid / Buy</div>
                  <div className="font-headline font-bold text-base tabular-nums text-on-surface">{market.buy}</div>
                </div>
                <div className="pl-4">
                  <div className="text-[9px] font-label font-black text-on-surface-variant/60 tracking-[0.2em] mb-1 uppercase">Ask / Sell</div>
                  <div className="font-headline font-bold text-base tabular-nums text-on-surface">{market.sell}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Manual Controls */}
      <button 
        onClick={() => setCurrentIndex((prev) => (prev - 1 + length) % length)}
        className="absolute left-8 lg:left-24 w-12 h-12 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg z-30"
      >
        <span className="material-symbols-outlined">chevron_left</span>
      </button>
      <button 
        onClick={() => setCurrentIndex((prev) => (prev + 1) % length)}
        className="absolute right-8 lg:right-24 w-12 h-12 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors shadow-lg z-30"
      >
        <span className="material-symbols-outlined">chevron_right</span>
      </button>
    </div>
  );
}
