'use client';

import React, { useState } from 'react';
import { experienceData } from '@/data/portfolio-data';
import { playSound } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink,
  GitPullRequest,
  GraduationCap,
  Sparkles
} from 'lucide-react';

export default function Experience() {
  const { soundEnabled } = useTheme();
  const [activeFilter, setActiveFilter] = useState<'all' | 'full-time' | 'open-source'>('all');

  const filtered = experienceData.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.type === activeFilter;
  });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Work Experience & Contributions
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base">
            Track record of delivering production software, leading engineering teams, and building scalable developer tools.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'All Experience' },
            { id: 'full-time', label: 'Full-Time Roles' },
            { id: 'open-source', label: 'Open Source' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                if (soundEnabled) playSound('click');
                setActiveFilter(tab.id as 'all' | 'full-time' | 'open-source');
              }}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeFilter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                  : 'glass-panel text-zinc-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Timeline Items */}
        <div className="relative border-l-2 border-white/10 ml-4 sm:ml-8 space-y-12">
          {filtered.map((exp) => (
            <div key={exp.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0b0f17] group-hover:scale-125 transition-transform duration-200"></div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300">
                
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      {exp.current && (
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Present
                        </span>
                      )}
                    </div>
                    <div className="text-cyan-400 font-semibold text-sm mt-0.5 flex items-center gap-2">
                      <span>{exp.company}</span>
                      {exp.companyUrl && (
                        <a 
                          href={exp.companyUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-cyan-300 transition-colors"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 bg-white/5 px-2.5 py-1 rounded-lg border border-white/5">
                      <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-zinc-300 text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Bullet achievements */}
                <div className="space-y-2.5 mb-6">
                  {exp.achievements.map((ach, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>

                {/* Technologies Stack */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/5 text-zinc-300 border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
