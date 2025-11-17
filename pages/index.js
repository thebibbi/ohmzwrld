import React from 'react';
import Link from 'next/link';
import { Film, Tv, Camera, ExternalLink } from 'lucide-react';

export default function Home() {
  const demos = [
    {
      name: 'Broadcast Archive',
      path: '/broadcast-archive',
      description: 'Vintage broadcast meets modern production',
      color: '#ff6b35',
      bg: '#1a1612',
      icon: Tv,
      tags: ['Retro', 'VHS', 'Technical'],
      features: ['Film grain effects', 'Scanline overlays', 'Timecode displays']
    },
    {
      name: 'Studio Dark',
      path: '/studio-dark',
      description: 'Intimate recording studio atmosphere',
      color: '#d4af37',
      bg: '#0a0e1a',
      icon: Film,
      tags: ['Audio-First', 'Premium', 'Sophisticated'],
      features: ['Waveform animations', 'Studio aesthetics', 'Gold accents']
    },
    {
      name: 'Cinéma Vérité',
      path: '/cinema-verite',
      description: 'Documentary authenticity meets editorial design',
      color: '#888',
      bg: '#fafafa',
      icon: Camera,
      tags: ['Editorial', 'Festival', 'Authentic'],
      features: ['B&W aesthetics', 'Film texture', 'Festival badges']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;900&display=swap');

        body {
          font-family: 'Inter', sans-serif;
        }

        .gradient-text {
          background: linear-gradient(135deg, #fff 0%, #888 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .demo-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .demo-card:hover {
          transform: translateY(-8px);
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
          transition: left 0.6s;
        }

        .shine-effect:hover::after {
          left: 100%;
        }
      `}</style>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <header className="text-center mb-20">
          <div className="mb-4">
            <div className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-6">
              <span className="text-sm font-medium text-white/60">Portfolio Design Showcase</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 gradient-text leading-tight">
            OHMZWRLD
          </h1>

          <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Three distinct portfolio designs for an audio-visual engineer.
            <br />
            <span className="text-white/50">Choose the aesthetic that best represents your brand.</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-sm text-white/40">
            <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
              ✓ Production Ready
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
              ✓ Fully Responsive
            </div>
            <div className="px-4 py-2 bg-white/5 rounded-full border border-white/10">
              ✓ React + Next.js
            </div>
          </div>
        </header>

        {/* Demos Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {demos.map((demo, idx) => {
            const Icon = demo.icon;
            return (
              <Link
                key={idx}
                href={demo.path}
                className="demo-card shine-effect block bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm hover:bg-white/10 hover:border-white/20 group"
              >
                <div
                  className="h-48 flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${demo.bg} 0%, ${demo.bg}dd 100%)`
                  }}
                >
                  <Icon size={64} style={{ color: demo.color }} className="opacity-80 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-4 right-4">
                    <ExternalLink size={20} className="text-white/30 group-hover:text-white/60 transition-colors" />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-white/90" style={{ color: demo.color }}>
                    {demo.name}
                  </h3>

                  <p className="text-white/60 text-sm mb-4 italic">
                    {demo.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {demo.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2 text-xs text-white/40">
                    {demo.features.map((feature, i) => (
                      <div key={i} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: demo.color }} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform" style={{ color: demo.color }}>
                    View Demo
                    <ExternalLink size={16} className="ml-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Comparison Section */}
        <div className="text-center">
          <div className="inline-block p-8 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Can't Decide?</h2>
            <p className="text-white/60 mb-6 max-w-xl">
              View a side-by-side comparison of all three designs to help you choose the perfect aesthetic for your portfolio.
            </p>
            <a
              href="/comparison.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-slate-950 font-bold rounded-lg hover:bg-white/90 transition-colors"
            >
              <span>View Comparison Page</span>
              <ExternalLink size={20} />
            </a>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-xl font-bold mb-2">Distinct Aesthetics</h3>
            <p className="text-white/60 text-sm">
              Each design offers a unique visual identity tailored to different brand positioning strategies
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-xl font-bold mb-2">Production Ready</h3>
            <p className="text-white/60 text-sm">
              Built with React & Next.js, fully responsive, and optimized for performance
            </p>
          </div>
          <div className="p-6">
            <div className="text-4xl mb-4">🎬</div>
            <h3 className="text-xl font-bold mb-2">Industry Focused</h3>
            <p className="text-white/60 text-sm">
              Designed specifically for audio-visual professionals, filmmakers, and content creators
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-24 pt-8 border-t border-white/10 text-center text-white/40 text-sm">
          <p>OHMZWRLD Portfolio Demos • 2024</p>
          <p className="mt-2">Built with Next.js • React • Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
