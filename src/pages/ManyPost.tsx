import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Code, BarChart3, Boxes, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function ManyPost() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Robust API-First Architecture',
      description: 'Built on RESTful and GraphQL APIs for seamless integration and extensibility',
    },
    {
      icon: Boxes,
      title: 'Multi-Project Management',
      description: 'Orchestrate multiple projects and social media channels simultaneously',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Insights',
      description: 'Real-time metrics and comprehensive reporting across all channels',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and reliability at scale',
    },
  ];

  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[150px]" />
      </div>

      <div className="relative">
        <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-[#0F172A]/80 backdrop-blur-lg border-b border-cyan-400/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Home</span>
            </Link>
            <div className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              KILINCARSLAN ENTERPRISES
            </div>
          </div>
        </nav>

        <section ref={sectionRef} className="relative pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-block mb-4 px-4 py-2 border border-cyan-400/30 rounded-full bg-cyan-400/5 backdrop-blur-sm">
                <span className="text-cyan-400 text-sm font-semibold tracking-wider">DEVELOPER PLATFORM</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Poppins']">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ManyPost
                </span>
              </h1>

              <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-['Poppins']">
                The API-First Social Media Engine
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />

              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto mb-4">
                High-performance social media orchestration for Kilincarslan Enterprises
              </p>

              <p className="text-lg text-cyan-400 font-semibold max-w-2xl mx-auto">
                Manage all your social media channels in one powerful place
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                                  border border-cyan-400/10 backdrop-blur-sm hover:border-cyan-400/30
                                  transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,188,212,0.3)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative">
                        <div className="mb-4 inline-block p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20
                                      group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-cyan-400 group-hover:text-purple-400 transition-colors duration-300" />
                        </div>

                        <h3 className="text-xl font-bold mb-3 text-white font-['Poppins']">
                          {feature.title}
                        </h3>

                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={`mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20 h-fit">
                    <Boxes className="w-10 h-10 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold mb-3 text-white font-['Poppins']">
                      Internal Power-Tool
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      ManyPost is currently an internal power-tool by Kilincarslan Enterprises. It serves as our
                      central hub for managing social media presence across multiple projects and platforms, providing
                      our teams with unified control, analytics, and orchestration capabilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-purple-600/10 to-slate-900/50
                            border border-cyan-400/30 backdrop-blur-sm">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-white font-['Poppins']">
                    Developer-Centric Design
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6 max-w-2xl mx-auto">
                    Built for developers, by developers. RESTful APIs, comprehensive documentation, and webhook support
                    make integration seamless and straightforward.
                  </p>
                  <a
                    href="#documentation"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold
                             bg-gradient-to-r from-cyan-500 to-purple-600
                             hover:shadow-[0_0_30px_rgba(0,188,212,0.4)] transition-all duration-300
                             hover:scale-105 active:scale-95"
                  >
                    <span>View Documentation</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
