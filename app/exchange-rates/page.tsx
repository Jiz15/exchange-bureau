import React from 'react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary min-h-screen">
      

<nav className="sticky top-0 z-50 glass-effect border-b border-white/5 px-6 lg:px-20 h-24 flex items-center justify-between">
<div className="flex items-center gap-4">
<img alt="Dubai Duty Free Logo" className="size-14 object-contain" src="/dubaidutyfreelogo-dark.png"/>
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

<main className="py-24 px-6 lg:px-20 bg-surface">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 space-y-8">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
<div className="relative flex-1 max-w-md">
<span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
<input className="w-full bg-surface-container-high border-none text-white pl-12 pr-4 py-3 focus:ring-1 focus:ring-primary transition-all text-sm" placeholder="Search currency (USD, EUR, GBP...)" type="text"/>
</div>
<div className="flex items-center gap-4 text-[10px] font-label font-bold uppercase tracking-[0.2em] text-on-surface-variant">
<span>Last Update: 14:02 GST</span>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left">
<thead>
<tr className="text-primary font-label text-[10px] font-bold uppercase tracking-[0.3em] border-b border-white/5">
<th className="pb-6 px-4">Currency</th>
<th className="pb-6 px-4">Buy Rate</th>
<th className="pb-6 px-4">Sell Rate</th>
<th className="pb-6 px-4">Change</th>
<th className="pb-6 px-4 text-right">Trend</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 font-body">

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-6 px-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black border border-white/10">USD</div>
<div>
<div className="text-white font-bold text-sm">US Dollar</div>
<div className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">United States</div>
</div>
</div>
</td>
<td className="py-6 px-4 text-white font-bold text-lg">3.655</td>
<td className="py-6 px-4 text-white font-bold text-lg">3.682</td>
<td className="py-6 px-4 text-green-500 text-xs font-black">+0.02%</td>
<td className="py-6 px-4 text-right">
<span className="material-symbols-outlined text-green-500">trending_up</span>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-6 px-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black border border-white/10">EUR</div>
<div>
<div className="text-white font-bold text-sm">Euro</div>
<div className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">European Union</div>
</div>
</div>
</td>
<td className="py-6 px-4 text-white font-bold text-lg">3.942</td>
<td className="py-6 px-4 text-white font-bold text-lg">4.015</td>
<td className="py-6 px-4 text-error text-xs font-black">-0.15%</td>
<td className="py-6 px-4 text-right">
<span className="material-symbols-outlined text-error">trending_down</span>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-6 px-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black border border-white/10">GBP</div>
<div>
<div className="text-white font-bold text-sm">British Pound</div>
<div className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">United Kingdom</div>
</div>
</div>
</td>
<td className="py-6 px-4 text-white font-bold text-lg">4.628</td>
<td className="py-6 px-4 text-white font-bold text-lg">4.712</td>
<td className="py-6 px-4 text-green-500 text-xs font-black">+0.08%</td>
<td className="py-6 px-4 text-right">
<span className="material-symbols-outlined text-green-500">trending_up</span>
</td>
</tr>

<tr className="hover:bg-white/5 transition-colors group">
<td className="py-6 px-4">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-[10px] font-black border border-white/10">JPY</div>
<div>
<div className="text-white font-bold text-sm">Japanese Yen</div>
<div className="text-on-surface-variant text-[10px] uppercase font-bold tracking-widest">Japan</div>
</div>
</div>
</td>
<td className="py-6 px-4 text-white font-bold text-lg">0.024</td>
<td className="py-6 px-4 text-white font-bold text-lg">0.026</td>
<td className="py-6 px-4 text-on-surface-variant text-xs font-black">0.00%</td>
<td className="py-6 px-4 text-right">
<span className="material-symbols-outlined text-on-surface-variant">horizontal_rule</span>
</td>
</tr>
</tbody>
</table>
</div>
</div>

<aside className="lg:col-span-4">
<div className="glass-effect p-8 border-l-2 border-primary shadow-2xl sticky top-28">
<div className="flex justify-between items-center mb-8">
<h3 className="font-headline font-bold text-lg tracking-tight uppercase flex items-center gap-2">
<span className="material-symbols-outlined text-primary">calculate</span>
                            Live Converter
                        </h3>
