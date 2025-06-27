'use client';
import { Award, Calendar, Target, Users, TrendingUp, Lightbulb } from "lucide-react";

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
    description: "Leading strategic initiatives for Fortune 100 brands, developing integrated campaigns that drive cultural conversation and measurable business results."
  },
  {
    company: "Havas Worldwide",
    role: "Senior Strategist",
    period: "2018 - 2022",
    description: "Spearheaded multi-platform campaigns for global brands, specializing in Gen-Z engagement and performance optimization across social platforms."
  },
  {
    company: "Publicis",
    role: "Strategy Director",
    period: "2015 - 2018",
    description: "Developed brand positioning and creative strategies for consumer brands, with focus on digital transformation and emerging media channels."
  },
  {
    company: "Ogilvy & Mather",
    role: "Account Strategist",
    period: "2011 - 2015",
    description: "Built foundational expertise in brand strategy and consumer insights, working across automotive, lifestyle, and technology categories."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I bring an athlete&rsquo;s mindset to marketing – disciplined, competitive, and always focused on winning. 
            With 14+ years exclusively agency-side, I&rsquo;ve mastered the art of turning big brand visions into 
            campaigns that don&rsquo;t just perform, they captivate.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          {/* Personal Story */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              My Story
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
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
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
              Core Expertise
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-brand-100 rounded-lg flex items-center justify-center">
                      <skill.icon className="w-4 h-4 text-brand-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
            Experience Timeline
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experience.map((job) => (
                <div
                  key={job.company}
                  className="relative pl-8 pb-8 border-l-2 border-brand-200 last:border-l-0"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-600 rounded-full"></div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{job.role}</h4>
                      <div className="flex items-center gap-2 text-sm text-brand-600">
                        <Calendar className="w-4 h-4" />
                        {job.period}
                      </div>
                    </div>
                    <div className="text-brand-600 font-medium mb-3">{job.company}</div>
                    <p className="text-gray-600 dark:text-gray-300">{job.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-brand-50 dark:bg-gray-800 p-8 rounded-2xl border border-brand-200 dark:border-gray-700">
            <Award className="w-12 h-12 text-brand-600 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
              Ready to elevate your brand?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              Let&rsquo;s discuss how my strategic approach and proven track record can help your brand 
              break through the noise and achieve remarkable results.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors font-medium"
            >
              Let&rsquo;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 