/**
 * ============================================================
 * APPLICATION : Portal Sinergi Operasional BUJP-User
 * COMPONENT   : components/Navbar.jsx
 * CREATED BY  : Bli Nengah
 * VERSION     : v1.0.0
 * YEAR        : 2026
 * ============================================================
 */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShieldCheck, Sun, Moon, LayoutDashboard, FileText } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="p-2 bg-blue-600 rounded-lg text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-white text-base sm:text-lg tracking-tight block leading-tight">
                FORUM SINERGI BUJP-USER
              </span>
              <span className="text-[11px] text-blue-600 dark:text-blue-400 font-medium">
                Operational Security Governance &middot; 2026
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/#tor-section"
              className="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 transition"
            >
              Dokumen TOR
            </Link>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg transition shadow-sm"
            >
              <LayoutDashboard className="w-4 h-4" />
              <span>Executive Portal</span>
            </Link>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800 transition"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
