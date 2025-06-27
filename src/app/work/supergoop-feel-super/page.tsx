import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, Calendar, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Supergoop! Feel Super Campaign | Natalie Colbert",
  description: "Social-first campaign featuring Liza Koshy as Chief Super Officer, revolutionizing sunscreen culture with 6.5B earned impressions.",
};

export default function SupergoopFeelSuper() {
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
                <span className="text-brand-600 font-semibold text-lg">Supergoop!</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  Social Campaign
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Feel Super Campaign
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Revolutionized sunscreen culture with a social-first campaign featuring Liza Koshy as Chief Super Officer, 
                blurring IRL and URL boundaries to build "Super" equity and drive awareness for the crucial Summer buying season.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-600" />
                  <div>
                    <div className="font-semibold text-sm">Timeline</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Summer 2024</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-brand-600" />
                  <div>
                    <div className="font-semibold text-sm">Agency</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Rosewood Creative</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <Image
                src="/campaigns/supergoop.png"
                alt="Supergoop! Feel Super Campaign"
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
                    Supergoop! had successfully revolutionized sunscreen culture, but a crowded market demanded they reaffirm 
                    their superior quality. The objective was clear: build "Super" equity and drive awareness going into the 
                    crucial Summer buying season.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    The brand needed to stand out in an increasingly competitive sunscreen market while maintaining their 
                    position as the premium, innovative choice for conscious consumers.
                  </p>
                </div>
              </section>

              {/* Solution */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Solution</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Our solution was a social-first campaign blurring the IRL and URL boundaries, spearheaded by our Chief Super Officer. 
                    We tapped Liza Koshy, whose authentic alignment with the brand ethos and undeniable internet presence uniquely 
                    positioned her to make audiences "Feel Super."
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    The campaign leveraged Liza's natural charisma and social media expertise to create content that felt 
                    authentic while driving brand messaging home. By making her the Chief Super Officer, we created a 
                    narrative that extended beyond traditional advertising into lifestyle and aspiration.
                  </p>
                </div>
              </section>

              {/* Execution */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Campaign Execution</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Influencer Partnership Strategy</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Strategic selection of Liza Koshy as Chief Super Officer, leveraging her authentic brand alignment 
                      and massive social media following to create credible, engaging content.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Social-First Content Creation</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Developed content that blurred the lines between online and offline experiences, creating 
                      shareable moments that drove organic engagement and brand awareness.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Integrated Campaign Rollout</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Coordinated launch across multiple channels and touchpoints, ensuring consistent messaging 
                      while maximizing reach and impact during peak summer buying season.
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
                    <span className="text-sm text-gray-600 dark:text-gray-300">Campaign Strategy/Leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Stunt Product Development and Roll Out Strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Influencer & Paid Media Strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Integrated Planning, Coordination & Execution</span>
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
                    <div className="text-2xl font-bold text-brand-600 mb-1">Double Digit</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Lift in Unaided Brand Awareness</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-brand-600 mb-1">6.5B</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Earned Impressions</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-brand-600 mb-1">106M</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Views</div>
                  </div>
                </div>
              </div>

              {/* Next Project */}
              <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-2xl">
                <h3 className="font-semibold mb-3">Next Project</h3>
                <Link 
                  href="/work/hexclad-area-51"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="text-brand-600 font-medium text-sm mb-1">HexClad</div>
                  <div className="text-gray-900 dark:text-white font-semibold">Area 51 Super Bowl Campaign</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 