import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll();

  // Parallax transforms
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  return (
    <div className="min-h-[200vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-x-hidden">
      
      {/* Hero Section - Timeline Cascade */}
      <motion.section 
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{ y }}
        className="min-h-screen flex items-center justify-center relative"
      >
        <motion.div 
          className="text-center max-w-4xl mx-auto p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { 
              opacity: 1, 
              scale: 1,
              transition: {
                staggerChildren: 0.2,
                delayChildren: 0.4
              }
            }
          }}
        >
          <motion.h1 
            variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 drop-shadow-2xl"
          >
            Advanced Animations
          </motion.h1>
          
          <motion.p 
            variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
            className="text-xl md:text-2xl mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed"
          >
            Framer Motion • 60fps • Scroll-triggered • Timeline sequences
          </motion.p>

          {/* CTA Button - Hover 3D */}
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              rotateX: 10, 
              rotateY: 10,
              boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-3xl shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
          >
            Explore Demos ↓
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Scroll-Triggered Cards */}
      <section ref={ref} className="min-h-screen py-32 px-8">
        <motion.div 
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
        >
          {[
            { title: "Scroll Parallax", icon: "🌌", color: "from-emerald-500 to-teal-500" },
            { title: "Hover 3D", icon: "🎭", color: "from-orange-500 to-red-500" },
            { title: "Timeline", icon: "⏱️", color: "from-purple-500 to-indigo-500" }
          ].map((demo, index) => (
            <motion.div
              key={demo.title}
              variants={{
                hidden: { opacity: 0, y: 75 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ 
                y: -20, 
                scale: 1.05,
                boxShadow: "0 35px 60px -12px rgba(0,0,0,0.3)"
              }}
              className="group cursor-pointer relative overflow-hidden rounded-3xl p-10 bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all duration-500"
            >
              <div className={`text-5xl mb-6 ${demo.color} group-hover:scale-110 transition-transform duration-300`}>
                {demo.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">
                {demo.title}
              </h3>
              <p className="opacity-75 leading-relaxed group-hover:opacity-100 transition-opacity">
                Hardware accelerated • 60fps • GPU optimized
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Counter with Stagger Animation */}
      <section className="min-h-screen flex items-center justify-center py-20">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 max-w-md w-full text-center"
        >
          <h2 className="text-3xl font-bold mb-8 text-white">Interactive Counter</h2>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              repeatDelay: 3,
              ease: "easeInOut"
            }}
            className="text-6xl font-black mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent"
          >
            {count}
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setCount(c => c + 1)}
            className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-emerald-500/50 transition-all duration-300"
          >
            +1
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
}

export default App;
