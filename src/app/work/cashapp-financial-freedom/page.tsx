import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, Calendar, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash App Financial Freedom Campaign | Natalie Colbert",
  description: "Scalable growth marketing system for Cash App's Gen-Z banking pivot, achieving 19% lower CPA across multiple cycles.",
};

export default function CashAppFinancialFreedom() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <header className="bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/#work" 
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Select Works
          </Link>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-600 font-semibold text-lg">Cash App</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  Growth Marketing
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Financial Freedom Growth Marketing
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Developed a scalable, iterative system for Cash App's multi-year pivot towards becoming a trusted bank for Gen-Z, 
                driving lower-funnel conversions through social-first creative that converted within 15-second ads.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-600" />
                  <div>
                    <div className="font-semibold text-sm">Timeline</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Multi-year program</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-brand-600" />
                  <div>
                    <div className="font-semibold text-sm">Team Size</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">8+ person team</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/campaigns/cashapp.png"
                alt="Cash App Financial Freedom Campaign"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Challenge</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Cash App's growth marketing required a scalable, iterative system for driving lower-funnel conversions 
                    (app downloads and card enrollments) to support their multi-year pivot towards becoming a trusted bank for Gen-Z.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    The fundamental question: could we change user perception and convert them within a 15-second paid social ad? 
                    The challenge was significant—transforming how Gen-Z viewed financial services while driving measurable performance.
                  </p>
                </div>
              </section>

              {/* Solution */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Strategic Approach</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our strategy positioned the Cash App Card as a gateway to greater financial freedom, savings, and benefits, 
                    aligning with Gen Z's earned mindset. We achieved this through social-first best practices, blending concise, 
                    impactful messaging with unexpected, attention-grabbing creative.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    The key was creating an iterative system that could be tested, refined, and scaled across multiple campaign cycles, 
                    with each subsequent cycle building on learnings from the previous one.
                  </p>
                </div>
              </section>

              {/* Execution */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Campaign Execution</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Iterative Testing Framework</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Developed a systematic approach to testing creative, messaging, and targeting across 4 growth marketing cycles, 
                      with each cycle surpassing previous performance records.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Social-First Creative Strategy</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Created attention-grabbing creative that spoke directly to Gen-Z's financial aspirations, 
                      using platform-native formats and unexpected messaging to drive engagement and conversions.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Cross-Platform Optimization</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Optimized performance across Meta and TikTok platforms, adapting creative and messaging 
                      for each platform's unique audience behaviors and conversion patterns.
                    </p>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* My Role */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <Target className="w-5 h-5 text-brand-600" />
                  My Role
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Led 8+ person team across 4 growth marketing cycles</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Social-first creative strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Performance optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Gen-Z positioning strategy</span>
                  </li>
                </ul>
              </div>

              {/* Results */}
              <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl">
                <h3 className="font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-brand-600" />
                  Results
                </h3>
                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-brand-600 mb-1">-19%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Lower CPA on Meta</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-brand-600 mb-1">-15%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Lower CPA on TikTok</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-brand-600 mb-1">4 Cycles</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Each surpassed previous records</div>
                  </div>
                </div>
              </div>

              {/* Next Project */}
              <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-2xl">
                <h3 className="font-semibold mb-3">Next Project</h3>
                <Link 
                  href="/work/fiat-la-dolce-vita"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="text-brand-600 font-medium text-sm mb-1">Fiat</div>
                  <div className="text-gray-900 dark:text-white font-semibold">La Dolce Vita Launch Campaign</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 