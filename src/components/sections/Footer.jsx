import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiHeart } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import { personalInfo, navLinks } from '../../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-800 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-mesh opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <button onClick={() => scrollToSection('home')} className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center border border-violet-500/30">
                <span className="font-display font-bold text-lg text-white">A</span>
              </div>
              <span className="font-display font-semibold text-white">
                Aaditya<span className="text-violet-400">.</span>dev
              </span>
            </button>
            <p className="text-slate-500 text-sm font-body leading-relaxed max-w-xs">
              Java Full Stack Developer building scalable, production-ready web applications
              from Pune, India.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-slate-500 hover:text-violet-400 text-sm font-body transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Let's Connect</h4>
            <div className="flex gap-3 mb-4">
              {[
                { icon: FiGithub, href: personalInfo.github, label: 'GitHub' },
                { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn' },
                { icon: SiHackerrank, href: personalInfo.hackerrank, label: 'HackerRank' },
                { icon: FiMail, href: `mailto:${personalInfo.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 hover:text-violet-400 bg-white/5 border border-white/5 hover:border-violet-500/30 transition-all"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={15} />
                </motion.a>
              ))}
            </div>
            <p className="text-slate-600 text-xs font-mono">{personalInfo.email}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs font-body flex items-center gap-1.5">
            © {year} Aaditya Lanjekar. Made with <FiHeart size={12} className="text-rose-500" /> in Pune
          </p>
          <p className="text-slate-600 text-xs font-mono">
            Built with React.js, Tailwind CSS & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
