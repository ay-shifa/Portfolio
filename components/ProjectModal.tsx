'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import { playSound } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  X, 
  ExternalLink, 
  Github, 
  Layers, 
  CheckCircle2, 
  Cpu, 
  Zap, 
  ShieldCheck,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { soundEnabled } = useTheme();

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass-panel rounded-3xl border border-white/20 p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={() => {
            if (soundEnabled) playSound('click');
            onClose();
          }}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header Banner */}
        <div className={`p-6 sm:p-8 rounded-2xl bg-gradient-to-r ${project.previewGradient} text-white mb-6 shadow-lg relative overflow-hidden`}>
          <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 transform skew-x-12"></div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/30 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Case Study</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
            {project.title}
          </h3>
          <p className="text-white/90 text-sm sm:text-base mt-2 max-w-2xl font-medium">
            {project.tagline}
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
          {project.metrics.map((m, idx) => (
            <div key={idx} className="p-4 rounded-2xl bg-white/5 border border-white/10 text-center">
              <div className="text-xl sm:text-2xl font-extrabold text-cyan-400">
                {m.value}
              </div>
              <div className="text-xs text-zinc-400 font-medium mt-1">
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Content */}
        <div className="space-y-6 text-sm sm:text-base">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-2">
              Overview & Problem Statement
            </h4>
            <p className="text-zinc-300 leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Innovations */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3">
              Key Engineering Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.highlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-xs sm:text-sm text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Breakdown */}
          {project.architecture && (
            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 mb-3">
                Architectural Breakdown
              </h4>
              <div className="space-y-2 font-mono text-xs p-4 rounded-2xl bg-black/60 border border-white/10 text-zinc-300">
                {project.architecture.map((layer, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <span className="text-cyan-400 font-bold">&gt;</span>
                    <span>{layer}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tags */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-zinc-300">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-md transition-colors"
            >
              <span>Live Application</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-medium transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>Source Repository</span>
            </a>
          </div>

          <button
            onClick={() => {
              if (soundEnabled) playSound('click');
              onClose();
            }}
            className="px-4 py-2 rounded-xl text-zinc-400 hover:text-white text-sm font-medium transition-colors"
          >
            Back to Catalog
          </button>
        </div>

      </div>
    </div>
  );
}
