import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beats by Dre Authentic TikTok Series | Natalie Colbert",
  description: "Award-winning TikTok strategy embracing sponsored content awkwardness, earning Webby and Silver Pencil awards.",
};

export default function BeatsAuthenticTikTok() {
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
                <span className="text-brand-600 font-semibold text-lg">Beats by Dre</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  Content Strategy
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                Authentic TikTok Content Series
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                Defied norms on TikTok by embracing the inherent awkwardness of sponsored content, 
                making it obvious and highly entertaining through self-awareness and subversion.
              </p>
            </div>
            
            <div className="relative">
              <Image
                src="/campaigns/beats.png"
                alt="Beats by Dre Authentic TikTok Campaign"
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
              Detailed case study coming soon. This groundbreaking campaign earned a Webby Award 
              and Silver Pencil at The One Show, proving that realness triumphs over manufactured authenticity.
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