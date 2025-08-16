'use client'

import React, { useEffect, useState } from "react";

/* === asset paths (respect GitHub Pages base path via NEXT_PUBLIC_BASE_PATH) === */
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const LOGO_SRC = `${BASE}/assets/img/logo-white.jpg`;
const LOGO_TRANSPARENT = `${BASE}/assets/img/logo-transparent.jpeg`;

/**
 * Networkof.One – XRPL Grant One-Pager
 * UI/UX upgrade: tasteful animations + micro-interactions
 * - Single file, React + Tailwind only
 * - Keeps content/structure identical, enhances look & feel
 */

export default function NetworkOfOneSite() {
  const [joinSent, setJoinSent] = useState(false);
  const [contactSent, setContactSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imageModalOpen, setImageModalOpen] = useState(false);



  // ===== Styles & tokens =====
  const inputClass =
    "w-full rounded-xl ring-1 ring-[var(--card-border)] px-4 py-3 text-base bg-[var(--card-dark)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] min-h-[44px]";

  useEffect(() => {
    // Sticky header shadow on scroll
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // Reveal-on-scroll for elements with [data-reveal]
    const els = Array.from(document.querySelectorAll('[data-reveal]'));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) e.target.classList.add("is-visible");
      },
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full text-[var(--text-primary)]" style={{ background: 'var(--bg-gradient)', paddingBottom: 'calc(env(safe-area-inset-bottom) + 88px)' }}>
      {/* Design tokens + animation keyframes */}
      <style>{`
        :root{
          --primary:#6366f1;     /* primary brand purple */
          --primary-dark:#4f46e5; /* darker purple for hover */
          --accent:#8b5cf6;      /* purple accent */
          --secondary:#06b6d4;   /* cyan accent */
          --success:#10b981;     /* green for success */
          --warning:#f59e0b;     /* amber for warnings */
          --error:#ef4444;       /* red for errors */

          --bg-dark:#0a0a0f;     /* dark background */
          --bg-gradient: linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #16213e 100%);
          --card-dark:#1a1a2e;   /* dark card background */
          --card-border:#2a2a3e; /* card border */
          --text-primary:#ffffff; /* primary text (white) */
          --text-secondary:#a1a1aa; /* secondary text (gray) */
          --text-muted:#71717a;   /* muted text */

          --radius-xl:24px;
          --radius-lg:16px;
          --radius-md:12px;
          --shadow-dark:0 10px 25px rgba(0,0,0,0.3);
          --shadow-glow:0 0 30px rgba(99,102,241,0.2);
        }
        html{scroll-behavior:smooth; -webkit-text-size-adjust: 100%;}
        body{-webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale;}
        
        /* Mobile-optimized buttons */
        .btn{
          position:relative; 
          display:inline-flex; 
          align-items:center; 
          justify-content:center; 
          gap:.5rem; 
          padding:.75rem 1.25rem; 
          border-radius:12px; 
          font-weight:600; 
          min-height:44px; /* iOS touch target minimum */
          font-size:16px; /* Prevents zoom on iOS */
          transition:transform .15s ease, box-shadow .2s ease, filter .2s ease;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
        }
        .btn:active{transform:translateY(1px) scale(.98)}
        .btn-primary{background:var(--primary); color:var(--text-primary); box-shadow:var(--shadow-glow)}
        .btn-primary:hover{background:var(--primary-dark)}
        .btn-primary:active{background:var(--primary-dark); transform:translateY(1px) scale(.98)}
        .btn-outline{border:1px solid var(--primary); color:var(--primary); background:transparent}
        .btn-outline:hover{background:var(--primary); color:var(--text-primary)}
        .btn-outline:active{background:var(--primary-dark); color:var(--text-primary)}
        .btn-dark{background:var(--card-dark); color:var(--text-primary); border:1px solid var(--card-border)}
        .btn-dark:hover{background:var(--card-border)}
        .btn-dark:active{background:var(--card-border); opacity:.9}
        .btn-ghost{border:1px solid var(--card-border); background:var(--card-dark); color:var(--text-secondary)}
        .btn-ghost:hover{background:var(--card-border); color:var(--text-primary)}
        .btn-ghost:active{background:var(--card-border); opacity:.9}
        .btn .spark{position:absolute; inset:0; background:radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,.25), transparent 40%); opacity:0; transition:opacity .25s ease; border-radius:inherit}
        .btn:hover .spark{opacity:1}

        /* Compact header CTA for small screens */
        .header-cta{
          padding: .4rem .6rem;
          border-radius: 10px;
          font-size: 14px;
          line-height: 1;
          height: 32px;
        }
        
        /* Mobile-optimized inputs */
        input, textarea, select {
          font-size: 16px; /* Prevents zoom on iOS */
          -webkit-appearance: none;
          border-radius: 12px;
        }
        
        /* Reveal animation */
        [data-reveal]{opacity:0; transform:translateY(12px); transition:opacity .6s cubic-bezier(.22,.61,.36,1), transform .6s cubic-bezier(.22,.61,.36,1)}
        [data-reveal].is-visible{opacity:1; transform:none}
        
        /* Floating tile */
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        .float{animation:float 6s ease-in-out infinite}
        
        /* Mobile navigation improvements */
        .mobile-menu-item {
          min-height: 48px;
          display: flex;
          align-items: center;
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Mobile menu fixes */
        .mobile-menu {
          z-index: 70; /* Higher than intro overlay */
          animation: slideDown 0.2s ease-out;
        }
        
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        /* Header improvements */
        .header-content {
          position: relative;
          z-index: 51; /* Higher than intro overlay */
        }
        
        /* Image modal styles */
        .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 80;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
        }
        
        .image-modal-content {
          max-width: 95vw;
          max-height: 95vh;
          border-radius: 12px;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
        }

        /* Floating CTA pop animation */
        @keyframes popIn { from { opacity: 0; transform: scale(.96); } to { opacity: 1; transform: scale(1); } }
        .animate-pop { animation: popIn .2s ease-out both; }
        
        /* Video optimizations for mobile */
        video {
          object-fit: cover;
          -webkit-playsinline: true;
          playsinline: true;
        }
        
        /* Touch-friendly scrolling */
        * {
          -webkit-overflow-scrolling: touch;
        }
        
        /* Reduce motion */
        @media (prefers-reduced-motion: reduce){
          .float{animation:none}
          [data-reveal]{opacity:1; transform:none}
          .btn{transition:none}
        }
        

        
        /* Mobile-specific styles */
        @media (max-width: 640px) {
          .btn {
            padding: .875rem 1.5rem;
            font-size: 16px;
            width: 100%;
            max-width: 300px;
          }
          
          h1 {
            font-size: 2rem !important;
            line-height: 1.2 !important;
          }
          
          h2 {
            font-size: 1.75rem !important;
            line-height: 1.3 !important;
          }
          
          .hero-video {
            height: 200px !important;
          }
          
          .intro-video {
            min-height: 250px;
            max-height: 65vh;
            width: 95vw;
            max-width: 95vw;
          }
          
          .mobile-padding {
            padding-left: 1rem !important;
            padding-right: 1rem !important;
          }
          
          .mobile-text-center {
            text-align: center !important;
          }
          
          .mobile-gap-4 {
            gap: 1rem !important;
          }
          
          /* Mobile header fixes */
          .mobile-header { padding: 0.5rem 0.75rem !important; }
          
          .mobile-logo {
            font-size: 1.1rem !important;
            max-width: 60% !important;
          }
          
          .mobile-cta-group {
            gap: 0.5rem !important;
          }
          
          .mobile-menu-button { flex-shrink: 0 !important; width: 36px !important; height: 36px !important; }
        }
        
        /* Tablet styles */
        @media (min-width: 641px) and (max-width: 1024px) {
          .btn {
            padding: .75rem 1.25rem;
          }
        }
      `}</style>



      {/* Sticky nav */}
      <header className={`sticky top-0 z-50 border-b border-[var(--card-border)] bg-[var(--card-dark)]/80 backdrop-blur transition-shadow header-content ${
        scrolled ? "shadow-[var(--shadow-dark)]" : "shadow-none"
      }`}>
        <div className="mx-auto max-w-7xl mobile-header px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl flex items-center gap-2 mobile-logo text-[var(--text-primary)]">
            <img src={LOGO_SRC} alt="Networkof.One" className="h-8 w-auto rounded-md flex-shrink-0" />
            <span className="truncate">Networkof.One</span>
          </a>

          {/* Desktop nav with CTA */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#how">How it works</NavLink>
            <NavLink href="#tech">Tech</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#market">Market</NavLink>
            <NavLink href="#demo">POC Demo</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="#press">Press</NavLink>
            <a href="#join" className="btn btn-primary header-cta ml-4">
              <span className="spark" aria-hidden></span>
              Join the network
            </a>
          </nav>

          {/* Mobile menu button only */}
          <div className="flex items-center mobile-cta-group gap-3">
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex mobile-menu-button h-10 w-10 items-center justify-center rounded-lg border border-[var(--card-border)] bg-[var(--card-dark)] text-[var(--text-primary)]"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-[2.5] stroke-current">
                {menuOpen ? (
                  <path d="M18 6L6 18M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu - Touch optimized */}
        {menuOpen && (
          <nav className="md:hidden border-t border-[var(--card-border)] bg-[var(--card-dark)] mobile-menu">
            <div className="mx-auto max-w-7xl px-4 py-3 grid gap-1 text-base">
              {[
                ["#about", "About"],
                ["#how", "How it works"],
                ["#tech", "Tech"],
                ["#roadmap", "Roadmap"],
                ["#market", "Market"],
                ["#demo", "POC Demo"],
                ["#contact", "Contact"],
                ["#press", "Press"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="mobile-menu-item rounded-lg px-4 py-3 text-[var(--text-secondary)] hover:bg-[var(--card-border)] hover:text-[var(--text-primary)] active:bg-[var(--card-border)] transition-colors"
                >
                  {label}
                </a>
              ))}
              <div className="pt-3 border-t border-[var(--card-border)] mt-2">
                <a
                  href="#join"
                  onClick={() => setMenuOpen(false)}
                  className="btn btn-primary w-full"
                >
                  Join the network
                </a>
              </div>
            </div>
          </nav>
        )}
      </header>

      {/* Mobile floating CTA removed per request */}

      {/* Hero - Mobile optimized */}
      <section id="home" className="py-12 sm:py-20">
        <div className="mx-auto max-w-7xl mobile-padding px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div data-reveal className="mobile-text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-[var(--text-primary)]">
              AI powered scheduling and XRPL payments
            </h1>
            <p className="mt-4 text-[var(--text-secondary)] text-base sm:text-lg leading-relaxed">
              One platform for the three pillars of organized activity: scheduling, payments, communication. Starting in
              sports then expanding to every sector.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row flex-wrap gap-3 items-center justify-center lg:justify-start mobile-gap-4">
              <a href="#demo" className="btn btn-primary w-full sm:w-auto">
                <span className="spark" aria-hidden></span>
                Watch demo
              </a>
              <a href="#roadmap" className="btn btn-ghost w-full sm:w-auto">View roadmap</a>
            </div>

            <dl className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-reveal>
              <Stat label="Fee savings" value="50 to 70 percent" />
              <Stat label="Admin time saved" value="35 percent" />
              <Stat label="Pilot tx volume" value="> 10k in 90 days" />
            </dl>
          </div>

          {/* Accent device tile with video - Mobile optimized */}
          <div className="relative order-first lg:order-last" data-reveal>
            <div className="aspect-video w-full rounded-[var(--radius-xl)] bg-[var(--primary)] ring-1 ring-[var(--card-border)] shadow-[var(--shadow-glow)] p-2 float hero-video">
              <video
                src={`${BASE}/assets/gif.mp4`}
                autoPlay
                muted
                playsInline
                loop
                className="h-full w-full rounded-[calc(var(--radius-xl)-8px)] object-cover"
              />
            </div>
            {/* Floating pills - Mobile responsive */}
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 text-center">
              <Pill>3 to 4s settlement</Pill>
              <Pill>~0.000015 XRP fee</Pill>
              <Pill>XRPL Hooks and Channels</Pill>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section
        id="about"
        title="About Networkof.One"
        subtitle="Give everything with love and respect - our work is tech with purpose"
      >
        <div className="prose prose-slate max-w-none" data-reveal>
          <p>
            Networkof.One unifies scheduling, payments, and communication in a single mobile first experience. We launch
            in the Oregon sports market with 150 to 175 officials, then expand West Coast, USA, and globally.
          </p>
          <p>
            The platform is backward compatible so organizations can migrate from legacy tools in minutes. This build is
            more than a POC and ready for real world pilots.
          </p>

          <div className="not-prose grid sm:grid-cols-2 gap-6 mt-8" data-reveal>
            <FounderCard name="Emery Frazier" role="Founder - Sports official - Community leader" />
            <FounderCard name="Muhammad Saad Khalil" role="Lead XRPL developer - Systems architect" />
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section id="how" title="How it works" subtitle="Simple flow for schedulers, referees, and admins">
        <ol className="grid md:grid-cols-3 gap-6 list-decimal pl-5" data-reveal>
          <Step title="Sign up" text="Create an account as scheduler, referee, or organization." />
          <Step title="Schedule" text="AI assisted game creation and assignment." />
          <Step title="Accept" text="Referees accept and confirm games in app." />
          <Step title="Check in" text="GPS check in at venue to verify arrival." />
          <Step title="Payout" text="XRPL triggered payout flow - testnet or mock for pilots." />
          <Step title="Track" text="Real time status, notifications, and reports." />
        </ol>
      </Section>

      {/* Technical overview */}
      <Section id="tech" title="Technical overview" subtitle="Built for speed, cost, and scale on XRPL">
        <div className="grid lg:grid-cols-3 gap-6" data-reveal>
          <Card
            title="XRPL integration"
            items={[
              "Payment Channels for instant micro payouts",
              "Hooks to automate referral residuals",
              "Multi currency support for cross border",
              "WebSocket and JSON RPC for realtime",
            ]}
          />
          <Card
            title="Security"
            items={[
              "Multi sig wallets",
              "MFA and encrypted keys",
              "Tangem support",
              "Offline fallbacks",
            ]}
          />
          <Card
            title="Architecture"
            items={[
              "Modular services and domain use cases",
              "Realtime updates and analytics",
              "High throughput and low fee design",
              "Portable to other verticals",
            ]}
          />
        </div>

        <div className="mt-8 rounded-[var(--radius-xl)] bg-[var(--card-dark)] ring-1 ring-[var(--card-border)] p-4 shadow-[var(--shadow-dark)]" data-reveal>
          {/* System diagram image */}
          <div 
            className="aspect-[16/9] w-full rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity group relative"
            onClick={() => setImageModalOpen(true)}
          >
            <img 
              src={`${BASE}/assets/systemdiagram.png`} 
              alt="Network of One System Architecture Diagram" 
              className="w-full h-full object-contain bg-[var(--card-dark)] group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 backdrop-blur-sm rounded-full p-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-slate-700 stroke-2">
                  <path d="M15 3h6v6M10 14 21 3M21 14v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h7"/>
                </svg>
              </div>
            </div>
          </div>
          <p className="text-center text-sm text-slate-600 mt-3">
            Click to view full system architecture diagram
          </p>
        </div>
      </Section>

      {/* Roadmap */}
      <Section id="roadmap" title="Roadmap and milestones" subtitle="Twelve month path from pilot to scale">
        <div className="grid lg:grid-cols-4 gap-6" data-reveal>
          <RoadmapCard
            phase="Months 1 to 2"
            bullets={["Finalize MVP and XRPL hooks", "Pilot contracts and import tools", "QA and field testing"]}
          />
          <RoadmapCard
            phase="Months 3 to 4"
            bullets={["Oregon pilot - 150 to 175 officials", "~400 games in 60 days", "Publish metrics and learnings"]}
          />
          <RoadmapCard
            phase="Months 5 to 6"
            bullets={["West Coast preparation", "Sport templates and migration", "Summit for adoption"]}
          />
          <RoadmapCard
            phase="Months 7 to 12"
            bullets={["Scale to 2 to 4 states", "Education and community pilots", "XRPL partners and open tools"]}
          />
        </div>
      </Section>

      {/* Market */}
      <Section id="market" title="Market and sustainability" subtitle="Real adoption and real value at low cost">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="prose prose-slate max-w-none" data-reveal>
            <h4>Sports first</h4>
            <p>
              Oregon market size about 4M. Target 3 to 12 percent share in year one. Expand to West Coast then USA then
              global.
            </p>
            <ul>
              <li>Oregon revenue target: 60k to 240k</li>
              <li>West Coast target: 600k to 2.4M</li>
              <li>USA target: 3M to 12M</li>
              <li>Global sports target: 30M to 100M</li>
            </ul>
            <h4>Monetization</h4>
            <ul>
              <li>Transparent platform fee per transaction</li>
              <li>Subscription plans for schools and leagues</li>
              <li>Referral residuals for ambassadors</li>
              <li>Analytics and premium scheduling add ons</li>
            </ul>
          </div>

          <div className="rounded-[var(--radius-xl)] bg-white ring-1 ring-slate-200 p-4 shadow-[var(--shadow-1)]" data-reveal>
            {/* Chart placeholder */}
            <div className="aspect-[16/10] w-full rounded-lg bg-slate-100 grid place-items-center text-slate-500">
              Market graphic placeholder
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
              <Stat label="Tx speed" value="3 to 4 seconds" />
              <Stat label="Avg fee" value="~0.000015 XRP" />
              <Stat label="Admin time" value="-35 percent" />
              <Stat label="Fee savings" value="50 to 70 percent" />
            </dl>
          </div>
        </div>
      </Section>

      {/* Proof of Concept Demo - Mobile optimized */}
      <Section id="demo" title="Proof of concept - MVP demo" subtitle="See the system in action - video and screenshots">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8" data-reveal>
          <div className="aspect-video w-full overflow-hidden rounded-[var(--radius-xl)] ring-1 ring-[var(--card-border)] shadow-[var(--shadow-dark)]">
            {/* Use the gif video for demo section */}
            <video
              src={`${BASE}/assets/gif.mp4`}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/7] rounded-xl bg-white ring-1 ring-slate-200 shadow-[var(--shadow-1)] grid place-items-center text-slate-500 hover:-translate-y-1 hover:shadow-[var(--shadow-2)] transition text-xs sm:text-sm"
              >
                Screenshot {i + 1}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-sm" data-reveal>
          <p>Need test access for reviewers - provide sandbox credentials and APK or TestFlight links here.</p>
          <ul className="list-disc pl-5 mt-2">
            <li>
              Download APK: <a className="text-[var(--deep)] underline hover:opacity-80" href="#">link</a>
            </li>
            <li>
              iOS TestFlight: <a className="text-[var(--deep)] underline hover:opacity-80" href="#">link</a>
            </li>
            <li>
              Docs and code: <a className="text-[var(--deep)] underline hover:opacity-80" href="#">link</a>
            </li>
          </ul>
        </div>
      </Section>

      {/* Join */}
      <Section id="join" title="Join the network" subtitle="Officials, schools, developers, partners - help us build and scale">
        {!joinSent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setJoinSent(true);
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl" data-reveal
          >
            <label className="sr-only" htmlFor="join-name">Full name</label>
            <input id="join-name" className={inputClass} required placeholder="Full name" />

            <label className="sr-only" htmlFor="join-email">Email</label>
            <input id="join-email" className={inputClass} required type="email" placeholder="Email" />

            <label className="sr-only" htmlFor="join-role">Role</label>
            <select id="join-role" className={inputClass} defaultValue="" required>
              <option value="" disabled>Role - select one</option>
              <option>Referee or official</option>
              <option>Scheduler or school</option>
              <option>Developer</option>
              <option>Partner or sponsor</option>
              <option>Other</option>
            </select>

            <label className="sr-only" htmlFor="join-org">Organization</label>
            <input id="join-org" className={inputClass} placeholder="Organization - optional" />

            <label className="sr-only" htmlFor="join-msg">Message</label>
            <textarea id="join-msg" className={`${inputClass} md:col-span-2 min-h-[120px]`} placeholder="Tell us how you would like to be involved" />

            <div className="md:col-span-2 flex items-start gap-2 text-sm text-[var(--ink-2)]">
              <input id="privacy" type="checkbox" required className="mt-1 accent-[var(--deep)]" />
              <label htmlFor="privacy">
                I understand my information will be kept confidential and used only for Networkof.One participation and updates.
              </label>
            </div>
            <div className="md:col-span-2">
              <button className="btn btn-primary w-full sm:w-auto">
                <span className="spark" aria-hidden></span>
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div className="rounded-[var(--radius-xl)] bg-green-50 ring-1 ring-green-200 p-6 max-w-2xl shadow-[var(--shadow-1)]" data-reveal>
            <p className="text-green-800 font-medium">You are in</p>
            <p className="text-green-700 mt-1 text-sm">
              Thanks for joining Networkof.One. We will follow up with next steps and early access updates. Check your inbox for a welcome email.
            </p>
          </div>
        )}
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact us" subtitle="Questions and partnerships - we would love to hear from you">
        {!contactSent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setContactSent(true);
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl" data-reveal
          >
            <label className="sr-only" htmlFor="c-name">Full name</label>
            <input id="c-name" className={inputClass} required placeholder="Full name" />

            <label className="sr-only" htmlFor="c-email">Email</label>
            <input id="c-email" className={inputClass} required type="email" placeholder="Email" />

            <label className="sr-only" htmlFor="c-subj">Subject</label>
            <input id="c-subj" className={`${inputClass} md:col-span-2`} required placeholder="Subject" />

            <label className="sr-only" htmlFor="c-msg">Your message</label>
            <textarea id="c-msg" className={`${inputClass} md:col-span-2 min-h-[140px]`} required placeholder="Your message" />

            <div className="md:col-span-2">
              <button className="btn btn-dark w-full sm:w-auto">Send message</button>
            </div>
          </form>
        ) : (
          <div className="rounded-[var(--radius-xl)] bg-blue-50 ring-1 ring-blue-200 p-6 max-w-2xl shadow-[var(--shadow-1)]" data-reveal>
            <p className="text-blue-800 font-medium">Message received</p>
            <p className="text-blue-700 mt-1 text-sm">We will get back to you shortly.</p>
          </div>
        )}
        <div className="mt-8 text-sm text-[var(--ink-2)]" data-reveal>
          <p>
            Email: <a className="underline text-[var(--deep)]" href="mailto:contact@networkof.one">contact@networkof.one</a>
          </p>
          <p className="mt-1">Location: Oregon, USA</p>
        </div>
      </Section>

      {/* Press */}
      <Section id="press" title="Grant and press" subtitle="Review materials and media assets">
        <div className="grid md:grid-cols-2 gap-6" data-reveal>
          <div className="rounded-[var(--radius-xl)] bg-white ring-1 ring-slate-200 p-5 shadow-[var(--shadow-1)]">
            <h4 className="font-medium">Reviewer kit</h4>
            <ul className="mt-3 list-disc pl-5 text-sm">
              <li><a className="underline" href="#">Executive summary PDF</a></li>
              <li><a className="underline" href="#">Pitch deck PDF</a></li>
              <li><a className="underline" href="#">System diagram</a></li>
              <li><a className="underline" href="#">Demo video</a></li>
              <li><a className="underline" href="#">Code and docs</a></li>
            </ul>
          </div>
          <div className="rounded-[var(--radius-xl)] bg-white ring-1 ring-slate-200 p-5 shadow-[var(--shadow-1)]">
            <h4 className="font-medium">Media kit</h4>
            <ul className="mt-3 list-disc pl-5 text-sm">
              <li>Logos and brand marks</li>
              <li>App screenshots</li>
              <li>Founder bios and photos</li>
              <li>Press release - XRPL grant submission</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="mt-20 border-t border-[var(--card-border)] bg-[var(--card-dark)]/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-[var(--text-secondary)] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src={LOGO_SRC} alt="Networkof.One" className="h-6 w-auto rounded" />
            <span>© {new Date().getFullYear()} Networkof.One. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">Terms</a>
            <a href="#" className="hover:text-[var(--text-primary)] transition-colors">XRPL community</a>
          </div>
        </div>
      </footer>
      
      {/* Image Modal */}
      {imageModalOpen && (
        <div 
          className="image-modal"
          onClick={() => setImageModalOpen(false)}
        >
          <div className="relative">
            <img 
              src={`${BASE}/assets/systemdiagram.png`} 
              alt="Network of One System Architecture Diagram - Full View" 
              className="image-modal-content max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              onClick={() => setImageModalOpen(false)}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="stroke-current stroke-2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- UI subcomponents ---------- */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      className="relative px-1 py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--primary)] hover:after:w-full after:transition-[width] after:duration-200"
      href={href}
    >
      {children}
    </a>
  );
}

function Section(props: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  const { id, title, subtitle, children } = props;
  return (
    <section id={id} className="scroll-mt-20 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl mobile-padding px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mobile-text-center sm:text-left" data-reveal>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">{title}</h2>
          {subtitle ? <p className="mt-2 text-[var(--text-secondary)] text-base sm:text-lg">{subtitle}</p> : null}
        </div>
        <div className="mt-6 sm:mt-8">{children}</div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-[var(--radius-xl)] bg-[var(--card-dark)] ring-1 ring-[var(--card-border)] p-4 text-center shadow-[var(--shadow-dark)]" data-reveal>
      <div className="text-lg font-semibold text-[var(--text-primary)]">{value}</div>
      <div className="text-xs uppercase tracking-wide text-[var(--text-muted)] mt-1">{label}</div>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-[var(--card-dark)] ring-1 ring-[var(--card-border)] px-3 py-1 text-xs text-[var(--text-secondary)] shadow-[var(--shadow-dark)]" data-reveal>
      {children}
    </span>
  );
}

function Step({ title, text }: { title: string; text: string }) {
  return (
    <li className="rounded-[var(--radius-xl)] ring-1 ring-[var(--card-border)] p-4 bg-[var(--card-dark)] shadow-[var(--shadow-dark)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-glow)] transition" data-reveal>
      <div className="font-medium text-[var(--text-primary)]">{title}</div>
      <div className="text-sm text-[var(--text-secondary)] mt-1">{text}</div>
    </li>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[var(--radius-xl)] ring-1 ring-[var(--card-border)] p-5 bg-[var(--card-dark)] shadow-[var(--shadow-dark)] hover:shadow-[var(--shadow-glow)] hover:-translate-y-[2px] transition" data-reveal>
      <h3 className="font-medium mb-3 text-[var(--text-primary)]">{title}</h3>
      <ul className="space-y-2 text-sm text-[var(--text-secondary)] list-disc pl-5">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function RoadmapCard({ phase, bullets }: { phase: string; bullets: string[] }) {
  return (
    <div className="rounded-[var(--radius-xl)] ring-1 ring-[var(--card-border)] p-5 bg-[var(--card-dark)] shadow-[var(--shadow-dark)]" data-reveal>
      <div className="text-xs uppercase tracking-wide text-[var(--text-muted)]">{phase}</div>
      <ul className="mt-3 space-y-2 text-sm list-disc pl-5 text-[var(--text-secondary)]">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function FounderCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="rounded-[var(--radius-xl)] ring-1 ring-[var(--card-border)] p-5 bg-[var(--card-dark)] flex items-center gap-4 shadow-[var(--shadow-dark)] hover:shadow-[var(--shadow-glow)] transition" data-reveal>
      <div className="h-12 w-12 rounded-full bg-[var(--primary)] flex items-center justify-center text-[var(--text-primary)] text-sm font-medium">
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div>
        <div className="font-medium text-[var(--text-primary)]">{name}</div>
        <div className="text-sm text-[var(--text-secondary)]">{role}</div>
      </div>
    </div>
  );
}