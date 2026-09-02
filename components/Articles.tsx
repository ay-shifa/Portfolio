'use client';

import React from 'react';
import { articlesData } from '@/data/portfolio-data';
import { BookOpen, ArrowUpRight, Clock, Eye, Sparkles } from 'lucide-react';

export default function Articles() {
  return (
    <section id="articles" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Engineering Insights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Articles & System Design Write-ups
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base">
            Detailed breakdowns of distributed architecture patterns, Next.js optimization, and production LLM orchestration.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articlesData.map((art) => (
            <div
              key={art.id}
              className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between shadow-xl group hover:-translate-y-1"
            >
              <div>
                {/* Meta header */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-4">
                  <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-cyan-300">
                    {art.category}
                  </span>
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {art.readTime}
                    </span>
                    {art.views && (
                      <span className="flex items-center gap-1 text-zinc-500">
                        <Eye className="w-3 h-3" />
                        {art.views}
                      </span>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-xs sm:text-sm text-zinc-400 leading-relaxed line-clamp-3">
                  {art.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {art.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Read Link */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-zinc-500 font-mono">{art.date}</span>
                <span className="inline-flex items-center gap-1 text-xs font-bold text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
