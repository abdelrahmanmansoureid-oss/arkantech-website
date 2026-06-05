import React, { useState, useEffect, useRef } from 'react';
import { translations } from './locales/translations';
import logoImg from './assets/logo.png';

/* ================================================================
   LOGO IMAGE COMPONENT
================================================================ */
const LogoSVG = ({ className }) => (
  <img src={logoImg} className={className} alt="ArkanTech Logo" />
);

/* ================================================================
   ICONS
================================================================ */
const Icons = {
  Sound:    ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" /></svg>,
  Cctv:     ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" /></svg>,
  Network:  ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
  Wifi:     ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" /></svg>,
  Access:   ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" /></svg>,
  Alarm:    ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" /></svg>,
  Software: ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" /></svg>,
  WhatsApp: ({ cls }) => <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>,
  Phone:    ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 6.75z" /></svg>,
  Email:    ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>,
  Location: ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" /></svg>,
  Arrow:    ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>,
  Check:    ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>,
  Menu:     ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>,
  Close:    ({ cls }) => <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
  Star:     ({ cls }) => <svg className={cls} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>,
};

const iconMap = { sound: Icons.Sound, cctv: Icons.Cctv, network: Icons.Network, wifi: Icons.Wifi, access: Icons.Access, alarm: Icons.Alarm, software: Icons.Software };

const svcAccents = [
  { icon: 'from-sky-500 to-cyan-400',    text: 'text-sky-700',    border: 'border-sky-100',    bg: 'bg-sky-50'    },
  { icon: 'from-indigo-500 to-blue-400', text: 'text-indigo-700', border: 'border-indigo-100', bg: 'bg-indigo-50' },
  { icon: 'from-cyan-500 to-sky-400',    text: 'text-cyan-700',   border: 'border-cyan-100',   bg: 'bg-cyan-50'   },
  { icon: 'from-blue-600 to-sky-500',    text: 'text-blue-700',   border: 'border-blue-100',   bg: 'bg-blue-50'   },
  { icon: 'from-violet-500 to-indigo-400',text:'text-violet-700', border: 'border-violet-100', bg: 'bg-violet-50' },
  { icon: 'from-sky-600 to-blue-500',    text: 'text-sky-800',    border: 'border-sky-200',    bg: 'bg-sky-50'    },
  { icon: 'from-teal-500 to-cyan-400',   text: 'text-teal-700',   border: 'border-teal-100',   bg: 'bg-teal-50'   },
];

/* ================================================================
   HOOK: scroll reveal
================================================================ */
function useReveal(delay = 0) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setTimeout(() => setV(true), delay); obs.disconnect(); } }, { threshold: 0.12 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [delay]);
  return [ref, v];
}

