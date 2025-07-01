'use client';
import { Mail, Linkedin, Star } from "lucide-react";

const testimonials = [
  {
    name: "Global Brand Team",
    role: "Fortune 100 Client",
    content: "Natalie&rsquo;s cultural insights and strategic thinking transformed our approach to Gen-Z marketing. Her campaigns consistently delivered above-benchmark performance across all metrics."
  },
  {
    name: "Creative Director",
    role: "Agency Partner",
    content: "Working with Natalie is a masterclass in strategic leadership. She has this unique ability to see the big picture while orchestrating flawless execution across every touchpoint."
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center mb-20">
          <h3 className="text-2xl font-semibold mb-12 text-muted-foreground">
            What clients and collaborators say
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-card p-6 rounded-2xl shadow-sm border border-border"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Contact info */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl font-bold mb-6 text-foreground">
              Let&rsquo;s build something remarkable together
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              I&rsquo;m passionate about empowering high-performing, transparent teams that consistently push boundaries. 
              Whether you need strategic leadership, campaign development, or cultural insights – 
              let&rsquo;s discuss how we can create unforgettable marketing.
            </p>

            {/* Contact buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-8">
              <a
                href="mailto:nataliejcolbert@gmail.com"
                className="inline-flex items-center justify-center gap-3 rounded-lg bg-primary px-8 py-4 text-card hover:bg-primary-hover transition-colors font-medium text-lg"
              >
                <Mail className="w-5 h-5" />
                Get in touch
              </a>
              <a
                href="https://www.linkedin.com/in/natalie-colbert-137aa72a/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-card rounded-lg shadow-sm border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-md transition-all"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right side - Simple card */}
          <div className="hidden lg:block">
            <div className="bg-card p-8 rounded-3xl shadow-xl border border-border">
              <div className="text-center">
                <div className="w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Ready to start?</h3>
                <p className="text-muted-foreground mb-6">
                  Let&rsquo;s discuss your brand challenges, strategic goals, and how we can create 
                  marketing that&rsquo;s not just effective, but unforgettable.
                </p>
                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Based in Laguna Beach, CA
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    14+ years agency-side experience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 