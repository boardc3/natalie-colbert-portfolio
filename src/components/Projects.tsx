'use client';
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Campaign {
  title: string;
  client: string;
  overview: string;
  image: string;
  slug: string;
  category: string;
}

const campaigns: Campaign[] = [
  {
    title: "Feel Super Campaign",
    client: "Supergoop!",
    overview: "Social-first campaign featuring Liza Koshy as Chief Super Officer, revolutionizing sunscreen culture with 6.5B earned impressions.",
    image: "/campaigns/supergoop.png",
    slug: "supergoop-feel-super",
    category: "360 Campaign"
  },
  {
    title: "Area 51 Super Bowl Campaign",
    client: "HexClad",
    overview: "Viral conspiracy theory campaign for Super Bowl debut, generating 15B earned impressions and 28% increase in media efficiency.",
    image: "/campaigns/hexclad.png",
    slug: "hexclad-area-51",
    category: "Super Bowl"
  },
  {
    title: "Financial Freedom Growth Marketing",
    client: "Cash App",
    overview: "Scalable growth marketing system for Gen-Z banking pivot, achieving 19% lower CPA across multiple cycles.",
    image: "/campaigns/cashapp.png",
    slug: "cashapp-financial-freedom",
    category: "Growth Marketing"
  },
  {
    title: "La Dolce Vita Launch Campaign",
    client: "Fiat",
    overview: "360-degree launch campaign for all-electric 500e, generating 2.5M website conversions and 700M impressions.",
    image: "/campaigns/fiat.png",
    slug: "fiat-la-dolce-vita",
    category: "GTM Campaign"
  },
  {
    title: "Weirdly Specific TikTok Series",
    client: "Airbnb",
    overview: "Creative strategy connecting TikTok subcommunities to unique Stays, from TravelTok to BookTok and beyond.",
    image: "/campaigns/airbnb.png",
    slug: "airbnb-weirdly-specific",
    category: "TikTok Strategy"
  },
  {
    title: "Authentic TikTok Content Series",
    client: "Beats by Dre",
    overview: "Award-winning TikTok strategy embracing sponsored content awkwardness, earning Webby and Silver Pencil awards.",
    image: "/campaigns/beats.png",
    slug: "beats-authentic-tiktok",
    category: "Influencer Strategy"
  },
  {
    title: "Make Taste, Not Waste",
    client: "Hellmann's",
    overview: "Super Bowl campaign transforming Hellmann's from condiment to meal solution, targeting food waste and fridge blindness.",
    image: "/campaigns/hellmanns.png",
    slug: "hellmanns-make-taste-not-waste",
    category: "Super Bowl"
  },
  {
    title: "Gin & Juice Launch",
    client: "Gin & Juice",
    overview: "Strategic launch campaign for Snoop Dogg's premium beverage brand, focusing on cultural authenticity and market positioning.",
    image: "/campaigns/gin-juice.png",
    slug: "gin-juice-launch",
    category: "Brand Launch"
  }
];

export default function Projects() {
  return (
    <section id="work" className="py-24" style={{ backgroundColor: 'var(--color-muted)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-8">
            <span 
              className="inline-block px-6 py-3 rounded-full text-sm font-bold tracking-wider uppercase"
              style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-card)' }}
            >
              Portfolio Highlights
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight" style={{ color: 'var(--color-foreground)' }}>
            Select{" "}
            <span className="relative inline-block">
              <span 
                className="bg-gradient-to-r bg-clip-text text-transparent font-black"
                style={{ 
                  backgroundImage: `linear-gradient(to right, var(--color-primary), var(--color-accent))`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Works
              </span>
              <div 
                className="absolute -bottom-2 left-0 right-0 h-1 opacity-50"
                style={{ 
                  background: `linear-gradient(to right, var(--color-primary), var(--color-accent))`
                }}
              ></div>
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Campaigns that transformed marketing challenges for{" "}
            <em className="text-primary font-semibold not-italic">global giants</em> and{" "}
            <em className="text-primary font-semibold not-italic">innovative disruptors</em>, 
            from viral Super Bowl phenomena to culturally sharp social-first strategies.
          </p>
          
          <div className="mt-8 p-6 bg-secondary rounded-2xl max-w-4xl mx-auto border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Portfolio Note:</span> This showcases tangible campaign executions. 
              Much of my work involves in-depth strategy development and long-range vision planning under strict NDAs. 
              I can speak to more strategic contributions on a call.
            </p>
          </div>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {campaigns.map((campaign) => (
            <Link
              key={campaign.slug}
              href={`/work/${campaign.slug}`}
              className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-border"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={campaign.image}
                  alt={`${campaign.client} - ${campaign.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowRight className="w-5 h-5 ml-auto" />
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary font-semibold text-sm">{campaign.client}</span>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-full">
                    {campaign.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                  {campaign.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                  {campaign.overview}
                </p>
                
                <div className="mt-4 flex items-center text-primary text-sm font-medium">
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
} 