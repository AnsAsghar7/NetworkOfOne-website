import React, { useEffect, useState } from "react";

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

  // ===== Styles & tokens =====
  const inputClass =
    "w-full rounded-xl ring-1 ring-slate-200 px-3 py-2 text-sm bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[var(--aqua)]";

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
    <div className="min-h-screen w-full bg-[var(--bg-soft)] text-[var(--ink-1)]">
      {/* Design tokens + animation keyframes */}
      <style>{`
        :root{
          --gold:#fcb315;        /* primary CTA, highlights */
          --magenta:#e221a0;     /* secondary accent */
          --sky:#059fdb;         /* links/info */
          --violet:#9420f3;      /* active/focus alt */
          --red:#fc2d2d;         /* errors */
          --aqua:#37e7e2;        /* focus/success */
          --yellow:#fadf6b;      /* warnings */
          --deep:#0f373e;        /* deep navy for text/bg */

          --bg-soft:#f7f9fb;     /* soft page background */
          --card:#ffffff;
          --ink-1:#0a2e2f;       /* primary text */
          --ink-2:#6b7a7a;       /* muted text */

          --radius-xl:28px;
          --radius-lg:18px;
          --shadow-1:0 8px 30px rgba(15,55,62,.08);
          --shadow-2:0 16px 50px rgba(15,55,62,.12);
        }
        html{scroll-behavior:smooth}
        /* Buttons */
        .btn{position:relative; display:inline-flex; align-items:center; justify-content:center; gap:.5rem; padding:.55rem 1rem; border-radius:12px; font-weight:600; transition:transform .15s ease, box-shadow .2s ease, filter .2s ease;}
        .btn:active{transform:translateY(1px) scale(.99)}
        .btn-primary{background:var(--gold); color:var(--ink-1); box-shadow:0 6px 16px rgba(252,179,21,.25)}
        .btn-primary:hover{filter:brightness(.96)}
        .btn-outline{border:1px solid var(--deep); color:var(--deep)}
        .btn-outline:hover{background:var(--deep); color:#fff}
        .btn-dark{background:var(--deep); color:#fff}
        .btn-dark:hover{filter:brightness(.95)}
        .btn-ghost{border:1px solid #d1d5db; background:#fff}
        .btn-ghost:hover{background:#f8fafc}
        .btn .spark{position:absolute; inset:0; background:radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(255,255,255,.25), transparent 40%); opacity:0; transition:opacity .25s ease; border-radius:inherit}
        .btn:hover .spark{opacity:1}
        /* Reveal animation */
        [data-reveal]{opacity:0; transform:translateY(12px); transition:opacity .6s cubic-bezier(.22,.61,.36,1), transform .6s cubic-bezier(.22,.61,.36,1)}
        [data-reveal].is-visible{opacity:1; transform:none}
        /* Floating tile */
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        .float{animation:float 6s ease-in-out infinite}
        /* Reduce motion */
        @media (prefers-reduced-motion: reduce){
          .float{animation:none}
          [data-reveal]{opacity:1; transform:none}
          .btn{transition:none}
        }
      `}</style>

      {/* Sticky nav */}
      <header className={`sticky top-0 z-50 border-b border-slate-200/70 bg-[rgba(255,255,255,.7)] backdrop-blur transition-shadow ${
        scrolled ? "shadow-[var(--shadow-1)]" : "shadow-none"
      }`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-xl flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--gold)] text-[var(--ink-1)] font-bold">
              N
            </span>
            <span>Networkof.One</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#how">How it works</NavLink>
            <NavLink href="#tech">Tech</NavLink>
            <NavLink href="#roadmap">Roadmap</NavLink>
            <NavLink href="#market">Market</NavLink>
            <NavLink href="#demo">POC Demo</NavLink>
            <NavLink href="#join">Join</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <NavLink href="#press">Press</NavLink>
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <a href="#join" className="hidden sm:inline-flex btn btn-primary">
              <span className="spark" aria-hidden></span>
              Join the network
            </a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg ring-1 ring-slate-300 bg-white"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-[3] stroke-slate-700">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <nav className="md:hidden border-t border-slate-200 bg-white" data-reveal>
            <div className="mx-auto max-w-7xl px-4 py-3 grid gap-2 text-sm">
              {[
                ["#about", "About"],
                ["#how", "How it works"],
                ["#tech", "Tech"],
                ["#roadmap", "Roadmap"],
                ["#market", "Market"],
                ["#demo", "POC Demo"],
                ["#join", "Join"],
                ["#contact", "Contact"],
                ["#press", "Press"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-2 hover:bg-slate-50"
                >
                  {label}
                </a>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section id="home" className="bg-gradient-to-b from-white to-[var(--bg-soft)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <div data-reveal>
            <h1 className="text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              AI powered scheduling and XRPL payments
            </h1>
            <p className="mt-4 text-[var(--ink-2)] text-base sm:text-lg">
              One platform for the three pillars of organized activity: scheduling, payments, communication. Starting in
              sports then expanding to every sector.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#demo" className="btn btn-dark">
                <span className="spark" aria-hidden></span>
                Watch demo
              </a>
              <a href="#roadmap" className="btn btn-ghost">View roadmap</a>
              <a href="#join" className="btn btn-outline">Join the network</a>
            </div>

            <dl className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-6" data-reveal>
              <Stat label="Fee savings" value="50 to 70 percent" />
              <Stat label="Admin time saved" value="35 percent" />
              <Stat label="Pilot tx volume" value="> 10k in 90 days" />
            </dl>
          </div>

          {/* Accent device tile */}
          <div className="relative" data-reveal>
            <div className="aspect-video w-full rounded-[var(--radius-xl)] bg-[var(--gold)]/90 ring-1 ring-slate-200 shadow-[var(--shadow-2)] p-2 float">
              <div className="h-full w-full rounded-[calc(var(--radius-xl)-8px)] bg-slate-900/90 text-white grid place-items-center">
                {/* Replace with real hero image or animation */}
                <span className="opacity-80">Hero media placeholder</span>
              </div>
            </div>
            {/* Floating pills */}
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
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

        <div className="mt-8 rounded-[var(--radius-xl)] bg-white ring-1 ring-slate-200 p-4 shadow-[var(--shadow-1)]" data-reveal>
          {/* System diagram image placeholder */}
          <div className="aspect-[16/9] w-full rounded-lg bg-slate-100 grid place-items-center text-slate-500">
            System diagram placeholder - replace with image
          </div>
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

      {/* Proof of Concept Demo */}
      <Section id="demo" title="Proof of concept - MVP demo" subtitle="See the system in action - video and screenshots">
        <div className="grid lg:grid-cols-2 gap-6" data-reveal>
          <div className="aspect-video w-full overflow-hidden rounded-[var(--radius-xl)] ring-1 ring-slate-200 shadow-[var(--shadow-2)]">
            {/* Replace src with real demo video url or embed */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/7] rounded-xl bg-white ring-1 ring-slate-200 shadow-[var(--shadow-1)] grid place-items-center text-slate-500 hover:-translate-y-1 hover:shadow-[var(--shadow-2)] transition"
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
      <footer className="mt-20 border-t border-slate-200 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-sm text-[var(--ink-2)] flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Networkof.One. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-[var(--deep)]">Privacy</a>
            <a href="#" className="hover:text-[var(--deep)]">Terms</a>
            <a href="#" className="hover:text-[var(--deep)]">XRPL community</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ---------- UI subcomponents ---------- */

function NavLink({ href, children }) {
  return (
    <a
      className="relative px-1 py-1 hover:text-slate-800 after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--gold)] hover:after:w-full after:transition-[width] after:duration-200"
      href={href}
    >
      {children}
    </a>
  );
}

function Section(props) {
  const { id, title, subtitle, children } = props;
  return (
    <section id={id} className="scroll-mt-20 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl" data-reveal>
          <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? <p className="mt-2 text-[var(--ink-2)]">{subtitle}</p> : null}
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-[var(--radius-xl)] bg-white ring-1 ring-slate-200 p-4 text-center shadow-[var(--shadow-1)]" data-reveal>
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs uppercase tracking-wide text-slate-600 mt-1">{label}</div>
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white ring-1 ring-slate-200 px-3 py-1 text-xs text-slate-700 shadow" data-reveal>
      {children}
    </span>
  );
}

function Step({ title, text }) {
  return (
    <li className="rounded-[var(--radius-xl)] ring-1 ring-slate-200 p-4 bg-white shadow-[var(--shadow-1)] hover:-translate-y-[2px] hover:shadow-[var(--shadow-2)] transition" data-reveal>
      <div className="font-medium">{title}</div>
      <div className="text-sm text-[var(--ink-2)] mt-1">{text}</div>
    </li>
  );
}

function Card({ title, items }) {
  return (
    <div className="rounded-[var(--radius-xl)] ring-1 ring-slate-200 p-5 bg-white shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] hover:-translate-y-[2px] transition" data-reveal>
      <h3 className="font-medium mb-3">{title}</h3>
      <ul className="space-y-2 text-sm text-[var(--ink-2)] list-disc pl-5">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </div>
  );
}

function RoadmapCard({ phase, bullets }) {
  return (
    <div className="rounded-[var(--radius-xl)] ring-1 ring-slate-200 p-5 bg-white shadow-[var(--shadow-1)]" data-reveal>
      <div className="text-xs uppercase tracking-wide text-slate-600">{phase}</div>
      <ul className="mt-3 space-y-2 text-sm list-disc pl-5 text-[var(--ink-2)]">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function FounderCard({ name, role }) {
  return (
    <div className="rounded-[var(--radius-xl)] ring-1 ring-slate-200 p-5 bg-white flex items-center gap-4 shadow-[var(--shadow-1)] hover:shadow-[var(--shadow-2)] transition" data-reveal>
      <div className="h-12 w-12 rounded-full bg-[var(--bg-soft)] flex items-center justify-center text-slate-600 text-sm ring-1 ring-slate-200">
        {name.split(" ").map((n) => n[0]).join("")}
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-[var(--ink-2)]">{role}</div>
      </div>
    </div>
  );
}
