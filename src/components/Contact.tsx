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
    <section id="contact" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Testimonials */}
        <div className="text-center">
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
      </div>
    </section>
  );
} 