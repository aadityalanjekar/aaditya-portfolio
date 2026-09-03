import { motion } from 'framer-motion';
import { FiCode, FiServer, FiDatabase, FiZap, FiCheckCircle } from 'react-icons/fi';
import { fadeInLeft, fadeInRight, staggerContainer, staggerItem, viewportConfig } from '../../utils/animations';
import { stats, personalInfo } from '../../data/portfolio';

const highlights = [
  {
    icon: FiCode,
    title: 'Frontend Development',
    desc: 'React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS — building mobile-first responsive interfaces.',
    color: 'violet',
  },
  {
    icon: FiServer,
    title: 'Backend Engineering',
    desc: 'Spring Boot 3.2, Spring MVC, REST APIs, JWT Auth, Spring Security — secure server architecture.',
    color: 'cyan',
  },
  {
    icon: FiDatabase,
    title: 'Databases & ORM',
    desc: 'MySQL, PostgreSQL, Hibernate ORM, Spring Data JPA — designing normalized data schemas.',
    color: 'rose',
  },
  {
    icon: FiZap,
    title: '3D & Motion UI',
    desc: 'Three.js, GSAP scroll-driven animations, 360° rotational presentations & subtle micro-interactions.',
    color: 'violet',
  },
];

const colorMap = {
  violet: {
    bg: 'rgba(124, 58, 237, 0.1)',
    border: 'rgba(124, 58, 237, 0.25)',
    icon: '#a78bfa',
  },
  cyan: {
    bg: 'rgba(34, 211, 238, 0.1)',
    border: 'rgba(34, 211, 238, 0.25)',
    icon: '#22d3ee',
  },
  rose: {
    bg: 'rgba(244, 63, 94, 0.1)',
    border: 'rgba(244, 63, 94, 0.25)',
    icon: '#fb7185',
  },
};

