import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProjectCard({ project, onSelect }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="glass-card rounded-2xl sm:rounded-3xl border border-white/10 hover:border-purple-500/40 overflow-hidden flex flex-col justify-between group transition-all duration-300 shadow-xl bg-[#0a0e1a]/80"
    >
      <div>
        {/* Project Thumbnail Image with Gradient Overlay & Category Badge */}
        <div 
          onClick={() => onSelect(project)}
          className="relative h-48 sm:h-52 w-full overflow-hidden cursor-pointer bg-slate-900"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-[#0a0e1a]/30 to-transparent" />

          {/* Category Tag */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold bg-black/60 backdrop-blur-md text-purple-300 border border-purple-500/30">
              {project.category}
            </span>
          </div>

          {/* Metric / Highlight Badge */}
          {project.metrics && (
            <div className="absolute top-3 right-3">
              <span className="px-2.5 py-1 rounded-full text-[10px] font-mono text-emerald-300 bg-emerald-950/80 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-400" />
                {project.metrics}
              </span>
            </div>
          )}

          {/* Quick View Prompt on Hover */}
          <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs flex items-center justify-center transition-opacity duration-300">
            <span className="px-4 py-2 rounded-xl bg-white/20 backdrop-blur-md text-white text-xs font-semibold border border-white/30 shadow-lg">
              Click to View Case Study
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 
              onClick={() => onSelect(project)}
              className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-300 cursor-pointer transition-colors"
            >
              {project.title}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
            {project.shortDescription}
          </p>

          {/* Key Features Preview */}
          <div className="mb-5 space-y-1.5">
            {project.keyFeatures.slice(0, 2).map((feat, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span className="truncate">{feat}</span>
              </div>
            ))}
          </div>

          {/* Tech Stack Pills */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.technologies.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-0.5 rounded-lg text-[11px] font-mono bg-white/5 text-slate-300 border border-white/5"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-0.5 rounded-lg text-[11px] font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="px-5 sm:px-6 pb-5 pt-3 border-t border-white/5 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`GitHub code for ${project.title}`}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-all text-xs flex items-center gap-1.5"
              title="View Source Code"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Code</span>
            </a>
          )}

          {project.liveDemoUrl && (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={`Live demo for ${project.title}`}
              className="p-2 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-blue-200 border border-blue-500/20 transition-all text-xs flex items-center gap-1.5"
              title="Open Live Preview"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Live Demo</span>
            </a>
          )}
        </div>

        {/* View Details / Modal Trigger */}
        <button
          onClick={() => onSelect(project)}
          className="text-xs font-semibold text-purple-400 hover:text-purple-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
        >
          <span>Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </motion.div>
  );
}
