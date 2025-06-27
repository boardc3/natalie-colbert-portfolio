import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, Calendar, Users } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "HexClad Area 51 Super Bowl Campaign | Natalie Colbert",
  description: "Viral conspiracy theory campaign for HexClad's Super Bowl debut, generating 15B earned impressions and 28% increase in media efficiency.",
};

export default function HexCladArea51() {
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
                <span className="text-brand-600 font-semibold text-lg">HexClad</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  Super Bowl
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Area 51 Super Bowl Campaign
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                For HexClad's first-ever debut at the Super Bowl, we didn't just launch an ad—we engineered a viral phenomenon 
                that established HexClad as advanced, out-of-this-world cooking technology.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-brand-600" />
                  <div>
                    <div className="font-semibold text-sm">Timeline</div>
                    <div className="text-gray-600 dark:text-gray-300 text-sm">Super Bowl 2025</div>
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
                src="/campaigns/hexclad.png"
                alt="HexClad Area 51 Super Bowl Campaign"
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
                    HexClad faced the ultimate marketing challenge: making their Super Bowl debut count. With millions of viewers 
                    and enormous investment at stake, the brand needed to establish itself as more than just another cookware company.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    The goal was to position HexClad as advanced, innovative cooking technology that transcends traditional 
                    kitchen boundaries—literally out of this world.
                  </p>
                </div>
              </section>

              {/* Solution */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">The Viral Strategy</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    We threw out the traditional playbook of releasing a trailer to build anticipation for our spot. Instead, 
                    we released the campaign by creating a conspiracy theory that Gordon Ramsay was cooking at Area 51, 
                    fueled by influencer storytelling and internet speculation.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    This mystery captivated 69 million people and generated 6 billion impressions before the big reveal. 
                    The campaign transcended traditional advertising, offering an immersive experience that kept audiences 
                    engaged and eagerly anticipating the final reveal.
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    The mystery culminated in a Super Bowl ad revealing that Gordon was cooking for aliens using HexClad's 
                    advanced technology, perfectly positioning the brand as innovative and otherworldly.
                  </p>
                </div>
              </section>

              {/* Execution */}
              <section>
                <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Campaign Execution</h2>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Conspiracy Theory Development</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Created an elaborate conspiracy theory around Gordon Ramsay's mysterious activities at Area 51, 
                      building intrigue and speculation across social media platforms.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Influencer Network Activation</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Leveraged influencer storytelling to fuel internet speculation and organic conversation, 
                      creating authentic buzz around the mystery without revealing the brand connection.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="font-semibold mb-3">Super Bowl Reveal Strategy</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Timed the big reveal perfectly for maximum Super Bowl impact, connecting all the mystery 
                      elements to HexClad's advanced cooking technology in a memorable, shareable moment.
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
                    <span className="text-sm text-gray-600 dark:text-gray-300">Integrated Planning & Execution</span>
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
                    <div className="text-2xl font-bold text-brand-600 mb-1">+28%</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Increase in Media Efficiency Ratio</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-brand-600 mb-1">50M+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Organic Views on Teaser TikToks</div>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <div className="text-2xl font-bold text-brand-600 mb-1">15B</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Earned Impressions</div>
                  </div>
                </div>
              </div>

              {/* Next Project */}
              <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-2xl">
                <h3 className="font-semibold mb-3">Next Project</h3>
                <Link 
                  href="/work/cashapp-financial-freedom"
                  className="block hover:opacity-80 transition-opacity"
                >
                  <div className="text-brand-600 font-medium text-sm mb-1">Cash App</div>
                  <div className="text-gray-900 dark:text-white font-semibold">Financial Freedom Growth Marketing</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 