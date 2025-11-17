import React, { useState, useEffect } from 'react';
import { Film, Camera, Mic2, Play, X, ChevronRight, Award } from 'lucide-react';

export default function CinemaVeritePortfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Voices in the Margins",
      category: "documentary",
      year: "2024",
      location: "New York City",
      role: "Director • Cinematographer • Editor",
      thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=900&h=600&fit=crop",
      color: "#e63946",
      synopsis: "An unflinching portrait of street artists reclaiming public space through their craft. Shot over 18 months in the heart of Brooklyn.",
      festivals: ["Sundance 2024", "Tribeca Film Festival", "SXSW"],
      quote: "Raw, powerful, and unapologetically authentic."
    },
    {
      id: 2,
      title: "Forward Motion",
      category: "commercial",
      year: "2024",
      location: "Various",
      role: "Creative Director • Lead Editor",
      thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&h=600&fit=crop",
      color: "#f1faee",
      synopsis: "A documentary-style campaign for an emerging electric vehicle brand, focusing on real stories from early adopters.",
      client: "EV Innovations",
      quote: "Brings truth to advertising."
    },
    {
      id: 3,
      title: "The Sound Collector",
      category: "documentary",
      year: "2023",
      location: "Iceland",
      role: "Director • Sound Recordist • Producer",
      thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=900&h=600&fit=crop",
      color: "#457b9d",
      synopsis: "Following a field recordist as he captures the vanishing sounds of glaciers in the age of climate change.",
      festivals: ["Hot Docs", "DOC NYC", "CPH:DOX"],
      awards: ["Best Sound Design"],
      quote: "A meditation on loss and memory."
    },
    {
      id: 4,
      title: "Concrete Jungle",
      category: "music-video",
      year: "2024",
      location: "Los Angeles",
      role: "Director • DP",
      thumbnail: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=900&h=600&fit=crop",
      color: "#e63946",
      synopsis: "Gritty, handheld visual narrative following a day in the life of an underground hip-hop collective.",
      artist: "The Collective",
      quote: "Cinema vérité meets hip-hop culture."
    },
    {
      id: 5,
      title: "Human First",
      category: "commercial",
      year: "2023",
      location: "San Francisco",
      role: "Documentary Director • Editor",
      thumbnail: "https://images.unsplash.com/photo-1553531384-397c380a6e0c?w=900&h=600&fit=crop",
      color: "#a8dadc",
      synopsis: "Corporate series profiling employees and their personal journeys, shot in intimate observational style.",
      client: "Tech Corp",
      quote: "Brings humanity to the corporate world."
    },
    {
      id: 6,
      title: "After the Last Frame",
      category: "documentary",
      year: "2023",
      location: "Rural America",
      role: "Director • Cinematographer • Sound",
      thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=900&h=600&fit=crop",
      color: "#1d3557",
      synopsis: "The story of the last independent movie theater in a dying town and the projectionist who refuses to let it close.",
      festivals: ["Telluride", "True/False", "Full Frame"],
      awards: ["Best Documentary Feature", "Audience Award"],
      quote: "A love letter to cinema itself."
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  const testimonials = [
    {
      quote: "A masterful storyteller with an impeccable ear for sound.",
      author: "— Sarah Chen, Producer",
      publication: "Independent Film Weekly"
    },
    {
      quote: "Brings documentary sensibility to every project, regardless of format.",
      author: "— Marcus Rodriguez, Creative Director",
      publication: "Brand Studios"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#1a1a1a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,600;0,9..144,800;1,9..144,400&family=Antonio:wght@300;400;700&display=swap');
        
        body {
          margin: 0;
          padding: 0;
        }
        
        .serif-font {
          font-family: 'Fraunces', serif;
        }
        
        .condensed-font {
          font-family: 'Antonio', sans-serif;
          letter-spacing: 0.02em;
        }
        
        .film-texture {
          background-image: 
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.03) 2px,
              rgba(0, 0, 0, 0.03) 4px
            );
        }
        
        .photo-grain::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='3' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          mix-blend-mode: overlay;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateX(-60px);
        }
        
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .slide-in-right {
          animation: slideInRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
          transform: translateX(60px);
        }
        
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
          opacity: 0;
          transform: translateY(40px);
        }
        
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .image-reveal {
          position: relative;
          overflow: hidden;
        }
        
        .image-reveal::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #1a1a1a;
          transform-origin: right;
          animation: revealImage 1.2s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }
        
        @keyframes revealImage {
          to {
            transform: scaleX(0);
          }
        }
        
        .project-hover {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .project-hover:hover {
          transform: scale(1.02);
        }
        
        .underline-effect {
          position: relative;
          display: inline-block;
        }
        
        .underline-effect::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s ease;
        }
        
        .underline-effect:hover::after {
          width: 100%;
        }
        
        .split-text {
          display: inline-block;
          overflow: hidden;
        }
        
        .char {
          display: inline-block;
          animation: charFadeIn 0.6s ease-out forwards;
          opacity: 0;
          transform: translateY(100%);
        }
        
        @keyframes charFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .polaroid-stack {
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
        }
        
        .polaroid-stack:hover {
          transform: rotate(0deg) scale(1.05);
        }
        
        .typewriter {
          overflow: hidden;
          border-right: 2px solid #1a1a1a;
          white-space: nowrap;
          animation: typing 2s steps(30) forwards, blink 0.75s step-end infinite;
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          50% { border-color: transparent; }
        }
        
        .press-quote {
          border-left: 3px solid #1a1a1a;
          padding-left: 2rem;
          font-style: italic;
        }
        
        .cursor-follow {
          position: fixed;
          width: 20px;
          height: 20px;
          border: 2px solid #1a1a1a;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.15s ease;
        }
      `}</style>

      {/* Custom Cursor */}
      <div 
        className="cursor-follow hidden md:block"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fafafa]/95 backdrop-blur-sm border-b border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="condensed-font text-2xl font-bold tracking-wider">
            OHMZWRLD
          </div>
          
          <div className="hidden md:flex items-center space-x-12 condensed-font text-sm font-light tracking-wide">
            <a href="#work" className="underline-effect">WORK</a>
            <a href="#about" className="underline-effect">ABOUT</a>
            <a href="#contact" className="underline-effect">CONTACT</a>
          </div>
          
          <div className="text-xs serif-font italic text-[#1a1a1a]/50">
            Director • Editor • Sound
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-24 pb-12 px-6 film-texture">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="slide-in-left" style={{ animationDelay: '0.2s' }}>
                <div className="condensed-font text-xs tracking-widest mb-4 text-[#1a1a1a]/60">
                  DOCUMENTARY FILMMAKER & AUDIO ENGINEER
                </div>
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold serif-font leading-none mb-6">
                  Truth in
                  <span className="block italic">Every Frame</span>
                </h1>
              </div>
              
              <div className="slide-in-left space-y-4" style={{ animationDelay: '0.6s' }}>
                <p className="text-xl serif-font leading-relaxed text-[#1a1a1a]/80">
                  Specializing in documentary-style storytelling that captures authentic moments 
                  and transforms them into compelling narratives. From concept to final cut, 
                  every project is an exercise in truth-telling.
                </p>
                
                <div className="flex flex-wrap gap-6 text-sm condensed-font">
                  <div className="flex items-center space-x-2">
                    <Camera size={16} />
                    <span>CINEMATOGRAPHY</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Film size={16} />
                    <span>DIRECTING</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mic2 size={16} />
                    <span>SOUND DESIGN</span>
                  </div>
                </div>
              </div>
              
              <div className="slide-in-left flex flex-col sm:flex-row gap-4" style={{ animationDelay: '1s' }}>
                <a 
                  href="#work"
                  className="px-8 py-4 bg-[#1a1a1a] text-white condensed-font tracking-wide hover:bg-[#333] transition-colors text-center"
                >
                  VIEW SELECTED WORKS
                </a>
                <a 
                  href="#contact"
                  className="px-8 py-4 border-2 border-[#1a1a1a] condensed-font tracking-wide hover:bg-[#1a1a1a] hover:text-white transition-colors text-center"
                >
                  START A PROJECT
                </a>
              </div>
            </div>
            
            <div className="slide-in-right relative" style={{ animationDelay: '0.4s' }}>
              <div className="relative polaroid-stack">
                <div className="image-reveal aspect-[3/4] relative">
                  <img 
                    src="https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=1000&fit=crop&sat=-100"
                    alt="Behind the scenes"
                    className="w-full h-full object-cover grayscale"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="text-white serif-font italic text-lg">
                      "The camera doesn't lie, but it can tell the truth in different ways."
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-white shadow-xl p-4 flex items-center justify-center">
                  <Award size={48} className="text-[#1a1a1a]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Project Strip */}
      <section className="py-16 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="condensed-font text-xs tracking-widest mb-2 text-white/60">LATEST FEATURE</div>
              <h2 className="text-4xl md:text-5xl serif-font font-bold mb-2">{projects[0].title}</h2>
              <p className="text-lg serif-font italic text-white/80">"{projects[0].quote}"</p>
            </div>
            <button className="px-10 py-4 border-2 border-white condensed-font tracking-wide hover:bg-white hover:text-[#1a1a1a] transition-colors whitespace-nowrap flex items-center space-x-2">
              <span>WATCH NOW</span>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-5xl md:text-6xl serif-font font-bold mb-4">Selected Works</h2>
            <p className="text-xl serif-font text-[#1a1a1a]/70 max-w-3xl">
              A collection of documentary films, commercial projects, and visual narratives 
              that prioritize authentic storytelling over artifice.
            </p>
          </div>
          
          {/* Filter */}
          <div className="flex flex-wrap gap-4 mb-16 condensed-font text-sm">
            {['all', 'documentary', 'commercial', 'music-video'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 tracking-wide transition-all ${
                  activeFilter === filter
                    ? 'bg-[#1a1a1a] text-white'
                    : 'border border-[#1a1a1a]/20 hover:border-[#1a1a1a]'
                }`}
              >
                {filter === 'all' ? 'ALL WORK' : filter.toUpperCase().replace('-', ' ')}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="space-y-16">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`project-hover grid md:grid-cols-2 gap-8 items-center cursor-pointer ${
                  idx % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
                onClick={() => setSelectedProject(project)}
              >
                <div className={`relative photo-grain ${idx % 2 === 1 ? 'md:col-start-2' : ''}`}>
                  <div className="aspect-[4/3] relative overflow-hidden">
                    <img 
                      src={project.thumbnail} 
                      alt={project.title}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 w-12 h-12 border-2 border-white flex items-center justify-center">
                      <Play size={20} className="text-white ml-1" />
                    </div>
                    <div 
                      className="absolute bottom-4 left-4 w-16 h-1"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>
                </div>
                
                <div className={`space-y-4 ${idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div className="condensed-font text-xs tracking-widest text-[#1a1a1a]/60">
                    {project.year} • {project.location}
                  </div>
                  
                  <h3 className="text-4xl md:text-5xl serif-font font-bold group-hover:text-[#1a1a1a]/70 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm condensed-font tracking-wide text-[#1a1a1a]/60 uppercase">
                    {project.role}
                  </p>
                  
                  <p className="text-lg serif-font leading-relaxed text-[#1a1a1a]/80">
                    {project.synopsis}
                  </p>
                  
                  {project.festivals && (
                    <div>
                      <div className="condensed-font text-xs tracking-widest text-[#1a1a1a]/60 mb-2">
                        FESTIVAL SELECTIONS
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.festivals.map((festival, i) => (
                          <span 
                            key={i}
                            className="px-3 py-1 border border-[#1a1a1a]/20 text-xs condensed-font tracking-wide"
                          >
                            {festival}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {project.awards && (
                    <div className="flex items-center space-x-2 text-sm condensed-font">
                      <Award size={16} />
                      <span>{project.awards.join(', ')}</span>
                    </div>
                  )}
                  
                  <div className="press-quote serif-font text-lg italic text-[#1a1a1a]/70">
                    {project.quote}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-[#f5f5f5]">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="space-y-4">
                <p className="text-2xl serif-font leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="condensed-font text-sm tracking-wide">
                  <div>{testimonial.author}</div>
                  <div className="text-[#1a1a1a]/50">{testimonial.publication}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h2 className="text-5xl serif-font font-bold mb-6 sticky top-32">
                Philosophy
              </h2>
            </div>
            
            <div className="md:col-span-2 space-y-8 text-lg serif-font leading-relaxed">
              <p className="text-2xl italic text-[#1a1a1a]/90">
                "The best stories are the ones that don't feel like stories at all—they feel like life, captured honestly and presented truthfully."
              </p>
              
              <p>
                My work is rooted in the principles of cinéma vérité—observational filmmaking 
                that prioritizes authenticity over spectacle. Whether creating a feature-length 
                documentary or a 30-second commercial, the approach remains constant: find the 
                truth in the moment and let it speak for itself.
              </p>
              
              <p>
                This philosophy extends to every aspect of production. Audio isn't just a 
                technical requirement; it's the emotional undertow that gives images their power. 
                Cinematography isn't about pretty shots; it's about finding the right frame to 
                tell the truth of a situation.
              </p>
              
              <div className="pt-8 border-t-2 border-[#1a1a1a] space-y-6">
                <div>
                  <h3 className="condensed-font text-sm tracking-widest mb-3 text-[#1a1a1a]/60">
                    APPROACH
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-3">
                      <span className="mt-2 w-2 h-2 bg-[#1a1a1a] rounded-full flex-shrink-0" />
                      <span>Observational documentary techniques applied across all formats</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="mt-2 w-2 h-2 bg-[#1a1a1a] rounded-full flex-shrink-0" />
                      <span>Audio-first philosophy: sound design that enhances narrative</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="mt-2 w-2 h-2 bg-[#1a1a1a] rounded-full flex-shrink-0" />
                      <span>Minimal crew, maximum intimacy with subjects</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="mt-2 w-2 h-2 bg-[#1a1a1a] rounded-full flex-shrink-0" />
                      <span>Edit-driven storytelling that finds the narrative in reality</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="condensed-font text-sm tracking-widest mb-3 text-[#1a1a1a]/60">
                    RECOGNITION
                  </h3>
                  <div className="space-y-1">
                    <div>Sundance Film Festival (2024)</div>
                    <div>Best Documentary Sound Design (2024)</div>
                    <div>Tribeca Film Festival (2024, 2023)</div>
                    <div>Hot Docs Canadian International Documentary Festival</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 bg-[#1a1a1a] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl serif-font font-bold mb-6">
              Let's Tell Your Story
            </h2>
            <p className="text-xl serif-font italic text-white/80 max-w-3xl mx-auto">
              Whether you're looking to create a feature documentary, craft authentic brand 
              content, or need audio post-production expertise—let's collaborate.
            </p>
          </div>
          
          <div className="space-y-6 mb-12">
            <a 
              href="mailto:contact@ohmzwrld.com"
              className="block text-3xl serif-font hover:text-white/70 transition-colors"
            >
              contact@ohmzwrld.com
            </a>
            
            <div className="flex justify-center space-x-8 condensed-font text-sm tracking-wide">
              <a href="#" className="underline-effect">VIMEO</a>
              <a href="#" className="underline-effect">INSTAGRAM</a>
              <a href="#" className="underline-effect">IMDB</a>
            </div>
          </div>
          
          <div className="inline-flex items-center space-x-4 px-8 py-4 border-2 border-white/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="condensed-font text-sm tracking-wide">AVAILABLE FOR NEW PROJECTS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-[#1a1a1a]/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="condensed-font text-2xl font-bold tracking-wider">
              OHMZWRLD
            </div>
            
            <div className="text-sm serif-font text-[#1a1a1a]/50">
              © 2024 All Rights Reserved
            </div>
            
            <div className="text-xs serif-font italic text-[#1a1a1a]/40">
              Shot on location. Mixed with purpose.
            </div>
          </div>
        </div>
      </footer>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-white z-50 overflow-y-auto animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div className="min-h-screen p-6 md:p-12">
            <button 
              onClick={() => setSelectedProject(null)}
              className="fixed top-6 right-6 w-12 h-12 border-2 border-[#1a1a1a] flex items-center justify-center hover:bg-[#1a1a1a] hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <div className="max-w-6xl mx-auto pt-16">
              <div className="mb-8">
                <div className="condensed-font text-xs tracking-widest text-[#1a1a1a]/60 mb-4">
                  {selectedProject.year} • {selectedProject.location} • {selectedProject.category.toUpperCase()}
                </div>
                <h2 className="text-6xl md:text-7xl serif-font font-bold mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-xl condensed-font tracking-wide text-[#1a1a1a]/60 uppercase">
                  {selectedProject.role}
                </p>
              </div>
              
              <div className="aspect-video mb-12 relative">
                <img 
                  src={selectedProject.thumbnail}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 border-2 border-white flex items-center justify-center">
                    <Play size={40} className="text-white ml-2" />
                  </div>
                </div>
              </div>
              
              <div className="grid md:grid-cols-3 gap-12">
                <div className="md:col-span-2 space-y-6 text-lg serif-font leading-relaxed">
                  <p className="text-2xl italic">"{selectedProject.quote}"</p>
                  <p>{selectedProject.synopsis}</p>
                  
                  {selectedProject.festivals && (
                    <div>
                      <h3 className="condensed-font text-sm tracking-widest text-[#1a1a1a]/60 mb-3">
                        FESTIVAL SELECTIONS
                      </h3>
                      <div className="space-y-1">
                        {selectedProject.festivals.map((festival, i) => (
                          <div key={i}>• {festival}</div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {selectedProject.awards && (
                    <div>
                      <h3 className="condensed-font text-sm tracking-widest text-[#1a1a1a]/60 mb-3">
                        AWARDS
                      </h3>
                      <div className="space-y-1">
                        {selectedProject.awards.map((award, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Award size={16} />
                            <span>{award}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="condensed-font text-sm tracking-widest text-[#1a1a1a]/60 mb-3">
                      DETAILS
                    </h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="text-[#1a1a1a]/50">Year:</span> {selectedProject.year}
                      </div>
                      <div>
                        <span className="text-[#1a1a1a]/50">Location:</span> {selectedProject.location}
                      </div>
                      {selectedProject.client && (
                        <div>
                          <span className="text-[#1a1a1a]/50">Client:</span> {selectedProject.client}
                        </div>
                      )}
                      {selectedProject.artist && (
                        <div>
                          <span className="text-[#1a1a1a]/50">Artist:</span> {selectedProject.artist}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full py-4 bg-[#1a1a1a] text-white condensed-font tracking-wide hover:bg-[#333] transition-colors">
                    WATCH FULL FILM
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
