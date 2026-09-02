'use client';

import React, { useState, useEffect } from 'react';
import { developerProfile } from '@/data/portfolio-data';
import { playSound, triggerConfetti } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  ArrowRight, 
  Terminal, 
  Sparkles, 
  Copy, 
  Check, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  ExternalLink,
  Zap,
  ShieldCheck,
  Cpu,
  Layers,
  Code2
} from 'lucide-react';

interface HeroProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

export default function Hero({ onOpenCommandPalette, onOpenResumeModal }: HeroProps) {
  const { soundEnabled } = useTheme();
  const [roleIndex, setRoleIndex] = useState(0);
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [isHoveringAvatar, setIsHoveringAvatar] = useState(false);

  // Cycle roles every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % developerProfile.roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCmd = () => {
    navigator.clipboard.writeText('npx shifafatima-portfolio');
    setCopiedCmd(true);
    if (soundEnabled) playSound('success');
    triggerConfetti();
    setTimeout(() => setCopiedCmd(false), 2500);
  };

  const techBadges = [
    { name: 'Next.js 14', color: 'from-slate-700 to-black text-white border-white/20' },
    { name: 'TypeScript', color: 'from-blue-600/20 to-blue-900/40 text-blue-400 border-blue-500/30' },
    { name: 'React 19', color: 'from-cyan-600/20 to-cyan-900/40 text-cyan-400 border-cyan-500/30' },
    { name: 'Python / FastAPI', color: 'from-emerald-600/20 to-emerald-900/40 text-emerald-400 border-emerald-500/30' },
    { name: 'LLM Orchestration', color: 'from-purple-600/20 to-purple-900/40 text-purple-400 border-purple-500/30' },
    { name: 'PostgreSQL & pgvector', color: 'from-indigo-600/20 to-indigo-900/40 text-indigo-400 border-indigo-500/30' },
    { name: 'Docker / Cloud', color: 'from-sky-600/20 to-sky-900/40 text-sky-400 border-sky-500/30' }
  ];

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/10 to-purple-600/15 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow"></div>
      <div className="absolute -top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 right-10 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-inner text-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-zinc-300 font-medium">
                {developerProfile.availability.text}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">{developerProfile.name}</span>
              </h1>
              <div className="h-12 sm:h-14 flex items-center">
                <p className="text-2xl sm:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 via-cyan-200 to-indigo-200">
                  <span className="font-mono text-cyan-400 mr-2">&gt;</span>
                  {developerProfile.roles[roleIndex]}
                </p>
              </div>
            </div>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed">
              {developerProfile.tagline}
            </p>

            {/* Tech Badges List */}
            <div className="flex flex-wrap gap-2 pt-1">
              {techBadges.map((badge, idx) => (
                <span
                  key={idx}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border bg-gradient-to-br ${badge.color} backdrop-blur-sm transition-transform hover:scale-105 cursor-default`}
                >
                  {badge.name}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  if (soundEnabled) playSound('click');
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 w-full sm:w-auto"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  if (soundEnabled) playSound('click');
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/25 font-semibold text-sm transition-all duration-200 w-full sm:w-auto"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Get In Touch</span>
              </a>

              <button
                onClick={() => {
                  if (soundEnabled) playSound('pop');
                  onOpenResumeModal();
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 text-sm font-medium transition-all duration-200 w-full sm:w-auto"
              >
                <Download className="w-4 h-4 text-indigo-400" />
                <span>Resume CV</span>
              </button>
            </div>

            {/* Interactive Terminal Quick Run */}
            <div className="w-full max-w-lg mt-2 pt-2">
              <div className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono backdrop-blur-md shadow-lg">
                <div className="flex items-center gap-2 overflow-hidden">
                  <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-zinc-500 select-none">$</span>
                  <span className="text-zinc-300 truncate">npx shifafatima-portfolio</span>
                </div>
                <button
                  onClick={handleCopyCmd}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/15 text-zinc-300 hover:text-white transition-colors shrink-0"
                  title="Copy command to clipboard"
                >
                  {copiedCmd ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 text-[11px]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Code & Architecture Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Background ambient lighting */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-1000 animate-pulse-slow"></div>

              {/* Card Container */}
              <div className="relative rounded-2xl glass-panel border border-white/15 p-6 shadow-2xl overflow-hidden">
                
                {/* Window Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-zinc-400">developer.config.ts</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-[11px] font-mono text-zinc-400">Production Ready</span>
                  </div>
                </div>

                {/* Code Body */}
                <div className="pt-4 font-mono text-xs leading-relaxed overflow-x-auto text-zinc-300">
                  <div className="text-zinc-500">// Modern Full-Stack & AI Engineer</div>
                  <div>
                    <span className="text-purple-400">export const</span> <span className="text-blue-400">engineer</span> = &#123;
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">name:</span> <span className="text-emerald-300">&apos;Shifa Fatima&apos;</span>,
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">specialties:</span> [
                  </div>
                  <div className="pl-8 text-cyan-300">
                    &apos;Next.js 14 App Router&apos;, &apos;Multi-Agent AI&apos;, &apos;High-Scale Microservices&apos;
                  </div>
                  <div className="pl-4">
                    ],
                  </div>
                  <div className="pl-4">
                    <span className="text-zinc-400">metrics:</span> &#123;
                  </div>
                  <div className="pl-8">
                    <span className="text-zinc-400">uptime:</span> <span className="text-amber-300">&apos;99.98%&apos;</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-zinc-400">p99Latency:</span> <span className="text-amber-300">&apos;&lt; 45ms&apos;</span>,
                  </div>
                  <div className="pl-8">
                    <span className="text-zinc-400">satisfaction:</span> <span className="text-amber-300">&apos;100%&apos;</span>
                  </div>
                  <div className="pl-4">&#125;,</div>
                  <div className="pl-4">
                    <span className="text-zinc-400">availableForHire:</span> <span className="text-purple-400">true</span>
                  </div>
                  <div>&#125;;</div>
                </div>

                {/* Interactive Feature Pills Inside Card */}
                <div className="mt-6 pt-4 border-t border-white/10 grid grid-cols-2 gap-2.5">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <Zap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Sub-50ms TTFB</div>
                      <div className="text-[10px] text-zinc-400">Edge-Optimized</div>
                    </div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2.5">
                    <div className="p-1.5 rounded-lg bg-purple-500/10 text-purple-400">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-semibold text-white">Agentic AI</div>
                      <div className="text-[10px] text-zinc-400">Vector & RAG</div>
                    </div>
                  </div>
                </div>

                {/* Interactive command palette hint */}
                <button
                  onClick={() => {
                    if (soundEnabled) playSound('pop');
                    onOpenCommandPalette();
                  }}
                  className="mt-4 w-full py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 flex items-center justify-between transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Press ⌘K for interactive menu</span>
                  </span>
                  <span className="text-cyan-400 text-[11px] font-semibold">Open &rarr;</span>
                </button>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-white/10">
          {developerProfile.stats.map((stat, i) => (
            <div 
              key={i} 
              className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-300 group-hover:from-cyan-300 group-hover:to-blue-400">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-zinc-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-400 mt-0.5 font-mono">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
