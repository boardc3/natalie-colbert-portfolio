'use client';
import { motion as m } from "framer-motion";

const testimonials = [
  {
    name: "J Smith",
    role: "ECD at Rosewood Creative",
    content: "Anyone who takes to Natalie for 5 minutes realizes she's smart, hard working, and knows what she's talking about. But what you might not see if you haven't had the opportunity to really be in the trenches with her, is how tireless she is in always trying to make things better."
  },
  {
    name: "Chelsea Spann Motal",
    role: "Group Account Director at Wunderman Thompson",
    content: "Natalie was the person you always wanted in the room. She's that rare kind of leader who brings honesty, direction, and heart to every ask. Natalie doesn't just answer the brief, she elevates it. She pushes teams to pause and ask the bigger questions: Who are we really speaking to? What do they need? What do they believe in? Her strategic thinking is consistently thoughtful, culturally attuned, and future-facing. She protects the soul of the brand while staying equally committed to the people it serves."
  },
  {
    name: "Matt Duckor",
    role: "Head of Content at HexClad",
    content: "Natalie is a top-notch strategist and marketing mind. She brilliantly architected our Super Bowl 2025 campaign for HexClad to drive incredible return on our investment from the linear spot. But even better than that was her approach for our social campaign that played out across TikTok and Instagram to the tune of over 60M views. I'd work with Natalie again in a heartbeat."
  },
  {
    name: "Julia Chesky",
    role: "Social & Content Strategist",
    content: "Natalie creates a wonderful space for people to find their voice and contribute meaningfully. She brings clarity, encourages smart risk-taking, and knows how to guide a team without ever stifling originality. She also has a sharp understanding of how brands should show up not just on social, but across every touchpoint. It's not just about what to post, but about why it matters for the brand and the audience."
  }
];

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <m.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-12 text-muted-foreground"
          >
            What clients and collaborators say
          </m.h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => {
              const motionProps = {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: index * 0.1 }
              };
              
              return (
                <m.div
                  key={testimonial.name}
                  {...motionProps}
                  className="bg-card p-8 rounded-2xl shadow-sm border border-border"
                >
                  <p className="text-muted-foreground mb-6 italic text-left">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                      <span className="text-primary font-semibold text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-semibold text-sm">{testimonial.name}</div>
                      <div className="text-muted-foreground text-xs">{testimonial.role}</div>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 