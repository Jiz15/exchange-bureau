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
<section className="relative min-h-[921px] flex flex-col justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10"></div>
<img alt="Hero Background" className="w-full h-full object-cover" src="/hero.png"/>
</div>
<div className="relative z-20 px-6 lg:px-20 grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7">
<span className="inline-block px-3 py-1 bg-primary/20 text-primary font-label font-bold text-[10px] tracking-[0.2em] mb-6">INSTITUTIONAL GRADE EXCHANGE</span>
<h1 className="font-headline font-black text-5xl lg:text-7xl leading-[0.9] tracking-tighter mb-8">No Commission <br/> <span className="text-primary">Currency</span> Exchange</h1>
<p className="text-on-surface-variant max-w-lg text-lg leading-relaxed mb-10">Experience the weight of authority in every transaction. Regulated security meet competitive market rates.</p>
<div className="flex gap-6 items-center">
<div className="flex flex-col">
<span className="text-primary font-headline font-bold text-2xl">0.02%</span>
<span className="font-label text-[10px] text-on-surface-variant">AVERAGE SPREAD</span>
</div>
<div className="w-px h-10 bg-outline-variant/30"></div>
<div className="flex flex-col">
<span className="text-on-surface font-headline font-bold text-2xl">140+</span>
<span className="font-label text-[10px] text-on-surface-variant">CURRENCIES</span>
</div>
</div>
</div>
<div className="lg:col-span-5">
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
<section className="py-24 px-6 lg:px-20 bg-surface">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div>
<h2 className="font-headline font-bold text-3xl tracking-tight mb-2">Market Watch</h2>
<p className="text-on-surface-variant font-body">Real-time indicators from global liquidity hubs.</p>
</div>
<button className="font-label font-bold text-xs text-primary tracking-widest flex items-center gap-2 border-b border-primary/20 pb-1 hover:border-primary transition-all">
                VIEW ALL MARKETS <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-outline-variant/10 lg:grid-cols-5">
<div className="bg-surface-container-low p-8 hover:bg-surface-bright transition-colors group">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="font-headline font-black text-xl">USD / AED</span>
<span className="text-[10px] font-label text-on-surface-variant">US DOLLAR / DIRHAM</span>
</div>
<span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
</div>
<div className="font-headline font-bold text-2xl mb-2">1.0842</div>
<div className="text-primary font-label text-[10px] font-bold">US DOLLAR / DIRHAM</div>
</div>
<div className="bg-surface-container-low p-8 hover:bg-surface-bright transition-colors group">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="font-headline font-black text-xl">EUR / AED</span>
<span className="text-[10px] font-label text-on-surface-variant">EURO / DIRHAM</span>
</div>
<span className="material-symbols-outlined text-error" data-icon="trending_down">trending_down</span>
</div>
<div className="font-headline font-bold text-2xl mb-2">1.2631</div>
<div className="text-error font-label text-[10px] font-bold">EURO / DIRHAM</div>
</div>
<div className="bg-surface-container-low p-8 hover:bg-surface-bright transition-colors group">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="font-headline font-black text-xl">GBP / AED</span>
<span className="text-[10px] font-label text-on-surface-variant">BRITISH POUND / DIRHAM</span>
</div>
<span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
</div>
<div className="font-headline font-bold text-2xl mb-2">151.42</div>
<div className="text-primary font-label text-[10px] font-bold">BRITISH POUND / DIRHAM</div>
</div>
<div className="bg-surface-container-low p-8 hover:bg-surface-bright transition-colors group">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="font-headline font-black text-xl">XAU / USD</span>
<span className="text-[10px] font-label text-on-surface-variant">GOLD / US DOLLAR</span>
</div>
<span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
</div>
<div className="font-headline font-bold text-2xl mb-2">2,024.50</div>
<div className="text-primary font-label text-[10px] font-bold">GOLD / US DOLLAR</div>
</div>
<div className="bg-surface-container-low p-8 hover:bg-surface-bright transition-colors group">
<div className="flex justify-between items-start mb-6">
<div className="flex flex-col">
<span className="font-headline font-black text-xl">XAU / USD</span>
<span className="text-[10px] font-label text-on-surface-variant">GOLD / US DOLLAR</span>
</div>
<span className="material-symbols-outlined text-primary" data-icon="trending_up">trending_up</span>
</div>
<div className="font-headline font-bold text-2xl mb-2">2,024.50</div>
<div className="text-primary font-label text-[10px] font-bold">GOLD / US DOLLAR</div>
</div>
</div>
</section>
<section className="py-24 px-6 lg:px-20 bg-surface-container-low relative overflow-hidden">
<div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
<img alt="Decorative" className="w-full h-full object-cover grayscale" src="/hero.png"/>
</div>
<div className="relative z-10 grid md:grid-cols-3 gap-8">
<div className="bg-surface p-10 border-t-4 border-primary group cursor-pointer hover:-translate-y-2 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="location_on">location_on</span>
<h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tight">Our Presence</h4>
<p className="text-on-surface-variant text-sm leading-relaxed mb-8">Our evolution is driven by the elite needs of our clients. Provide feedback to shape the future of Dubai Duty Free.</p>
<button className="font-label font-bold text-[10px] tracking-widest text-primary hover:opacity-80 transition-all uppercase">LOCATE NEAREST VAULT</button>
</div>
<div className="bg-surface p-10 border-t-4 border-primary group cursor-pointer hover:-translate-y-2 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="policy">policy</span>
<h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tight">Committed to Ethics</h4>
<p className="text-on-surface-variant text-sm leading-relaxed mb-8">Our evolution is driven by the elite needs of our clients. Provide feedback to shape the future of Dubai Duty Free.</p>
<button className="font-label font-bold text-[10px] tracking-widest text-primary hover:opacity-80 transition-all uppercase">GOVERNANCE PORTAL</button>
</div>
<div className="bg-surface p-10 border-t-4 border-primary group cursor-pointer hover:-translate-y-2 transition-transform">
<span className="material-symbols-outlined text-primary text-4xl mb-6" data-icon="insights">insights</span>
<h4 className="font-headline font-bold text-xl mb-4 uppercase tracking-tight">Share Your Experience</h4>
<p className="text-on-surface-variant text-sm leading-relaxed mb-8">Our evolution is driven by the elite needs of our clients. Provide feedback to shape the future of Dubai Duty Free.</p>
<button className="font-label font-bold text-[10px] tracking-widest text-primary hover:opacity-80 transition-all uppercase">START ASSESSMENT</button>
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
<footer className="bg-surface-container-lowest py-20 px-6 lg:px-20 border-t border-white/5">
<div className="grid md:grid-cols-4 gap-12 mb-20">
<div className="col-span-2">
<div className="flex items-center gap-4 mb-8">
<img alt="Dubai Duty Free Logo" className="size-8 object-contain" src="/dubaidutyfreelogo-dark.png"/>
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
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-white/5 font-label text-[10px] text-on-surface-variant font-bold tracking-widest">
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