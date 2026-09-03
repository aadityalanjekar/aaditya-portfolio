import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle } from 'react-icons/fi';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { experience } from '../../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="section-padding relative overflow-hidden bg-dark-800">
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
          <span className="font-mono text-sm text-cyan-400 mb-3 block">// work experience</span>
          <h2 className="section-title">
            Internship <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto text-center max-w-2xl">
            Hands-on professional developer internships in React.js frontend development and Core Java backend engineering.
          </p>
          <div
            className="mt-4 mx-auto w-16 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }}
          />
        </motion.div>

        {/* Timeline List */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="max-w-4xl mx-auto space-y-8"
        >
          {experience.map((item, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="glass-card rounded-3xl p-6 sm:p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="p-2 rounded-xl bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      <FiBriefcase size={16} />
                    </span>
                    <h3 className="font-display font-bold text-white text-xl sm:text-2xl">
                      {item.role}
                    </h3>
                  </div>
                  <p className="text-cyan-400 font-display font-semibold text-sm sm:text-base">
                    {item.company}
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <FiCalendar size={13} className="text-violet-400" />
                    {item.duration}
                  </span>
                  <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10">
                    <FiMapPin size={13} className="text-cyan-400" />
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities bullet points */}
              <ul className="space-y-3 mb-6">
                {item.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 font-body text-slate-300 text-sm leading-relaxed">
                    <FiCheckCircle className="text-violet-400 mt-1 flex-shrink-0" size={16} />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-xl text-xs font-mono border bg-white/5 border-white/10 text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
