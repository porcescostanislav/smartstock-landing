import React, { useState, useEffect } from 'react';
import {
  Download, Database, BarChart3, ShieldCheck, Cpu, Moon, Sun,
  LayoutDashboard, TrendingUp, Globe, Mail, Activity,
} from 'lucide-react';
import logo from '../src/assets/icon_dark.ico';

const themes = {
  dark: {
    '--bg':             '#0E1420',
    '--surface':        '#161D2E',
    '--surface-hover':  '#1E2740',
    '--accent':         '#F5B547',
    '--accent-hover':   '#FFC866',
    '--on-accent':      '#0E1420',
    '--text-primary':   '#E6EBF5',
    '--text-secondary': '#94A0B8',
    '--border':         '#252E47',
  },
  light: {
    '--bg':             '#FAFAF7',
    '--surface':        '#F0EFE9',
    '--surface-hover':  '#E6E4DC',
    '--accent':         '#0D7D6B',
    '--accent-hover':   '#0F8F7A',
    '--on-accent':      '#FAFAF7',
    '--text-primary':   '#1A1D1A',
    '--text-secondary': '#5C615E',
    '--border':         '#D4D1C5',
  },
};

const features = [
  {
    icon: Cpu,
    title: 'Inteligență Artificială',
    desc: 'Interogare în limbaj natural (Text-to-SQL) și recomandări de reaprovizionare prin DeepSeek, OpenAI și Claude, comutabile în timp real fără restart.',
  },
  {
    icon: TrendingUp,
    title: 'Prognoză & Econometrie',
    desc: 'Regresie OLS cu benzi de confidență, coeficient Pearson cu test t bilateral, optimizare EOQ (Wilson) și detectare anomalii prin Z-score configurabil.',
  },
  {
    icon: Database,
    title: 'Gestiune Completă CRUD',
    desc: '8 entități gestionate: Produse, Categorii, Furnizori, Clienți, Vânzări, Tranzacții, Factori Externi, Utilizatori, cu filtrare avansată și arhivare soft-delete.',
  },
  {
    icon: Globe,
    title: 'Date Externe în Timp Real',
    desc: 'Agregare automată din 4 surse: Alpha Vantage (prețuri mărfuri), World Bank (indicatori macro), PredictHQ (evenimente) și Open-Meteo (meteo).',
  },
  {
    icon: ShieldCheck,
    title: 'Securitate & Autentificare',
    desc: 'SHA-256 cu salt de 16 octeți, blocare cont după 3 eșecuri, RBAC (Admin / Manager / Operator) și validare OTP prin email la crearea contului.',
  },
  {
    icon: Mail,
    title: 'Rapoarte Automate',
    desc: 'Raport săptămânal HTML cu Sales Snapshot, alerte AI, plan de acțiune și grafic PNG atașat. Trimis automat la ora configurată, fără intervenție manuală.',
  },
];

const stats = [
  { value: '8',  label: 'Entități gestionate' },
  { value: '3',  label: 'Provideri AI' },
  { value: '4',  label: 'Surse externe' },
  { value: '4',  label: 'Tipuri de analiză' },
];

const techStack = [
  'C# / .NET 8', 'WinForms', 'SQLite + EF Core', 'LiveCharts 2',
  'DeepSeek API', 'OpenAI API', 'Claude API', 'FontAwesome.Sharp',
  'Alpha Vantage', 'World Bank', 'PredictHQ', 'Open-Meteo',
];

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
  }, [isDark, theme]);

  return (
    <div style={s.app}>
      <Nav isDark={isDark} setIsDark={setIsDark} />
      <main style={s.main}>
        <Hero />
        <StatsBar />
        <SectionDivider label="Funcționalități" />
        <FeaturesGrid />
        <SectionDivider label="Stack tehnologic" />
        <TechBadges />
      </main>
      <Footer />
    </div>
  );
}

// ── Nav ───────────────────────────────────────────────────────────────────────

