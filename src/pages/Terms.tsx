import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

export default function Terms() {
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
                <FileText className="w-12 h-12 text-cyan-400" />
              </div>

              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-['Poppins']">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Terms of Service
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
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Agreement to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  By accessing or using any services provided by Kilincarslan Enterprises, you agree to be
                  bound by these Terms of Service. If you disagree with any part of the terms, you may not
                  access our services.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Use of Services</h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  You agree to use our services only for lawful purposes and in accordance with these Terms.
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe on intellectual property rights</li>
                  <li>Transmit harmful or malicious code</li>
                  <li>Attempt to gain unauthorized access to our systems</li>
                  <li>Interfere with the proper functioning of our services</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed">
                  All content, features, and functionality of our services are owned by Kilincarslan Enterprises
                  and are protected by international copyright, trademark, and other intellectual property laws.
                  You may not copy, modify, distribute, or reverse engineer any part of our services without
                  explicit permission.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Service Availability</h2>
                <p className="text-gray-300 leading-relaxed">
                  We strive to maintain high availability but do not guarantee that our services will be
                  uninterrupted, secure, or error-free. We reserve the right to modify, suspend, or
                  discontinue any part of our services at any time without prior notice.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  To the maximum extent permitted by law, Kilincarslan Enterprises shall not be liable for
                  any indirect, incidental, special, consequential, or punitive damages resulting from your
                  use or inability to use our services.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. We will notify users of any
                  material changes by posting the new Terms on this page. Your continued use of our services
                  after such modifications constitutes acceptance of the updated Terms.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50
                            border border-cyan-400/10 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-4 text-cyan-400 font-['Poppins']">Contact Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  For questions about these Terms of Service, please contact us at{' '}
                  <a href="mailto:legal@kilincarslanenterprises.com" className="text-cyan-400 hover:underline">
                    legal@kilincarslanenterprises.com
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
