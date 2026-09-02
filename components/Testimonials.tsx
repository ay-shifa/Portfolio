'use client';

import React from 'react';
import { testimonialsData } from '@/data/portfolio-data';
import { Star, Quote, Sparkles, Building2, UserCheck } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Client & Leadership Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            What Leaders & Teams Say
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base">
            Feedback from engineering leaders, CTOs, and founders who have collaborated with me on production milestones.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((t) => (
            <div
              key={t.id}
              className="p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
            >
              <div>
                {/* Rating stars & Quote icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-600 group-hover:text-cyan-400 transition-colors" />
                </div>

                {/* Highlight Badge */}
                <div className="mb-4 inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-semibold text-cyan-300">
                  ⚡ &ldquo;{t.highlight}&rdquo;
                </div>

                {/* Content */}
                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-indigo-600 p-[2px] shrink-0">
                  <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center font-bold text-xs text-white">
                    {t.name.slice(0, 2).toUpperCase()}
                  </div>
                </div>
                <div>
                  <div className="font-bold text-sm text-white">{t.name}</div>
                  <div className="text-xs text-zinc-400">{t.role} · <span className="text-cyan-400">{t.company}</span></div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