</div>
<div className="space-y-6">
<div className="bg-surface-container-high p-4 border-l-2 border-transparent focus-within:border-primary transition-all">
<label className="block font-label text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest font-bold">You Send</label>
<div className="flex justify-between items-center">
<input className="bg-transparent border-none p-0 focus:ring-0 font-headline font-black text-2xl w-full" type="text" value="1,000.00"/>
<div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-sm cursor-pointer">
<span className="font-bold text-xs">USD</span>
<span className="material-symbols-outlined text-xs">expand_more</span>
</div>
</div>
</div>
<div className="relative flex justify-center h-4">
<button className="absolute z-10 bg-primary text-on-primary p-2 rounded-full shadow-lg hover:scale-110 transition-transform">
<span className="material-symbols-outlined">swap_vert</span>
</button>
</div>
<div className="bg-surface-container-high p-4 border-l-2 border-transparent focus-within:border-primary transition-all">
<label className="block font-label text-[10px] text-on-surface-variant mb-1 uppercase tracking-widest font-bold">You Receive</label>
<div className="flex justify-between items-center">
<input className="bg-transparent border-none p-0 focus:ring-0 font-headline font-black text-2xl w-full text-primary" readOnly type="text" value="3,672.50"/>
<div className="flex items-center gap-2 bg-surface-container-highest px-3 py-1 rounded-sm cursor-pointer">
<span className="font-bold text-xs">AED</span>
<span className="material-symbols-outlined text-xs">expand_more</span>
</div>
</div>
</div>
<div className="mt-8 space-y-3">
<div className="flex justify-between text-[10px] font-label font-bold uppercase tracking-widest">
<span className="text-on-surface-variant">Exchange Rate</span>
<span className="text-white">1 USD = 3.6725 AED</span>
</div>
<div className="flex justify-between text-[10px] font-label font-bold uppercase tracking-widest">
<span className="text-on-surface-variant">Service Fee (0%)</span>
<span className="text-primary">WAIVED</span>
</div>
<div className="p-4 bg-primary/5 border border-primary/10 mt-4">
<p className="text-[10px] text-primary leading-snug font-bold italic">Rates shown are indicative. Exact rates will be confirmed at the Dubai Duty Free counter at the time of transaction.</p>
</div>
<button className="w-full mt-4 py-4 bg-primary text-on-primary font-headline font-black text-sm tracking-[0.2em] uppercase hover:brightness-110 transition-all">FIND NEAREST BRANCH</button>
</div>
</div>
</div>

<div className="mt-8 relative h-48 overflow-hidden group cursor-pointer border-t-4 border-primary">
<img alt="Premium Banking" className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700 group-hover:scale-110" src="/hero.png"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 flex flex-col justify-end">
<span className="text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded-sm w-fit mb-2 font-bold uppercase tracking-widest">Exclusive Offer</span>
<h4 className="font-headline font-bold text-white text-lg tracking-tight uppercase">DDF Platinum Rewards</h4>
<p className="text-xs text-white/70">Get up to 5% cashback on all currency exchanges.</p>
</div>
</div>
</aside>
</div>
</main>

<div className="fixed bottom-6 left-6 z-[60] group">
<button className="size-12 bg-surface-container-highest rounded-full shadow-2xl flex items-center justify-center border border-outline-variant/30 hover:bg-primary hover:text-on-primary transition-all">
<span className="material-symbols-outlined">accessibility_new</span>
</button>
</div>

<footer className="bg-surface-container-lowest py-20 px-6 lg:px-20 border-t border-white/5">
<div className="grid md:grid-cols-4 gap-12 mb-20 max-w-7xl mx-auto">
<div className="col-span-2">
<div className="flex items-center gap-4 mb-8">
<img alt="Dubai Duty Free Logo" className="size-8 object-contain" src="/dubaidutyfreelogo-dark.png"/>
<span className="font-headline font-black text-xl tracking-tight uppercase">Dubai Duty Free</span>
</div>
<p className="text-on-surface-variant text-sm max-w-sm mb-8 leading-relaxed">
                    The benchmark for premium currency exchange and wealth preservation. Regulated across major global jurisdictions. Licensed and regulated by the Central Bank of the UAE.
                </p>
<div className="flex gap-4">
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="/"><span className="material-symbols-outlined text-sm">share</span></Link>
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="/"><span className="material-symbols-outlined text-sm">public</span></Link>
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors" href="/"><span className="material-symbols-outlined text-sm">hub</span></Link>
</div>
</div>
<div>
<h5 className="font-label font-bold text-[10px] text-primary tracking-[0.3em] uppercase mb-8">Navigation</h5>
<ul className="space-y-4 font-body text-sm text-on-surface-variant">
<li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
<li><Link className="hover:text-primary transition-colors text-primary font-bold" href="/exchange-rates">Exchange Rates</Link></li>
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
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 font-label text-[10px] text-on-surface-variant font-bold tracking-widest">
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