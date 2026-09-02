'use client';

import React, { useState } from 'react';
import { skillCategories } from '@/data/portfolio-data';
import { playSound } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  Sparkles, 
  Code2, 
  Server, 
  Cpu, 
  Cloud, 
  CheckCircle2, 
  Zap, 
  Layers,
  Search
} from 'lucide-react';

export default function Skills() {
  const { soundEnabled } = useTheme();
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [skillSearch, setSkillSearch] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layers className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Cloud': return <Cloud className="w-4 h-4" />;
      default: return <Code2 className="w-4 h-4" />;
    }
  };

  const currentCategory = skillCategories[activeCategoryIndex];

  const filteredSkills = currentCategory.skills.filter((skill) =>
    skill.name.toLowerCase().includes(skillSearch.toLowerCase()) ||
    skill.description.toLowerCase().includes(skillSearch.toLowerCase())
  );

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Skills & Engineering Capabilities
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base">
            Deep experience across the entire software development life cycle, from systems architecture to user interface delight.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {skillCategories.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => {
                  if (soundEnabled) playSound('click');
                  setActiveCategoryIndex(idx);
                }}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border ${
                  isActive
                    ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/10 border-cyan-500/50 shadow-lg shadow-cyan-500/10'
                    : 'glass-panel border-white/5 hover:border-white/20 text-zinc-400 hover:text-white'
                }`}
              >
                <div className={`p-2.5 rounded-xl w-fit mb-3 ${isActive ? 'bg-cyan-500 text-slate-950 font-bold' : 'bg-white/5 text-zinc-300'}`}>
                  {getCategoryIcon(cat.icon)}
                </div>
                <div className="font-bold text-sm text-white">{cat.title}</div>
                <div className="text-[11px] text-zinc-400 mt-1 line-clamp-1">{cat.skills.length} core technologies</div>
              </button>
            );
          })}
        </div>

        {/* Category Detail Panel */}
        <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl">
          
          {/* Header of selected category */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-white/10 gap-4">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <span>{currentCategory.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                {currentCategory.description}
              </p>
            </div>

            {/* In-category search */}
            <div className="relative w-full sm:w-60">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                placeholder="Filter skill..."
                className="w-full pl-8 pr-3 py-1.5 rounded-xl bg-black/40 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-500"
              />
            </div>
          </div>

          {/* Skill items list */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredSkills.map((skill, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-cyan-500/30 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-white">{skill.name}</span>
                    {skill.highlight && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold uppercase bg-cyan-500/20 text-cyan-300">
                        Primary
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono text-zinc-400">{skill.experience}</span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-2">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <p className="text-xs text-zinc-400 font-mono">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
