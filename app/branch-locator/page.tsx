import React from 'react';
import Link from 'next/link';
import InteractiveBranchMap from '@/components/InteractiveBranchMap';

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
<main>

<section className="relative py-24 px-6 lg:px-20 overflow-hidden bg-background">
  <div className="absolute inset-0 z-0">
    <img className="w-full h-full object-cover object-center" data-alt="Red market map" src="/red-market-map-bg.jpg"/>
  </div>
  <div className="relative z-20 max-w-7xl mx-auto flex flex-col items-start">
    <span className="inline-block px-3 py-1 bg-primary text-white font-label font-bold text-[10px] tracking-[0.2em] mb-4 shadow-md rounded-sm uppercase">Global Network</span>
    <h1 className="text-white font-headline font-black text-4xl lg:text-6xl leading-tight tracking-tighter mb-4 drop-shadow-2xl uppercase">
      Branch <span className="text-primary brightness-125">Locator</span>
    </h1>
    <p className="text-white/80 max-w-xl text-lg font-medium leading-relaxed drop-shadow-md">
      Find our premium exchange and duty-free services across Dubai's most prestigious travel hubs. Instant access to liquidity, wherever your journey takes you.
    </p>
  </div>
</section>

<section className="py-24 px-8 bg-surface">
<div className="container mx-auto max-w-7xl">
<InteractiveBranchMap />
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
<div className="text-2xl font-bold headline-font text-on-surface">100%</div>
<div className="text-[10px] uppercase tracking-widest text-secondary font-bold">Compliance Rate</div>
</div>
<div className="border-l-2 border-primary/30 pl-6">
<div className="text-2xl font-bold headline-font text-on-surface">40+</div>
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

<footer className="bg-surface-container-lowest py-20 px-6 lg:px-20 border-t border-black/5">
<div className="grid md:grid-cols-4 gap-12 mb-20 max-w-7xl mx-auto">
<div className="col-span-2">
<div className="flex items-center gap-4 mb-8">
<img alt="Dubai Duty Free Logo" className="size-8 object-contain" src="/dubaidutyfreelogo.png"/>
<span className="font-headline font-black text-xl tracking-tight uppercase text-on-surface">Dubai Duty Free</span>
</div>
<p className="text-on-surface-variant text-sm max-w-sm mb-8 leading-relaxed">
                    The benchmark for premium currency exchange and wealth preservation. Regulated across major global jurisdictions. Licensed and regulated by the Central Bank of the UAE.
                </p>
<div className="flex gap-4">
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors text-on-surface" href="/"><span className="material-symbols-outlined text-sm">share</span></Link>
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors text-on-surface" href="/"><span className="material-symbols-outlined text-sm">public</span></Link>
<Link className="size-10 bg-surface-container rounded-full flex items-center justify-center hover:bg-primary transition-colors text-on-surface" href="/"><span className="material-symbols-outlined text-sm">hub</span></Link>
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
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-black/5 font-label text-[10px] text-on-surface-variant font-bold tracking-widest">
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