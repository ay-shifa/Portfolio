'use client';

import React, { useState, useEffect } from 'react';
import { useTheme, ThemeMode } from './ThemeContext';
import { playSound } from '@/lib/utils';
import { 
  Sparkles, 
  Terminal, 
  Sun, 
  Moon, 
  Zap, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Command, 
  ArrowUpRight,
  Code2,
  Palette
} from 'lucide-react';

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenResumeModal }: NavbarProps) {
  const { theme, setTheme, soundEnabled, toggleSound } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [themeDropdownOpen, setThemeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'projects', 'skills', 'experience', 'playground', 'testimonials', 'articles', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Sandbox', href: '#playground', id: 'playground' },
    { label: 'Articles', href: '#articles', id: 'articles' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (soundEnabled) playSound('click');
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const themeOptions: { id: ThemeMode; label: string; icon: React.ReactNode; color: string }[] = [
    { id: 'dark', label: 'Dark Slate', icon: <Moon className="w-3.5 h-3.5" />, color: 'bg-slate-800' },
    { id: 'midnight', label: 'OLED Midnight', icon: <Zap className="w-3.5 h-3.5 text-blue-400" />, color: 'bg-black' },
    { id: 'cyberpunk', label: 'Cyber Neon', icon: <Sparkles className="w-3.5 h-3.5 text-pink-400" />, color: 'bg-fuchsia-950' },
    { id: 'light', label: 'Clean Light', icon: <Sun className="w-3.5 h-3.5 text-amber-500" />, color: 'bg-white' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-3 transition-all duration-300">
      <div className={`max-w-7xl mx-auto rounded-2xl px-4 sm:px-6 py-2.5 transition-all duration-300 ${
        scrolled 
          ? 'glass-panel shadow-2xl shadow-black/20 backdrop-blur-xl border border-white/10 dark:border-white/10' 
          : 'bg-black/30 backdrop-blur-md border border-white/5'
      }`}>
        <div className="flex items-center justify-between">
          {/* Brand Monogram */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
              <div className="w-full h-full bg-[#0b0f17] rounded-[11px] flex items-center justify-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 text-base">
                AV
              </div>
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#0b0f17] animate-pulse"></span>
            </div>
            <div className="hidden sm:block text-left">
              <span className="font-semibold text-sm tracking-tight block text-white/95 group-hover:text-cyan-400 transition-colors">
                Alex Vance
              </span>
              <span className="text-[11px] text-zinc-400 font-mono tracking-wider">
                Full-Stack & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.04] p-1 rounded-full border border-white/5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-white/15 shadow-sm font-semibold'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-0.5 bg-cyan-400 rounded-full"></span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Controls & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                if (soundEnabled) playSound('pop');
                onOpenCommandPalette();
              }}
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border border-white/10 text-xs font-mono transition-all duration-200"
              title="Command Palette (Cmd+K)"
            >
              <Command className="w-3.5 h-3.5 text-cyan-400" />
              <span>Search</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-zinc-300 font-sans border border-white/10">⌘K</kbd>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                toggleSound();
                playSound('toggle');
              }}
              className={`p-2 rounded-xl transition-colors duration-200 border border-white/10 ${
                soundEnabled 
                  ? 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20' 
                  : 'bg-white/5 text-zinc-500 hover:text-zinc-400'
              }`}
              title={soundEnabled ? 'Mute Sound FX' : 'Enable Sound FX'}
            >
              {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>

            {/* Theme Selector */}
            <div className="relative">
              <button
                onClick={() => {
                  if (soundEnabled) playSound('click');
                  setThemeDropdownOpen(!themeDropdownOpen);
                }}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10 transition-colors"
                title="Change Theme"
              >
                <Palette className="w-4 h-4 text-cyan-400" />
              </button>

              {themeDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 rounded-2xl glass-panel p-2 shadow-2xl border border-white/10 backdrop-blur-2xl animate-in fade-in zoom-in-95 duration-150 z-50"
                  onMouseLeave={() => setThemeDropdownOpen(false)}
                >
                  <div className="text-[11px] font-semibold text-zinc-400 px-2 py-1 uppercase tracking-wider">
                    Select Theme
                  </div>
                  {themeOptions.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setTheme(opt.id);
                        if (soundEnabled) playSound('switch');
                        setThemeDropdownOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-2.5 py-2 rounded-xl text-xs font-medium transition-colors ${
                        theme === opt.id 
                          ? 'bg-cyan-500/20 text-cyan-300 font-semibold' 
                          : 'text-zinc-300 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {opt.icon}
                        <span>{opt.label}</span>
                      </div>
                      {theme === opt.id && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Resume Button */}
            <button
              onClick={() => {
                if (soundEnabled) playSound('pop');
                onOpenResumeModal();
              }}
              className="hidden lg:flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs tracking-tight shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-200"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => {
                if (soundEnabled) playSound('click');
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 border border-white/10"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-panel border border-white/10 p-4 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium ${
                  activeSection === link.id
                    ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                    : 'text-zinc-300 hover:bg-white/5'
                }`}
              >
                <span>{link.label}</span>
                {activeSection === link.id && <span className="w-2 h-2 rounded-full bg-cyan-400"></span>}
              </a>
            ))}
            <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl bg-white/5 text-zinc-300 text-sm"
              >
                <div className="flex items-center gap-2">
                  <Command className="w-4 h-4 text-cyan-400" />
                  <span>Command Palette</span>
                </div>
                <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-xs text-zinc-400">⌘K</kbd>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResumeModal();
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm text-center shadow-lg shadow-cyan-500/20"
              >
                View / Download Resume
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