function Nav({ isDark, setIsDark }) {
  return (
    <nav style={s.nav}>
      <div style={s.navLogo}>
        <img 
          src={logo} 
          alt="SmartStock Logo" 
          style={{ width: '20px', height: '20px', objectFit: 'contain' }} 
        />
        
        <span style={{ fontWeight: 700, fontSize: '1.05rem', letterSpacing: '0.4px' }}>
          SmartStock
        </span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <a href="./SmartStock_Setup.zip" style={s.navCta}>
          <Download size={14} /> Descarcă
        </a>
        <button onClick={() => setIsDark(!isDark)} style={s.iconBtn}>
          {isDark ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </nav>
  );
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={s.hero}>
      {/* <div style={s.heroBadge}>
        <Activity size={13} color="var(--accent)" />
        <span>Licență ASE București · 2026</span>
      </div> */}

      <h1 style={s.heroTitle}>
        Gestiune inteligentă<br />
        <span style={{ color: 'var(--accent)' }}>de stocuri</span>
      </h1>

      <p style={s.heroSub}>
        Sistem complet de inventar cu suport AI multi-provider, analiză econometrică avansată
        și integrare automată a datelor externe construit în C# / .NET 8.
      </p>

      <div style={s.heroActions}>
        <a href="./SmartStock_Setup.zip" style={s.ctaBtn}>
          <Download size={17} /> Descarcă Kit Instalare
        </a>
        <a href="#features" style={s.ghostBtn}>
          Explorează funcționalitățile
        </a>
      </div>
    </section>
  );
}

// ── Stats ─────────────────────────────────────────────────────────────────────

function StatsBar() {
  return (
    <div style={s.statsBar}>
      {stats.map((st, i) => (
        <React.Fragment key={i}>
          <div style={s.statItem}>
            <span style={s.statValue}>{st.value}</span>
            <span style={s.statLabel}>{st.label}</span>
          </div>
          {i < stats.length - 1 && <div style={s.statSep} />}
        </React.Fragment>
      ))}
    </div>
  );
}

// ── Section divider ───────────────────────────────────────────────────────────

function SectionDivider({ label }) {
  return (
    <div id="features" style={s.sectionHeader}>
      <div style={s.dividerLine} />
      <span style={s.sectionLabel}>{label}</span>
      <div style={s.dividerLine} />
    </div>
  );
}

// ── Features ──────────────────────────────────────────────────────────────────

