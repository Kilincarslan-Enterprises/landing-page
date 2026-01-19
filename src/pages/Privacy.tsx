import { Link } from 'react-router-dom';
import { ArrowLeft, Shield } from 'lucide-react';

export default function Privacy() {
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

        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 p-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-600/20">
                <Shield className="w-12 h-12 text-cyan-400" />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Poppins']">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </h1>

              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6" />

              <p className="text-gray-400">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="space-y-8">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Introduction</h2>
                <p className="text-gray-300 leading-relaxed">
                  Kilincarslan Enterprises ("we," "our," or "us") is committed to protecting your privacy.
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                  when you visit our website or use our services.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Information We Collect</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We may collect information about you in a variety of ways, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Personal data you provide voluntarily</li>
                  <li>Usage data automatically collected when you use our services</li>
                  <li>Technical data about your device and connection</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Provide, operate, and maintain our services</li>
                  <li>Improve and personalize your experience</li>
                  <li>Communicate with you about updates and promotions</li>
                  <li>Analyze usage patterns and optimize performance</li>
                  <li>Prevent fraud and enhance security</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. However,
                  no method of transmission over the internet is 100% secure.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Your Rights</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Depending on your location, you may have certain rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Access to your personal data</li>
                  <li>Correction of inaccurate data</li>
                  <li>Deletion of your data</li>
                  <li>Objection to processing</li>
                  <li>Data portability</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:privacy@kilincarslanenterprises.com" className="text-cyan-400 hover:underline">
                    privacy@kilincarslanenterprises.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
