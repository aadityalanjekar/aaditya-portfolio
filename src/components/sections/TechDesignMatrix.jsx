import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiLayers, FiActivity, FiBox, FiCheckCircle, FiCheck, FiCpu } from 'react-icons/fi';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { techDesignCategories } from '../../data/portfolio';

const TechDesignMatrix = () => {
  const [activeTab, setActiveTab] = useState(0);

  const categoryIcons = [FiLayers, FiActivity, FiBox, FiCpu];

  return (
    <section id="tech-matrix" className="section-padding relative overflow-hidden bg-dark-700">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-cyan-400 mb-3 block">
            // design system & technology capabilities
          </span>
          <h2 className="section-title">
            Tech & Design <span className="gradient-text">Stack Matrix</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto text-center max-w-2xl">
            A modern interactive experience focused on premium visual design, smooth GSAP motion,
            3D immersive presentation, responsive engineering, and high-performance delivery.
          </p>
          <div
            className="mt-4 mx-auto w-20 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }}
          />
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-lg">
            {techDesignCategories.map((cat, idx) => {
              const Icon = categoryIcons[idx] || FiLayers;
              const isActive = activeTab === idx;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-2.5 px-5 py-3 rounded-xl font-display text-xs sm:text-sm font-semibold transition-all duration-300 whitespace-nowrap ${
                    isActive
                      ? 'text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg shadow-violet-500/25 border border-violet-400/30'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  <Icon className={isActive ? 'text-white' : 'text-slate-400'} size={16} />
                  <span>{cat.category}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Display */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid lg:grid-cols-12 gap-8 items-center"
        >
          {/* Left Summary Card */}
          <div className="lg:col-span-4 glass-card rounded-3xl p-8 border border-violet-500/20 relative overflow-hidden">
            <div
              className="absolute -top-10 -right-10 w-32 h-32 rounded-full blur-2xl opacity-30 pointer-events-none"
              style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
            />
            <div className="text-4xl mb-4">{techDesignCategories[activeTab].icon}</div>
            <h3 className="font-display font-bold text-white text-2xl mb-2">
              {techDesignCategories[activeTab].category}
            </h3>
            <p className="font-body text-slate-300 text-sm leading-relaxed mb-6">
              Engineering high-impact UI architecture using modern design systems, GSAP motion curves,
              and 3D rendering parameters.
            </p>

            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <FiCheckCircle size={14} />
                <span>60 FPS Smooth Scroll Motion</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-violet-400">
                <FiCheckCircle size={14} />
                <span>Responsive Across Mobile & Desktop</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <FiCheckCircle size={14} />
                <span>Production-Ready Code Standards</span>
              </div>
            </div>
          </div>

          {/* Right Items Grid */}
          <div className="lg:col-span-8">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid sm:grid-cols-2 gap-4"
            >
              {techDesignCategories[activeTab].items.map((item) => (
                <motion.div
                  key={item.name}
                  variants={staggerItem}
                  className="rounded-2xl p-6 bg-white/[0.03] border border-white/10 hover:border-violet-500/40 hover:bg-white/[0.06] transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-display font-bold text-white text-base group-hover:text-violet-300 transition-colors">
                      {item.name}
                    </h4>
                    <span className="w-6 h-6 rounded-lg bg-violet-500/20 text-violet-300 flex items-center justify-center text-xs">
                      <FiCheck size={12} />
                    </span>
                  </div>
                  <p className="font-body text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Positioning Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 rounded-3xl p-8 border border-violet-500/30 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(124, 58, 237, 0.12) 0%, rgba(34, 211, 238, 0.08) 100%)',
          }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs font-mono text-violet-400 uppercase tracking-widest block mb-1">
                Strategic Positioning
              </span>
              <h4 className="font-display font-bold text-white text-lg sm:text-xl">
                Premium Personal Portfolio Development
              </h4>
              <p className="font-body text-slate-300 text-sm mt-1 max-w-3xl">
                Combining strong visual design, immersive 3D presentation, GSAP smooth motion,
                responsive UX, and modern Java Full Stack frontend engineering to create a memorable
                digital impression.
              </p>
            </div>

            <a
              href="#contact"
              className="btn-primary text-xs whitespace-nowrap flex-shrink-0"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechDesignMatrix;
