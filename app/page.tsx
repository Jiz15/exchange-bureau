import React from 'react';
import Link from 'next/link';
import HeroBackground from '@/components/HeroBackground';

export default function Page() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      
<nav className="sticky top-0 z-50 glass-effect border-b border-black/5 px-6 lg:px-20 h-24 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Dubai Duty Free Logo" className="size-14 object-contain" src="/dubaidutyfreelogo.png"/>
<span className="font-headline font-black text-2xl tracking-tight uppercase">Dubai Duty Free</span>
</div>
<div className="hidden md:flex items-center gap-10">
<Link className="font-label font-bold text-xs tracking-widest hover:text-primary transition-colors" href="/">HOME</Link>
<Link className="font-label font-bold text-xs tracking-widest hover:text-primary transition-colors" href="/exchange-rates">EXCHANGE RATES</Link>
<Link className="font-label font-bold text-xs tracking-widest hover:text-primary transition-colors" href="/branch-locator">BRANCH LOCATOR</Link>
<Link className="font-label font-bold text-xs tracking-widest hover:text-primary transition-colors" href="/">POLICIES</Link>
<Link className="font-label font-bold text-xs tracking-widest hover:text-primary transition-colors" href="/">CONTACT US</Link>
</div>
</nav>
<section className="relative min-h-[921px] flex flex-col justify-center overflow-hidden">
<HeroBackground />
<div className="relative z-20 px-6 lg:px-20 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<span className="inline-block px-3 py-1 bg-primary text-white font-label font-bold text-[10px] tracking-[0.2em] mb-6 shadow-md">INSTITUTIONAL GRADE EXCHANGE</span>
<h1 className="text-white font-headline font-black text-5xl lg:text-7xl leading-[0.9] tracking-tighter mb-8 drop-shadow-2xl">No Commission <br/> <span className="text-primary brightness-125 drop-shadow-md">Currency</span> Exchange</h1>
<p className="text-white/90 max-w-lg text-lg leading-relaxed mb-10 drop-shadow-lg font-medium">Experience the weight of authority in every transaction. Regulated security meet competitive market rates.</p>
<div className="flex gap-6 items-center mb-10">
<div className="flex flex-col">
<span className="text-primary brightness-125 font-headline font-black text-3xl drop-shadow-md">0.02%</span>
<span className="font-label text-[10px] text-white/80 font-bold tracking-widest mt-1">AVERAGE SPREAD</span>
</div>
<div className="w-px h-12 bg-white/20"></div>
<div className="flex flex-col">
<span className="text-white font-headline font-black text-3xl drop-shadow-md">140+</span>
<span className="font-label text-[10px] text-white/80 font-bold tracking-widest mt-1">CURRENCIES</span>
</div>
</div>
</div>
<div className="lg:col-span-5 relative z-10 w-full max-w-md mx-auto">
<div className="glass-effect p-8 border-l-2 border-primary shadow-2xl">
<div className="flex justify-between items-center mb-8">
<h3 className="font-headline font-bold text-lg tracking-tight">Live Converter</h3>
<div className="flex items-center gap-2 text-[10px] font-label font-bold text-primary">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
</span>
                            LIVE RATES
                        </div>
