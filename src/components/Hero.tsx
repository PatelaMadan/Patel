// 'use client';

import { motion, useMotionValue, useSpring, useTransform, useCallback } from 'framer-motion';
import React, { useState } from 'react';

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
    const centerX = Math.max(-0.5, Math.min(0.5, (event.clientX - rect.left) / rect.width - 0.5));
    const centerY = Math.max(-0.5, Math.min(0.5, (event.clientY - rect.top) / rect.height - 0.5));
    mouseX.set(centerX);
    mouseY.set(centerY);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  return (
    <motion.section 
      className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-br from-slate-900 via-purple-900/10 to-slate-900 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Background gradient effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-600/15 via-transparent to-blue-600/15"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Central glow */}
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
        <motion.div className="text-center mb-16 lg:mb-24" variants={containerVariants}>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl mb-6 text-white/90 font-medium" 
            variants={itemVariants}
          >
            Hi! I'm <span className="text-purple-400 bg-purple-500/20 px-2 py-1 rounded-lg">Madan Patel</span>
          </motion.p>
          
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-black mb-8 bg-gradient-to-r from-white via-purple-100 to-blue-100 bg-clip-text text-transparent leading-[0.9] tracking-tight"
            variants={itemVariants}
          >
            OGL Developer | Oracle Guided Learning Specialist
          </motion.h1>
          
          <motion.div 
            className="text-xl sm:text-2xl lg:text-3xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Dynamic Oracle Guided Learning (OGL) Developer transforming complex user experiences in Oracle applications. I design intuitive, step-by-step guides that streamline processes, minimize reliance on external documentation, and boost user adoption.
          </motion.div>

       <motion.p 
  className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-16 italic bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-white/10"
  variants={itemVariants}
>
  "Building guided experiences that make complex Oracle applications intuitive and accessible."
</motion.p>

{/* Add CTA buttons + closing tags */}
<motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center" variants={itemVariants}>
  <a 
    href="/MadanPatel_Resume.pdf" 
    download 
    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-xl hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] transition-all duration-300 text-lg"
  >
    Download Resume
  </a>
  <a 
    href="#contact" 
    className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 text-lg"
  >
    Get In Touch
  </a>
</motion.div>
</motion.div>
</div>

{/* Sparkles */}
{Array.from({ length: 12 }).map((_, i) => (
  <Sparkle key={i} className="hidden lg:block" delay={i * 0.2} />
))}
</motion.section>
);
};

export default Hero;
 
            className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-16 italic bg-white/5 rounded-2xl p-6 backdrop-blur-sm bo




