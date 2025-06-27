'use client';
import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Lightbulb, Award, MapPin } from "lucide-react";

const skills = [
  { icon: Target, name: "Strategy", items: ["Brand Strategy", "Campaign Strategy", "Growth Marketing", "Cultural Insights"] },
  { icon: TrendingUp, name: "Performance", items: ["Media Strategy", "Test & Learn", "Performance Marketing", "ROI Optimization"] },
  { icon: Users, name: "Leadership", items: ["Team Management", "Cross-Functional Leadership", "Client Relations", "Executive Collaboration"] },
  { icon: Lightbulb, name: "Innovation", items: ["Creative Strategy", "Social-First Campaigns", "Viral Marketing", "Cultural Trends"] },
];

const experience = [
  {
    year: "2022-Present",
    role: "Head of Strategy",
    company: "Rosewood Creative",
    description: "Leading Strategy department on Executive Leadership Team. Overseeing global marketing projects for brands like Cash App, HexClad, Supergoop!, and Airbnb."
  },
  {
    year: "2017-2022",
    role: "Strategy Director",
    company: "WPP (Wunderman Thompson)",
    description: "Led integrated creative strategy for Unilever's Super Bowl campaigns, Vaseline global campaigns, and Southern California Edison's 3-year digital transformation."
  },
  {
    year: "2013-2015",
    role: "Media Strategy Supervisor",
    company: "OMD",
    description: "Oversaw cross-channel media strategy for Frito-Lay portfolio. Led award-winning Lay's 'Do Us A Flavor' campaign that earned a Silver Effie Award."
  },
  {
    year: "2011-2013",
    role: "Strategist",
    company: "Havas",
    description: "Digital strategy for healthcare and diagnostics brands including Sanofi-Diabetes and Quest Diagnostics."
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Over 14 years of exclusive agency-side experience building world-class brands through 
            culturally sharp insights, compelling narratives, and flawless execution systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Story */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-brand-100 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <h3 className="text-2xl font-semibold">My Approach</h3>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My career has been exclusively agency-side, granting me the privilege of tackling diverse 
              challenges for every type of brand – from global giants to fast-moving disruptors. 
              My mission? To make marketing not just effective, but unforgettable.
            </p>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              At my core, I approach every project with an athlete's mindset. I'm all about pushing limits, 
              constantly refining what I do, and always showing up 100% for my team. It's this mix of being 
              straightforward, super dedicated, and loving to collaborate that helps my teams really click 
              and create incredible things.
            </p>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-gray-500">
                <MapPin className="w-4 h-4" />
                <span>Laguna Beach, CA</span>
              </div>
              <div className="flex items-center gap-2 text-brand-600">
                <Award className="w-4 h-4" />
                <span>14+ Years Agency Experience</span>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Personal Note</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Outside of work, I'm a proud mom of two girls and a former Division 1 tennis player. 
                I serendipitously fell into marketing during college as a trend analyst, forecasting 
                cultural trajectories for Fortune 100 clients like PepsiCo – a cultural mindset that 
                remains the consistent pulse of my career.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="grid grid-cols-2 gap-6">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                    <skill.icon className="w-5 h-5 text-brand-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h4>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-400 rounded-full"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Experience</h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-4 h-4 bg-brand-500 rounded-full mt-6"></div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 flex-grow">
                  <div className="text-brand-600 font-medium text-sm mb-2">{exp.year}</div>
                  <h4 className="text-xl font-semibold mb-1">{exp.role}</h4>
                  <div className="text-gray-600 dark:text-gray-400 font-medium mb-3">{exp.company}</div>
                  <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 