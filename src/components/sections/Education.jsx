import { motion } from 'framer-motion';
import { FiAward, FiBookOpen, FiCalendar, FiCheckCircle } from 'react-icons/fi';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { education } from '../../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="section-padding relative overflow-hidden bg-dark-700">
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
          <span className="font-mono text-sm text-violet-400 mb-3 block">// academic background</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Education</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto text-center max-w-2xl">
            Computer science degrees with strong foundations in software engineering, Java full-stack development, and algorithms.
          </p>
          <div
            className="mt-4 mx-auto w-16 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }}
          />
        </motion.div>

        {/* Education Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="glass-card rounded-3xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-3xl">{edu.icon}</span>
                  <span className="px-3.5 py-1 rounded-full text-xs font-mono border bg-violet-500/20 border-violet-500/40 text-violet-300 font-semibold">
                    SGPA: {edu.sgpa}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-2xl mb-2">
                  {edu.degree}
                </h3>
                <p className="text-cyan-400 font-body text-sm font-semibold mb-3">
                  {edu.institution}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
                  <FiCalendar size={13} className="text-violet-400" />
                  <span>{edu.duration}</span>
                </div>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  <span className="text-xs font-mono text-slate-400 block mb-2">Key Coursework:</span>
                  {edu.highlights.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-body text-slate-300">
                      <FiCheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-400">
                <span>Status:</span>
                <span className="text-emerald-400 font-semibold">{edu.status}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