/* ================================================================
   NAVBAR
================================================================ */
function Navbar({ t, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = id => { setOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); };

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled ? 'glass-light shadow-soft border-b border-sky-100/80' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <button onClick={() => go('home')} className="flex items-center gap-2.5 group">
            <LogoSVG className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" />
            <span className="text-xl font-black gradient-text-brand tracking-tight">ArkanTech</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-7">
            {['home','about','services','contact'].map(id => (
              <button key={id} onClick={() => go(id)} className="nav-link">{t.nav[id]}</button>
            ))}
          </div>

          {/* Right */}
          <div className="hidden md:flex items-center gap-3">
            <button onClick={() => setLang(l => l === 'ar' ? 'en' : 'ar')}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-bold hover:bg-sky-100 transition-all border border-sky-200">
              🌐 {t.nav.toggle}
            </button>
            <button onClick={() => go('contact')} className="btn-primary px-5 py-2.5 text-sm cta-pulse">
              {t.nav.cta}
            </button>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden gap-2">
            <button onClick={() => setLang(l => l === 'ar' ? 'en' : 'ar')}
              className="px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 text-sm font-bold border border-sky-200">
              {t.nav.toggle}
            </button>
            <button onClick={() => setOpen(!open)} className="p-2 rounded-xl hover:bg-sky-50 transition-colors">
              {open ? <Icons.Close cls="w-6 h-6 text-sky-700" /> : <Icons.Menu cls="w-6 h-6 text-sky-700" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass-light border-t border-sky-100 px-5 py-4 space-y-1">
          {['home','about','services','contact'].map(id => (
            <button key={id} onClick={() => go(id)}
              className="flex w-full text-start py-3 px-2 text-sky-800 font-medium border-b border-sky-50 last:border-0 hover:text-brand-blue transition-colors">
              {t.nav[id]}
            </button>
          ))}
          <button onClick={() => go('contact')} className="btn-primary w-full py-3 mt-2 text-center text-sm">
            {t.nav.cta}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ================================================================
   HERO
================================================================ */
function Hero({ t }) {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const ticker = [...(t.services?.items || []), ...(t.services?.items || [])];

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden" style={{background:'#EBF8FF'}}>
      {/* Sky blue mesh blobs */}
      <div className="blob w-[600px] h-[600px] -top-32 -right-32 rounded-full animate-blob" style={{background:'radial-gradient(circle, #BAE6FD 0%, transparent 70%)', opacity:0.5}} />
      <div className="blob w-[500px] h-[500px] top-1/2 -left-48 rounded-full animate-blob2" style={{background:'radial-gradient(circle, #CFFAFE 0%, transparent 70%)', opacity:0.45}} />
      <div className="blob w-[400px] h-[400px] -bottom-20 right-1/4 rounded-full animate-blob" style={{background:'radial-gradient(circle, #E0F2FE 0%, transparent 70%)', animationDelay:'3s', opacity:0.4}} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-28 pb-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div>
            <div className="hero-badge mb-6 w-fit animate-float">
              <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
              {t.lang === 'ar' ? 'الشريك التقني الأول في مصر' : "Egypt's Premier IT Partner"}
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.08] mb-6 tracking-tight">
              <span className="text-brand-navy">{t.hero.title1}</span>
              <br />
              <span className="text-brand-navy">{t.hero.title2} </span>
              <span className="gradient-text-brand">{t.hero.title3}</span>
            </h1>

            <p className="text-sky-700/80 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg">{t.hero.subtitle}</p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <button onClick={() => go('contact')} className="btn-primary flex items-center justify-center gap-2.5 px-7 py-4 text-base cta-pulse">
                <Icons.WhatsApp cls="w-5 h-5" />
                {t.hero.cta1}
                <Icons.Arrow cls={`w-4 h-4 ${t.dir === 'rtl' ? 'rotate-180' : ''} animate-bounce-x`} />
              </button>
              <button onClick={() => go('services')} className="btn-secondary flex items-center justify-center gap-2 px-7 py-4 text-base">
                {t.hero.cta2}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { val: t.hero.stat1val, label: t.hero.stat1, color: 'text-brand-blue' },
                { val: t.hero.stat2val, label: t.hero.stat2, color: 'text-indigo-500' },
              ].map((s, i) => (
                <div key={i} className="stat-badge">
                  <div className={`text-2xl font-black ${s.color}`}>{s.val}</div>
                  <div className="text-xs text-sky-600/70 mt-0.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT – floating visual */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px]">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-200 animate-spin-slow" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-sky-50 to-blue-50 flex items-center justify-center shadow-card border border-sky-100">
                <LogoSVG className="w-40 h-40 object-contain animate-float" />
              </div>
              {[
                { icon: Icons.Network, label: t.lang === 'ar' ? 'بنية الإنترنت' : 'Internet Infrastructure', top: '5%',  left: '50%', color: 'bg-cyan-500' },
                { icon: Icons.Cctv,   label: t.lang === 'ar' ? 'كاميرات' : 'CCTV',          top: '50%', left: '90%', color: 'bg-indigo-500' },
                { icon: Icons.Access, label: t.lang === 'ar' ? 'تحكم بالدخول' : 'Access',   top: '88%', left: '50%', color: 'bg-sky-600' },
                { icon: Icons.Sound,  label: t.lang === 'ar' ? 'أنظمة الصوت' : 'Audio',     top: '50%', left: '2%',  color: 'bg-blue-500' },
              ].map((c, i) => (
                <div key={i}
                  className="absolute flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-full shadow-card border border-sky-100 text-xs font-bold text-sky-800 whitespace-nowrap animate-float"
                  style={{ top: c.top, left: c.left, transform: 'translate(-50%,-50%)', animationDelay: `${i * 0.8}s` }}>
                  <span className={`w-2 h-2 rounded-full ${c.color}`} />
                  {c.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative z-10 w-full overflow-hidden py-4 border-y border-sky-200/60 mt-4" dir="ltr" style={{background:'rgba(224,242,254,0.6)', backdropFilter:'blur(8px)'}}>
        <div className={`flex gap-10 whitespace-nowrap ${t.dir === 'rtl' ? 'marquee-track-rtl' : 'marquee-track-ltr'}`} style={{width:'max-content'}}>
          {[...ticker,...ticker].map((s, i) => (
            <span key={i} dir={t.dir} className="inline-flex items-center gap-2.5 text-sky-600/70 font-medium text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 inline-block" />
              {s.title}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   ABOUT
================================================================ */
function About({ t }) {
  const [ref, v] = useReveal();
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="about" className="py-24 relative overflow-hidden" style={{background:'#F0F9FF'}}>
      <div className="blob w-[500px] h-[500px] -bottom-40 -right-40 rounded-full" style={{background:'radial-gradient(circle, #BAE6FD 0%, transparent 70%)', opacity:0.4}} />
      <div className="gradient-divider absolute top-0 inset-x-0" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left tiles */}
          <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
            <div className="col-span-2 rounded-3xl overflow-hidden relative bg-gradient-to-br from-sky-600 to-blue-700 p-7 text-white shadow-blue">
              <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white to-transparent" />
              <div className="text-5xl mb-3">🇪🇬</div>
              <div className="font-black text-xl mb-1">{t.lang === 'ar' ? 'مصر' : 'Egypt'}</div>
              <div className="text-sky-100 text-sm">{t.lang === 'ar' ? 'نخدم العملاء في كل مكان' : 'Serving clients everywhere'}</div>
            </div>
            {[t.about.feat1, t.about.feat2, t.about.feat3, t.about.feat4].map((f, i) => (
              <div key={i} className="bento-card p-5">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-3">
                  <Icons.Check cls="w-4 h-4 text-white" />
                </div>
                <p className="text-sky-900 font-semibold text-sm leading-snug">{f}</p>
              </div>
            ))}
          </div>

          {/* Right text */}
          <div className="order-1 lg:order-2">
            <div className="section-tag mb-6">{t.about.tag}</div>
            <h2 className="text-4xl md:text-5xl font-black mb-5 text-brand-navy leading-tight">
              {t.about.title1}<br />
              <span className="gradient-text-brand">{t.about.title2}</span>
            </h2>
            <p className="text-sky-700/80 text-lg leading-relaxed mb-4">{t.about.body1}</p>
            <p className="text-sky-700/80 text-lg leading-relaxed mb-8">{t.about.body2}</p>
            <button onClick={() => go('contact')} className="btn-whatsapp inline-flex items-center gap-3 px-7 py-4 text-base">
              <Icons.WhatsApp cls="w-6 h-6" />
              {t.about.cta}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   SERVICES
================================================================ */
function Services({ t }) {
  const [ref, v] = useReveal();
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="services" className="py-24 relative overflow-hidden" style={{background:'#E0F2FE'}}>
      <div className="blob w-[600px] h-[600px] top-0 left-1/2 -translate-x-1/2 rounded-full" style={{background:'radial-gradient(circle, #BAE6FD 0%, transparent 70%)', opacity:0.5}} />
      <div className="gradient-divider absolute top-0 inset-x-0" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-14">
          <div className="section-tag mb-5 mx-auto w-fit">{t.services.tag}</div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-navy mb-4 leading-tight">
            <span className="gradient-text-brand">{t.services.title1}</span>{' '}{t.services.title2}
          </h2>
          <p className="text-sky-700/75 text-lg max-w-lg mx-auto">{t.services.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.services.items.map((svc, i) => {
            const Ic  = iconMap[svc.icon];
            const acc = svcAccents[i % svcAccents.length];
            return (
              <div key={i} className={`bento-card p-6 ${acc.border} border`}>
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${acc.icon} flex items-center justify-center mb-5 shadow-soft`}>
                  <Ic cls="w-6 h-6 text-white" />
                </div>
                <h3 className={`font-bold text-lg mb-2 ${acc.text}`}>{svc.title}</h3>
                <p className="text-sky-700/70 text-sm leading-relaxed">{svc.desc}</p>
                <button onClick={() => go('contact')} className={`mt-4 inline-flex items-center gap-1 text-xs font-bold ${acc.text} hover:gap-2 transition-all duration-200`}>
                  {t.lang === 'ar' ? 'استفسر الآن' : 'Enquire Now'}
                  <Icons.Arrow cls={`w-3 h-3 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
                </button>
              </div>
            );
          })}

          {/* CTA card */}
          <div className="bento-card p-6 border-sky-200 border bg-gradient-to-br from-sky-50 to-blue-50 flex flex-col items-center justify-center text-center cursor-pointer"
               onClick={() => go('contact')}>
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-4 shadow-blue">
              <Icons.WhatsApp cls="w-7 h-7 text-white" />
            </div>
            <h3 className="font-black text-sky-700 text-lg mb-2">{t.services.cta}</h3>
            <p className="text-sky-500 text-sm">· {t.lang === 'ar' ? 'متاح الآن' : 'Available Now'} ·</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   CONTACT
================================================================ */
function Contact({ t }) {
  const [ref, v] = useReveal();
  const [form, setForm]     = useState({ name:'', phone:'', service:'', msg:'' });
  const [status, setStatus] = useState('idle');

  const change = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const submit = e => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.service || !form.msg) return;
    setStatus('sending');
    const waMsg = encodeURIComponent(`*${form.name}*\n📞 ${form.phone}\n🔧 ${form.service}\n\n${form.msg}`);
    setTimeout(() => {
      setStatus('success');
      window.open(`https://wa.me/201030754568?text=${waMsg}`, '_blank');
      setForm({ name:'', phone:'', service:'', msg:'' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 900);
  };

  const waMsg = encodeURIComponent(t.lang === 'ar' ? 'مرحباً، أود الاستفسار عن خدماتكم.' : 'Hello, I would like to inquire about your services.');

  return (
    <section id="contact" className="py-24 relative overflow-hidden" style={{background:'#EBF8FF'}}>
      <div className="blob w-[700px] h-[700px] -top-40 left-1/2 -translate-x-1/2 rounded-full" style={{background:'radial-gradient(circle, #BAE6FD 0%, transparent 70%)', opacity:0.5}} />
      <div className="blob w-[400px] h-[400px] bottom-0 -left-32 rounded-full" style={{background:'radial-gradient(circle, #CFFAFE 0%, transparent 70%)', opacity:0.35}} />
      <div className="gradient-divider absolute top-0 inset-x-0" />

      <div ref={ref} className={`relative z-10 max-w-7xl mx-auto px-5 sm:px-8 transition-all duration-700 ${v ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-14">
          <div className="section-tag mb-5 mx-auto w-fit">{t.contact.tag}</div>
          <h2 className="text-4xl md:text-5xl font-black mb-4 text-brand-navy leading-tight">
            {t.contact.title1}<br />
            <span className="gradient-text-blue">{t.contact.title2}</span>
          </h2>
          <p className="text-sky-700/75 text-lg max-w-lg mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Channels */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* WhatsApp hero */}
            <a href={`https://wa.me/201030754568?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
               className="btn-whatsapp group block p-7 rounded-3xl no-underline">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Icons.WhatsApp cls="w-9 h-9 text-white" />
                </div>
                <div>
                  <div className="text-white font-black text-xl leading-tight">{t.contact.waCta}</div>
                  <div className="text-green-100 text-sm mt-0.5">{t.contact.waNote}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-1">{[1,2,3,4,5].map(i => <Icons.Star key={i} cls="w-4 h-4 text-yellow-300" />)}</div>
              <div className="text-green-100 text-xs">{t.lang === 'ar' ? 'أفضل طريقة للتواصل السريع معنا' : 'The fastest way to reach us'}</div>
            </a>

            {/* Phone */}
            <a href="tel:+201030754568" className="contact-channel group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-blue group-hover:scale-105 transition-transform">
                <Icons.Phone cls="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sky-500 text-xs font-medium mb-0.5">{t.contact.phoneLbl}</div>
                <div className="text-sky-900 font-bold" dir="ltr">{t.contact.phone}</div>
              </div>
              <Icons.Arrow cls={`w-4 h-4 text-sky-300 ms-auto ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
            </a>

            {/* Email */}
            <a href="mailto:abdelrahman.mansoureid@gmail.com" className="contact-channel group">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-400 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Icons.Email cls="w-5 h-5 text-white" />
              </div>
              <div className="min-w-0">
                <div className="text-sky-500 text-xs font-medium mb-0.5">{t.contact.emailLbl}</div>
                <div className="text-sky-900 font-semibold text-sm truncate">{t.contact.email}</div>
              </div>
              <Icons.Arrow cls={`w-4 h-4 text-sky-300 ms-auto flex-shrink-0 ${t.dir === 'rtl' ? 'rotate-180' : ''}`} />
            </a>

            {/* Location */}
            <div className="contact-channel">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-sky-400 to-cyan-400 flex items-center justify-center flex-shrink-0 shadow-blue">
                <Icons.Location cls="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="text-sky-500 text-xs font-medium mb-0.5">{t.lang === 'ar' ? 'موقعنا' : 'Location'}</div>
                <div className="text-sky-900 font-bold">{t.contact.location}</div>
              </div>
            </div>

            {/* Fast response nudge */}
            <div className="rounded-2xl p-4 flex items-start gap-3 border border-sky-200 bg-sky-50">
              <span className="text-2xl">⚡</span>
              <div>
                <div className="text-sky-800 font-bold text-sm">{t.lang === 'ar' ? 'رد سريع مضمون!' : 'Fast Response Guaranteed!'}</div>
                <div className="text-sky-600 text-xs mt-0.5">{t.lang === 'ar' ? 'معظم الاستفسارات تُجاب خلال ساعات' : 'Most inquiries answered within hours'}</div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="card p-7 sm:p-9 border border-sky-100 rounded-3xl">
              <h3 className="text-brand-navy font-black text-2xl mb-6">{t.contact.formTitle}</h3>

              {status === 'success' && (
                <div className="mb-5 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-700 font-semibold text-center">{t.contact.fields.success}</div>
              )}

              <form onSubmit={submit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sky-700 text-sm font-semibold mb-1.5 block">{t.contact.fields.name}</label>
                    <input name="name" value={form.name} onChange={change} required className="form-input" placeholder={t.contact.fields.name} />
                  </div>
                  <div>
                    <label className="text-sky-700 text-sm font-semibold mb-1.5 block">{t.contact.fields.phone}</label>
                    <input name="phone" value={form.phone} onChange={change} required className="form-input" dir="ltr" placeholder="+20 1XX XXX XXXX" />
                  </div>
                </div>

                <div>
                  <label className="text-sky-700 text-sm font-semibold mb-1.5 block">{t.contact.fields.service}</label>
                  <select name="service" value={form.service} onChange={change} required className="form-input cursor-pointer">
                    {t.contact.fields.serviceOpts.map((o, i) => (
                      <option key={i} value={i === 0 ? '' : o} disabled={i === 0}>{o}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sky-700 text-sm font-semibold mb-1.5 block">{t.contact.fields.msg}</label>
                  <textarea name="msg" value={form.msg} onChange={change} required rows={5} className="form-input resize-none" placeholder={t.contact.fields.msg} />
                </div>

                <button type="submit" disabled={status === 'sending'}
                  className="btn-primary w-full py-4 text-lg flex items-center justify-center gap-3 disabled:opacity-60 rounded-2xl cta-pulse">
                  {status === 'sending'
                    ? <><span className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin" />{t.contact.fields.sending}</>
                    : <><Icons.WhatsApp cls="w-5 h-5" />{t.contact.fields.submit}</>}
                </button>
                <p className="text-center text-sky-400 text-xs">
                  {t.lang === 'ar' ? '✉️ سيُوجَّه طلبك مباشرةً عبر واتساب للرد الفوري' : '✉️ Your request will be sent directly via WhatsApp'}
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================================================================
   FOOTER
================================================================ */
function Footer({ t }) {
  const go = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const waMsg = encodeURIComponent(t.lang === 'ar' ? 'مرحباً، أود الاستفسار عن خدماتكم.' : 'Hello, I would like to inquire about your services.');

  return (
    <footer className="bg-brand-navy text-white pt-16 pb-8 relative overflow-hidden">
      <div className="blob w-96 h-96 -top-20 -right-20 rounded-full" style={{background:'radial-gradient(circle, rgba(2,132,199,0.15) 0%, transparent 70%)'}} />
      <div className="blob w-72 h-72 bottom-0 -left-16 rounded-full" style={{background:'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)'}} />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-sky-400/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <LogoSVG className="h-10 w-auto" />
              <span className="text-xl font-black gradient-text-brand">ArkanTech</span>
            </div>
            <p className="text-sky-300/60 text-sm leading-relaxed mb-5">{t.footer.tagline}</p>
            <div className="flex gap-2">
              {[
                { href:`https://wa.me/201030754568?text=${waMsg}`, Icon:Icons.WhatsApp, color:'hover:bg-brand-whatsapp hover:border-brand-whatsapp text-brand-whatsapp', tgt:'_blank' },
                { href:'tel:+201030754568',                        Icon:Icons.Phone,    color:'hover:bg-sky-600 hover:border-sky-600 text-sky-400' },
                { href:'mailto:abdelrahman.mansoureid@gmail.com',  Icon:Icons.Email,    color:'hover:bg-indigo-500 hover:border-indigo-500 text-indigo-400' },
              ].map((s, i) => (
                <a key={i} href={s.href} target={s.tgt} rel="noopener noreferrer"
                   className={`w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center transition-all duration-300 hover:text-white ${s.color}`}>
                  <s.Icon cls="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide uppercase">{t.footer.links}</h4>
            <ul className="space-y-2">
              {['home','about','services','contact'].map(id => (
                <li key={id}><button onClick={() => go(id)} className="text-sky-300/60 hover:text-white text-sm transition-colors">{t.nav[id]}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide uppercase">{t.footer.services}</h4>
            <ul className="space-y-2">
              {t.services.items.slice(0,5).map((s, i) => (
                <li key={i}><button onClick={() => go('services')} className="text-sky-300/60 hover:text-white text-sm transition-colors text-start">{s.title}</button></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm tracking-wide uppercase">{t.footer.contact}</h4>
            <ul className="space-y-3">
              <li><a href={`https://wa.me/201030754568?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-brand-whatsapp font-semibold text-sm hover:text-green-300 transition-colors"><Icons.WhatsApp cls="w-4 h-4" /> WhatsApp</a></li>
              <li><a href="tel:+201030754568" className="inline-flex items-center gap-2 text-sky-300/60 text-sm hover:text-white transition-colors" dir="ltr"><Icons.Phone cls="w-4 h-4 text-sky-400" /> +20 103 075 4568</a></li>
              <li><a href="mailto:abdelrahman.mansoureid@gmail.com" className="inline-flex items-center gap-2 text-sky-300/60 text-sm hover:text-white transition-colors"><Icons.Email cls="w-4 h-4 text-indigo-400" /><span className="truncate max-w-[180px]">abdelrahman.mansoureid@gmail.com</span></a></li>
              <li className="inline-flex items-center gap-2 text-sky-400 text-sm font-semibold"><Icons.Location cls="w-4 h-4" /> 🇪🇬 Egypt</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sky-300/40 text-sm">{t.footer.rights}</p>
          <p className="text-sky-300/40 text-sm">🇪🇬 Egypt</p>
        </div>
      </div>
    </footer>
  );
}

/* ================================================================
   FLOATING WA FAB
================================================================ */
function WaFab({ lang }) {
  const [hov, setHov] = useState(false);
  const waMsg = encodeURIComponent(lang === 'ar' ? 'مرحباً، أود الاستفسار عن خدماتكم.' : 'Hello, I would like to inquire about your services.');

  return (
    <a href={`https://wa.me/201030754568?text=${waMsg}`} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
       className="fixed bottom-6 z-50 flex items-center gap-3 no-underline"
       style={{ [lang === 'ar' ? 'left' : 'right']: '24px' }}>
      {hov && (
        <div className="px-4 py-2 rounded-xl bg-white text-sky-800 text-sm font-semibold shadow-card border border-sky-100 whitespace-nowrap">
          {lang === 'ar' ? 'تحدث معنا الآن' : 'Chat with Us'}
        </div>
      )}
      <div className="w-16 h-16 rounded-full wa-fab flex items-center justify-center cursor-pointer"
           style={{ background: 'linear-gradient(135deg, #128C7E, #25D366)' }}>
        <Icons.WhatsApp cls="w-8 h-8 text-white" />
      </div>
    </a>
  );
}

/* ================================================================
   ROOT APP
================================================================ */
export default function App() {
  const [lang, setLang] = useState('ar');
  const t = translations[lang];

  useEffect(() => {
    document.documentElement.lang = t.lang;
    document.documentElement.dir  = t.dir;
    document.body.className = `lang-${lang}`;
    document.title = 'ArkanTech | آركان تك';
  }, [lang, t]);

  return (
    <div className="min-h-screen" style={{background:'#EBF8FF'}}>
      <Navbar   t={t} lang={lang} setLang={setLang} />
      <Hero     t={t} />
      <About    t={t} />
      <Services t={t} />
      <Contact  t={t} />
      <Footer   t={t} />
      <WaFab    lang={lang} />
    </div>
  );
}
