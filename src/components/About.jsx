import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Code, 
  Database, 
  BrainCircuit, 
  CheckCircle, 
  MapPin, 
  Sparkles,
  Rocket
} from 'lucide-react';
import { personalInfo, stats, achievements, hobbies } from '../data/portfolioData';

export default function About() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Building web apps end to end with HTML, CSS, JavaScript, React.js, Node.js and Express.js."
    },
    {
      icon: Database,
      title: "Data & Schema Design",
      description: "Working with SQL/MySQL relational databases, MongoDB, and Firebase Firestore."
    },
    {
      icon: BrainCircuit,
      title: "Problem Solving & DSA",
      description: "Practising competitive coding in C, Java and Python, and winning inter-college Math Relay events."
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      description: "Exploring new technologies, contributing to open source, and writing tech blogs."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            Computer Applications graduate and MCA student building real-world projects.
          </p>
        </div>

        {/* Top Content Grid: Bio & Quick Facts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4 text-slate-300 text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-white text-lg sm:text-xl">
                {personalInfo.aboutBio}
              </p>
              <p className="text-slate-400 text-base">
                {personalInfo.secondaryBio}
              </p>
            </div>

            {/* Quick Badges inside Bio */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Academic Track</span>
                  <span className="text-sm font-semibold text-white">Master of Computer Applications</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block font-mono">Location</span>
                  <span className="text-sm font-semibold text-white">{personalInfo.location}</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Snapshot / Aspirations Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 glass-card p-6 sm:p-8 rounded-3xl border border-white/10 flex flex-col justify-between bg-gradient-to-b from-slate-900/80 to-[#0a0f1d]/90"
          >
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-purple-400 font-semibold block mb-2">
                What Drives Me
              </span>
              <h3 className="text-xl font-bold text-white mb-4">
                Committed to Writing Clean, Efficient & Maintainable Code
              </h3>
              
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Strong foundation in programming, web development, and databases.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Hands-on experience building full-stack apps with APIs, MySQL and Firebase.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Creative side: portrait sketching and UI/UX design.</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>Status:</span>
              <span className="text-emerald-400 font-semibold">Open to Internships</span>
            </div>
          </motion.div>

        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-5 sm:p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all text-center group"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 font-sans">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlight Cards (Engineering Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="glass-card glass-card-hover p-6 rounded-2xl border border-white/10 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/10 flex items-center justify-center text-blue-400 group-hover:text-purple-300 transition-colors mb-4">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-base font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements & Hobbies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <h4 className="text-base font-bold text-white mb-4">Achievements &amp; Activities</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              {achievements.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card p-6 rounded-2xl border border-white/10">
            <h4 className="text-base font-bold text-white mb-4">Hobbies &amp; Interests</h4>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((item) => (
                <span key={item} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
