'use client';
import { Calendar, Target, Users, TrendingUp, Lightbulb, Sparkles, Trophy } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  {
    name: "Strategic Planning",
    icon: Target,
    description: "Brand positioning, market analysis, and go-to-market strategy"
  },
  {
    name: "Performance Marketing",
    icon: TrendingUp,
    description: "Data-driven campaigns with measurable ROI and growth metrics"
  },
  {
    name: "Team Leadership",
    icon: Users,
    description: "Building and managing high-performing creative and strategy teams"
  },
  {
    name: "Innovation & Trends",
    icon: Lightbulb,
    description: "Cultural insights and emerging platform strategies"
  }
];

const experience = [
  {
    company: "Rosewood Creative",
    role: "Head of Strategy",
    period: "2022-Present",
    description: "",
    icon: Trophy,
    highlight: true
  },
  {
    company: "WPP (Wunderman Thompson)",
    role: "Strategy Director\nPreviously Associate Director of Strategy & Senior Strategist",
    period: "2017-2022",
    description: "",
    icon: Sparkles,
    highlight: false
  },
  {
    company: "OMD",
    role: "Media Strategy Supervisor",
    period: "2013--2015",
    description: "",
    icon: Target,
    highlight: false
  },
  {
    company: "Havas",
    role: "Strategist",
    period: "2011--2013",
    description: "",
    icon: TrendingUp,
    highlight: false
  }
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-16 items-start mb-20">
          {/* Personal Story */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-foreground)' }}>
              My Story
            </h3>
            <div className="space-y-4" style={{ color: 'var(--color-muted-foreground)' }}>
            Natalie Colbert is a Brand Marketing executive with over 14 years of agency-side experience spanning global creative, media, and product strategy. She&apos;s passionate about building world-class brands with sharp cultural insights, compelling narratives, and flawless execution, while empowering transparent, boundary-pushing teams.<br/><br/>
            As Head of Strategy at Rosewood Creative, Natalie builds and leads the Strategy department, grounding all creative in deep cultural and consumer data. She oversees global marketing projects and drives performance marketing with robust test-and-learn frameworks.<br/><br/>
            Natalie has transformed marketing for diverse brands including Airbnb, Nike, Beats by Dre, Cash App, Unilever, Frito-Lay, Supergoop, and HexClad.<br/><br/>
            Previously, as Strategy Director at a top WPP agency, she led integrated creative strategy for Unilever&apos;s Super Bowl debut and steered Southern California Edison&apos;s three-year digital transformation. At OMD in New York, as Media Strategy Supervisor, she managed paid media for the Frito-Lay portfolio, earning a Silver Effie for Lay&apos;s &quot;Do Us A Flavor&quot; and pioneering first-to-market activations.<br/><br/>
            A former Division 1 tennis player and proud mom of two, Natalie&apos;s career began as a trend analyst, a cultural mindset that still fuels her work. She&apos;s a straight shooter who believes transparent partnership is key to building remarkable things.
            </div>
          </div>

          {/* Skills Grid */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-foreground)' }}>
              Core Expertise
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-4 rounded-xl border"
                  style={{ 
                    backgroundColor: 'var(--color-card)', 
                    borderColor: 'var(--color-border)' 
                  }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div 
                      className="w-8 h-8 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: 'var(--color-secondary)' }}
                    >
                      <skill.icon className="w-4 h-4" style={{ color: 'var(--color-primary)' }} />
                    </div>
                    <h4 className="font-semibold" style={{ color: 'var(--color-card-foreground)' }}>{skill.name}</h4>
                  </div>
                  <p className="text-sm" style={{ color: 'var(--color-muted-foreground)' }}>{skill.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center" style={{ color: 'var(--color-foreground)' }}>
            Experience Timeline
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Animated Timeline Line */}
              <div 
                className="absolute left-8 top-0 bottom-0 w-1 rounded-full"
                style={{
                  backgroundImage: `linear-gradient(to bottom, var(--color-primary), var(--color-accent))`
                }}
              ></div>
              
              <div className="space-y-12">
                {experience.map((job, index) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-20"
                  >
                    {/* Timeline Icon */}
                    <div 
                      className={`absolute -left-4 top-2 w-16 h-16 rounded-full flex items-center justify-center shadow-lg ${
                        job.highlight ? 'ring-4 ring-opacity-20' : ''
                      }`}
                      style={{
                        backgroundColor: job.highlight 
                          ? 'var(--color-primary)' 
                          : 'var(--color-card)',
                        borderColor: 'var(--color-border)',
                        border: '3px solid',
                        ...(job.highlight && { '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties)
                      }}
                    >
                      <job.icon 
                        className="w-6 h-6" 
                        style={{ 
                          color: job.highlight 
                            ? 'var(--color-card)' 
                            : 'var(--color-primary)' 
                        }} 
                      />
                    </div>

                    {/* Job Card */}
                    <div 
                      className={`p-6 rounded-xl shadow-sm border transition-all hover:shadow-md ${
                        job.highlight ? 'ring-2 ring-opacity-10' : ''
                      }`}
                      style={{ 
                        backgroundColor: 'var(--color-card)',
                        borderColor: job.highlight 
                          ? 'var(--color-primary)' 
                          : 'var(--color-border)',
                        ...(job.highlight && { '--tw-ring-color': 'var(--color-primary)' } as React.CSSProperties)
                      }}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                        <h4 className="text-xl font-semibold" style={{ color: 'var(--color-card-foreground)' }}>
                          {job.role}
                        </h4>
                        <div 
                          className="flex items-center gap-2 text-sm px-3 py-1 rounded-full"
                          style={{ 
                            backgroundColor: 'var(--color-secondary)',
                            color: 'var(--color-primary)' 
                          }}
                        >
                          <Calendar className="w-4 h-4" />
                          {job.period}
                        </div>
                      </div>
                      <div 
                        className="font-medium mb-3 text-lg"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {job.company}
                      </div>
                      <p style={{ color: 'var(--color-muted-foreground)' }}>{job.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 