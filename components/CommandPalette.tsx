'use client';

import React, { useState, useEffect } from 'react';
import { projectsData, skillCategories } from '@/data/portfolio-data';
import { playSound, triggerConfetti } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  Search, 
  Terminal, 
  Sparkles, 
  ArrowRight, 
  FolderGit2, 
  FileText, 
  Palette, 
  Volume2, 
  User, 
  Briefcase, 
  Mail, 
  X,
  Zap,
  Check
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResumeModal }: CommandPaletteProps) {
  const { theme, toggleTheme, soundEnabled, toggleSound } = useTheme();
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
          setQuery('');
          setSelectedIndex(0);
          if (soundEnabled) playSound('pop');
        }
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, soundEnabled, onClose]);

  if (!isOpen) return null;

  const quickActions = [
    {
      id: 'nav-projects',
      title: 'Explore Projects Catalog',
      category: 'Navigation',
      icon: <FolderGit2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-skills',
      title: 'View Skills & Tech Matrix',
      category: 'Navigation',
      icon: <Zap className="w-4 h-4 text-amber-400" />,
      action: () => {
        document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-sandbox',
      title: 'Launch Live Architecture Sandbox',
      category: 'Interactive',
      icon: <Terminal className="w-4 h-4 text-purple-400" />,
      action: () => {
        document.getElementById('playground')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'nav-experience',
      title: 'Career & Work Experience Timeline',
      category: 'Navigation',
      icon: <Briefcase className="w-4 h-4 text-emerald-400" />,
      action: () => {
        document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    },
    {
      id: 'action-resume',
      title: 'Open / Download Resume CV',
      category: 'Quick Action',
      icon: <FileText className="w-4 h-4 text-blue-400" />,
      action: () => {
        onClose();
        onOpenResumeModal();
      }
    },
    {
      id: 'action-theme',
      title: `Cycle Theme (Current: ${theme})`,
      category: 'Preferences',
      icon: <Palette className="w-4 h-4 text-pink-400" />,
      action: () => {
        toggleTheme();
      }
    },
    {
      id: 'action-sound',
      title: `Toggle Audio Effects (${soundEnabled ? 'Enabled' : 'Muted'})`,
      category: 'Preferences',
      icon: <Volume2 className="w-4 h-4 text-cyan-400" />,
      action: () => {
        toggleSound();
      }
    },
    {
      id: 'action-confetti',
      title: 'Celebrate with Confetti 🎉',
      category: 'Fun',
      icon: <Sparkles className="w-4 h-4 text-yellow-400" />,
      action: () => {
        triggerConfetti();
        if (soundEnabled) playSound('success');
      }
    },
    {
      id: 'nav-contact',
      title: 'Contact / Hire Alex Vance',
      category: 'Navigation',
      icon: <Mail className="w-4 h-4 text-rose-400" />,
      action: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        onClose();
      }
    }
  ];

  const filtered = quickActions.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action: () => void) => {
    if (soundEnabled) playSound('click');
    action();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="w-full max-w-xl rounded-3xl glass-panel border border-white/20 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Type a command or search..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-zinc-500 focus:outline-none"
          />
          <kbd className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-zinc-400 shrink-0">ESC to exit</kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-zinc-400 font-mono">
              No matching commands found.
            </div>
          ) : (
            filtered.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => handleSelect(item.action)}
                className={`w-full p-3 rounded-2xl flex items-center justify-between text-left transition-colors ${
                  idx === selectedIndex ? 'bg-cyan-500/20 text-cyan-300' : 'hover:bg-white/5 text-zinc-300'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-semibold">{item.title}</div>
                    <div className="text-[10px] text-zinc-500 font-mono">{item.category}</div>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-500" />
              </button>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-black/40 border-t border-white/10 flex items-center justify-between text-[11px] text-zinc-400 font-mono">
          <span>Navigate with mouse or enter</span>
          <span className="text-cyan-400">Alex Vance &bull; Portfolio 2026</span>
        </div>
      </div>
    </div>
  );
}
