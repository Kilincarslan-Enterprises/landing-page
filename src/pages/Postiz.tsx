import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Zap, Lock, ExternalLink } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export default function Postiz() {
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
      icon: Shield,
      title: 'Secure API Bridge',
      description: 'Enterprise-grade security for all API communications',
    },
    {
      icon: Zap,
      title: 'TikTok Integration',
      description: 'Seamless content posting and analytics for TikTok',
    },
    {
      icon: Lock,
      title: 'Private Infrastructure',
      description: 'Dedicated hosting for maximum reliability and control',
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
                <span className="text-cyan-400 text-sm font-semibold tracking-wider">INTERNAL INFRASTRUCTURE</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-['Poppins']">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Postiz by Kilincarslan Enterprises
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8" />

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                Our internal gateway to bridge the Postiz open-source platform with official social media APIs
                for projects like LYRA and private ventures.
              </p>
            </div>

            <div className={`mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/20 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
                    <Shield className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3 text-white font-['Poppins']">
                      Secure API Bridge for TikTok
                    </h2>
                    <p className="text-gray-300 leading-relaxed mb-4">
                      A dedicated infrastructure for TikTok content posting and analytics, hosted securely on
                      our private servers. This system enables seamless integration between our internal tools
                      and official social media APIs.
                    </p>
                    <a
                      href="https://postiz.kilincarslanenterprises.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold
                               bg-gradient-to-r from-cyan-500 to-purple-600
                               hover:shadow-[0_0_30px_rgba(0,188,212,0.4)] transition-all duration-300
                               hover:scale-105 active:scale-95"
                    >
                      <span>Visit Postiz Portal</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${400 + index * 150}ms` }}
                  >
                    <div className="relative h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                                  border border-cyan-400/10 backdrop-blur-sm hover:border-cyan-400/30
                                  transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,188,212,0.3)]">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-2xl
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative text-center">
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

            <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                to="/privacy"
                className="px-6 py-3 rounded-full font-semibold border border-cyan-400/30
                         hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="px-6 py-3 rounded-full font-semibold border border-cyan-400/30
                         hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
