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
<main>

<section className="relative h-[614px] min-h-[500px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-[#0e0e0e] via-[#0e0e0e]/80 to-transparent z-10"></div>
<img className="w-full h-full object-cover grayscale opacity-40" data-alt="Ultra-modern airport terminal architecture at night with dramatic lighting shadows and sleek metallic surfaces in high contrast grayscale" src="/hero.png"/>
</div>
<div className="relative z-20 container mx-auto px-8 max-w-7xl">
<div className="max-w-2xl">
<h1 className="text-6xl md:text-7xl font-extrabold tracking-tighter text-white mb-6 font-headline">
                        Branch <span className="text-primary">Locator</span>
</h1>
<p className="text-on-surface-variant text-lg mb-10 font-medium leading-relaxed">
                        Find our premium exchange and duty-free services across Dubai's most prestigious travel hubs. Instant access to liquidity, wherever your journey takes you.
                    </p>
<div className="relative max-w-xl group">
<div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
<span className="material-symbols-outlined text-primary">search</span>
</div>
<input className="w-full bg-surface-container-high border-none py-5 pl-14 pr-6 text-white placeholder-white/30 rounded-lg focus:ring-0 focus:ring-offset-0 transition-all" placeholder="Search by terminal or area..." type="text"/>
<div className="absolute inset-y-0 left-0 w-1 bg-primary opacity-0 group-focus-within:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-8 bg-surface">
<div className="container mx-auto max-w-7xl">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8 h-[600px] rounded-xl overflow-hidden bg-surface-container-low relative group">
<div className="absolute inset-0 bg-[#131313]">
<img className="w-full h-full object-cover grayscale brightness-50 contrast-125" data-alt="Minimalist dark themed map of Dubai city showing stylized terminal locations with high contrast architectural lines" data-location="Dubai" src="/map.png"/>
</div>

<div className="absolute top-1/4 left-1/3">
<div className="relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-primary/20 rounded-full animate-ping"></div>
<div className="relative z-10 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
<div className="absolute -bottom-8 bg-surface-container-highest px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap">Terminal 3</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2">
<div className="relative flex items-center justify-center">
<div className="relative z-10 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
<div className="absolute -bottom-8 bg-surface-container-highest px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap">Terminal 1</div>
</div>
</div>
<div className="absolute bottom-1/4 right-1/4">
<div className="relative flex items-center justify-center">
<div className="relative z-10 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-lg"></div>
<div className="absolute -bottom-8 bg-surface-container-highest px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-white whitespace-nowrap">AMIA Downtown</div>
</div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-2">
<button className="w-12 h-12 bg-surface-container-highest text-white flex items-center justify-center rounded-lg hover:bg-surface-bright transition-colors shadow-xl">
<span className="material-symbols-outlined">add</span>
</button>
<button className="w-12 h-12 bg-surface-container-highest text-white flex items-center justify-center rounded-lg hover:bg-surface-bright transition-colors shadow-xl">
<span className="material-symbols-outlined">remove</span>
</button>
</div>
</div>

<div className="lg:col-span-4 space-y-6 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">

<div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-all group border-l-4 border-transparent hover:border-primary">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-bold headline-font text-white">Terminal 3 (T3)</h3>
<span className="bg-secondary/10 text-secondary text-[10px] font-bold px-2 py-1 rounded uppercase tracking-widest">Main Hub</span>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm">location_on</span>
<span className="text-sm">Departure Level, Near Gate B22</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm">schedule</span>
<span className="text-sm font-semibold text-secondary">Open 24/7</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm">call</span>
<span className="text-sm">+971 4 216 2222</span>
</div>
</div>
<button className="w-full py-3 bg-surface-container-highest text-white font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all group">
                                Get Directions
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>

<div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-all group border-l-4 border-transparent hover:border-primary">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-bold headline-font text-white">Terminal 1 (T1)</h3>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm">location_on</span>
<span className="text-sm">Arrivals Hall, Level 1</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm">schedule</span>
<span className="text-sm font-semibold text-secondary">Open 24/7</span>
</div>
</div>
<button className="w-full py-3 bg-surface-container-highest text-white font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all group">
                                Get Directions
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>

