import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
        >
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="orb w-96 h-96 bg-violet-600 left-1/4 top-1/4" style={{ animationDelay: '0s' }} />
            <div className="orb w-64 h-64 bg-cyan-500 right-1/4 bottom-1/4" style={{ animationDelay: '3s' }} />
          </div>

          <div className="relative z-10 flex flex-col items-center gap-8">
            {/* Logo mark */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-20 h-20"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600 to-cyan-500 opacity-20 blur-xl animate-pulse-slow" />
              <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center border border-violet-500/30">
                <span className="font-display font-bold text-3xl text-white">A</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-center"
            >
              <h1 className="font-display font-bold text-2xl text-white">
                Aaditya Lanjekar
              </h1>
              <p className="font-body text-slate-400 text-sm mt-1">Java Full Stack Developer</p>
            </motion.div>

            {/* Loading bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-48"
            >
              <div className="h-0.5 bg-dark-400 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #7c3aed, #22d3ee)' }}
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
                />
              </div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-center text-slate-500 text-xs mt-2 font-mono"
              >
                Initializing portfolio...
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
