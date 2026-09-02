'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import InteractivePlayground from '@/components/InteractivePlayground';
import Testimonials from '@/components/Testimonials';
import Articles from '@/components/Articles';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import CommandPalette from '@/components/CommandPalette';
import ResumeModal from '@/components/ResumeModal';

export default function Home() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <main className="min-h-screen relative bg-grid-pattern selection:bg-cyan-400 selection:text-slate-950">
      {/* Top Floating Glass Navigation */}
      <Navbar
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Hero Section */}
      <Hero
        onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* About Section */}
      <About />

      {/* Projects Showcase */}
      <Projects />

      {/* Skills & Capabilities Matrix */}
      <Skills />

      {/* Work & Career Timeline */}
      <Experience />

      {/* Interactive Live Architecture Sandbox */}
      <InteractivePlayground />

      {/* Peer & Client Endorsements */}
      <Testimonials />

      {/* Technical Articles & Engineering Guides */}
      <Articles />

      {/* Contact & FAQ */}
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Interactive Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </main>
  );
}
