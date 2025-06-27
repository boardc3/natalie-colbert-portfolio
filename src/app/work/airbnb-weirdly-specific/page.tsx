import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Airbnb Weirdly Specific TikTok Series | Natalie Colbert",
  description: "Creative strategy connecting TikTok subcommunities to unique Stays, from TravelTok to BookTok and beyond.",
};

export default function AirbnbWeirdlySpecific() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
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
                <span className="text-brand-600 font-semibold text-lg">Airbnb</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  TikTok Strategy
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Weirdly Specific TikTok Series
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Creative strategy connecting TikTok&rsquo;s unique subcommunities to Stays that represent them, 
                creating &lsquo;Weirdly Specific&rsquo; lists that paired unique Airbnbs with equally unique TikTok communities.
              </p>
            </div>
            
            <div className="relative">
              <Image
                src="/campaigns/airbnb.png"
                alt="Airbnb Weirdly Specific Campaign"
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Detailed case study coming soon. This innovative TikTok strategy showcased authentic community engagement 
              and strong creative thinking across diverse subcommunities.
            </p>
            <Link 
              href="/#work"
              className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to All Work
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
} 