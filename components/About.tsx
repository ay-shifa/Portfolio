'use client';

import React, { useState } from 'react';
import { developerProfile } from '@/data/portfolio-data';
import { playSound } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  Code2, 
  Cpu, 
  Layers, 
  Sparkles, 
  CheckCircle2, 
  Rocket, 
  ShieldCheck, 
  HeartHandshake,
  Laptop,
  Terminal,
  MapPin,
  Clock,
  Briefcase
} from 'lucide-react';

export default function About() {
  const { soundEnabled } = useTheme();
  const [activeTab, setActiveTab] = useState<'story' | 'principles' | 'stack'>('story');

  const principles = [
    {
      icon: <Layers className="w-5 h-5 text-cyan-400" />,
      title: 'Performance-First Architecture',
      desc: 'Optimizing rendering waterfalls, minimizing JS payloads, and ensuring sub-50ms TTFB across edge CDN routes.'
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-400" />,
      title: 'Pragmatic AI Integration',
      desc: 'Moving beyond naive wrappers: building resilient agent loops, hybrid vector retrieval, and deterministic fallbacks.'
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />,
      title: 'Type Safety & Resilient Systems',
      desc: 'End-to-end type safety from database schemas to client components, paired with automated regression suites.'
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-amber-400" />,
      title: 'Product Craft & Developer Empathy',
      desc: 'Deep collaboration with product designers and engineering teams to build software that is an absolute joy to use.'
    }
  ];

  const tools = [
    { category: 'Editor & OS', items: ['Neovim / VS Code', 'macOS & Arch Linux', 'Ghostty / Warp'] },
    { category: 'Frontend', items: ['Next.js 14/15', 'React 19', 'Tailwind CSS', 'Framer Motion', 'Zustand'] },
    { category: 'Backend & Data', items: ['Python FastAPI', 'Node.js / Bun', 'Go', 'PostgreSQL', 'Redis', 'Qdrant'] },
    { category: 'DevOps & Infra', items: ['Docker', 'AWS ECS/Lambda', 'Cloudflare Workers', 'GitHub Actions'] }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Me & Engineering Philosophy
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base">
            Bridging complex distributed backend engineering with pixel-perfect modern web interfaces.
          </p>
        </div>

        {/* Tab Navigator */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-white/10 gap-1.5 shadow-lg">
            {[
              { id: 'story', label: 'Background & Story', icon: Briefcase },
              { id: 'principles', label: 'Engineering Principles', icon: Rocket },
              { id: 'stack', label: 'Workspace & Tools', icon: Laptop },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (soundEnabled) playSound('click');
                    setActiveTab(tab.id as 'story' | 'principles' | 'stack');
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content 1: Story & Quick Bio */}
        {activeTab === 'story' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch animate-in fade-in zoom-in-95 duration-200">
            
            {/* Bio text cards */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
              <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-5">
                <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                  <span>Passionate about building software that scales</span>
                  <span className="text-xl">⚡</span>
                </h3>
                {developerProfile.bio.map((paragraph, idx) => (
                  <p key={idx} className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                    {paragraph}
                  </p>
                ))}

                <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                  <div className="flex items-center gap-2 text-zinc-300">
                    <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Based in: {developerProfile.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Timezone: {developerProfile.timezone}</span>
                  </div>
                </div>
              </div>

              {/* Quick highlights card */}
              <div className="p-6 rounded-3xl glass-panel border border-white/10 bg-gradient-to-br from-cyan-950/30 to-blue-950/20">
                <div className="text-xs uppercase font-bold tracking-wider text-cyan-400 mb-3">
                  What I bring to high-performing teams:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Full 0-to-1 Product Lifecycle</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Zero-Downtime Database Migrations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Production LLM / RAG Pipelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Cross-Functional Technical Leadership</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Developer Terminal Card */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div className="h-full p-6 rounded-3xl glass-panel border border-white/10 flex flex-col justify-between font-mono text-xs">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                    <div className="flex items-center gap-2 text-zinc-400">
                      <Terminal className="w-4 h-4 text-cyan-400" />
                      <span>shifa@workstation ~ /quick-facts</span>
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300">active</span>
                  </div>

                  <div className="space-y-3 text-zinc-300">
                    <div>
                      <span className="text-cyan-400">$</span> cat profile.json
                    </div>
                    <div className="p-4 rounded-xl bg-black/50 border border-white/5 space-y-2 text-zinc-300">
                      <div><span className="text-purple-400">&quot;focus&quot;</span>: <span className="text-emerald-300">&quot;Full-Stack, Next.js & AI Systems&quot;</span>,</div>
                      <div><span className="text-purple-400">&quot;dailyDrink&quot;</span>: <span className="text-amber-300">&quot;Double Espresso ☕&quot;</span>,</div>
                      <div><span className="text-purple-400">&quot;primaryOS&quot;</span>: <span className="text-cyan-300">&quot;macOS / Linux&quot;</span>,</div>
                      <div><span className="text-purple-400">&quot;cleanCodeRatio&quot;</span>: <span className="text-emerald-300">&quot;100% TypeSafe&quot;</span>,</div>
                      <div><span className="text-purple-400">&quot;openSourcePassion&quot;</span>: <span className="text-pink-300">true</span></div>
                    </div>

                    <div className="pt-2">
                      <span className="text-cyan-400">$</span> git log --oneline -n 3
                    </div>
                    <div className="text-zinc-400 text-[11px] space-y-1">
                      <div><span className="text-amber-400">c8f92a1</span> feat: optimize dynamic streaming DAG execution</div>
                      <div><span className="text-amber-400">4a11b0e</span> perf: improve vector search indexing P99 to 18ms</div>
                      <div><span className="text-amber-400">99e03d7</span> chore: update core web vitals and edge caching</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-zinc-400 text-[11px]">
                  <span>Ready to collaborate?</span>
                  <a href="#contact" className="text-cyan-400 hover:underline">Drop a line &rarr;</a>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* Tab Content 2: Principles */}
        {activeTab === 'principles' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in zoom-in-95 duration-200">
            {principles.map((item, idx) => (
              <div 
                key={idx}
                className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 w-fit mb-5 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab Content 3: Workspace & Tools */}
        {activeTab === 'stack' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-in fade-in zoom-in-95 duration-200">
            {tools.map((t, idx) => (
              <div key={idx} className="p-6 rounded-3xl glass-panel border border-white/10 flex flex-col">
                <div className="text-xs uppercase font-bold tracking-wider text-cyan-400 mb-4 pb-2 border-b border-white/10">
                  {t.category}
                </div>
                <ul className="space-y-3">
                  {t.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm text-zinc-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
