import React, { useState, useEffect } from 'react';
import { Film, Play, Mic, Mail, Menu, X } from 'lucide-react';

export default function BroadcastArchivePortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Urban Voices",
      category: "documentary",
      year: "2024",
      role: "Director / Audio Engineer",
      thumbnail: "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "A documentary exploring street musicians in metropolitan cities"
    },
    {
      id: 2,
      title: "Brand Launch",
      category: "commercial",
      year: "2024",
      role: "Audio Mixing / Post Production",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Commercial campaign for emerging tech startup"
    },
    {
      id: 3,
      title: "Echoes of Silence",
      category: "documentary",
      year: "2023",
      role: "Director / Cinematographer / Sound Design",
      thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&h=600&fit=crop",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Environmental documentary on noise pollution"
    },
    {
      id: 4,
      title: "Rhythm Nation",
      category: "music-video",
      year: "2024",
      role: "Director / Editor / Audio Engineer",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Music video for independent hip-hop artist"
    },
    {
      id: 5,
      title: "Corporate Vision",
      category: "commercial",
      year: "2023",
      role: "Post Production / Sound Mixing",
      thumbnail: "https://images.unsplash.com/photo-1553531384-397c380a6e0c?w=800&h=600&fit=crop",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Internal communications video for Fortune 500 company"
    },
    {
      id: 6,
      title: "The Last Frame",
      category: "documentary",
      year: "2023",
      role: "Director / Cinematographer / Audio",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&h=600&fit=crop",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      description: "Documentary about vintage cinema preservation"
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#1a1612] text-[#f5e6d3] font-mono overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Courier+Prime:wght@400;700&family=Major+Mono+Display&display=swap');
        
        body {
          margin: 0;
          padding: 0;
        }
        
        .broadcast-font {
          font-family: 'Courier Prime', monospace;
        }
        
        .display-font {
          font-family: 'Major Mono Display', monospace;
        }
        
        .film-grain {
          background-image: 
            repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.1) 0px,
              rgba(0, 0, 0, 0.1) 1px,
              transparent 1px,
              transparent 2px
            );
          animation: grain 0.3s steps(1) infinite;
        }
        
        @keyframes grain {
          0%, 100% { background-position: 0 0; }
          10% { background-position: -5% -10%; }
          20% { background-position: -15% 5%; }
          30% { background-position: 7% -25%; }
          40% { background-position: 20% 25%; }
          50% { background-position: -25% 10%; }
          60% { background-position: 15% -25%; }
          70% { background-position: 0% 15%; }
          80% { background-position: 25% -10%; }
          90% { background-position: -10% 5%; }
        }
        
        .scanline {
          background: linear-gradient(
            to bottom,
            transparent 50%,
            rgba(245, 230, 211, 0.02) 50%
          );
          background-size: 100% 4px;
          animation: scanline 10s linear infinite;
        }
        
        @keyframes scanline {
          0% { background-position: 0 0; }
          100% { background-position: 0 100%; }
        }
        
        .countdown-circle {
          border: 3px solid #ff6b35;
          animation: countdown-pulse 2s ease-in-out infinite;
        }
        
        @keyframes countdown-pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        
        .tape-marker {
          position: relative;
        }
        
        .tape-marker::before {
          content: '';
          position: absolute;
          left: -10px;
          top: 50%;
          width: 4px;
          height: 60%;
          background: #ff6b35;
          transform: translateY(-50%);
        }
        
        .vhs-hover {
          transition: all 0.3s ease;
        }
        
        .vhs-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(255, 107, 53, 0.3);
        }
        
        .tracking-effect {
          position: relative;
          overflow: hidden;
        }
        
        .tracking-effect::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 107, 53, 0.1),
            transparent
          );
          animation: tracking 3s ease-in-out infinite;
        }
        
        @keyframes tracking {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .timecode {
          font-variant-numeric: tabular-nums;
          letter-spacing: 0.1em;
        }
        
        .rec-light {
          animation: blink 1.5s ease-in-out infinite;
        }
        
        @keyframes blink {
          0%, 49%, 100% { opacity: 1; }
          50%, 99% { opacity: 0.3; }
        }
      `}</style>

      {/* Film Grain & Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none film-grain scanline z-50" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 broadcast-font">
        <div className="bg-[#1a1612]/95 backdrop-blur-sm border-b-2 border-[#ff6b35]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="countdown-circle w-10 h-10 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-[#ff6b35] rounded-full rec-light" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#ff6b35] display-font tracking-wider">OHMZ</div>
                <div className="text-xs text-[#f5e6d3]/60 timecode">WRLD://ARCHIVE</div>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-8 text-sm">
              <a href="#work" className="hover:text-[#ff6b35] transition-colors">[ WORK ]</a>
              <a href="#about" className="hover:text-[#ff6b35] transition-colors">[ ABOUT ]</a>
              <a href="#contact" className="hover:text-[#ff6b35] transition-colors">[ CONTACT ]</a>
            </div>
            
            <button 
              className="md:hidden text-[#ff6b35]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-[#1a1612] border-b-2 border-[#ff6b35] animate-fadeIn">
            <div className="px-6 py-4 space-y-3">
              <a href="#work" className="block hover:text-[#ff6b35]" onClick={() => setIsMenuOpen(false)}>[ WORK ]</a>
              <a href="#about" className="block hover:text-[#ff6b35]" onClick={() => setIsMenuOpen(false)}>[ ABOUT ]</a>
              <a href="#contact" className="block hover:text-[#ff6b35]" onClick={() => setIsMenuOpen(false)}>[ CONTACT ]</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative pt-20 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1612] to-[#1a1612]" />
        
        <div className="max-w-6xl mx-auto text-center relative z-10 space-y-8">
          <div className={`space-y-4 ${isLoaded ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.2s' }}>
            <div className="inline-block border-2 border-[#ff6b35] px-4 py-2 mb-4">
              <span className="text-[#ff6b35] text-sm timecode">TC: 00:00:00:00</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold display-font tracking-tight text-[#ff6b35] leading-none">
              AUDIO<br/>
              <span className="text-[#f5e6d3]">VISUAL</span><br/>
              ENGINEER
            </h1>
            
            <div className="flex items-center justify-center space-x-4 text-sm">
              <span className="tape-marker pl-4">DOCUMENTARY</span>
              <span className="text-[#ff6b35]">//</span>
              <span className="tape-marker pl-4">COMMERCIAL</span>
              <span className="text-[#ff6b35]">//</span>
              <span className="tape-marker pl-4">AUDIO MIXING</span>
            </div>
          </div>
          
          <div className={`${isLoaded ? 'fade-in-up' : ''}`} style={{ animationDelay: '0.6s' }}>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-[#f5e6d3]/80 broadcast-font">
              End-to-end production specialist bringing stories to life through 
              <span className="text-[#ff6b35]"> cinematic vision</span> and
              <span className="text-[#ff6b35]"> pristine audio</span>. 
              From concept to final cut, every frame matters.
            </p>
          </div>
          
          <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isLoaded ? 'fade-in-up' : ''}`} style={{ animationDelay: '1s' }}>
            <a 
              href="#work"
              className="border-2 border-[#ff6b35] bg-[#ff6b35] text-[#1a1612] px-8 py-3 font-bold hover:bg-transparent hover:text-[#ff6b35] transition-all duration-300"
            >
              [ VIEW ARCHIVE ]
            </a>
            <a 
              href="#contact"
              className="border-2 border-[#f5e6d3] text-[#f5e6d3] px-8 py-3 font-bold hover:border-[#ff6b35] hover:text-[#ff6b35] transition-all duration-300"
            >
              [ INQUIRIES ]
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 tracking-effect">
          <div className="text-xs text-[#f5e6d3]/40 timecode">SCROLL_TO_CONTINUE //</div>
        </div>
      </section>

      {/* Featured Showreel */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-[#ff6b35] rounded-full rec-light" />
              <span className="text-sm text-[#ff6b35] timecode">LIVE_FEED</span>
            </div>
            <div className="h-px flex-1 bg-gradient-to-r from-[#ff6b35] to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 display-font text-[#ff6b35]">DEMO_REEL.MP4</h2>
          
          <div className="relative aspect-video bg-black border-4 border-[#ff6b35] overflow-hidden group">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1612] to-black">
              <div className="text-center space-y-4">
                <Play size={64} className="mx-auto text-[#ff6b35] opacity-80 group-hover:opacity-100 transition-opacity" />
                <p className="text-[#f5e6d3]/60 text-sm timecode">CLICK_TO_PLAY</p>
              </div>
            </div>
            {/* Replace with actual video embed */}
            <img 
              src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=1200&h=675&fit=crop" 
              alt="Showreel thumbnail"
              className="w-full h-full object-cover opacity-40"
            />
          </div>
          
          <div className="mt-4 flex justify-between text-xs text-[#f5e6d3]/40 timecode">
            <span>DURATION: 02:34:16</span>
            <span>FORMAT: 4K_ProRes_422</span>
          </div>
        </div>
      </section>

      {/* Projects Archive */}
      <section id="work" className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 flex items-center space-x-4">
            <div className="h-px w-12 bg-[#ff6b35]" />
            <span className="text-sm text-[#ff6b35] timecode">PROJECT_ARCHIVE</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#ff6b35] to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12 display-font">SELECTED_WORKS</h2>
          
          {/* Filter */}
          <div className="flex flex-wrap gap-4 mb-12 broadcast-font text-sm">
            {['all', 'documentary', 'commercial', 'music-video'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 border-2 transition-all duration-300 ${
                  activeFilter === filter
                    ? 'border-[#ff6b35] bg-[#ff6b35] text-[#1a1612]'
                    : 'border-[#f5e6d3]/30 text-[#f5e6d3] hover:border-[#ff6b35] hover:text-[#ff6b35]'
                }`}
              >
                [ {filter.toUpperCase().replace('-', '_')} ]
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className="vhs-hover cursor-pointer group"
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative aspect-[4/3] overflow-hidden border-2 border-[#f5e6d3]/20 group-hover:border-[#ff6b35] transition-colors">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  
                  <div className="absolute top-4 left-4 flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#ff6b35] rounded-full rec-light" />
                    <span className="text-xs text-[#f5e6d3] timecode">REC</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1">
                    <div className="text-xs text-[#ff6b35] timecode">{project.year} // {project.category.toUpperCase()}</div>
                    <h3 className="text-xl font-bold display-font">{project.title}</h3>
                    <p className="text-sm text-[#f5e6d3]/80">{project.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex items-center space-x-4">
            <div className="h-px w-12 bg-[#ff6b35]" />
            <span className="text-sm text-[#ff6b35] timecode">PROFILE_DATA</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#ff6b35] to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12 display-font">ABOUT_ENGINEER</h2>
          
          <div className="space-y-6 text-lg leading-relaxed broadcast-font">
            <p className="tape-marker pl-6">
              With over [X] years of experience in audiovisual production, I specialize in 
              creating compelling documentaries and commercial content that resonates with 
              audiences. My approach combines technical precision with creative storytelling.
            </p>
            
            <p className="tape-marker pl-6">
              From pre-production planning through final delivery, I handle every aspect of 
              the creative process—cinematography, directing, audio engineering, and 
              post-production. This comprehensive skillset ensures cohesive vision and 
              exceptional quality across all projects.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mt-12 pt-12 border-t-2 border-[#ff6b35]">
              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-4 display-font">EXPERTISE</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>Documentary Filmmaking</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>Commercial Production</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>Audio Engineering & Mixing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>Cinematography & Lighting</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>Post-Production & Color Grading</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-[#ff6b35] mb-4 display-font">TOOLS</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>Adobe Premiere Pro / DaVinci Resolve</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>Pro Tools / Logic Pro X</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>After Effects / Motion Graphics</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="text-[#ff6b35]">></span>
                    <span>Cinema Cameras & Professional Audio Gear</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 flex items-center space-x-4">
            <div className="h-px w-12 bg-[#ff6b35]" />
            <span className="text-sm text-[#ff6b35] timecode">TRANSMISSION</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#ff6b35] to-transparent" />
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-12 display-font">START_PROJECT</h2>
          
          <div className="border-2 border-[#ff6b35] p-8 bg-[#1a1612]/50">
            <p className="text-lg mb-8 broadcast-font">
              Ready to bring your vision to life? Let's discuss your next project.
            </p>
            
            <div className="space-y-6 broadcast-font">
              <div>
                <label className="block text-sm text-[#ff6b35] mb-2 timecode">NAME:</label>
                <input 
                  type="text"
                  className="w-full bg-transparent border-2 border-[#f5e6d3]/30 px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label className="block text-sm text-[#ff6b35] mb-2 timecode">EMAIL:</label>
                <input 
                  type="email"
                  className="w-full bg-transparent border-2 border-[#f5e6d3]/30 px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors"
                  placeholder="your.email@domain.com"
                />
              </div>
              
              <div>
                <label className="block text-sm text-[#ff6b35] mb-2 timecode">PROJECT_TYPE:</label>
                <select className="w-full bg-[#1a1612] border-2 border-[#f5e6d3]/30 px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors">
                  <option>Documentary</option>
                  <option>Commercial</option>
                  <option>Music Video</option>
                  <option>Audio Mixing Only</option>
                  <option>Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm text-[#ff6b35] mb-2 timecode">MESSAGE:</label>
                <textarea 
                  rows="5"
                  className="w-full bg-transparent border-2 border-[#f5e6d3]/30 px-4 py-3 focus:border-[#ff6b35] outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button className="w-full border-2 border-[#ff6b35] bg-[#ff6b35] text-[#1a1612] px-8 py-4 font-bold hover:bg-transparent hover:text-[#ff6b35] transition-all duration-300">
                [ SEND_MESSAGE ]
              </button>
            </div>
          </div>
          
          <div className="mt-12 text-center space-y-4 broadcast-font">
            <p className="text-[#f5e6d3]/60 text-sm timecode">ALTERNATIVE_CHANNELS:</p>
            <div className="flex justify-center space-x-8">
              <a href="mailto:contact@ohmzwrld.com" className="hover:text-[#ff6b35] transition-colors">
                EMAIL_DIRECT
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                INSTAGRAM
              </a>
              <a href="#" className="hover:text-[#ff6b35] transition-colors">
                VIMEO
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-2 border-[#ff6b35] py-8 px-6 mt-20">
        <div className="max-w-7xl mx-auto broadcast-font text-center text-sm text-[#f5e6d3]/40 timecode">
          <p>© 2024 OHMZWRLD // ALL_RIGHTS_RESERVED</p>
          <p className="mt-2">END_OF_TRANSMISSION //</p>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="max-w-5xl w-full bg-[#1a1612] border-4 border-[#ff6b35] p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-xs text-[#ff6b35] timecode mb-2">
                  {selectedProject.year} // {selectedProject.category.toUpperCase()}
                </div>
                <h3 className="text-3xl font-bold display-font">{selectedProject.title}</h3>
                <p className="text-sm text-[#f5e6d3]/80 mt-2">{selectedProject.role}</p>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-[#ff6b35] hover:text-[#f5e6d3] transition-colors"
              >
                <X size={32} />
              </button>
            </div>
            
            <div className="aspect-video bg-black mb-6 border-2 border-[#ff6b35]">
              <img 
                src={selectedProject.thumbnail} 
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            <p className="text-lg broadcast-font mb-6">{selectedProject.description}</p>
            
            <button 
              onClick={() => setSelectedProject(null)}
              className="border-2 border-[#ff6b35] text-[#ff6b35] px-8 py-3 font-bold hover:bg-[#ff6b35] hover:text-[#1a1612] transition-all duration-300 broadcast-font"
            >
              [ CLOSE ]
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
