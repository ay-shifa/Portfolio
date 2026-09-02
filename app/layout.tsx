import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeContext';

export const metadata: Metadata = {
  title: 'Alex Vance — Senior Full-Stack Engineer & AI Systems Architect',
  description: 'Portfolio of Alex Vance: Senior Full-Stack Software Engineer & AI Systems Architect specializing in Next.js 14, TypeScript, Python FastAPI, Vector Search, and resilient distributed cloud infrastructure.',
  keywords: [
    'Full-Stack Developer',
    'Next.js Portfolio',
    'AI Architect',
    'TypeScript',
    'React 19',
    'FastAPI',
    'Software Engineer Portfolio',
    'Distributed Systems'
  ],
  authors: [{ name: 'Alex Vance' }],
  openGraph: {
    title: 'Alex Vance — Senior Full-Stack Engineer & AI Systems Architect',
    description: 'High-performance web applications, intelligent AI workflows, and resilient cloud architectures.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased selection:bg-cyan-500 selection:text-slate-950 bg-[#0b0f17] text-slate-100 min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
