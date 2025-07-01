'use client';
import { Award, Calendar, Target, Users, TrendingUp, Lightbulb, Sparkles, Trophy } from "lucide-react";
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
    role: "Brand Marketing Strategist",
    period: "2022 - Present",
    description: "Leading strategic initiatives for Fortune 100 brands, developing integrated campaigns that drive cultural conversation and measurable business results.",
    icon: Trophy,
    highlight: true
  },
  {
    company: "Havas Worldwide",
    role: "Senior Strategist",
    period: "2018 - 2022",
    description: "Spearheaded multi-platform campaigns for global brands, specializing in Gen-Z engagement and performance optimization across social platforms.",
    icon: Sparkles,
    highlight: false
  },
  {
    company: "Publicis",
    role: "Strategy Director",
    period: "2015 - 2018",
    description: "Developed brand positioning and creative strategies for consumer brands, with focus on digital transformation and emerging media channels.",
    icon: Target,
    highlight: false
  },
  {
    company: "Ogilvy & Mather",
    role: "Account Strategist",
    period: "2011 - 2015",
    description: "Built foundational expertise in brand strategy and consumer insights, working across automotive, lifestyle, and technology categories.",
    icon: TrendingUp,
    highlight: false
  }
];

export default function About() {
  return (
    <section id="about" className="py-24" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--color-foreground)' }}>
            About Me
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-muted-foreground)' }}>
            I bring an athlete&rsquo;s mindset to marketing – disciplined, competitive, and always focused on winning. 
            With 14+ years exclusively agency-side, I&rsquo;ve mastered the art of turning big brand visions into 
            campaigns that don&rsquo;t just perform, they captivate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Personal Story */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-foreground)' }}>
              My Story
            </h3>
            <div className="space-y-4" style={{ color: 'var(--color-muted-foreground)' }}>
              <p>
                My journey started on the tennis courts as a D1 athlete, where I learned that success comes from 
                relentless preparation, strategic thinking, and the ability to perform under pressure. These same 
                principles now drive my approach to brand marketing.
              </p>
              <p>
                For over 14 years, I&rsquo;ve been exclusively agency-side, which means I&rsquo;ve seen every type of 
                challenge, worked with every type of client, and learned to deliver exceptional results regardless 
                of constraints. I thrive in the fast-paced, high-stakes environment where creativity meets commerce.
              </p>
              <p>
                As a mom of two and a trend analyst at heart, I bring a unique perspective to understanding what 
                drives consumer behavior. I don&rsquo;t just follow trends – I help create them.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-6" style={{ color: 'var(--color-foreground)' }}>
              Core Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
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
                </div>
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

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <div 
            className="p-8 rounded-2xl border"
            style={{ 
              backgroundColor: 'var(--color-secondary)', 
              borderColor: 'var(--color-border)' 
            }}
          >
            <Award className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--color-primary)' }} />
            <h3 className="text-2xl font-semibold mb-4" style={{ color: 'var(--color-foreground)' }}>
              Ready to elevate your brand?
            </h3>
            <p className="mb-6 max-w-2xl mx-auto" style={{ color: 'var(--color-muted-foreground)' }}>
              Let&rsquo;s discuss how my strategic approach and proven track record can help your brand 
              break through the noise and achieve remarkable results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg transition-colors font-medium"
              style={{ 
                backgroundColor: 'var(--color-primary)', 
                color: 'var(--color-card)' 
              }}
            >
              Let&rsquo;s Connect
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 