</div>
<div className="space-y-4">
<div className="bg-surface-container-high p-4 border-l-2 border-transparent focus-within:border-primary transition-all">
<label className="block font-label text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">You Send</label>
<div className="flex justify-between items-center">
<input className="bg-transparent border-none p-0 focus:ring-0 font-headline font-bold text-2xl w-full" type="text" value="1,000.00"/>
<div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-sm cursor-pointer">
<span className="font-bold text-sm">USD</span>
<span className="material-symbols-outlined text-xs" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
<div className="relative flex justify-center h-4">
<button className="absolute z-10 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
<span className="material-symbols-outlined" data-icon="swap_vert">swap_vert</span>
</button>
</div>
<div className="bg-surface-container-high p-4 border-l-2 border-transparent focus-within:border-primary transition-all">
<label className="block font-label text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest">You Receive</label>
<div className="flex justify-between items-center">
<input className="bg-transparent border-none p-0 focus:ring-0 font-headline font-bold text-2xl w-full text-primary" type="text" value="934.50"/>
<div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-sm cursor-pointer">
<span className="font-bold text-sm">EUR</span>
<span className="material-symbols-outlined text-xs" data-icon="expand_more">expand_more</span>
</div>
</div>
</div>
</div>
<div className="mt-8 space-y-3">
<div className="flex justify-between text-xs font-label">
<span className="text-on-surface-variant">Exchange Rate</span>
<span className="font-bold">1 USD = 0.9345 EUR</span>
</div>
<div className="flex justify-between text-xs font-label">
<span className="text-on-surface-variant">Service Fee (0.00%)</span>
<span className="font-bold text-primary">WAIVED</span>
</div>
<button className="w-full mt-4 py-4 bg-primary text-on-primary font-headline font-black text-sm tracking-widest uppercase hover:brightness-110 transition-all">SECURE THIS RATE</button>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 bg-gradient-to-b from-surface to-surface-container-low border-y border-black/5 overflow-hidden">
  <div className="px-6 lg:px-20 mb-10 flex flex-col md:flex-row justify-between items-end gap-6 max-w-[1600px] mx-auto">
    <div className="flex items-center gap-4">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h2 className="font-headline font-black text-2xl tracking-tight uppercase">Market Watch</h2>
          <div className="flex items-center gap-1.5 px-2.5 py-1 bg-primary/10 border border-primary/20 rounded-full">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-live"></span>
            <span className="text-[9px] font-bold tracking-widest text-primary">LIVE</span>
          </div>
        </div>
        <p className="text-sm text-on-surface-variant font-medium tracking-wide">
          Last updated: <span suppressHydrationWarning>{new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</span>
        </p>
      </div>
    </div>
    <button className="font-label font-bold text-[10px] text-primary tracking-widest flex items-center gap-2 hover:opacity-70 transition-opacity uppercase">
      VIEW ALL MARKETS <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
    </button>
  </div>

  <div className="relative w-full overflow-hidden flex pb-8 pt-2">
    {/* Fade effect edges */}
    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10 pointer-events-none"></div>
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-surface-container-low via-surface-container-low/80 to-transparent z-10 pointer-events-none"></div>

    <div className="flex animate-marquee hover-pause w-max gap-6 px-6">
      {/* Duplicated for seamless loop */}
      {[
        { pair: "USD / AED", name: "US DOLLAR", rate: "3.6725", buy: "3.6700", sell: "3.6750", trend: "up", percent: "+0.01%" },
        { pair: "EUR / AED", name: "EURO", rate: "3.9842", buy: "3.9800", sell: "3.9880", trend: "up", percent: "+0.15%" },
        { pair: "GBP / AED", name: "BRITISH POUND", rate: "4.6310", buy: "4.6250", sell: "4.6380", trend: "down", percent: "-0.08%" },
        { pair: "INR / AED", name: "INDIAN RUPEE", rate: "0.0442", buy: "0.0440", sell: "0.0445", trend: "up", percent: "+0.02%" },
        { pair: "XAU / USD", name: "GOLD (OUNCE)", rate: "2345.50", buy: "2344.00", sell: "2347.00", trend: "up", percent: "+0.85%" },
        { pair: "USD / AED", name: "US DOLLAR", rate: "3.6725", buy: "3.6700", sell: "3.6750", trend: "up", percent: "+0.01%" },
        { pair: "EUR / AED", name: "EURO", rate: "3.9842", buy: "3.9800", sell: "3.9880", trend: "up", percent: "+0.15%" },
        { pair: "GBP / AED", name: "BRITISH POUND", rate: "4.6310", buy: "4.6250", sell: "4.6380", trend: "down", percent: "-0.08%" },
        { pair: "INR / AED", name: "INDIAN RUPEE", rate: "0.0442", buy: "0.0440", sell: "0.0445", trend: "up", percent: "+0.02%" },
        { pair: "XAU / USD", name: "GOLD (OUNCE)", rate: "2345.50", buy: "2344.00", sell: "2347.00", trend: "up", percent: "+0.85%" }
      ].map((market, idx) => (
        <div key={idx} className="w-[320px] shrink-0 bg-white border border-black/5 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all cursor-pointer group">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="font-headline font-black text-lg text-on-surface">{market.pair}</div>
              <div className="font-label text-[10px] tracking-widest text-on-surface-variant font-bold mt-0.5">{market.name}</div>
            </div>
            <div className={`flex items-center gap-1 text-xs font-bold px-2 py-1 rounded-md ${market.trend === 'up' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-[#ee0000] border border-red-200'}`}>
              <span className="material-symbols-outlined text-[14px]">
                {market.trend === 'up' ? 'trending_up' : 'trending_down'}
              </span>
              {market.percent}
            </div>
          </div>
          <div className="mb-5">
            <div className="font-headline font-bold text-3xl text-on-surface tabular-nums tracking-tight">{market.rate}</div>
          </div>
          <div className="grid grid-cols-2 gap-4 border-t border-black/5 pt-4">
            <div>
              <div className="text-[10px] font-label font-bold text-on-surface-variant tracking-widest mb-1">BUY</div>
              <div className="font-headline font-semibold text-sm tabular-nums text-on-surface">{market.buy}</div>
            </div>
            <div>
              <div className="text-[10px] font-label font-bold text-on-surface-variant tracking-widest mb-1">SELL</div>
              <div className="font-headline font-semibold text-sm tabular-nums text-on-surface">{market.sell}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="py-24 px-6 lg:px-20 bg-surface-container-low relative overflow-hidden">
<div className="absolute inset-0 w-full h-full pointer-events-none z-0">
<div className="absolute inset-0 bg-background/0"></div>
<img alt="Decorative" className="w-full h-full object-cover" src="/red-chart-bg.jpg"/>
</div>

<div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
  <h2 className="font-headline font-black text-4xl lg:text-5xl tracking-tighter uppercase text-white mb-6 drop-shadow-lg">Beyond Currency Exchange</h2>
  <p className="font-body text-lg text-white/80 leading-relaxed font-medium drop-shadow-md">
    Our commitment to expanding our global footprint, uncompromising ethical compliance, and delivering a truly elite financial experience.
  </p>
</div>

<div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-[1600px] mx-auto">
{/* Card 1 */}
<div className="relative overflow-hidden p-10 rounded-3xl group cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div className="relative z-10 flex items-start gap-4 mb-6">
    <div className="p-4 bg-white/10 rounded-xl text-white group-hover:bg-primary transition-colors duration-500 border border-white/10">
      <span className="material-symbols-outlined text-3xl" data-icon="location_on">location_on</span>
    </div>
    <div className="pt-2">
      <h4 className="font-headline font-black text-lg uppercase tracking-widest text-white group-hover:text-primary-dim transition-colors">Our Presence</h4>
    </div>
  </div>
  <p className="text-white/80 text-sm leading-relaxed mb-8 relative z-10 font-medium">Our evolution is driven by the elite needs of our clients. Provide feedback to shape the future of Dubai Duty Free.</p>
  <button className="relative z-10 flex items-center gap-2 font-label font-bold text-[10px] tracking-[0.2em] text-white group-hover:text-primary-dim transition-all uppercase">
    LOCATE NEAREST VAULT
    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
  </button>
</div>

{/* Card 2 */}
<div className="relative overflow-hidden p-10 rounded-3xl group cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div className="relative z-10 flex items-start gap-4 mb-6">
    <div className="p-4 bg-white/10 rounded-xl text-white group-hover:bg-primary transition-colors duration-500 border border-white/10">
      <span className="material-symbols-outlined text-3xl" data-icon="policy">policy</span>
    </div>
    <div className="pt-2">
      <h4 className="font-headline font-black text-lg uppercase tracking-widest text-white group-hover:text-primary-dim transition-colors">Committed to Ethics</h4>
    </div>
  </div>
  <p className="text-white/80 text-sm leading-relaxed mb-8 relative z-10 font-medium">Our evolution is driven by the elite needs of our clients. Provide feedback to shape the future of Dubai Duty Free.</p>
  <button className="relative z-10 flex items-center gap-2 font-label font-bold text-[10px] tracking-[0.2em] text-white group-hover:text-primary-dim transition-all uppercase">
    GOVERNANCE PORTAL
    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
  </button>
</div>

{/* Card 3 */}
<div className="relative overflow-hidden p-10 rounded-3xl group cursor-pointer hover:-translate-y-2 transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/20 shadow-2xl">
  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
  <div className="relative z-10 flex items-start gap-4 mb-6">
    <div className="p-4 bg-white/10 rounded-xl text-white group-hover:bg-primary transition-colors duration-500 border border-white/10">
      <span className="material-symbols-outlined text-3xl" data-icon="insights">insights</span>
    </div>
    <div className="pt-2">
      <h4 className="font-headline font-black text-lg uppercase tracking-widest text-white group-hover:text-primary-dim transition-colors">Share Your Experience</h4>
    </div>
  </div>
  <p className="text-white/80 text-sm leading-relaxed mb-8 relative z-10 font-medium">Our evolution is driven by the elite needs of our clients. Provide feedback to shape the future of Dubai Duty Free.</p>
  <button className="relative z-10 flex items-center gap-2 font-label font-bold text-[10px] tracking-[0.2em] text-white group-hover:text-primary-dim transition-all uppercase">
    START ASSESSMENT
    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
  </button>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-surface-container-lowest">
<div className="relative z-10 py-24 px-6 lg:px-20 max-w-7xl mx-auto text-center">
<h2 className="font-headline font-black text-4xl lg:text-5xl tracking-tighter mb-6 uppercase">Licensed and Regulated</h2>
<p className="max-w-4xl mx-auto leading-relaxed mb-16 font-body text-on-surface-variant text-xl">
            Licensed and regulated by the Central Bank of the UAE under license number 1234567890. We adhere to the highest standards of financial regulation, anti-money laundering compliance, and customer protection.
        </p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
<div className="flex flex-col items-center gap-4 group">
<div className="size-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-on-primary group-hover:text-primary bg-surface-container-high border-outline-variant/30 text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="account_balance">account_balance</span>
</div>
<span className="font-label font-bold text-[10px] tracking-widest uppercase text-on-surface-variant">CBUAE Licensed</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="size-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-on-primary group-hover:text-primary bg-surface-container-high border-outline-variant/30 text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="verified">verified</span>
</div>
<span className="font-label font-bold text-[10px] tracking-widest uppercase text-on-surface-variant">AML Compliant</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="size-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-on-primary group-hover:text-primary bg-surface-container-high border-outline-variant/30 text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="lock">lock</span>
</div>
<span className="font-label font-bold text-[10px] tracking-widest uppercase text-on-surface-variant">Data Protected</span>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="size-16 rounded-full border-2 flex items-center justify-center backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-on-primary group-hover:text-primary bg-surface-container-high border-outline-variant/30 text-primary">
<span className="material-symbols-outlined text-3xl" data-icon="military_tech">military_tech</span>
</div>
<span className="font-label font-bold text-[10px] tracking-widest uppercase text-on-surface-variant">ISO Certified</span>
</div>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-20 bg-surface border-y border-black/10 my-24">
  <div className="grid md:grid-cols-3 max-w-[1600px] mx-auto divide-y md:divide-y-0 md:divide-x divide-black/10">
    <div className="flex flex-col items-center text-center p-8 lg:p-12 group cursor-pointer hover:bg-black/[0.02] transition-colors">
      <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
        <span className="material-symbols-outlined text-primary group-hover:text-white text-[32px] transition-colors duration-500" data-icon="money_off">money_off</span>
      </div>
      <h4 className="font-headline font-bold text-on-surface text-xl mb-3 tracking-tight">No Commission</h4>
      <p className="text-on-surface-variant text-sm leading-relaxed max-w-[300px]">Transparent pricing with absolutely no hidden service charges or fees.</p>
    </div>
    
    <div className="flex flex-col items-center text-center p-8 lg:p-12 group cursor-pointer hover:bg-black/[0.02] transition-colors">
      <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
        <span className="material-symbols-outlined text-primary group-hover:text-white text-[32px] transition-colors duration-500" data-icon="flight_takeoff">flight_takeoff</span>
      </div>
      <h4 className="font-headline font-bold text-on-surface text-xl mb-3 tracking-tight">24/7 Airport Service</h4>
      <p className="text-on-surface-variant text-sm leading-relaxed max-w-[300px]">Convenient exchange services available around the clock to meet all your travel needs.</p>
    </div>

    <div className="flex flex-col items-center text-center p-8 lg:p-12 group cursor-pointer hover:bg-black/[0.02] transition-colors">
      <div className="w-16 h-16 mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
        <span className="material-symbols-outlined text-primary group-hover:text-white text-[32px] transition-colors duration-500" data-icon="shield">shield</span>
      </div>
      <h4 className="font-headline font-bold text-on-surface text-xl mb-3 tracking-tight">Licensed & Regulated</h4>
      <p className="text-on-surface-variant text-sm leading-relaxed max-w-[300px]">Fully licensed and regulated by the UAE Central Bank for total peace of mind.</p>
    </div>
  </div>
</section>

<section className="py-32 px-6 lg:px-20 bg-surface">
<div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-20">
<div>
<h2 className="font-headline font-black text-4xl tracking-tighter mb-6 leading-none uppercase">SHARE YOUR <br/> <span className="text-primary">EXPERIENCE.</span></h2>
<p className="text-on-surface-variant leading-relaxed mb-10">
                    Our evolution is driven by the elite needs of our clients. Provide feedback to shape the future of sovereign capital exchange.
                </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary" data-icon="verified_user">verified_user</span>
<div>
<p className="font-bold text-sm">Strict Confidentiality</p>
<p className="text-xs text-on-surface-variant">All feedback is end-to-end encrypted and handled by our executive team.</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="material-symbols-outlined text-primary" data-icon="support_agent">support_agent</span>
<div>
<p className="font-bold text-sm">Direct Response</p>
<p className="text-xs text-on-surface-variant">Opt-in for a follow-up from a dedicated wealth manager.</p>
</div>
</div>
</div>
</div>
<form className="space-y-6">
<div className="group">
<label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Full Name</label>
<input className="w-full bg-surface-container-high border-none border-l-2 border-transparent focus:border-primary focus:ring-0 p-4 font-body text-sm" placeholder="e.g. Alexander Sterling" type="text"/>
</div>
<div className="group">
<label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Email Address</label>
<input className="w-full bg-surface-container-high border-none border-l-2 border-transparent focus:border-primary focus:ring-0 p-4 font-body text-sm" placeholder="alexander@sterling.com" type="email"/>
</div>
<div className="group">
<label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Feedback Type</label>
<select className="w-full bg-surface-container-high border-none border-l-2 border-transparent focus:border-primary focus:ring-0 p-4 font-body text-sm appearance-none">
<option>Transaction Execution</option>
<option>Branch Professionalism</option>
<option>Digital Interface</option>
<option>Corporate Partnership</option>
</select>
</div>
<div className="group">
<label className="block font-label text-[10px] text-on-surface-variant uppercase tracking-widest mb-2">Your Comments</label>
<textarea className="w-full bg-surface-container-high border-none border-l-2 border-transparent focus:border-primary focus:ring-0 p-4 font-body text-sm resize-none" placeholder="Describe your experience with our services..." rows={4}></textarea>
</div>
<button className="w-full py-4 bg-primary text-on-primary font-headline font-black text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all flex items-center justify-center gap-2">TRANSMIT DATA <span className="material-symbols-outlined text-sm" data-icon="send">send</span>
</button>
</form>
</div>
</section>
<div className="fixed bottom-6 left-6 z-[60] group">
<button className="size-12 bg-surface-container-highest rounded-full shadow-2xl flex items-center justify-center border border-outline-variant/30 hover:bg-primary hover:text-on-primary transition-all">
<span className="material-symbols-outlined" data-icon="accessibility_new">accessibility_new</span>
</button>
<div className="absolute bottom-16 left-0 glass-effect p-4 min-w-[200px] border border-outline-variant/20 hidden group-hover:block rounded-lg">
<p className="font-label font-bold text-[10px] text-on-surface-variant mb-4 uppercase tracking-widest">Accessibility Controls</p>
<div className="space-y-3">
<button className="w-full text-left font-label text-[11px] py-1 hover:text-primary transition-colors flex justify-between">Increase Contrast <span className="material-symbols-outlined text-xs" data-icon="contrast">contrast</span></button>
<button className="w-full text-left font-label text-[11px] py-1 hover:text-primary transition-colors flex justify-between">Dyslexia Font <span className="material-symbols-outlined text-xs" data-icon="spellcheck">spellcheck</span></button>
<button className="w-full text-left font-label text-[11px] py-1 hover:text-primary transition-colors flex justify-between">Screen Reader <span className="material-symbols-outlined text-xs" data-icon="record_voice_over">record_voice_over</span></button>
</div>
</div>
</div>
<footer className="bg-surface-container-lowest py-20 px-6 lg:px-20 border-t border-black/5">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2">
<div className="flex items-center gap-4 mb-8">
<img alt="Dubai Duty Free Logo" className="size-8 object-contain" src="/dubaidutyfreelogo.png"/>
<span className="font-headline font-black text-xl tracking-tight uppercase">Dubai Duty Free</span>
</div>
<p className="text-on-surface-variant text-sm max-w-sm mb-8 leading-relaxed">
                    The benchmark for premium currency exchange and wealth preservation. Regulated across major global jurisdictions.
                </p>
<div className="flex gap-4">
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="/"><span className="material-symbols-outlined text-sm" data-icon="share">share</span></Link>
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="/"><span className="material-symbols-outlined text-sm" data-icon="public">public</span></Link>
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="/"><span className="material-symbols-outlined text-sm" data-icon="hub">hub</span></Link>
</div>
</div>
<div>
<h5 className="font-label font-bold text-[10px] text-primary tracking-[0.3em] uppercase mb-8">Navigation</h5>
<ul className="space-y-4 font-body text-sm text-on-surface-variant">
<li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
<li><Link className="hover:text-primary transition-colors" href="/exchange-rates">Exchange Rates</Link></li>
<li><Link className="hover:text-primary transition-colors" href="/branch-locator">Branch Locator</Link></li>
<li><Link className="hover:text-primary transition-colors" href="/">Policies</Link></li>
<li><Link className="hover:text-primary transition-colors" href="/">Contact Us</Link></li>
</ul>
</div>
<div>
<h5 className="font-label font-bold text-[10px] text-primary tracking-[0.3em] uppercase mb-8">Governance</h5>
<ul className="space-y-4 font-body text-sm text-on-surface-variant">
<li><Link className="hover:text-primary transition-colors" href="/">Privacy Charter</Link></li>
<li><Link className="hover:text-primary transition-colors" href="/">Compliance Protocol</Link></li>
<li><Link className="hover:text-primary transition-colors" href="/">AML Policy</Link></li>
<li><Link className="hover:text-primary transition-colors" href="/">Risk Disclosure</Link></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-black/5 font-label text-[10px] text-on-surface-variant font-bold tracking-widest">
<span>© 2024 DUBAI DUTY FREE. ALL RIGHTS RESERVED.</span>
<div className="flex gap-8">
<Link href="/">SYSTEM STATUS: <span className="text-primary">ONLINE</span></Link>
<Link href="/">v4.2.0-SOVEREIGN</Link>
</div>
</div>
</footer>

    </div>
  );
}