"use client";

import { Camera, Briefcase, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-primary border-t border-gray-900 pt-16 pb-8 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
          
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-white mb-4 glitch" data-text="R.HIDAYAT">R.HIDAYAT</h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Menggabungkan kekuatan teknologi AI, keamanan sistem, dan kreativitas visual untuk solusi digital komprehensif.
            </p>
            <a 
              href="/CV-ATS-Ricky-Hidayat.pdf" 
              download
              className="inline-block px-6 py-2 bg-brand-accent/10 border border-brand-accent text-brand-accent hover:bg-brand-accent hover:text-white font-display text-sm uppercase tracking-widest transition-all duration-300 box-glow"
            >
              Download CV
            </a>
          </div>

          <div>
            <h3 className="font-display text-white mb-4 font-bold border-l-2 border-brand-neon-cyan pl-2">KONEKSI</h3>
            <ul className="space-y-3">
              <li>
                <a href="https://www.linkedin.com/in/ricky-hidayat-018367324" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-neon-cyan flex items-center gap-2 transition-colors">
                  <Briefcase className="w-4 h-4" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com/qq.mkv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-accent flex items-center gap-2 transition-colors">
                  <Camera className="w-4 h-4" /> Instagram (qq.mkv)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-white mb-4 font-bold border-l-2 border-brand-neon-green pl-2">KONTAK LANGSUNG</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:rickyhidayat507@gmail.com" className="text-gray-400 hover:text-brand-neon-green flex items-center gap-2 transition-colors">
                  <Mail className="w-4 h-4" /> Email
                </a>
              </li>
              <li>
                <a href="https://wa.me/6281615522647" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-brand-neon-green flex items-center gap-2 transition-colors">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm font-display">
            &copy; {new Date().getFullYear()} Ricky Hidayat. System Initialized.
          </p>
          <div className="flex gap-4 text-gray-600 text-sm font-display">
            <span>STATUS: ONLINE</span>
            <span>VER: 1.0.0</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
