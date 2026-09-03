import { motion } from 'framer-motion';
import { FiAward, FiCheckCircle } from 'react-icons/fi';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { certifications } from '../../data/portfolio';

const Certifications = () => {
  return (
    <section id="certifications" className="section-padding relative overflow-hidden bg-dark-800">
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
          <span className="font-mono text-sm text-cyan-400 mb-3 block">// certified skills</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Certifications</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto text-center max-w-2xl">
            Industry training programs completed at Seven Mentors Pvt. Ltd.
          </p>
          <div
            className="mt-4 mx-auto w-16 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }}
          />
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={staggerItem}
              className="glass-card rounded-3xl p-8 border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-violet-500/20 border border-violet-500/30 text-violet-300 flex items-center justify-center text-2xl">
                    {cert.icon}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-slate-300">
                    {cert.duration}
                  </span>
                </div>

                <h3 className="font-display font-bold text-white text-xl mb-2">
                  {cert.title}
                </h3>
                <p className="text-cyan-400 font-body text-sm font-semibold mb-4">
                  {cert.issuer}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cert.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-xl text-xs font-mono border bg-white/5 border-white/10 text-violet-300"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-emerald-400">
                <FiCheckCircle size={14} /> Verified Certificate Completed
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
