import { motion } from 'framer-motion';
import { staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { skills, skillLevels } from '../../data/portfolio';

const colorStyles = {
  violet: {
    bg: 'rgba(124, 58, 237, 0.07)',
    border: 'rgba(124, 58, 237, 0.2)',
    iconBg: 'rgba(124, 58, 237, 0.15)',
    hoverBorder: 'rgba(124, 58, 237, 0.5)',
    hoverGlow: '0 8px 32px rgba(124, 58, 237, 0.15)',
  },
  cyan: {
    bg: 'rgba(34, 211, 238, 0.05)',
    border: 'rgba(34, 211, 238, 0.2)',
    iconBg: 'rgba(34, 211, 238, 0.1)',
    hoverBorder: 'rgba(34, 211, 238, 0.5)',
    hoverGlow: '0 8px 32px rgba(34, 211, 238, 0.12)',
  },
  rose: {
    bg: 'rgba(244, 63, 94, 0.05)',
    border: 'rgba(244, 63, 94, 0.2)',
    iconBg: 'rgba(244, 63, 94, 0.1)',
    hoverBorder: 'rgba(244, 63, 94, 0.5)',
    hoverGlow: '0 8px 32px rgba(244, 63, 94, 0.12)',
  },
};

const tagColorMap = {
  violet: 'bg-violet-500/10 border-violet-500/25 text-violet-300 hover:bg-violet-500/20',
  cyan: 'bg-cyan-500/10 border-cyan-500/25 text-cyan-300 hover:bg-cyan-500/20',
  rose: 'bg-rose-500/10 border-rose-500/25 text-rose-300 hover:bg-rose-500/20',
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding relative overflow-hidden bg-dark-800">
      <div className="absolute inset-0 bg-mesh opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-violet-400 mb-3 block">// what I work with</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto text-center">
            A curated stack of technologies I use to build production-ready applications.
          </p>
          <div className="mt-4 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }} />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16"
        >
          {skills.map(({ category, color, icon, items }) => {
            const c = colorStyles[color];
            return (
              <motion.div
                key={category}
                variants={staggerItem}
                className="rounded-2xl p-6 transition-all duration-300 group cursor-default"
                style={{
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                }}
                whileHover={{
                  borderColor: c.hoverBorder,
                  boxShadow: c.hoverGlow,
                  y: -4,
                }}
              >
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ background: c.iconBg }}
                  >
                    {icon}
                  </div>
                  <h3 className="font-display font-semibold text-white text-sm">{category}</h3>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <motion.span
                      key={item}
                      className={`px-2.5 py-1 rounded-lg text-xs font-mono border transition-all duration-200 cursor-default ${tagColorMap[color]}`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Proficiency bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-8 border border-violet-500/15"
        >
          <h3 className="font-display font-semibold text-white text-lg mb-6 flex items-center gap-2">
            <span
              className="w-1.5 h-6 rounded-full inline-block"
              style={{ background: 'linear-gradient(180deg, #7c3aed, #22d3ee)' }}
            />
            Proficiency Overview
          </h3>

          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
            {skillLevels.map(({ name, level }, index) => (
              <div key={name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-body text-slate-300 text-sm">{name}</span>
                  <motion.span
                    className="font-mono text-xs text-violet-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={viewportConfig}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {level}%
                  </motion.span>
                </div>
                <div className="skill-bar rounded-full overflow-hidden">
                  <motion.div
                    className="skill-bar-fill"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={viewportConfig}
                    transition={{
                      duration: 1.2,
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.1,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
