import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Code2, 
  Sparkles, 
  FileCode, 
  Terminal, 
  CheckCircle2, 
  Database,
  Cpu
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[28rem] h-[28rem] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Status Pill */}
            <motion.div variants={itemVariants} className="mb-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Internships &bull; MCA 2027</span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className="text-sm sm:text-base font-mono text-purple-400 font-semibold tracking-wide uppercase mb-2">
              Hi, I'm
            </motion.p>

            {/* Candidate Name */}
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-white mb-3">
              <span className="text-gradient">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Main Title / Role */}
            <motion.h2 variants={itemVariants} className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 mb-6 flex flex-wrap items-center gap-2">
              <span>{personalInfo.role}</span>
            </motion.h2>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mb-8">
              I build modern web applications and software solutions while continuously exploring programming, databases, artificial intelligence and emerging technologies.
            </motion.p>

            {/* Call-to-action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto">
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personalInfo.resumePath}
                download="Rishan_Britto_Resume.pdf"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-slate-200 hover:text-white glass-card hover:bg-white/10 border border-white/10 hover:border-white/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <Download className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-colors" />
                <span>Download Resume</span>
              </a>
            </motion.div>

            {/* Social Links & Highlights */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/10 w-full">
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 hover:scale-110 transition-all duration-200"
                >
                  <Github className="w-5 h-5" />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-blue-500/40 hover:bg-blue-500/10 hover:scale-110 transition-all duration-200"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Me"
                  className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:scale-110 transition-all duration-200"
                >
                  <Mail className="w-5 h-5" />
                </a>

                {personalInfo.leetcode && (
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LeetCode Profile"
                    className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-amber-500/40 hover:bg-amber-500/10 hover:scale-110 transition-all duration-200"
                    title="LeetCode Problem Solving"
                  >
                    <Code2 className="w-5 h-5" />
                  </a>
                )}
              </div>

              <div className="h-6 w-px bg-white/10 hidden sm:block" />

              <div className="text-xs text-slate-400 flex items-center gap-2 font-mono">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <span>MCA @ MITE, Moodabidri</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Modern Animated Visual / Developer Terminal & Floating Tech Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Outer Decorative Gradient Ring */}
            <div className="relative w-full max-w-lg">
              
              {/* Floating Badge 1: React & Full Stack */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                className="absolute -top-6 -left-4 sm:-left-6 z-20 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 border border-blue-500/30 shadow-xl shadow-blue-500/10"
              >
                <div className="p-1.5 rounded-lg bg-blue-500/20 text-blue-400">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white leading-none">Full-Stack</p>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">React & Node.js</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: AI & Python */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-2 sm:-right-4 z-20 glass-card px-3.5 py-2 rounded-xl flex items-center gap-2.5 border border-purple-500/30 shadow-xl shadow-purple-500/10"
              >
                <div className="p-1.5 rounded-lg bg-purple-500/20 text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white leading-none">Firebase & APIs</p>
                  <p className="text-[9px] text-slate-400 font-mono mt-0.5">Auth & Firestore</p>
                </div>
              </motion.div>

              {/* Floating Badge 3: SQL & Database */}
              <motion.div
                animate={{ y: [-4, 5, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", delay: 0.5 }}
                className="absolute top-1/2 -right-6 hidden sm:flex z-20 glass-card px-3 py-1.5 rounded-lg items-center gap-2 border border-cyan-500/25 shadow-lg"
              >
                <Database className="w-3.5 h-3.5 text-cyan-400" />
                <span className="text-[10px] font-mono text-cyan-300">MySQL & Mongo</span>
              </motion.div>

              {/* Main Code / IDE Card */}
              <div className="glass-card rounded-2xl border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl bg-[#090d16]/90">
                {/* Code Window Header */}
                <div className="px-4 py-3 bg-white/5 border-b border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                    <Terminal className="w-3 h-3 text-purple-400" />
                    <span>developer.config.ts</span>
                  </div>
                  <div className="w-6" />
                </div>

                {/* Code Window Body */}
                <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed overflow-x-auto text-slate-300">
                  <div className="text-slate-500">// MCA Candidate Profile & Tech Stack</div>
                  <div className="mt-1">
                    <span className="text-purple-400">const</span>{' '}
                    <span className="text-blue-300">developer</span>{' '}
                    <span className="text-white">=</span> {'{'}
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-slate-400">name:</span>{' '}
                    <span className="text-emerald-300">'{personalInfo.name}'</span>,
                  </div>
                  
                  <div className="pl-4">
                    <span className="text-slate-400">education:</span>{' '}
                    <span className="text-emerald-300">'Master of Computer Applications'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">graduating:</span>{' '}
                    <span className="text-amber-300">2027</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">coreSkills:</span> [
                  </div>
                  <div className="pl-8 text-cyan-300">
                    'Java', 'JavaScript', 'React.js', 'Node.js', 'MySQL', 'Firebase'
                  </div>
                  <div className="pl-4">],</div>

                  <div className="pl-4">
                    <span className="text-slate-400">currentFocus:</span>{' '}
                    <span className="text-emerald-300">'Full-Stack Web Development'</span>,
                  </div>

                  <div className="pl-4">
                    <span className="text-slate-400">openToWork:</span>{' '}
                    <span className="text-purple-400">true</span>,
                  </div>

                  <div className="pl-4 text-slate-400">
                    solveProblem: <span className="text-purple-400">async</span> () =&gt; {'{'}
                  </div>
                  <div className="pl-8 text-slate-400">
                    <span className="text-purple-400">await</span> brainstormArchitecture();
                  </div>
                  <div className="pl-8 text-emerald-400 font-semibold">
                    <span className="text-purple-400">return</span> 'Production-Ready Software';
                  </div>
                  <div className="pl-4 text-slate-400">{'}'}</div>

                  <div>{'}'};</div>

                  {/* Terminal Execution Output */}
                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Compiled successfully: Ready for hire & collaborations</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
