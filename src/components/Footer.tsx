import { Mail, Linkedin } from "lucide-react";

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Select Works" },
  { href: "#about", label: "About Me/CV" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Natalie Colbert</h3>
            <p className="text-gray-300 mb-6">
              Brand Marketing Strategist with 14+ years of agency-side experience. 
              Building world-class brands through culturally sharp insights and flawless execution.
            </p>
            <div className="flex gap-4">
              <a
                href="mailto:natalie@example.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </a>
              <a
                href="https://www.linkedin.com/in/natalie-colbert"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-brand-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>Based in Laguna Beach, CA</p>
              <p>Available for strategic consulting</p>
              <p>and leadership roles</p>
            </div>
            <div className="mt-4">
              <a
                href="mailto:natalie@example.com"
                className="inline-flex items-center gap-2 text-brand-400 hover:text-brand-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                natalie@example.com
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Natalie Colbert. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 