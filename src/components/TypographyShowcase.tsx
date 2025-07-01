"use client";
import { motion } from "framer-motion";
import { Highlight } from "./TypographyElements";

export default function TypographyShowcase() {
  return (
    <section className="py-24" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Headline Showcase */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="mb-4 md:mb-8">
            <span 
              className="inline-block px-6 py-3 rounded-full text-sm font-medium tracking-wide uppercase"
              style={{ 
                backgroundColor: 'var(--color-primary)', 
                color: 'var(--color-card)' 
              }}
            >
              Typography Excellence
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-8 leading-tight" style={{ color: 'var(--color-foreground)' }}>
            Crafting{" "}
            <span className="relative">
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-accent))`
                }}
              >
                Memorable
              </span>
              <div 
                className="absolute -bottom-1.5 md:-bottom-2 left-0 right-0 h-1 opacity-30"
                style={{
                  backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-accent))`
                }}
              ></div>
            </span>{" "}
            Brand Experiences
          </h1>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
            Where <Highlight variant="emphasis">strategic thinking</Highlight> meets <Highlight variant="underline">cultural insight</Highlight> to create campaigns that don&apos;t just perform—they{" "}
            <Highlight variant="gradient">captivate, convert, and inspire</Highlight>.
          </p>
        </motion.div>

        {/* Typography Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Large Display Text */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="p-8 rounded-2xl border"
            style={{ 
              backgroundColor: 'var(--color-card)', 
              borderColor: 'var(--color-border)' 
            }}
          >
            <div className="text-6xl font-bold mb-4" style={{ color: 'var(--color-primary)' }}>14+</div>
            <div className="text-lg font-semibold mb-2" style={{ color: 'var(--color-card-foreground)' }}>
              Years of <Highlight variant="badge">Excellence</Highlight>
            </div>
            <div style={{ color: 'var(--color-muted-foreground)' }}>
              <Highlight variant="emphasis">Agency-side expertise</Highlight> building world-class brands
            </div>
          </motion.div>

          {/* Stylized Quote */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border"
            style={{ 
              backgroundColor: 'var(--color-card)', 
              borderColor: 'var(--color-border)' 
            }}
          >
            <div className="text-4xl mb-4" style={{ color: 'var(--color-accent)' }}>&quot;</div>
            <blockquote className="text-lg font-medium italic mb-4" style={{ color: 'var(--color-card-foreground)' }}>
              Think of me as a <Highlight variant="underline">builder with taste</Highlight>
            </blockquote>
            <div className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>— Strategic Philosophy</div>
          </motion.div>

          {/* Highlighted Terms */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="p-8 rounded-2xl border"
            style={{ 
              backgroundColor: 'var(--color-card)', 
              borderColor: 'var(--color-border)' 
            }}
          >
            <div className="text-lg font-semibold mb-4" style={{ color: 'var(--color-card-foreground)' }}>
              Core <Highlight variant="badge">Expertise</Highlight>
            </div>
            <div className="space-y-3">
              <div 
                className="px-3 py-2 rounded-lg font-medium"
                style={{ 
                  backgroundColor: 'var(--color-secondary)', 
                  color: 'var(--color-primary)' 
                }}
              >
                Strategic Planning
              </div>
              <div 
                className="px-3 py-2 rounded-lg font-medium"
                style={{ 
                  backgroundColor: 'var(--color-secondary)', 
                  color: 'var(--color-primary)' 
                }}
              >
                Cultural Insights
              </div>
              <div 
                className="px-3 py-2 rounded-lg font-medium"
                style={{ 
                  backgroundColor: 'var(--color-secondary)', 
                  color: 'var(--color-primary)' 
                }}
              >
                Performance Marketing
              </div>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
              From{" "}
              <span className="relative inline-block">
                <span style={{ color: 'var(--color-primary)' }}>Vision</span>
                <div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5"
                  style={{ backgroundColor: 'var(--color-primary)' }}
                ></div>
              </span>{" "}
              to{" "}
              <span className="relative inline-block">
                <span style={{ color: 'var(--color-accent)' }}>Viral</span>
                <div 
                  className="absolute -bottom-1 left-0 right-0 h-0.5"
                  style={{ backgroundColor: 'var(--color-accent)' }}
                ></div>
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-muted-foreground)' }}>
              Transforming <Highlight variant="emphasis">big brand visions</Highlight> into campaigns that <Highlight variant="underline">break through the noise</Highlight> and drive <Highlight variant="badge">measurable results</Highlight>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
              <span className="block" style={{ color: 'var(--color-primary)' }}>
                <Highlight variant="underline">Culturally Sharp</Highlight>.
              </span>
              <span className="block" style={{ color: 'var(--color-accent)' }}>
                <Highlight variant="emphasis">Strategically Sound</Highlight>.
              </span>
              <span className="block">
                <Highlight variant="gradient">Flawlessly Executed</Highlight>.
              </span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-muted-foreground)' }}>
              Every campaign is built on <Highlight variant="badge">deep cultural understanding</Highlight> and <Highlight variant="emphasis">strategic precision</Highlight>
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
          <div 
            className="p-12 rounded-3xl"
            style={{
              backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-accent))`,
              color: 'var(--color-card)'
            }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something{" "}
              <span className="underline decoration-2 underline-offset-4">
                Remarkable
              </span>?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let&apos;s discuss how <strong>strategic thinking</strong> and <strong>cultural insight</strong> can transform your brand
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg transition-all"
              style={{ 
                backgroundColor: 'var(--color-card)', 
                color: 'var(--color-primary)' 
              }}
            >
              Start the Conversation
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 