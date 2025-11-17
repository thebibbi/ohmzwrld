import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, Mail, ChevronDown, X, ExternalLink } from 'lucide-react';

export default function StudioDarkPortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Waveform animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width = window.innerWidth;
    const height = canvas.height = 120;
    
    let animationId;
    let phase = 0;
    
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.3)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      for (let x = 0; x < width; x++) {
        const y = height / 2 + Math.sin((x + phase) * 0.02) * 20 * Math.sin(x * 0.005);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.stroke();
      phase += isPlaying ? 2 : 0.5;
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying]);

  const projects = [
    {
      id: 1,
      title: "Echoes of the City",
      category: "documentary",
      year: "2024",
      duration: "42:18",
      role: "Director, Cinematographer, Sound Design",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=500&fit=crop",
      description: "An intimate exploration of urban soundscapes and the stories they tell. Capturing the rhythm of city life through experimental audio techniques.",
      awards: ["Best Documentary Sound Design - Film Festival 2024"]
    },
    {
      id: 2,
      title: "Horizon Launch",
      category: "commercial",
      year: "2024",
      duration: "1:30",
      role: "Director, Audio Mixing, Post Production",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=500&fit=crop",
      description: "Premium automotive brand campaign showcasing innovation through cinematic storytelling and immersive sound design.",
      client: "Premium Automotive Brand"
    },
    {
      id: 3,
      title: "The Last Record Shop",
      category: "documentary",
      year: "2023",
      duration: "56:45",
      role: "Director, Editor, Audio Engineer",
      thumbnail: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=500&fit=crop",
      description: "A love letter to vinyl culture and the keepers of analog sound. Featuring interviews with collectors and shop owners.",
      awards: ["Audience Choice Award", "Best Feature Documentary"]
    },
    {
      id: 4,
      title: "Neon Dreams",
      category: "music-video",
      year: "2024",
      duration: "3:45",
      role: "Director, Cinematographer, Color Grading",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=500&fit=crop",
      description: "Moody, atmospheric visual narrative for emerging electronic artist. Shot on location in Tokyo.",
      artist: "SYNTH//WAVE"
    },
    {
      id: 5,
      title: "Innovation Series",
      category: "commercial",
      year: "2023",
      duration: "5:20",
      role: "Lead Producer, Audio Post",
      thumbnail: "https://images.unsplash.com/photo-1553531384-397c380a6e0c?w=800&h=500&fit=crop",
      description: "Multi-part series for tech company highlighting breakthrough products through compelling storytelling.",
      client: "Tech Innovators Inc."
    },
    {
      id: 6,
      title: "Silent Frequencies",
      category: "documentary",
      year: "2023",
      duration: "38:12",
      role: "Director, Sound Recordist, Editor",
      thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      description: "Environmental documentary exploring the impact of noise pollution on wildlife and human health.",
      awards: ["Environmental Film Award 2023"]
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#0a0e1a] text-[#e8dcc4] relative">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400&family=Oswald:wght@300;400;600&display=swap');
        
        body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        
        .serif-font {
          font-family: 'Crimson Text', serif;
        }
        
        .display-font {
          font-family: 'Oswald', sans-serif;
          letter-spacing: 0.05em;
        }
        
        .studio-glow {
          box-shadow: 0 0 30px rgba(212, 175, 55, 0.15);
        }
        
        .recording-light {
          animation: pulse-red 2s ease-in-out infinite;
        }
        
        @keyframes pulse-red {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px rgba(220, 38, 38, 0.8); }
          50% { opacity: 0.4; box-shadow: 0 0 5px rgba(220, 38, 38, 0.4); }
        }
        
        .waveform-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-wave 2s ease-out forwards;
        }
        
        @keyframes draw-wave {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        .fade-in-slow {
          animation: fadeInSlow 1.2s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInSlow {
          to {
            opacity: 1;
          }
        }
        
        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(40px);
        }
        
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .project-card {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(212, 175, 55, 0.2);
        }
        
        .gold-gradient {
          background: linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%);
          background-size: 200% 200%;
          animation: shimmer 3s ease infinite;
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .db-meter {
          height: 4px;
          background: linear-gradient(90deg, 
            #10b981 0%, 
            #10b981 70%, 
            #fbbf24 70%, 
            #fbbf24 85%, 
            #dc2626 85%, 
            #dc2626 100%);
        }
        
        .parallax {
          transform: translateY(calc(var(--scroll) * 0.5px));
        }
        
        .audio-eq {
          display: flex;
          gap: 3px;
          height: 40px;
          align-items: flex-end;
        }
        
        .eq-bar {
          width: 3px;
          background: linear-gradient(to top, #d4af37, #f4d03f);
          animation: eq-bounce 0.6s ease-in-out infinite;
        }
        
        .eq-bar:nth-child(1) { animation-delay: 0s; }
        .eq-bar:nth-child(2) { animation-delay: 0.1s; }
        .eq-bar:nth-child(3) { animation-delay: 0.2s; }
        .eq-bar:nth-child(4) { animation-delay: 0.3s; }
        .eq-bar:nth-child(5) { animation-delay: 0.4s; }
        
        @keyframes eq-bounce {
          0%, 100% { height: 20%; }
          50% { height: 100%; }
        }
        
        .studio-border {
          border: 1px solid rgba(212, 175, 55, 0.2);
          background: linear-gradient(135deg, rgba(212, 175, 55, 0.05), transparent);
        }
      `}</style>

      {/* Ambient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#12172e] to-[#0a0e1a]" />
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37] rounded-full filter blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#1e40af] rounded-full filter blur-[120px]" />
        </div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0e1a]/90 border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="recording-light w-3 h-3 bg-red-600 rounded-full" />
            <div>
              <div className="text-2xl font-bold display-font text-[#d4af37] tracking-wider">OHMZ</div>
              <div className="text-xs text-[#e8dcc4]/50 serif-font italic">Audio • Visual • Engineer</div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm display-font">
            <a href="#work" className="hover:text-[#d4af37] transition-colors">WORK</a>
            <a href="#about" className="hover:text-[#d4af37] transition-colors">ABOUT</a>
            <a href="#contact" className="px-6 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0e1a] transition-all">
              CONTACT
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-8 fade-in-slow" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center space-x-3 mb-6">
              <div className="audio-eq">
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
                <div className="eq-bar" />
              </div>
            </div>
            
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold display-font text-[#e8dcc4] leading-none mb-6">
              CRAFTING
              <span className="block text-[#d4af37]">STORIES</span>
              <span className="block text-[#e8dcc4]">THROUGH</span>
              <span className="block gold-gradient text-transparent bg-clip-text">SOUND & VISION</span>
            </h1>
          </div>
          
          <div className="slide-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4 serif-font leading-relaxed text-[#e8dcc4]/90">
              Documentary filmmaker and audio engineer specializing in 
              <span className="italic text-[#d4af37]"> end-to-end production</span>.
              <br />
              Every frame meticulously composed. Every sound perfectly balanced.
            </p>
            <p className="text-sm text-[#e8dcc4]/60 display-font">EST. [YEAR] • BASED IN [CITY]</p>
          </div>
          
          <div className="slide-up mt-12 flex flex-col sm:flex-row gap-4 justify-center" style={{ animationDelay: '1s' }}>
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="group px-8 py-4 bg-[#d4af37] text-[#0a0e1a] font-bold display-font hover:bg-[#f4d03f] transition-all flex items-center justify-center space-x-3 studio-glow"
            >
              {isPlaying ? <Pause size={20} /> : <Play size={20} />}
              <span>{isPlaying ? 'PAUSE REEL' : 'PLAY SHOWREEL'}</span>
            </button>
            <a 
              href="#work"
              className="px-8 py-4 border-2 border-[#d4af37] text-[#d4af37] font-bold display-font hover:bg-[#d4af37]/10 transition-all"
            >
              VIEW PROJECTS
            </a>
          </div>
        </div>
        
        {/* Waveform Visualization */}
        <div className="absolute bottom-0 left-0 right-0">
          <canvas ref={canvasRef} className="w-full opacity-50" style={{ height: '120px' }} />
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-[#d4af37]/50" />
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm text-[#d4af37] display-font mb-4">FEATURED PROJECT</div>
              <h2 className="text-5xl md:text-6xl font-bold display-font mb-6">
                LATEST WORK
              </h2>
              <p className="text-lg serif-font leading-relaxed text-[#e8dcc4]/80 mb-6">
                A deep dive into [project description]. This project challenged conventional 
                storytelling through innovative audio techniques and intimate cinematography.
              </p>
              <div className="space-y-3 text-sm mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
                  <span className="text-[#e8dcc4]/60 display-font">ROLE:</span>
                  <span className="serif-font">Director, Cinematographer, Sound Design</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
                  <span className="text-[#e8dcc4]/60 display-font">DURATION:</span>
                  <span className="serif-font">42 minutes</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
                  <span className="text-[#e8dcc4]/60 display-font">AWARD:</span>
                  <span className="serif-font italic">Best Documentary Sound - 2024</span>
                </div>
              </div>
              <button className="px-8 py-3 border border-[#d4af37] text-[#d4af37] display-font hover:bg-[#d4af37] hover:text-[#0a0e1a] transition-all flex items-center space-x-2">
                <span>WATCH FULL PROJECT</span>
                <ExternalLink size={16} />
              </button>
            </div>
            
            <div className="relative group cursor-pointer studio-border overflow-hidden">
              <div className="aspect-video relative">
                <img 
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=675&fit=crop"
                  alt="Featured project"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full border-2 border-[#d4af37] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={32} className="text-[#d4af37] ml-1" />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0a0e1a] to-transparent">
                <div className="db-meter mb-2" />
                <div className="flex justify-between text-xs text-[#e8dcc4]/60 display-font">
                  <span>00:00</span>
                  <span>42:18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="work" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-5xl md:text-6xl font-bold display-font mb-4">SELECTED WORKS</h2>
            <p className="text-lg serif-font text-[#e8dcc4]/70">A curated collection of documentaries, commercials, and creative projects</p>
          </div>
          
          {/* Filter */}
          <div className="flex flex-wrap gap-3 mb-16">
            {['all', 'documentary', 'commercial', 'music-video'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 display-font text-sm transition-all ${
                  activeFilter === filter
                    ? 'bg-[#d4af37] text-[#0a0e1a]'
                    : 'border border-[#d4af37]/30 text-[#e8dcc4] hover:border-[#d4af37]'
                }`}
              >
                {filter.toUpperCase().replace('-', ' ')}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="project-card cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden studio-border mb-4">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4">
                    <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
                  </div>
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] flex items-center justify-center">
                      <Play size={24} className="text-[#d4af37] ml-1" />
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-xs text-[#d4af37] display-font mb-1">{project.year} • {project.duration}</div>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold display-font mb-2 group-hover:text-[#d4af37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm serif-font text-[#e8dcc4]/70">{project.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-2">
              <h2 className="text-5xl md:text-6xl font-bold display-font mb-6 sticky top-32">
                ABOUT THE
                <span className="block text-[#d4af37]">ENGINEER</span>
              </h2>
            </div>
            
            <div className="md:col-span-3 space-y-6 text-lg serif-font leading-relaxed">
              <p>
                With a passion for storytelling that transcends traditional boundaries, I've dedicated 
                my career to the intersection of visual narratives and pristine audio. Every project 
                is an opportunity to push creative limits while maintaining technical excellence.
              </p>
              
              <p>
                My approach is <span className="italic text-[#d4af37]">holistic</span>—from pre-production 
                conceptualization through final color grading and sound mixing. This comprehensive 
                involvement ensures a cohesive vision that resonates with audiences.
              </p>
              
              <p>
                Whether capturing intimate documentary moments or crafting polished commercial content, 
                the philosophy remains constant: <span className="font-bold text-[#d4af37]">authentic storytelling 
                through impeccable craft</span>.
              </p>
              
              <div className="pt-8 border-t border-[#d4af37]/20 mt-8">
                <h3 className="text-xl font-bold display-font mb-6 text-[#d4af37]">CAPABILITIES</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm display-font text-[#e8dcc4]/60 mb-2">PRODUCTION</div>
                    <ul className="space-y-1 text-base">
                      <li>• Documentary Filmmaking</li>
                      <li>• Commercial Production</li>
                      <li>• Cinematography</li>
                      <li>• Directing</li>
                    </ul>
                  </div>
                  <div>
                    <div className="text-sm display-font text-[#e8dcc4]/60 mb-2">POST-PRODUCTION</div>
                    <ul className="space-y-1 text-base">
                      <li>• Audio Engineering</li>
                      <li>• Sound Design</li>
                      <li>• Color Grading</li>
                      <li>• Final Mix</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="studio-border p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <div className="recording-light w-3 h-3 bg-red-600 rounded-full" />
                <span className="text-sm text-[#d4af37] display-font">AVAILABLE FOR PROJECTS</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold display-font mb-6">
                LET'S CREATE
                <span className="block text-[#d4af37]">TOGETHER</span>
              </h2>
              <p className="text-lg serif-font text-[#e8dcc4]/80 max-w-2xl mx-auto">
                Whether you have a story that needs telling or a vision that requires technical 
                expertise, I'm here to bring it to life.
              </p>
            </div>
            
            <div className="space-y-4 mb-8">
              <a 
                href="mailto:contact@ohmzwrld.com" 
                className="block text-2xl serif-font text-[#d4af37] hover:text-[#f4d03f] transition-colors"
              >
                contact@ohmzwrld.com
              </a>
              <div className="flex justify-center space-x-6 text-sm display-font">
                <a href="#" className="hover:text-[#d4af37] transition-colors">INSTAGRAM</a>
                <span className="text-[#e8dcc4]/30">•</span>
                <a href="#" className="hover:text-[#d4af37] transition-colors">VIMEO</a>
                <span className="text-[#e8dcc4]/30">•</span>
                <a href="#" className="hover:text-[#d4af37] transition-colors">LINKEDIN</a>
              </div>
            </div>
            
            <button className="px-12 py-4 bg-[#d4af37] text-[#0a0e1a] font-bold display-font hover:bg-[#f4d03f] transition-all studio-glow">
              START A CONVERSATION
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4af37]/20 py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm serif-font text-[#e8dcc4]/40">
            © 2024 OHMZWRLD. All rights reserved.
          </div>
          <div className="flex items-center space-x-3">
            <div className="recording-light w-2 h-2 bg-red-600 rounded-full" />
            <span className="text-xs text-[#e8dcc4]/40 display-font">STUDIO ACTIVE</span>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-[#0a0e1a]/98 backdrop-blur-sm z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="max-w-5xl w-full bg-[#12172e] studio-border p-8 md:p-12 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-8">
              <div>
                <div className="text-sm text-[#d4af37] display-font mb-2">
                  {selectedProject.year} • {selectedProject.duration}
                </div>
                <h3 className="text-4xl font-bold display-font mb-2">{selectedProject.title}</h3>
                <p className="text-lg serif-font text-[#e8dcc4]/70">{selectedProject.role}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-[#d4af37] hover:text-[#e8dcc4] transition-colors"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="aspect-video bg-black studio-border mb-8">
              <img 
                src={selectedProject.thumbnail} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6 serif-font text-lg leading-relaxed">
              <p>{selectedProject.description}</p>
              
              {selectedProject.awards && (
                <div>
                  <h4 className="display-font text-[#d4af37] mb-3">AWARDS & RECOGNITION</h4>
                  <ul className="space-y-2">
                    {selectedProject.awards.map((award, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#d4af37] rounded-full" />
                        <span>{award}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {selectedProject.client && (
                <div>
                  <span className="display-font text-[#e8dcc4]/60">CLIENT: </span>
                  <span className="text-[#d4af37]">{selectedProject.client}</span>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex gap-4">
              <button className="flex-1 py-3 border border-[#d4af37] text-[#d4af37] display-font hover:bg-[#d4af37] hover:text-[#0a0e1a] transition-all flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>WATCH FULL PROJECT</span>
              </button>
              <button 
                onClick={() => setSelectedProject(null)}
                className="px-8 py-3 border border-[#e8dcc4]/30 text-[#e8dcc4] display-font hover:border-[#e8dcc4] transition-all"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
