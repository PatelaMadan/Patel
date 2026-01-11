import { motion, useMotionValue, useSpring, useTransform, useCallback } from 'framer-motion';
import React, { useState } from 'react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const Sparkle = ({ className = "", style = {}, delay = 0, size = "2px" }) => (
  <motion.div
    className={`absolute rounded-full bg-gradient-to-r from-purple-400/80 to-blue-400/80 blur-sm ${className}`}
    style={{
      width: size,
      height: size,
      ...style
    }}
    animate={{
      scale: [0.8, 1.4, 0.8],
      opacity: [0, 0.9, 0],
    }}
    transition={{
      duration: 2.5,
      delay,
      repeat: Infinity,
      repeatDelay: 1.5,
      ease: "easeInOut"
    }}
  />
);

const Hero: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 20, stiffness: 200 };

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);

  const floatingAnimation = {
    y: [0, -15, 0],
    rotateZ: [-1, 1, -1],
    transition: { 
      duration: 5, 
      repeat: Infinity, 
      ease: "easeInOut"
    }
  };

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = (event.clientX - rect.left) / rect.width - 0.5;
    const centerY = (event.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(centerX);
    mouseY.set(centerY);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <motion.section 
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={staggerContainer}
    >
      {/* Background gradient effects - FIXED */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-600/15 via-transparent to-blue-600/15"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Central glow - FIXED gradient-radial */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-gradient-to-r from-purple-600/20 via-blue-600/10 to-purple-600/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
          rotate: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      />

      <div className="relative z-10 container mx-auto max-w-7xl px-4">
        {/* Hero Content */}
        <motion.div className="text-center mb-16 lg:mb-24" variants={staggerContainer}>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-6 text-white/90 font-medium" 
            variants={fadeInUp}
            custom={0}
          >
            Hi! I'm <span className="text-purple-400 bg-purple-500/20 px-2 py-1 rounded-lg">Madan Patel</span>
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent leading-[0.9] tracking-tight"
            variants={fadeInUp}
            custom={1}
          >
            Full Stack Developer
          </motion.h1>
          
          <motion.div 
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={fadeInUp}
            custom={2}
          >
            Crafting experiences with{' '}
            <span className="text-purple-400 font-semibold bg-gradient-to-r from-purple-500/30 to-blue-500/30 px-3 py-2 rounded-xl">
              Precision
            </span>{' '}
            and deploying with{' '}
            <span className="text-purple-400 font-semibold bg-gradient-to-r from-purple-500/30 to-blue-500/30 px-3 py-2 rounded-xl">
              Passion
            </span>
          </motion.div>

          <motion.p 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-16 italic bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
            variants={fadeInUp}
            custom={3}
          >
            "If the code doesn't impress you, what else can?"
          </motion.p>
        </motion.div>

        {/* 3D Avatar - ALL BUGS FIXED */}
        <motion.div 
          className="flex justify-center mb-20 lg:mb-28"
          variants={fadeInUp}
          custom={4}
          style={{ perspective: 1200 }}
        >
          <motion.div
            className="relative w-44 h-44 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80"
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
          >
            {/* Outer glow ring */}
            <motion.div 
              className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-r from-purple-500/30 via-blue-500/20 to-purple-500/30 blur-xl shadow-2xl -z-10"
              animate={{ 
                scale: [1, 1.05, 1], 
                opacity: [0.6, 0.8, 0.6] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Optimized sparkles - 4 instead of 18 */}
            {[
              { top: '15%', left: '15%', size: '3px', delay: 0 },
              { top: '75%', right: '15%', size: '2px', delay: 0.8 },
              { bottom: '25%', left: '20%', size: '4px', delay: 1.6 },
              { top: '40%', right: '25%', size: '3px', delay: 2.2 }
            ].map((pos, i) => (
              <Sparkle 
                key={`sparkle-${i}`}
                className={`absolute ${pos.top || ''} ${pos.left ? `left-[${pos.left}]` : ''} ${pos.right ? `right-[${pos.right}]` : ''} ${pos.bottom || ''}`}
                style={{ 
                  left: pos.left,
                  right: pos.right,
                  top: pos.top,
                  bottom: pos.bottom
                }}
                size={pos.size} 
                delay={pos.delay} 
              />
            ))}

            {/* Main avatar container */}
            <motion.div 
              className="relative w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl ring-4 ring-white/20 bg-gradient-to-br from-white/10 via-transparent to-black/20 backdrop-blur-xl"
              style={{ 
                rotateX, 
                rotateY, 
                transformStyle: 'preserve-3d' 
              }}
              animate={floatingAnimation}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Image with fallback */}
              <img
                src="/images/madan.jpg"
                alt="Madan Patel"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&fit=crop&crop=face";
                }}
              />
              
              {/* Gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                animate={{ opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bio Section - Cleaned & Consolidated */}
        <motion.div className="text-center max-w-4xl mx-auto px-4" variants={staggerContainer}>
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent"
            variants={fadeInUp}
            custom={5}
          >
            OGL Developer at Oracle
          </motion.h2>
          
          <motion.div 
            className="text-lg sm:text-xl text-gray-200/90 leading-relaxed max-w-3xl mx-auto bg-white/5 rounded-3xl p-8 sm:p-10 backdrop-blur-md border border-white/10 shadow-2xl"
            variants={fadeInUp}
            custom={6}
          >
            <p className="mb-6">
              Transforming complex Oracle application processes into{' '}
              <span className="text-purple-400 font-semibold">intuitive guided learning experiences</span>.
            </p>
            <p>
              CGPA: <span className="text-green-400 font-mono text-lg">8.1</span> • 
              Following digital adoption best practices for consistency, clarity, and reusability.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
