import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import { SiHackerrank } from 'react-icons/si';
import { fadeInLeft, fadeInRight, viewportConfig } from '../../utils/animations';
import { personalInfo } from '../../data/portfolio';
import { emailjsConfig, isEmailjsConfigured } from '../../utils/emailConfig';

const contactInfo = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: FiMapPin, label: 'Location', value: personalInfo.location, href: null },
];

const socialLinks = [
  { icon: FiGithub, label: 'GitHub', href: personalInfo.github, color: '#a78bfa' },
  { icon: FiLinkedin, label: 'LinkedIn', href: personalInfo.linkedin, color: '#22d3ee' },
  { icon: SiHackerrank, label: 'HackerRank', href: personalInfo.hackerrank, color: '#4ade80' },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.trim().length < 10) newErrors.message = 'Message must be at least 10 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    if (!isEmailjsConfigured()) {
      // Fallback so the form still "works" before EmailJS env vars are set up
      console.warn(
        'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, ' +
          'and VITE_EMAILJS_PUBLIC_KEY to your .env file. Falling back to a mailto link.'
      );
      const mailSubject = encodeURIComponent(formData.subject || `Portfolio inquiry from ${formData.name}`);
      const mailBody = encodeURIComponent(`${formData.message}\n\n— ${formData.name} (${formData.email})`);
      window.location.href = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;
      return;
    }

    setStatus('submitting');

    try {
      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || `Portfolio inquiry from ${formData.name}`,
          message: formData.message,
          to_email: personalInfo.email,
        },
        emailjsConfig.publicKey
      );

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('EmailJS send failed:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-dark-700">
      <div className="absolute inset-0 bg-mesh opacity-40" />
      <div className="orb w-96 h-96 bg-violet-600 -bottom-20 -left-20" />
      <div className="orb w-72 h-72 bg-cyan-500 top-10 right-0" style={{ animationDelay: '4s' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
          transition={{ duration: 0.6 }}
        >
          <span className="font-mono text-sm text-violet-400 mb-3 block">// let's connect</span>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle mt-4 mx-auto text-center">
            Have an opportunity, a project, or just want to talk tech? My inbox is always open.
          </p>
          <div className="mt-4 mx-auto w-16 h-0.5 rounded-full" style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }} />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            <div className="glass-card rounded-2xl p-6 border border-violet-500/15">
              <h3 className="font-display font-semibold text-white text-lg mb-5">Contact Information</h3>
              <div className="flex flex-col gap-4">
                {contactInfo.map(({ icon: Icon, label, value, href }) => {
                  const Wrapper = href ? 'a' : 'div';
                  return (
                    <Wrapper
                      key={label}
                      href={href}
                      className="flex items-center gap-3 group"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                        style={{ background: 'rgba(124, 58, 237, 0.12)' }}
                      >
                        <Icon size={16} className="text-violet-400" />
                      </div>
                      <div>
                        <p className="text-slate-600 text-xs font-mono">{label}</p>
                        <p className="text-slate-300 text-sm font-body group-hover:text-white transition-colors">
                          {value}
                        </p>
                      </div>
                    </Wrapper>
                  );
                })}
              </div>

              {/* Social links */}
              <div className="mt-6 pt-6 border-t border-white/5">
                <p className="text-slate-600 text-xs font-mono mb-3">Find me on</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, label, href, color }) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 border border-white/10 transition-all duration-200"
                      whileHover={{ scale: 1.1, y: -3, borderColor: color }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={16} style={{ color }} />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>

            {/* Available badge */}
            <div
              className="rounded-2xl p-5 flex items-center gap-3"
              style={{ background: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.2)' }}
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-400" />
              </span>
              <span className="text-green-300 text-sm font-body">
                Currently available for full-time opportunities
              </span>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-6 sm:p-8 border border-violet-500/15"
              noValidate
            >
              <h3 className="font-display font-semibold text-white text-lg mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-5 mb-5">
                <div>
                  <label htmlFor="name" className="block text-slate-400 text-xs font-mono mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                      errors.name
                        ? 'border-rose-500/50 focus:ring-rose-500/30'
                        : 'border-white/10 focus:ring-violet-500/40 focus:border-violet-500/50'
                    }`}
                  />
                  {errors.name && <p className="text-rose-400 text-xs mt-1.5">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-slate-400 text-xs font-mono mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-rose-500/50 focus:ring-rose-500/30'
                        : 'border-white/10 focus:ring-violet-500/40 focus:border-violet-500/50'
                    }`}
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1.5">{errors.email}</p>}
                </div>
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="block text-slate-400 text-xs font-mono mb-2">
                  Subject <span className="text-slate-600">(optional)</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Job opportunity, collaboration, etc."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/50 transition-all"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-slate-400 text-xs font-mono mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or opportunity..."
                  className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:ring-2 transition-all resize-none ${
                    errors.message
                      ? 'border-rose-500/50 focus:ring-rose-500/30'
                      : 'border-white/10 focus:ring-violet-500/40 focus:border-violet-500/50'
                  }`}
                />
                {errors.message && <p className="text-rose-400 text-xs mt-1.5">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-primary w-full justify-center disabled:opacity-60"
                whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
              >
                {status === 'success' ? (
                  <>
                    <FiCheck size={16} />
                    Message Sent Successfully
                  </>
                ) : status === 'error' ? (
                  <>
                    <FiAlertCircle size={16} />
                    Something Went Wrong — Try Again
                  </>
                ) : status === 'submitting' ? (
                  'Sending...'
                ) : (
                  <>
                    <FiSend size={15} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-slate-600 text-xs text-center mt-4 font-body">
                {status === 'error' ? (
                  <>
                    Couldn't send automatically — email me directly at{' '}
                    <a href={`mailto:${personalInfo.email}`} className="text-violet-400">
                      {personalInfo.email}
                    </a>
                  </>
                ) : (
                  <>
                    Sent directly to <span className="text-violet-400">{personalInfo.email}</span>
                  </>
                )}
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
