import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Code2, 
  Globe, 
  Database, 
  Brain, 
  Wrench, 
  Check, 
  Sparkles,
  Layers,
  ArrowRight
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import { DynamicIcon } from './IconHelper';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categoryIcons = {
    programming: Code2,
    'web-dev': Globe,
    database: Database,
    'ai-ml': Brain,
    tools: Wrench,
  };

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Skills &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            A comprehensive overview of my programming languages, frameworks, databases, and development toolkits.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
              selectedCategory === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/25 scale-105'
                : 'glass-card text-slate-400 hover:text-white hover:bg-white/5 border-white/5'
            }`}
          >
            All Categories
          </button>

          {skillCategories.map((cat) => {
            const Icon = categoryIcons[cat.id] || Code2;
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/25 scale-105'
                    : 'glass-card text-slate-400 hover:text-white hover:bg-white/5 border-white/5'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Grid */}
        <div className="space-y-12">
          <AnimatePresence mode="wait">
            {filteredCategories.map((cat) => {
              const CategoryIcon = categoryIcons[cat.id] || Code2;
              return (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-4"
                >
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                        <CategoryIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white flex items-center gap-2">
                          {cat.title}
                        </h3>
                        <p className="text-xs text-slate-400">
                          {cat.description}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      {cat.skills.length} Skills
                    </span>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {cat.skills.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        whileHover={{ y: -4, transition: { duration: 0.2 } }}
                        className="glass-card p-4 sm:p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 hover:bg-[#0c1222]/80 transition-all duration-300 group relative"
                      >
                        <div className="flex items-start justify-between gap-3 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 rounded-xl bg-white/5 text-blue-400 group-hover:text-purple-300 group-hover:bg-purple-500/10 border border-white/5 transition-all">
                              <DynamicIcon name={skill.icon} className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-sm sm:text-base text-white group-hover:text-blue-300 transition-colors">
                                {skill.name}
                              </h4>
                              {skill.level && (
                                <span className="text-[11px] font-mono text-purple-400/90">
                                  {skill.level}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Skill Highlight / Note */}
                        <p className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          {skill.highlight}
                        </p>

                        {/* Subtle bottom accent line on hover */}
                        <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
