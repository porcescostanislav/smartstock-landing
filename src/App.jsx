import React, { useState, useEffect } from 'react';
import { Download, Database, BarChart3, ShieldCheck, Cpu, Moon, Sun, LayoutDashboard } from 'lucide-react';

const themes = {
  dark: {
    '--bg': '#0E1420',
    '--surface': '#161D2E',
    '--surface-hover': '#1E2740',
    '--accent': '#F5B547',
    '--accent-hover': '#FFC866',
    '--on-accent': '#0E1420',
    '--text-primary': '#E6EBF5',
    '--text-secondary': '#94A0B8',
    '--border': '#252E47',
  },
  light: {
    '--bg': '#FAFAF7',
    '--surface': '#F0EFE9',
    '--surface-hover': '#E2E8F0',
    '--accent': '#0D7D6B',
    '--accent-hover': '#0F8F7A',
    '--on-accent': '#FAFAF7',
    '--text-primary': '#1A1D1A',
    '--text-secondary': '#5C615E',
    '--border': '#D4D1C5',
  }
};

function App() {
  const [isDark, setIsDark] = useState(true);
  const theme = isDark ? themes.dark : themes.light;

  useEffect(() => {
    const root = document.documentElement;
    Object.entries(theme).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [isDark, theme]);

  return (
    <div style={styles.appContainer}>
      {/* Navbar - Minimalist */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>
          <LayoutDashboard size={20} color="var(--accent)" />
          <span style={styles.logoText}>SmartStock AI</span>
        </div>
        <button onClick={() => setIsDark(!isDark)} style={styles.themeToggle}>
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </nav>

      {/* Main Content */}
      <main style={styles.main}>
        {/* Hero Section - Acum foloseste culorile temei */}
        <section style={styles.hero}>
          <h1 style={styles.heroTitle}>SmartStock AI</h1>
          <p style={styles.heroSubtitle}>
            Sistem integrat de gestiune a stocurilor cu suport decizional bazat pe 
            Inteligență Artificială și analiză econometrică avansată.
          </p>
          <a href="./SmartStock_Setup.zip" style={styles.ctaButton}>
            <Download size={18} /> Descarcă Kit Instalare (.exe)
          </a>
        </section>

        {/* Features Grid */}
        <section style={styles.grid}>
          <FeatureCard 
            icon={<Cpu size={22} />} 
            title="Inteligență Artificială" 
            desc="Interogare în limbaj natural (Text-to-SQL) și prognoză bazată pe modele DeepSeek/Claude." 
          />
          <FeatureCard 
            icon={<BarChart3 size={22} />} 
            title="Analiză Econometrică" 
            desc="Optimizare stocuri prin modelul EOQ și regresie OLS pentru predicția cererii." 
          />
          <FeatureCard 
            icon={<Database size={22} />} 
            title="Gestiune Robustă" 
            desc="Arhitectură bazată pe Repository Pattern și SQLite pentru integritate maximă a datelor." 
          />
        </section>
      </main>

      <footer style={styles.footer}>
        <span>v1.0.0 — Licență ASE București</span>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }) {
  return (
    <div style={styles.card}>
      <div style={styles.cardIcon}>{icon}</div>
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardDesc}>{desc}</p>
    </div>
  );
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    backgroundColor: 'var(--bg)',
    color: 'var(--text-primary)',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    display: 'flex',
    flexDirection: 'column',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 40px',
    backgroundColor: 'var(--surface)',
    borderBottom: '1px solid var(--border)',
  },
  navLogo: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoText: {
    fontWeight: 700,
    fontSize: '1.1rem',
    color: 'var(--text-primary)', // Fix: Nu mai ramane alb pe tema Light
  },
  themeToggle: {
    background: 'none',
    border: '1px solid var(--border)',
    color: 'var(--text-primary)',
    padding: '6px',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 20px',
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
    maxWidth: '750px',
  },
  heroTitle: {
    fontSize: '2.5rem', // Fix: Redus de la 4rem
    fontWeight: 800,
    marginBottom: '12px',
    color: 'var(--text-primary)',
  },
  heroSubtitle: {
    fontSize: '1.05rem', // Fix: Redus de la 1.2rem
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
    marginBottom: '32px',
  },
  ctaButton: {
    backgroundColor: 'var(--accent)',
    color: 'var(--on-accent)',
    padding: '12px 24px',
    borderRadius: '4px',
    fontWeight: 700,
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '0.9rem',
    textTransform: 'uppercase',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '20px',
    width: '100%',
    maxWidth: '1000px',
  },
  card: {
    backgroundColor: 'var(--surface)',
    border: '1px solid var(--border)',
    padding: '32px',
    borderRadius: '4px',
  },
  cardIcon: {
    color: 'var(--accent)',
    marginBottom: '16px',
  },
  cardTitle: {
    fontSize: '1.1rem',
    marginBottom: '8px',
    fontWeight: 600,
  },
  cardDesc: {
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
    fontSize: '0.9rem',
  },
  footer: {
    padding: '24px',
    textAlign: 'center',
    fontSize: '0.75rem',
    borderTop: '1px solid var(--border)',
    color: 'var(--text-secondary)',
  }
};

export default App;