"use client";
import { motion } from "framer-motion";

export default function TypographyShowcase() {
  return (
    <section className="py-24 bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="mb-8">
            <span className="inline-block px-6 py-3 bg-primary text-card rounded-full text-sm font-medium tracking-wide uppercase">
              Typography Excellence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-foreground leading-tight">
            Crafting{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Memorable
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent opacity-30"></div>
            </span>{" "}
            Brand Experiences
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Where strategic thinking meets cultural insight to create campaigns that don't just perform—they{" "}
            <em className="text-primary font-semibold not-italic">captivate, convert, and inspire</em>.
          </p>
        </motion.div>

        {/* Typography Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Large Display Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card p-8 rounded-2xl border border-border"
          >
            <div className="text-6xl font-bold text-primary mb-4">14+</div>
            <div className="text-lg font-semibold text-card-foreground mb-2">Years of Excellence</div>
            <div className="text-muted-foreground">Agency-side expertise building world-class brands</div>
          </motion.div>

          {/* Stylized Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-2xl border border-border"
          >
            <div className="text-4xl text-accent mb-4">"</div>
            <blockquote className="text-lg font-medium text-card-foreground italic mb-4">
              Think of me as a builder with taste
            </blockquote>
            <div className="text-sm text-muted-foreground">— Strategic Philosophy</div>
          </motion.div>

          {/* Highlighted Terms */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-8 rounded-2xl border border-border"
          >
            <div className="text-lg font-semibold text-card-foreground mb-4">Core Expertise</div>
            <div className="space-y-3">
              <div className="px-3 py-2 bg-secondary rounded-lg text-primary font-medium">Strategic Planning</div>
              <div className="px-3 py-2 bg-secondary rounded-lg text-primary font-medium">Cultural Insights</div>
              <div className="px-3 py-2 bg-secondary rounded-lg text-primary font-medium">Performance Marketing</div>
            </div>
          </motion.div>
        </div>

        {/* Statement Headlines */}
        <div className="space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              From{" "}
              <span className="relative inline-block">
                <span className="text-primary">Vision</span>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></div>
              </span>{" "}
              to{" "}
              <span className="relative inline-block">
                <span className="text-accent">Viral</span>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"></div>
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transforming big brand visions into campaigns that break through the noise and drive measurable results
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              <span className="block text-primary">Culturally Sharp.</span>
              <span className="block text-accent">Strategically Sound.</span>
              <span className="block">Flawlessly Executed.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every campaign is built on deep cultural understanding and strategic precision
            </p>
          </motion.div>
        </div>

        {/* Call to Action with Typography */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-primary to-accent p-12 rounded-3xl text-card">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something{" "}
              <span className="underline decoration-card decoration-2 underline-offset-4">
                Remarkable
              </span>?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how strategic thinking and cultural insight can transform your brand
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 bg-card text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
            >
              Start the Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 