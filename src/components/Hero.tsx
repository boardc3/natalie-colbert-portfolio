'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full opacity-20 blur-3xl" style={{ backgroundColor: 'var(--color-primary)' }}></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: 'var(--color-accent)' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: 'var(--color-secondary)' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="mb-8">
            <span className="inline-block px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-card)' }}>
              Brand Marketing Strategist
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight" style={{ color: 'var(--color-foreground)' }}>
            Hey there,{" "}
            <span className="block mt-2">
              I&rsquo;m{" "}
              <span className="relative inline-block">
                <span 
                  className="bg-gradient-to-r bg-clip-text text-transparent font-black"
                  style={{ 
                    backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-accent))`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Natalie
                </span>
                <div 
                  className="absolute -bottom-3 left-0 right-0 h-2 opacity-40"
                  style={{ 
                    background: `linear-gradient(to right, var(--color-primary), var(--color-accent))`
                  }}
                ></div>
              </span>
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 max-w-2xl leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
            I&rsquo;m a strategist and marketing leader with over{" "}
            <span 
              className="relative inline-block px-4 py-2 rounded-lg font-bold"
              style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-primary)' }}
            >
              14 years dedicated to building brands
            </span>. 
            Think of me as a{" "}
            <em className="font-bold not-italic" style={{ color: 'var(--color-primary)' }}>builder with taste</em> – I thrive on crafting big visions and then meticulously 
            designing the systems to bring them to{" "}
            <span className="relative inline-block font-bold" style={{ color: 'var(--color-primary)' }}>
              flawless, results-driven life
              <span 
                className="absolute -bottom-1 left-0 right-0 h-1 opacity-60 block"
                style={{ backgroundColor: 'var(--color-primary)' }}
              ></span>
            </span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 mb-12">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-card)' }}
            >
              View Select Works
              <ArrowDown className="ml-3 h-6 w-6" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-10 py-5 border-3 rounded-xl font-bold text-lg transition-all transform hover:scale-105"
              style={{ 
                borderColor: 'var(--color-primary)', 
                color: 'var(--color-primary)',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Let&rsquo;s Connect
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-8 text-lg" style={{ color: 'var(--color-muted-foreground)' }}>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-medium">Available for projects</span>
            </div>
            <div className="font-medium">Based in Laguna Beach, CA</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-96 h-96">
            <div 
              className="absolute inset-0 rounded-full blur-3xl opacity-30"
              style={{ 
                background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`
              }}
            ></div>
            <div 
              className="relative w-full h-full rounded-full overflow-hidden border-4 shadow-2xl"
              style={{ borderColor: 'var(--color-card)' }}
            >
              <Image
                src="/profile-placeholder.png"
                alt="Portrait of Natalie Colbert"
                fill
                sizes="384px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 