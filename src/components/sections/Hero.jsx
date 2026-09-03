import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight, FiMapPin, FiRotateCw, FiCheckCircle } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import { heroTextContainer, heroItem } from '../../utils/animations';
import { personalInfo } from '../../data/portfolio';
import useTypingEffect from '../../hooks/useTypingEffect';
import ThreeHeroBg from '../ui/ThreeHeroBg';

const roles = [
  'Java Full Stack Developer',
  'Spring Boot 3.2 Specialist',
  'React.js Developer',
  'REST API & JWT Architect',
  'Full Stack Software Engineer',
];

const Hero = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const typedText = useTypingEffect(roles, { speed: 70, deleteSpeed: 40, pause: 2000 });

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark-800"
    >
      {/* 3D WebGL Three.js Hero Canvas */}
      <ThreeHeroBg />

      {/* Background mesh gradient */}
      <div className="absolute inset-0 bg-mesh opacity-60" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text Content (7 cols) */}
          <motion.div
            variants={heroTextContainer}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status Badge */}
            <motion.div variants={heroItem}>
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-body backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span>Available for Full-time Software Engineering Opportunities</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={heroItem}>
              <h1 className="font-display font-extrabold leading-tight">
                <span className="text-3xl sm:text-5xl lg:text-6xl text-slate-100 block">
                  Hi, I'm{' '}
                </span>
                <span
                  className="text-4xl sm:text-6xl lg:text-7xl block mt-1 tracking-tight"
                  style={{
                    background: 'linear-gradient(135deg, #c084fc 0%, #7c3aed 40%, #22d3ee 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {personalInfo.name}
                </span>
              </h1>
            </motion.div>

            {/* Typing Effect */}
            <motion.div variants={heroItem} className="h-10 flex items-center">
              <div className="flex items-center gap-1 bg-white/5 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-md">
                <span className="font-mono text-base sm:text-lg text-cyan-400">
                  &lt;{typedText}
                </span>
                <span className="font-mono text-base sm:text-lg text-cyan-400 animate-pulse">
                  |
                </span>
                <span className="font-mono text-base sm:text-lg text-cyan-400">/&gt;</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={heroItem}
              className="font-body text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl"
            >
              {personalInfo.intro}
            </motion.p>

            {/* Location & Quick Specs */}
            <motion.div variants={heroItem} className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                <FiMapPin className="text-violet-400" size={14} />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-emerald-400">
                <FiCheckCircle size={14} />
                Spring Boot 3.2 & React.js
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div variants={heroItem} className="flex flex-wrap gap-3 pt-2">
              <motion.a
                href={personalInfo.resumeUrl}
                download="Aaditya_Lanjekar_SoftwareDeveloper.pdf"
                className="btn-primary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <FiDownload className="text-lg" />
                Download Resume PDF
              </motion.a>

              <motion.button
                onClick={() => scrollTo('projects')}
                className="btn-secondary"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects
                <FiArrowRight className="text-lg" />
              </motion.button>

              <motion.button
                onClick={() => scrollTo('contact')}
                className="btn-outline"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Contact Me
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={heroItem} className="flex items-center gap-3 pt-2">
              <span className="text-slate-500 text-xs font-mono uppercase tracking-wider">Connect:</span>
              {[
                { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400' },
                { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: 'hover:text-purple-400' },
                { icon: SiHackerrank, href: personalInfo.hackerrank, label: 'HackerRank', color: 'hover:text-emerald-400' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email', color: 'hover:text-violet-400' },
              ].map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-slate-400 ${color} bg-white/5 border border-white/10 hover:border-violet-500/40 transition-all duration-200`}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: 360° Rotational Interactive Profile Card (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-sm">
              {/* Outer Glowing Aura */}
              <div
                className="absolute -inset-3 rounded-3xl blur-2xl opacity-40 animate-pulse pointer-events-none"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #22d3ee)' }}
              />

              {/* 360° Rotational Flip Container */}
              <div
                className="relative cursor-pointer perspective-1000"
                onClick={() => setIsFlipped(!isFlipped)}
                title="Click card for 360° perspective view"
              >
                <motion.div
                  className="w-full glass-card rounded-3xl p-6 border border-violet-500/30 relative transition-transform duration-700"
                  style={{
                    transformStyle: 'preserve-3d',
                    transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* FRONT FACE */}
                  <div className={isFlipped ? 'invisible h-0 overflow-hidden' : 'block'}>
                    {/* Rotational Indicator Badge */}
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-mono text-violet-300 bg-violet-500/20 px-3 py-1 rounded-full border border-violet-500/30 flex items-center gap-1.5">
                        <FiRotateCw className="animate-spin" size={12} />
                        360° Interactive View
                      </span>
                      <span className="text-xs font-mono text-emerald-400">● Live Profile</span>
                    </div>

                    {/* Aaditya's Photo Frame */}
                    <div className="relative mx-auto w-48 h-60 rounded-2xl mb-5 overflow-hidden border-2 border-violet-500/40 shadow-2xl group">
                      <img
                        src={personalInfo.photoUrl}
                        alt="Aaditya Mahesh Lanjekar"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-60" />
                    </div>

                    {/* Name & Role */}
                    <div className="text-center mb-4">
                      <h2 className="font-display font-bold text-white text-xl">
                        Aaditya Mahesh Lanjekar
                      </h2>
                      <p className="text-violet-400 text-sm font-mono mt-0.5">
                        Java Full Stack Developer
                      </p>
                      <p className="text-slate-400 text-xs mt-1 font-body">
                        M.Sc. Computer Applications | Pune
                      </p>
                    </div>

                    {/* Key Stats Bar */}
                    <div className="grid grid-cols-3 gap-2 pt-3 border-t border-white/10 text-center">
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="font-bold text-violet-400 font-display">Spring Boot</div>
                        <div className="text-[10px] text-slate-400 font-mono">3.2 / JPA</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="font-bold text-cyan-400 font-display">React.js</div>
                        <div className="text-[10px] text-slate-400 font-mono">ES6+ / Vite</div>
                      </div>
                      <div className="p-2 rounded-xl bg-white/5 border border-white/5">
                        <div className="font-bold text-emerald-400 font-display">MySQL</div>
                        <div className="text-[10px] text-slate-400 font-mono">REST & JWT</div>
                      </div>
                    </div>
                  </div>

                  {/* BACK FACE (360° Rotated View) */}
                  <div
                    className={!isFlipped ? 'invisible h-0 overflow-hidden' : 'block'}
                    style={{ transform: 'rotateY(180deg)' }}
                  >
                    <div className="text-center py-4">
                      <div className="w-12 h-12 rounded-full bg-violet-500/20 border border-violet-500/40 text-violet-300 flex items-center justify-center mx-auto mb-3">
                        <FiRotateCw size={20} />
                      </div>
                      <h3 className="font-display font-bold text-white text-lg">
                        Technical Architecture Stack
                      </h3>
                      <p className="text-xs text-slate-400 font-body mt-1">
                        High-performance Java & React ecosystem
                      </p>

                      <div className="mt-5 space-y-2.5 text-left text-xs font-mono">
                        <div className="p-2.5 rounded-xl bg-white/5 border border-violet-500/20 flex justify-between items-center">
                          <span className="text-violet-300">Backend:</span>
                          <span className="text-white font-semibold">Java 17, Spring Boot 3.2</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-cyan-500/20 flex justify-between items-center">
                          <span className="text-cyan-300">Frontend:</span>
                          <span className="text-white font-semibold">React.js, GSAP, Tailwind</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-emerald-500/20 flex justify-between items-center">
                          <span className="text-emerald-300">Security:</span>
                          <span className="text-white font-semibold">JWT, Spring Security</span>
                        </div>
                        <div className="p-2.5 rounded-xl bg-white/5 border border-purple-500/20 flex justify-between items-center">
                          <span className="text-purple-300">Database:</span>
                          <span className="text-white font-semibold">MySQL, PostgreSQL</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-violet-400 font-mono mt-6">
                        Click again to flip back
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
