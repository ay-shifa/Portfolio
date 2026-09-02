'use client';

import React from 'react';
import { developerProfile, experienceData, skillCategories } from '@/data/portfolio-data';
import { playSound } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  X, 
  Printer, 
  Download, 
  Mail, 
  MapPin, 
  Globe, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award,
  CheckCircle2
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const { soundEnabled } = useTheme();

  if (!isOpen) return null;

  const handlePrint = () => {
    if (soundEnabled) playSound('click');
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto glass-panel rounded-3xl border border-white/20 p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Floating Action Controls */}
        <div className="sticky top-0 z-20 flex items-center justify-between pb-4 mb-6 border-b border-white/10 bg-[#0b0f17]/90 backdrop-blur-md -mt-2 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-md transition-all"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
          </div>

          <button
            onClick={() => {
              if (soundEnabled) playSound('click');
              onClose();
            }}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Printable Resume Container */}
        <div className="space-y-8 text-zinc-300" id="printable-resume">
          
          {/* Header */}
          <div className="border-b border-white/10 pb-6">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {developerProfile.name}
            </h1>
            <p className="text-lg font-semibold text-cyan-400 mt-1">
              {developerProfile.title}
            </p>
            <div className="flex flex-wrap gap-4 mt-3 text-xs text-zinc-400 font-mono">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                {developerProfile.location}
              </span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                {developerProfile.contact.email}
              </span>
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                alexvance.dev
              </span>
            </div>
          </div>

          {/* Executive Summary */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Executive Summary</span>
            </h2>
            <p className="text-sm leading-relaxed text-zinc-300">
              Senior Full-Stack Software Engineer with 6+ years of expertise designing and scaling distributed web applications, multi-agent LLM systems, and high-performance frontend interfaces using Next.js 14, TypeScript, Python FastAPI, PostgreSQL, and modern Cloud infrastructure. Proven track record of reducing system latency by 65%, shipping 38+ production projects, and maintaining 99.98% uptime.
            </p>
          </div>

          {/* Technical Competencies Matrix */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Core Technical Competencies</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="font-bold text-white block mb-1">Frontend & Frameworks:</span>
                <span className="text-zinc-400">Next.js (App Router/SSR/ISR), React 18/19, TypeScript, Tailwind CSS, Framer Motion, Zustand, TanStack Query</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="font-bold text-white block mb-1">Backend & Microservices:</span>
                <span className="text-zinc-400">Node.js, Express, Fastify, Python (FastAPI), Go (Golang), REST, GraphQL, gRPC, WebSockets</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="font-bold text-white block mb-1">AI, LLMs & Vector Search:</span>
                <span className="text-zinc-400">LangChain, LlamaIndex, Qdrant, pgvector, OpenAI / Anthropic APIs, Prompt Fine-tuning, RAG Architectures</span>
              </div>
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <span className="font-bold text-white block mb-1">Databases, Cloud & DevOps:</span>
                <span className="text-zinc-400">PostgreSQL, Prisma, Redis, ClickHouse, Docker, Kubernetes, AWS (ECS, S3, RDS, Lambda), GitHub Actions CI/CD</span>
              </div>
            </div>
          </div>

          {/* Professional Work Experience */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </h2>
            <div className="space-y-6">
              {experienceData.map((exp) => (
                <div key={exp.id} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                    <h3 className="text-base font-bold text-white">{exp.role}</h3>
                    <span className="text-xs font-mono text-cyan-400">{exp.period}</span>
                  </div>
                  <div className="text-xs font-medium text-zinc-400 mb-3">
                    {exp.company} &bull; {exp.location}
                  </div>
                  <div className="space-y-1.5 text-xs">
                    {exp.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-zinc-300">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Honors */}
          <div>
            <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Education & Certifications</span>
            </h2>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
              <div>
                <div className="font-bold text-white text-sm">B.S. in Computer Science & Distributed Systems</div>
                <div className="text-zinc-400">University of California, Berkeley &bull; Magna Cum Laude</div>
              </div>
              <span className="text-zinc-500 font-mono">2015 — 2019</span>
            </div>
          </div>

        </div>

        {/* Modal Close Button */}
        <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
          <button
            onClick={() => {
              if (soundEnabled) playSound('click');
              onClose();
            }}
            className="px-5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
          >
            Close Resume
          </button>
        </div>

      </div>
    </div>
  );
}