<div className="bg-surface-container-low p-6 rounded-xl hover:bg-surface-container-high transition-all group border-l-4 border-transparent hover:border-primary">
<div className="flex justify-between items-start mb-4">
<h3 className="text-xl font-bold headline-font text-white">AMIA Downtown</h3>
</div>
<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm">location_on</span>
<span className="text-sm">Al Maktoum Int'l, Concourse A</span>
</div>
<div className="flex items-center gap-3 text-on-surface-variant">
<span className="material-symbols-outlined text-primary text-sm">schedule</span>
<span className="text-sm font-semibold text-secondary">Open 24/7</span>
</div>
</div>
<button className="w-full py-3 bg-surface-container-highest text-white font-bold text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all group">
                                Get Directions
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-surface-container-low overflow-hidden">
<div className="container mx-auto px-8 max-w-7xl">
<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded mb-6">
<span className="material-symbols-outlined text-primary text-sm" >verified_user</span>
<span className="text-primary text-[10px] font-bold uppercase tracking-widest">Authority Verified</span>
</div>
<h2 className="text-4xl font-extrabold headline-font mb-6 leading-tight">Licensed &amp; <span className="text-primary">Regulated</span> Authority</h2>
<p className="text-on-surface-variant mb-8 leading-relaxed max-w-lg">
                            Dubai Duty Free is fully licensed by the UAE Central Bank and Dubai Financial Services Authority. Our operations maintain the highest global standards of compliance, security, and prestige in financial services.
                        </p>
<div className="grid grid-cols-2 gap-8">
<div className="border-l-2 border-primary/30 pl-6">
<div className="text-2xl font-bold headline-font text-white">100%</div>
<div className="text-[10px] uppercase tracking-widest text-secondary font-bold">Compliance Rate</div>
</div>
<div className="border-l-2 border-primary/30 pl-6">
<div className="text-2xl font-bold headline-font text-white">40+</div>
<div className="text-[10px] uppercase tracking-widest text-secondary font-bold">Years Experience</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
<img alt="Official Regulatory Document" className="relative z-10 rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" data-alt="Official financial certificate with gold embossed seals and elegant security patterns on high-quality parchment paper, professional macro photography" src="/certificate.png"/>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-surface-container-lowest py-20 px-6 lg:px-20 border-t border-white/5">
<div className="grid md:grid-cols-4 gap-12 mb-20 max-w-7xl mx-auto">
<div className="col-span-2">
<div className="flex items-center gap-4 mb-8">
<img alt="Dubai Duty Free Logo" className="size-8 object-contain" src="/dubaidutyfreelogo-dark.png"/>
<span className="font-headline font-black text-xl tracking-tight uppercase text-white">Dubai Duty Free</span>
</div>
<p className="text-on-surface-variant text-sm max-w-sm mb-8 leading-relaxed">
                    The benchmark for premium currency exchange and wealth preservation. Regulated across major global jurisdictions. Licensed and regulated by the Central Bank of the UAE.
                </p>
<div className="flex gap-4">
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white" href="/"><span className="material-symbols-outlined text-sm">share</span></Link>
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white" href="/"><span className="material-symbols-outlined text-sm">public</span></Link>
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white" href="/"><span className="material-symbols-outlined text-sm">hub</span></Link>
</div>
</div>
<div>
<h5 className="font-label font-bold text-[10px] text-primary tracking-[0.3em] uppercase mb-8">Navigation</h5>
<ul className="space-y-4 font-body text-sm text-on-surface-variant">
<li><Link className="hover:text-primary transition-colors" href="/">Home</Link></li>
<li><Link className="hover:text-primary transition-colors" href="/exchange-rates">Exchange Rates</Link></li>
<li><Link className="hover:text-primary transition-colors text-primary font-bold" href="/branch-locator">Branch Locator</Link></li>
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
<span>© 2024 DUBAI DUTY FREE. KINETIC PRESTIGE AUTHORITY.</span>
<div className="flex gap-8">
<Link href="/">SYSTEM STATUS: <span className="text-primary">ONLINE</span></Link>
<Link href="/">v4.2.0-SOVEREIGN</Link>
</div>
</div>
</footer>

    </div>
  );
}