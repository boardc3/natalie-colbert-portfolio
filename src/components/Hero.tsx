'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-secondary to-background pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-secondary text-primary rounded-full text-sm font-medium">
              Brand Marketing Strategist
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
            Hey there, I&rsquo;m Natalie
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            I&rsquo;m a strategist and marketing leader with over 
            <span className="text-primary font-semibold"> 14 years dedicated to building brands</span>. 
            Think of me as a builder with taste – I thrive on crafting big visions and then meticulously 
            designing the systems to bring them to 
            <span className="text-primary font-semibold"> flawless, results-driven life</span>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-card rounded-lg hover:bg-primary-hover transition-colors font-medium"
            >
              View Select Works
              <ArrowDown className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              Let&rsquo;s Connect
            </a>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Available for projects
            </div>
            <div>Based in Laguna Beach, CA</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-3xl opacity-20"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-card shadow-2xl">
              <Image
                src="/profile-placeholder.png"
                alt="Portrait of Natalie Colbert"
                fill
                sizes="320px"
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