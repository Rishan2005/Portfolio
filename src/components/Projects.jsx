import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FolderGit2, Sparkles, Filter, Code } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  // Extract unique categories
  const categories = ['All', ...new Set(projects.map((p) => p.category))];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] bg-indigo-600/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Portfolio Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Academic &amp; Personal <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-3 text-slate-400 max-w-2xl text-base sm:text-lg">
            High-impact software engineering projects showcasing scalable web systems, intuitive interfaces, and algorithmic problem solving.
          </p>
        </div>

        {/* Category Filter Controls */}
        <div className="flex items-center justify-center flex-wrap gap-2.5 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-purple-600/25 scale-105'
                    : 'glass-card text-slate-400 hover:text-white hover:bg-white/5 border-white/5'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Cards Responsive Grid (3 columns on lg, 2 columns on md, 1 column on sm/mobile) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelect={(proj) => setActiveProject(proj)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Note */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm text-slate-400 font-mono">
            Want to see more code repositories and experiments?{' '}
            <a
              href="https://github.com/Rishan2005"
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-purple-300 font-semibold underline underline-offset-4"
            >
              Explore my GitHub Profile &rarr;
            </a>
          </p>
        </div>

      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