const About = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden bg-dark-700">
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
          <span className="font-mono text-sm text-violet-400 mb-3 block">// professional profile</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div
            className="mt-4 mx-auto w-16 h-0.5 rounded-full"
            style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }}
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Interactive Java Developer Class Terminal */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="relative"
          >
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-3xl blur-xl opacity-25 pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #22d3ee)' }}
              />
              <div className="relative glass-card rounded-3xl p-8 border border-violet-500/30">
                {/* Code Editor Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 font-mono text-xs text-slate-400">
                      AadityaLanjekar.java
                    </span>
                  </div>
                  <span className="font-mono text-[10px] text-cyan-400">JDK 17 / Spring 3.2</span>
                </div>

                <pre className="font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto text-slate-200">
                  <code>
                    <span className="text-violet-400">package </span>
                    <span className="text-slate-300">com.aaditya.portfolio;</span>
                    {'\n\n'}
                    <span className="text-cyan-400">@RestController</span>
                    {'\n'}
                    <span className="text-violet-400">public class </span>
                    <span className="text-cyan-300">JavaFullStackDeveloper </span>
                    <span className="text-slate-300">{'{'}</span>
                    {'\n\n'}
                    <span className="text-slate-500">  // Professional Profile</span>
                    {'\n'}
                    <span className="text-violet-400">  private final String </span>
                    <span className="text-slate-300">name = </span>
                    <span className="text-emerald-400">"{personalInfo.name}"</span>
                    <span className="text-slate-300">;</span>
                    {'\n'}
                    <span className="text-violet-400">  private final String </span>
                    <span className="text-slate-300">location = </span>
                    <span className="text-emerald-400">"Pune, India"</span>
                    <span className="text-slate-300">;</span>
                    {'\n'}
                    <span className="text-violet-400">  private final String </span>
                    <span className="text-slate-300">degree = </span>
                    <span className="text-emerald-400">"M.Sc Computer Applications"</span>
                    <span className="text-slate-300">;</span>
                    {'\n\n'}
                    <span className="text-slate-500">  // Core Technical Stack</span>
                    {'\n'}
                    <span className="text-violet-400">  private final List&lt;String&gt; </span>
                    <span className="text-slate-300">skills = List.of(</span>
                    {'\n'}
                    <span className="text-emerald-400">    "Java 17", "Spring Boot 3.2", "React.js",</span>
                    {'\n'}
                    <span className="text-emerald-400">    "REST APIs", "JWT Security", "MySQL"</span>
                    {'\n'}
                    <span className="text-slate-300">  );</span>
                    {'\n\n'}
                    <span className="text-cyan-400">  @GetMapping</span>
                    <span className="text-slate-300">(</span>
                    <span className="text-emerald-400">"/status"</span>
                    <span className="text-slate-300">)</span>
                    {'\n'}
                    <span className="text-violet-400">  public ResponseEntity&lt;String&gt; </span>
                    <span className="text-cyan-300">getStatus</span>
                    <span className="text-slate-300">() {'{'}</span>
                    {'\n'}
                    <span className="text-violet-400">    return </span>
                    <span className="text-slate-300">ResponseEntity.ok(</span>
                    <span className="text-emerald-400">"Ready for software developer roles"</span>
                    <span className="text-slate-300">);</span>
                    {'\n'}
                    <span className="text-slate-300">  {'}'}</span>
                    {'\n'}
                    <span className="text-slate-300">{'}'}</span>
                  </code>
                </pre>

                {/* Footer Bar */}
                <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-slate-400">Build: SUCCESS (0.42s)</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <FiCheckCircle size={12} /> Unit Tests Passed
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative Description */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="flex flex-col gap-6"
          >
            <div>
              <h3 className="font-display font-bold text-white text-2xl mb-4">
                Java Full Stack Developer (Fresher) with Real-World Internship Experience
              </h3>
              <p className="font-body text-slate-300 text-base leading-relaxed mb-4">
                I am a dedicated <span className="text-violet-400 font-semibold">Java Full Stack Developer</span> pursuing my M.Sc. in Computer Applications at Suryadatta College, Pune. With a strong foundation in Java, Spring Boot 3.2, RESTful API architecture, React.js, and MySQL, I specialize in building end-to-end web applications.
              </p>
              <p className="font-body text-slate-400 text-base leading-relaxed mb-4">
                Through internships at <span className="text-cyan-400 font-semibold">Seven Mentors Pvt. Ltd.</span> and <span className="text-cyan-400 font-semibold">CODEWAY</span>, I have built component-based React interfaces, optimized frontend rendering performance, and designed RESTful backend controllers with Spring Security & JWT authentication.
              </p>
              <p className="font-body text-slate-400 text-base leading-relaxed">
                I take pride in writing clean, well-documented code adhering to OOP principles, MVC architecture, and modern UX standards.
              </p>
            </div>

            {/* Feature Cards Grid */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              className="grid grid-cols-2 gap-3"
            >
              {highlights.map(({ icon: Icon, title, desc, color }) => {
                const c = colorMap[color];
                return (
                  <motion.div
                    key={title}
                    variants={staggerItem}
                    className="rounded-2xl p-4 transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: c.bg,
                      border: `1px solid ${c.border}`,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-xl flex items-center justify-center mb-2"
                      style={{ background: c.bg, border: `1px solid ${c.border}` }}
                    >
                      <Icon size={16} style={{ color: c.icon }} />
                    </div>
                    <h4 className="font-display font-bold text-white text-xs sm:text-sm mb-1">{title}</h4>
                    <p className="font-body text-slate-400 text-[11px] leading-relaxed">{desc}</p>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Metric Cards Row */}
        <motion.div
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
        >
          {stats.map(({ value, label, icon }) => (
            <motion.div
              key={label}
              variants={staggerItem}
              className="stat-card group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="text-3xl mb-2">{icon}</div>
              <div
                className="font-display font-extrabold text-3xl mb-1"
                style={{
                  background: 'linear-gradient(135deg, #c084fc, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {value}
              </div>
              <div className="font-body text-slate-400 text-xs sm:text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
