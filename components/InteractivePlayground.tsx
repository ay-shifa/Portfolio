'use client';

import React, { useState, useEffect } from 'react';
import { playSound, triggerConfetti } from '@/lib/utils';
import { useTheme } from './ThemeContext';
import { 
  Play, 
  Terminal, 
  Sparkles, 
  Cpu, 
  Zap, 
  RotateCcw, 
  CheckCircle2, 
  Search, 
  Activity,
  Layers,
  Flame
} from 'lucide-react';

export default function InteractivePlayground() {
  const { soundEnabled } = useTheme();
  const [activeTab, setActiveTab] = useState<'agent' | 'rateLimit' | 'vector'>('agent');

  // Tab 1: AI Agent Simulator State
  const [agentRunning, setAgentRunning] = useState(false);
  const [agentLogs, setAgentLogs] = useState<string[]>([]);
  const [agentQuery, setAgentQuery] = useState('Analyze repository performance and generate Redis caching strategy.');
  const [agentStep, setAgentStep] = useState(0);

  // Tab 2: Rate Limiter State
  const [tokens, setTokens] = useState(10);
  const maxTokens = 10;
  const [requestCount, setRequestCount] = useState(0);
  const [rateLimitLogs, setRateLimitLogs] = useState<{ id: number; time: string; status: '200 OK' | '429 Rate Limited'; remaining: number }[]>([]);

  // Tab 3: Vector Semantic Search State
  const [searchQuery, setSearchQuery] = useState('fast distributed database caching');
  const documents = [
    { title: 'Redis In-Memory Key-Value Architecture', tags: ['caching', 'distributed', 'fast', 'in-memory'], relevance: 0.94 },
    { title: 'ClickHouse Columnar Aggregation for Telemetry', tags: ['database', 'analytics', 'columnar', 'high-throughput'], relevance: 0.88 },
    { title: 'Qdrant HNSW Vector Embeddings Search', tags: ['vector', 'semantic', 'embeddings', 'ai'], relevance: 0.79 },
    { title: 'Next.js 14 Streaming Server Components', tags: ['react', 'nextjs', 'ssr', 'frontend'], relevance: 0.45 },
  ];

  // Token bucket refill interval
  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prev) => Math.min(maxTokens, prev + 1));
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  // Run AI Agent DAG Simulator
  const runAgent = () => {
    if (agentRunning) return;
    setAgentRunning(true);
    setAgentLogs([]);
    setAgentStep(0);
    if (soundEnabled) playSound('click');

    const steps = [
      '🚀 Initializing Planner Agent with context window (32k tokens)...',
      '🔍 Querying Qdrant Vector DB for codebase architecture docs...',
      '⚙️ Executing AST Code Parser tool on /lib/cache.ts...',
      '🧠 Agent Reasoning: Detected cold start latency of 420ms on uncached queries.',
      '✨ Synthesizing optimal Redis stale-while-revalidate configuration...',
      '✅ Autonomous execution finished in 284ms. 0 errors.'
    ];

    steps.forEach((log, index) => {
      setTimeout(() => {
        setAgentLogs((prev) => [...prev, log]);
        setAgentStep(index + 1);
        if (soundEnabled) playSound('pop');
        if (index === steps.length - 1) {
          setAgentRunning(false);
          triggerConfetti();
        }
      }, (index + 1) * 700);
    });
  };

  // Simulate Rate Limiter Request
  const fireRequest = () => {
    const now = new Date().toLocaleTimeString();
    if (tokens > 0) {
      setTokens((prev) => prev - 1);
      setRequestCount((prev) => prev + 1);
      if (soundEnabled) playSound('success');
      setRateLimitLogs((prev) => [
        { id: Date.now(), time: now, status: '200 OK', remaining: tokens - 1 },
        ...prev.slice(0, 5)
      ]);
    } else {
      if (soundEnabled) playSound('switch');
      setRateLimitLogs((prev) => [
        { id: Date.now(), time: now, status: '429 Rate Limited', remaining: 0 },
        ...prev.slice(0, 5)
      ]);
    }
  };

  return (
    <section id="playground" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Engineering Sandbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Live Architecture Playground
          </h2>
          <p className="mt-4 text-zinc-400 max-w-2xl text-base">
            Test live simulated microservices, agentic reasoning loops, and distributed caching logic directly in your browser.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl glass-panel border border-white/10 gap-1.5 shadow-lg">
            {[
              { id: 'agent', label: '1. AI Agent Loop Simulator', icon: Cpu },
              { id: 'rateLimit', label: '2. Token Bucket Rate Limiter', icon: Zap },
              { id: 'vector', label: '3. Vector Semantic Matcher', icon: Search },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    if (soundEnabled) playSound('click');
                    setActiveTab(tab.id as 'agent' | 'rateLimit' | 'vector');
                  }}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: AI Agent Simulator */}
        {activeTab === 'agent' && (
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span>Multi-Agent DAG Execution Streamer</span>
                </h3>
                <p className="text-xs text-zinc-400">Simulates real-time tool calling, Qdrant vector retrieval & synthesis.</p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-cyan-300 border border-white/10">
                Model: Claude 3.5 Sonnet + Qdrant
              </span>
            </div>

            {/* Input & Run CTA */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">Agent Goal / Prompt:</label>
                <input
                  type="text"
                  value={agentQuery}
                  onChange={(e) => setAgentQuery(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  onClick={runAgent}
                  disabled={agentRunning}
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-lg ${
                    agentRunning
                      ? 'bg-zinc-800 text-zinc-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:scale-[1.02] shadow-cyan-500/20'
                  }`}
                >
                  <Play className={`w-4 h-4 ${agentRunning ? 'animate-spin' : ''}`} />
                  <span>{agentRunning ? 'Agent Reasoning...' : 'Trigger Autonomous Loop'}</span>
                </button>

                <span className="text-xs font-mono text-zinc-400">
                  DAG Status: <span className={agentRunning ? 'text-amber-400 font-bold' : 'text-emerald-400 font-bold'}>{agentRunning ? 'RUNNING' : 'IDLE'}</span>
                </span>
              </div>

              {/* Real-time Streaming Output Terminal */}
              <div className="mt-4 p-5 rounded-2xl bg-black/80 border border-white/10 font-mono text-xs text-zinc-300 min-h-[180px] flex flex-col justify-between">
                <div className="space-y-2.5">
                  <div className="text-zinc-500 text-[11px] pb-2 border-b border-white/5 flex items-center justify-between">
                    <span>// DAG Execution Stream Output</span>
                    <span>Step {agentStep}/6</span>
                  </div>
                  {agentLogs.length === 0 ? (
                    <div className="text-zinc-500 italic py-6 text-center">
                      Click &quot;Trigger Autonomous Loop&quot; to test real-time agent tool coordination.
                    </div>
                  ) : (
                    agentLogs.map((log, i) => (
                      <div key={i} className="animate-in fade-in slide-in-from-left-2 duration-150">
                        {log}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Rate Limiter Simulator */}
        {activeTab === 'rateLimit' && (
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>Redis Token Bucket Rate Limiter Simulator</span>
                </h3>
                <p className="text-xs text-zinc-400">Simulates sliding window distributed rate limiting (refills +1 token/1.5s).</p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-amber-300 border border-white/10">
                Algorithm: Leaky Token Bucket
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left side: Controls */}
              <div className="md:col-span-5 space-y-5">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/10">
                  <div className="flex justify-between text-xs font-mono text-zinc-300 mb-2">
                    <span>Bucket Tokens:</span>
                    <span className="font-bold text-cyan-400">{tokens} / {maxTokens}</span>
                  </div>
                  <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${tokens > 3 ? 'bg-gradient-to-r from-cyan-400 to-emerald-400' : 'bg-gradient-to-r from-amber-500 to-rose-500'}`}
                      style={{ width: `${(tokens / maxTokens) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-[10px] text-zinc-500 font-mono mt-2">
                    ⚡ Auto-replenishes 1 token every 1.5 seconds
                  </div>
                </div>

                <button
                  onClick={fireRequest}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-400 hover:to-orange-500 text-slate-950 font-extrabold text-sm shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
                >
                  🚀 Fire API Request ($ curl /api/v1/data)
                </button>
              </div>

              {/* Right side: Traffic Log */}
              <div className="md:col-span-7">
                <div className="p-4 rounded-2xl bg-black/80 border border-white/10 font-mono text-xs">
                  <div className="text-zinc-500 text-[11px] pb-2 border-b border-white/10 mb-3 flex items-center justify-between">
                    <span>Recent Traffic Stream</span>
                    <span>Total Sent: {requestCount}</span>
                  </div>
                  <div className="space-y-2 min-h-[140px]">
                    {rateLimitLogs.length === 0 ? (
                      <div className="text-zinc-500 italic py-6 text-center text-xs">
                        Spam the &quot;Fire API Request&quot; button to observe rate limiting in action!
                      </div>
                    ) : (
                      rateLimitLogs.map((log) => (
                        <div key={log.id} className="flex items-center justify-between py-1 border-b border-white/5 text-[11px]">
                          <span className="text-zinc-400">{log.time}</span>
                          <span className={log.status === '200 OK' ? 'text-emerald-400 font-bold' : 'text-rose-400 font-bold'}>
                            {log.status}
                          </span>
                          <span className="text-zinc-500">Remaining: {log.remaining}</span>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Vector Semantic Matcher */}
        {activeTab === 'vector' && (
          <div className="p-6 sm:p-8 rounded-3xl glass-panel border border-white/10 shadow-2xl max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/10 gap-2 mb-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Search className="w-4 h-4 text-purple-400" />
                  <span>Qdrant / pgvector Cosine Similarity Matcher</span>
                </h3>
                <p className="text-xs text-zinc-400">Real-time cosine distance vector ranking simulator.</p>
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-white/5 text-purple-300 border border-white/10">
                Metric: Cosine Similarity (1536 dims)
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-zinc-300 mb-1.5">Search Semantic Query:</label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-purple-400"
                />
              </div>

              {/* Vector Matched Results */}
              <div className="space-y-2.5 pt-2">
                <div className="text-xs font-mono text-zinc-400 mb-2">Nearest Vector Embeddings:</div>
                {documents.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-semibold text-sm text-white">{doc.title}</div>
                      <div className="flex flex-wrap gap-1.5 mt-1">
                        {doc.tags.map((t, i) => (
                          <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-zinc-400">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-sm font-mono font-bold text-purple-400">
                        {(doc.relevance * 100).toFixed(1)}% match
                      </div>
                      <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden mt-1">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-purple-400 to-pink-500"
                          style={{ width: `${doc.relevance * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
