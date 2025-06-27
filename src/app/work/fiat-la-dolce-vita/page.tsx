import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiat La Dolce Vita Campaign | Natalie Colbert",
  description: "360-degree launch campaign for all-electric 500e, generating 2.5M website conversions and 700M impressions.",
};

export default function FiatLaDolceVita() {
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
                <span className="text-brand-600 font-semibold text-lg">Fiat</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  Launch Campaign
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                La Dolce Vita Launch Campaign
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                360-degree launch campaign for the all-electric Fiat 500e, translating 125+ years of European heritage 
                into compelling American narrative by positioning &lsquo;Italian-ness&rsquo; as a universal way of appreciating life&rsquo;s finer details.
              </p>
            </div>
            
            <div className="relative">
              <Image
                src="/campaigns/fiat.png"
                alt="Fiat La Dolce Vita Campaign"
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
              Detailed case study coming soon. This campaign generated 2.5M conversions to website, 
              +1,791% above social benchmarks, and 700M impressions with 270M views.
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