'use client';

import React, { useState, useEffect } from 'react';
import { developerProfile } from '@/data/portfolio-data';
import { playSound } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { ArrowUp, Heart, Sparkles, Terminal, Code2 } from 'lucide-react';

export default function Footer() {
  const { soundEnabled } = useTheme();
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles', hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    if (soundEnabled) playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-black/40 pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-white/10 items-center">
          
          {/* Left Brand info */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2 font-bold text-lg text-white">
              <span className="p-1 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 text-slate-950 text-xs font-mono">SF</span>
              <span>Shifa Fatima &bull; Portfolio</span>
            </div>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Crafting intelligent AI systems, high-throughput microservices, and pixel-perfect web interfaces.
            </p>
          </div>

          {/* Center: Live Time indicator */}
          <div className="md:col-span-4 flex flex-col items-start md:items-center">
            <div className="p-3 rounded-2xl glass-panel border border-white/10 text-xs font-mono text-zinc-300 flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>San Francisco (PST):</span>
              <span className="text-cyan-400 font-bold">{time || '09:00:00 AM'}</span>
            </div>
          </div>

          {/* Right: Back to top button */}
          <div className="md:col-span-3 flex justify-start md:justify-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-all group"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
            </button>
          </div>

        </div>

        {/* Bottom copyright & Stack info */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4 font-mono">
          <div>
            &copy; {new Date().getFullYear()} Shifa Fatima. Engineered with Next.js 14, Tailwind CSS & TypeScript.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-zinc-400 transition-colors">v2.4.0 (Latest Release)</span>
            <span>&bull;</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              All Systems Operational
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
