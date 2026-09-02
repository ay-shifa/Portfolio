'use client';

import React, { useState } from 'react';
import { developerProfile, faqData } from '@/data/portfolio-data';
import { playSound, triggerConfetti } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  MessageSquare, 
  Linkedin, 
  Github, 
  Twitter, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  MapPin,
  Calendar
} from 'lucide-react';

export default function Contact() {
  const { soundEnabled } = useTheme();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subjectType: 'Full-Time Engineering Role',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const subjectOptions = [
    'Full-Time Engineering Role',
    'AI / Next.js Consulting',
    'MVP Architecture (0 to 1)',
    'Quick Tech Chat / Coffee'
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(developerProfile.contact.email);
    setCopiedEmail(true);
    if (soundEnabled) playSound('success');
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    if (soundEnabled) playSound('click');

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      if (soundEnabled) playSound('success');
      triggerConfetti();
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Let&apos;s Connect</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Start a Conversation
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base">
            Have an open role, an ambitious project, or an engineering challenge? I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-xl">
              <h3 className="text-xl font-bold text-white mb-2">Direct Channel</h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Feel free to email me directly. I usually respond within 12-24 hours.
              </p>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span className="text-xs sm:text-sm font-mono text-zinc-200 truncate">
                    {developerProfile.contact.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-zinc-300 hover:text-white transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Status Indicator */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Status: Open to Full-Time & Select Consulting</span>
                </div>
                <div className="flex items-center gap-2 text-zinc-400">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Timezone: {developerProfile.timezone} ({developerProfile.location})</span>
                </div>
              </div>
            </div>

            {/* Social Channels */}
            <div className="p-6 rounded-3xl glass-panel border border-white/10">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">
                Online Profiles & Network
              </div>
              <div className="grid grid-cols-2 gap-3">
                {developerProfile.socials.map((s, idx) => (
                  <a
                    key={idx}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-cyan-500/30 flex items-center gap-2.5 text-xs text-zinc-300 hover:text-white transition-all"
                  >
                    <span className="text-cyan-400 font-bold">{s.name.slice(0, 2)}</span>
                    <span className="truncate">{s.name}</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form & FAQ */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Form */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 flex items-center justify-center mx-auto">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Thank you for reaching out, {formState.name}! I will review your note and get back to you promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({ name: '', email: '', subjectType: 'Full-Time Engineering Role', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="text-lg font-bold text-white mb-2">Send a Message</div>

                  {/* Project / Subject Type Selector */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-2">
                      Inquiry Category:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {subjectOptions.map((opt) => (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setFormState({ ...formState, subjectType: opt })}
                          className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all ${
                            formState.subjectType === opt
                              ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                              : 'bg-white/5 text-zinc-400 hover:text-white border border-white/5'
                          }`}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Elon / Jane Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-300 mb-1.5">
                      Message / Project Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about the role or project scope, timelines, and technical requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-black/40 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-extrabold text-sm shadow-xl shadow-cyan-500/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="inline-block animate-spin">⚡</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Dispatch Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Frequently Asked Questions Accordion */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 space-y-4">
              <div className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-2">
                Frequently Asked Questions
              </div>

              <div className="space-y-3">
                {faqData.map((faq, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div key={idx} className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden">
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full p-4 flex items-center justify-between text-left text-xs sm:text-sm font-semibold text-zinc-200 hover:text-white"
                      >
                        <span>{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" /> : <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-white/5 pt-3 animate-in fade-in duration-150">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