function FeaturesGrid() {
  return (
    <div style={s.grid}>
      {features.map((f, i) => <FeatureCard key={i} {...f} />)}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, desc }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      style={{
        ...s.card,
        backgroundColor: hovered ? 'var(--surface-hover)' : 'var(--surface)',
        borderColor:     hovered ? 'var(--accent)'        : 'var(--border)',
        transform:       hovered ? 'translateY(-4px)'     : 'translateY(0)',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={22} color="var(--accent)" style={{ marginBottom: 20 }} />
      <h3 style={s.cardTitle}>{title}</h3>
      <p  style={s.cardDesc}>{desc}</p>
    </div>
  );
}

// ── Tech ──────────────────────────────────────────────────────────────────────

function TechBadges() {
  return (
    <div style={s.techWrap}>
      {techStack.map((t, i) => (
        <span key={i} style={s.techBadge}>{t}</span>
      ))}
    </div>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={s.footer}>
      <img 
          src={logo} 
          alt="SmartStock Logo" 
          style={{ width: '20px', height: '20px', objectFit: 'contain' }} 
        />
      <span>SmartStock</span>
      <span style={{ opacity: 0.35 }}>·</span>
      <span>v1.2</span>
      <span style={{ opacity: 0.35 }}>·</span>
      <span>Licență ASE București 2026</span>
    </footer>
  );
}

// ── Styles ────────────────────────────────────────────────────────────────────

const s = {
  app: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-primary)',
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    transition: 'background-color 0.25s, color 0.25s',
    display: 'flex',
    flexDirection: 'column',
  },

  // nav
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 48px',
    backgroundColor: 'var(--surface)',
    borderBottom: '1px solid var(--border)',
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  navCta: {
    backgroundColor: 'var(--accent)',
    color: 'var(--on-accent)',
    padding: '7px 16px',
    borderRadius: '4px',
    fontWeight: 700,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '7px',
    fontSize: '0.85rem',
  },
  iconBtn: {
    background: 'none',
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    padding: '7px',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },

  // main
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  // hero
  hero: {
    textAlign: 'center',
    padding: '96px 24px 72px',
    maxWidth: '820px',
    margin: '0 auto',
  },
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '20px',
    padding: '5px 14px',
    fontSize: '0.78rem',
    color: 'var(--text-secondary)',
    marginBottom: '32px',
    letterSpacing: '0.2px',
  },
  heroTitle: {
    fontSize: 'clamp(2.2rem, 5.5vw, 3.8rem)',
    fontWeight: 800,
    lineHeight: 1.1,
    marginBottom: '24px',
    letterSpacing: '-1.5px',
    color: 'var(--text-primary)',
  },
  heroSub: {
    fontSize: '1.1rem',
    color: 'var(--text-secondary)',
    lineHeight: 1.75,
    marginBottom: '44px',
    maxWidth: '660px',
    margin: '0 auto 44px',
  },
  heroActions: {
    display: 'flex',
    gap: '14px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  ctaBtn: {
    backgroundColor: 'var(--accent)',
    color: 'var(--on-accent)',
    padding: '13px 26px',
    borderRadius: '4px',
    fontWeight: 700,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '9px',
    fontSize: '0.92rem',
    letterSpacing: '0.2px',
  },
  ghostBtn: {
    backgroundColor: 'transparent',
    color: 'var(--text-secondary)',
    padding: '13px 26px',
    borderRadius: '4px',
    fontWeight: 500,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '9px',
    fontSize: '0.92rem',
    border: '1px solid var(--border)',
  },

  // stats
  statsBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    borderRadius: '6px',
    padding: '28px 40px',
    margin: '0 24px 72px',
    width: 'calc(100% - 48px)',
    maxWidth: '880px',
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '8px 36px',
    gap: '5px',
  },
  statValue: {
    fontSize: '2.4rem',
    fontWeight: 800,
    color: 'var(--accent)',
    lineHeight: 1,
  },
  statLabel: {
    fontSize: '0.82rem',
    color: 'var(--text-secondary)',
    textAlign: 'center',
  },
  statSep: {
    width: '1px',
    height: '44px',
    backgroundColor: 'var(--border)',
  },

  // section header
  sectionHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    width: '100%',
    maxWidth: '1120px',
    padding: '0 24px',
    marginBottom: '40px',
  },
  sectionLabel: {
    fontSize: '0.75rem',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '2.5px',
    color: 'var(--text-secondary)',
    whiteSpace: 'nowrap',
  },
  dividerLine: {
    flex: 1,
    height: '1px',
    backgroundColor: 'var(--border)',
  },

  // grid
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
    gap: '18px',
    width: '100%',
    maxWidth: '1120px',
    padding: '0 24px',
    marginBottom: '72px',
  },
  card: {
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '36px',
    borderRadius: '6px',
    transition: 'transform 0.2s ease, background-color 0.2s, border-color 0.2s',
    cursor: 'default',
  },
  cardTitle: {
    fontSize: '1.05rem',
    fontWeight: 600,
    marginBottom: '10px',
    color: 'var(--text-primary)',
  },
  cardDesc: {
    color: 'var(--text-secondary)',
    lineHeight: 1.65,
    fontSize: '0.88rem',
  },

  // tech
  techWrap: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
    maxWidth: '900px',
    padding: '0 24px 80px',
  },
  techBadge: {
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    padding: '7px 18px',
    borderRadius: '4px',
    fontSize: '0.84rem',
    fontWeight: 500,
    letterSpacing: '0.2px',
  },

  // footer
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    padding: '24px',
    fontSize: '0.78rem',
    borderTop: '1px solid var(--border)',
    color: 'var(--text-secondary)',
    backgroundColor: 'var(--surface)',
  },
};
