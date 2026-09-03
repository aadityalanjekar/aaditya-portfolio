import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiCpu } from 'react-icons/fi';
import { staggerContainer, staggerItem, viewportConfig, scaleIn } from '../../utils/animations';
import { projects, projectCategories } from '../../data/portfolio';
import ArchitectureModal from '../ui/ArchitectureModal';

const colorStyles = {
  violet: {
    badge: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
    tag: 'bg-violet-500/10 border-violet-500/20 text-violet-300',
    dot: '#7c3aed',
    gradient: 'from-violet-600/20 to-purple-600/10',
    glow: 'rgba(124, 58, 237, 0.15)',
  },
  cyan: {
    badge: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
    tag: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-300',
    dot: '#22d3ee',
    gradient: 'from-cyan-600/20 to-blue-600/10',
    glow: 'rgba(34, 211, 238, 0.12)',
  },
  rose: {
    badge: 'bg-rose-500/15 border-rose-500/30 text-rose-300',
    tag: 'bg-rose-500/10 border-rose-500/20 text-rose-300',
    dot: '#f43f5e',
    gradient: 'from-rose-600/20 to-orange-600/10',
    glow: 'rgba(244, 63, 94, 0.12)',
  },
};

const FeaturedProject = ({ project, onOpenArchitecture }) => {
  const c = colorStyles[project.color];
  return (
    <motion.div
      variants={scaleIn}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className="relative rounded-3xl overflow-hidden border border-violet-500/30 mb-12"
      style={{
        background: 'rgba(124, 58, 237, 0.07)',
        boxShadow: '0 20px 60px rgba(124, 58, 237, 0.15)',
      }}
    >
      {/* Top gradient bar */}
      <div
        className="h-1 w-full"
        style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee, #f43f5e)' }}
      />

      <div className="p-8 md:p-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-mono border bg-violet-500/20 border-violet-500/40 text-violet-300">
                <FiStar size={12} className="text-amber-400 fill-amber-400" />
                Featured Full-Stack Application
              </span>
              <span className="text-slate-500 font-mono text-xs">{project.year}</span>
            </div>

            <h3 className="font-display font-extrabold text-white text-3xl sm:text-4xl mb-2">
              {project.title}
            </h3>
            <p className="text-violet-400 font-body text-sm font-semibold mb-4">
              {project.subtitle}
            </p>

            <p className="font-body text-slate-300 text-base leading-relaxed mb-6">
              {project.description}
            </p>

            {/* Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
              {project.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: '#7c3aed' }}
                  />
                  <span className="text-slate-300 text-xs sm:text-sm font-body">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <motion.a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiExternalLink size={16} />
                Live Vercel Demo
              </motion.a>

              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-sm"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiGithub size={16} />
                GitHub Repository
              </motion.a>

              <button
                onClick={onOpenArchitecture}
                className="btn-outline text-sm text-cyan-300 border-cyan-500/30 hover:border-cyan-400"
              >
                <FiCpu size={16} />
                Test API Architecture
              </button>
            </div>
          </div>

          {/* Right Visual Dashboard Preview */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl overflow-hidden border border-white/15 bg-dark-900 shadow-2xl">
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-2 px-3 py-1 rounded-md text-xs font-mono text-slate-400 bg-black/40 border border-white/5">
                    fruitstore-vert.vercel.app
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400">JWT Authenticated</span>
              </div>

              <div
                className="p-8 flex flex-col items-center justify-center text-center min-h-[220px]"
                style={{
                  background: 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(34, 211, 238, 0.1) 100%)',
                }}
              >
                <div className="text-6xl mb-3">🛒</div>
                <h4 className="font-display font-bold text-white text-xl">Organic Fruit Store</h4>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  Spring Boot 3.2 (Java 17) + React.js + MySQL
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-violet-500/20 text-violet-300 border border-violet-500/30">
                    5 REST Controllers
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Role-Based Access
                  </span>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Spring Security
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div>
              <p className="font-mono text-xs text-slate-400 mb-2">Technologies Used:</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl text-xs font-mono border bg-white/5 border-white/10 text-violet-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectCard = ({ project, index }) => {
  const c = colorStyles[project.color];

  const emoji = {
    1: '🛒',
    2: '👕',
    3: '💰',
    4: '💪',
  };

  return (
    <motion.div
      layout
      variants={staggerItem}
      className="rounded-2xl overflow-hidden border transition-all duration-300 group flex flex-col justify-between"
      style={{
        background: 'rgba(255,255,255,0.025)',
        borderColor: 'rgba(255,255,255,0.08)',
      }}
      whileHover={{
        borderColor: c.dot + '60',
        boxShadow: `0 16px 40px ${c.glow}`,
        y: -6,
      }}
    >
      {/* Top Highlight Line */}
      <div
        className="h-1"
        style={{ background: `linear-gradient(90deg, ${c.dot}, transparent)` }}
      />

      {/* Card Visual Top */}
      <div
        className="h-40 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${c.dot}18, transparent)`,
        }}
      >
        <motion.div
          className="text-5xl"
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 5 + index, repeat: Infinity, ease: 'easeInOut' }}
        >
          {emoji[project.id] || '🚀'}
        </motion.div>

        {project.badge && (
          <div
            className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono border ${c.badge}`}
          >
            {project.badge}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-display font-bold text-white text-xl leading-tight">
              {project.title}
            </h3>
            <span className="font-mono text-xs text-slate-500 flex-shrink-0 mt-1">
              {project.year}
            </span>
          </div>
          <p className="text-violet-400 text-xs font-mono mb-3">{project.subtitle}</p>

          <p className="font-body text-slate-300 text-sm leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span key={t} className={`px-2.5 py-1 rounded-lg text-[11px] font-mono border ${c.tag}`}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-4 border-t border-white/10">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-xs flex-1 justify-center py-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FiGithub size={14} />
            GitHub
          </motion.a>

          {project.demo !== '#' && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs flex-1 justify-center py-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiExternalLink size={14} />
              Live Demo
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [isArchModalOpen, setIsArchModalOpen] = useState(false);

  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const filteredProjects =
    activeFilter === 'all'
      ? otherProjects
      : otherProjects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-violet-400 mb-3 block">// production portfolio</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects & Applications</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto text-center max-w-2xl">
            Real-world full stack and frontend web applications with production links, GitHub code,
            Spring Security JWT workflows, and modern UI engineering.
          </p>
          <div
            className="mt-4 mx-auto w-16 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }}
          />
        </motion.div>

        {/* Featured Full Stack Project */}
        {featuredProject && (
          <FeaturedProject
            project={featuredProject}
            onOpenArchitecture={() => setIsArchModalOpen(true)}
          />
        )}

        {/* Filter Buttons */}
        <div className="flex items-center justify-center gap-3 mb-10">
          {projectCategories.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveFilter(id)}
              className={`px-5 py-2.5 rounded-xl text-sm font-display font-semibold transition-all ${
                activeFilter === id
                  ? 'text-white bg-violet-600 border border-violet-400 shadow-lg shadow-violet-500/20'
                  : 'text-slate-400 bg-white/5 border border-white/10 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          layout
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Spring Boot REST API Architecture Modal */}
      <ArchitectureModal
        isOpen={isArchModalOpen}
        onClose={() => setIsArchModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
