import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiDatabase, FiServer, FiGlobe, FiLock, FiPlay, FiCheckCircle } from 'react-icons/fi';

const ArchitectureModal = ({ isOpen, onClose }) => {
  const [selectedEndpoint, setSelectedEndpoint] = useState('auth');
  const [activeStep, setActiveStep] = useState(1);
  const [testResult, setTestResult] = useState(null);

  if (!isOpen) return null;

  const endpoints = {
    auth: {
      name: 'POST /api/v1/auth/login',
      controller: 'AuthController (Spring Boot Security)',
      desc: 'Authenticates user credentials against MySQL, generates signed JWT bearer token with claims.',
      response: '{\n  "token": "eyJhbGciOiJIUzI1NiJ9...",\n  "type": "Bearer",\n  "role": "ROLE_ADMIN",\n  "status": 200\n}',
    },
    fruit: {
      name: 'GET /api/v1/fruits',
      controller: 'FruitController (Spring Data JPA)',
      desc: 'Fetches paginated fruit inventory from MySQL database using Hibernate ORM with caching.',
      response: '[\n  {\n    "id": 1,\n    "name": "Organic Alphonso Mango",\n    "price": 12.99,\n    "stock": 150,\n    "category": "Organic Fresh"\n  }\n]',
    },
    cart: {
      name: 'POST /api/v1/cart/add',
      controller: 'CartController (JWT Authorized)',
      desc: 'Updates user shopping cart in MySQL session database with CORS security validation.',
      response: '{\n  "cartId": 8042,\n  "itemCount": 4,\n  "totalPrice": 48.96,\n  "updatedAt": "2026-09-03T15:40:00Z"\n}',
    },
    order: {
      name: 'POST /api/v1/orders/checkout',
      controller: 'OrderController (Role-Based Access)',
      desc: 'Executes transactional order placement, decreases inventory stock, and emits receipt metadata.',
      response: '{\n  "orderId": "ORD-2026-9941",\n  "status": "PROCESSING",\n  "payment": "SUCCESS",\n  "estimatedDelivery": "2 Days"\n}',
    },
  };

  const handleSimulateApi = () => {
    setActiveStep(1);
    setTestResult('Connecting to Spring Boot 3.2 backend...');

    setTimeout(() => {
      setActiveStep(2);
      setTestResult('Authenticating JWT Bearer Token & CORS policy...');
    }, 400);

    setTimeout(() => {
      setActiveStep(3);
      setTestResult('Executing Spring Data JPA Query in MySQL Database...');
    }, 800);

    setTimeout(() => {
      setActiveStep(4);
      setTestResult('200 OK — REST API JSON Response Received!');
    }, 1200);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-dark-900/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl glass-card rounded-3xl p-6 sm:p-8 border border-violet-500/30 overflow-hidden shadow-2xl z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-violet-400 block mb-1">
                // System Architecture Visualizer
              </span>
              <h3 className="font-display font-bold text-white text-xl sm:text-2xl">
                Spring Boot 3.2 & React Full-Stack Architecture
              </h3>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-violet-500/40 text-slate-400 hover:text-white flex items-center justify-center transition-all"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Architecture Pipeline Flow */}
          <div className="grid md:grid-cols-3 gap-4 my-6">
            {/* Step 1: React Frontend */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                activeStep >= 1
                  ? 'bg-cyan-500/10 border-cyan-500/40 text-cyan-300'
                  : 'bg-white/5 border-white/10 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <FiGlobe size={18} />
                <h4 className="font-display font-semibold text-sm">1. React.js Frontend</h4>
              </div>
              <p className="text-xs font-body text-slate-300">
                Axios HTTP client sends REST API request with JWT authorization header.
              </p>
            </div>

            {/* Step 2: Spring Boot Server */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                activeStep >= 2
                  ? 'bg-violet-500/10 border-violet-500/40 text-violet-300'
                  : 'bg-white/5 border-white/10 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <FiServer size={18} />
                <h4 className="font-display font-semibold text-sm">2. Spring Boot 3.2</h4>
              </div>
              <p className="text-xs font-body text-slate-300">
                Spring Security & JWT Filter validates token, routes to Controller.
              </p>
            </div>

            {/* Step 3: MySQL Database */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                activeStep >= 3
                  ? 'bg-emerald-500/10 border-emerald-500/40 text-emerald-300'
                  : 'bg-white/5 border-white/10 text-slate-500'
              }`}
            >
              <div className="flex items-center gap-2 mb-2">
                <FiDatabase size={18} />
                <h4 className="font-display font-semibold text-sm">3. MySQL & JPA</h4>
              </div>
              <p className="text-xs font-body text-slate-300">
                Hibernate ORM executes query and returns structured data.
              </p>
            </div>
          </div>

          {/* Interactive Endpoint Simulator */}
          <div className="grid md:grid-cols-12 gap-6 bg-white/[0.02] border border-white/5 p-4 rounded-2xl">
            {/* Endpoint Selector (4 cols) */}
            <div className="md:col-span-4 space-y-2">
              <span className="text-xs font-mono text-slate-400 block mb-2">Select Controller:</span>
              {Object.keys(endpoints).map((key) => (
                <button
                  key={key}
                  onClick={() => {
                    setSelectedEndpoint(key);
                    setTestResult(null);
                    setActiveStep(1);
                  }}
                  className={`w-full text-left p-3 rounded-xl font-mono text-xs border transition-all ${
                    selectedEndpoint === key
                      ? 'bg-violet-600/20 border-violet-500/50 text-violet-200'
                      : 'bg-white/5 border-white/5 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {endpoints[key].name}
                </button>
              ))}
            </div>

            {/* Live Controller Details (8 cols) */}
            <div className="md:col-span-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-violet-400">
                    {endpoints[selectedEndpoint].controller}
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                    <FiLock size={10} /> Spring Security Protected
                  </span>
                </div>
                <p className="text-xs text-slate-300 font-body mb-3">
                  {endpoints[selectedEndpoint].desc}
                </p>

                {/* Simulated Response Preview */}
                <div className="bg-dark-900 rounded-xl p-3 border border-white/10 font-mono text-[11px] text-emerald-400 overflow-x-auto">
                  <pre>{endpoints[selectedEndpoint].response}</pre>
                </div>
              </div>

              {/* Run Simulation Button */}
              <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/10">
                <span className="text-xs font-mono text-slate-400">
                  {testResult || 'Click simulate to test API request'}
                </span>
                <button
                  onClick={handleSimulateApi}
                  className="btn-primary text-xs py-2 px-4"
                >
                  <FiPlay size={14} />
                  Simulate API Request
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ArchitectureModal;
