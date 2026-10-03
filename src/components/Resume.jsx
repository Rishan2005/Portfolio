import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, CheckCircle2, Eye, Sparkles, FileCheck } from 'lucide-react';
import { personalInfo, resumeDetails } from '../data/portfolioData';

export default function Resume() {
  return (
    <section id="resume" className="py-24 relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[26rem] bg-gradient-to-r from-blue-600/15 via-purple-600/15 to-cyan-500/15 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 lg:p-14 glass-card border border-white/15 overflow-hidden shadow-2xl bg-gradient-to-b from-[#0e1428]/90 via-[#0a0f20]/90 to-[#070b18]/95"
        >
          {/* Subtle Top Border Glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider">
                <FileCheck className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {resumeDetails.title}
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                {resumeDetails.subtitle}
              </p>

              {/* Highlights List */}
              <div className="space-y-2.5 pt-2">
                {resumeDetails.highlights.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={personalInfo.resumePath}
                  download={resumeDetails.downloadFileName}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Download className="w-4 h-4" />
                  <span>{resumeDetails.buttonText}</span>
                </a>

                <a
                  href={personalInfo.resumePath}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white glass-card hover:bg-white/10 border border-white/10 hover:border-white/25 hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <Eye className="w-4 h-4 text-purple-400" />
                  <span>{resumeDetails.viewButtonText}</span>
                </a>
              </div>

              <p className="text-[11px] text-slate-400 font-mono">
                Format: PDF &bull; Updated: {resumeDetails.lastUpdated}
              </p>
            </div>

            {/* Right Card: Interactive Resume Document Mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl p-6 glass-card border border-white/10 shadow-2xl bg-[#090d18]/90 group hover:border-purple-500/40 transition-all duration-300">
                
                {/* PDF Header Tag */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white font-mono">RESUME.PDF</p>
                      <p className="text-[10px] text-slate-400 font-mono">{resumeDetails.fileSize}</p>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Latest Version
                  </span>
                </div>

                {/* Simulated Document Preview */}
                <div className="space-y-3 font-mono text-[11px] text-slate-400">
                  <div className="flex items-center justify-between text-white font-bold pb-1 border-b border-white/5">
                    <span>{personalInfo.name}</span>
                    <span className="text-purple-400 text-[10px]">MCA STUDENT</span>
                  </div>

                  <div className="space-y-1.5 text-[10px]">
                    <p className="text-slate-300">&bull; Core: C, Java, Python, JavaScript, R</p>
                    <p className="text-slate-300">&bull; Web: HTML, CSS, React, Node.js, Express</p>
                    <p className="text-slate-300">&bull; Databases: SQL, MySQL, MongoDB, Firebase</p>
                    <p className="text-slate-300">&bull; Academic: MCA 7.82 CGPA, BCA 8.15 CGPA</p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[10px] text-slate-400">
                    <span>Resume on file</span>
                    <span className="text-emerald-400 font-semibold">PDF</span>
                  </div>
                </div>

                {/* Hover overlay button */}
                <div className="mt-5">
                  <a
                    href={personalInfo.resumePath}
                    download={resumeDetails.downloadFileName}
                    className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/5 hover:bg-purple-600/20 text-xs font-semibold text-purple-300 hover:text-white border border-purple-500/20 transition-all"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF File</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
