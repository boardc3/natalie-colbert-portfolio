import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { Project } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, Calendar, Users, Sparkles } from "lucide-react";
import { Highlight } from "@/components/TypographyElements";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = (projects as Project[]).find((p) => p.slug === slug);
  if (!project) return notFound();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Header */}
      <header className="py-8" style={{ backgroundColor: 'var(--color-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 mb-6 transition-colors hover:opacity-80"
            style={{ color: 'var(--color-primary)' }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Select Works
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span 
                  className="font-semibold text-lg"
                  style={{ color: 'var(--color-primary)' }}
                >
                  {project.client}
                </span>
                <span 
                  className="text-xs px-2 py-1 rounded-full"
                  style={{ 
                    backgroundColor: 'var(--color-card)', 
                    color: 'var(--color-muted-foreground)' 
                  }}
                >
                  {project.tag}
                </span>
              </div>
              <h1 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'var(--color-foreground)' }}
              >
                <Highlight variant="gradient">{project.title}</Highlight>
              </h1>
              <p 
                className="text-xl mb-8"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                {project.summary}
              </p>
            </div>
            <div className="relative">
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-2xl shadow-xl"
              />
              <div 
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                style={{ backgroundColor: 'var(--color-accent)' }}
              >
                <Sparkles className="w-8 h-8" style={{ color: 'var(--color-card)' }} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {project.main.sections ? (
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Content */}
              <div className="lg:col-span-2 space-y-12">
                {project.main.sections.map((section, i) => (
                  <section key={i}>
                    <h2 
                      className="text-2xl md:text-3xl font-bold mb-6"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      <Highlight variant="underline">{section.heading}</Highlight>
                    </h2>
                    <div className="prose prose-lg max-w-none">
                      {section.content.map((c, j) => (
                        <p 
                          key={j} 
                          className="text-lg leading-relaxed mb-4"
                          style={{ color: 'var(--color-muted-foreground)' }}
                        >
                          {c}
                        </p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-8">
                {project.main.sidebar?.role && (
                  <div 
                    className="p-6 rounded-2xl border"
                    style={{ 
                      backgroundColor: 'var(--color-card)', 
                      borderColor: 'var(--color-border)' 
                    }}
                  >
                    <h3 
                      className="font-semibold mb-4 flex items-center gap-2"
                      style={{ color: 'var(--color-card-foreground)' }}
                    >
                      <Target className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                      <Highlight variant="badge">My Role</Highlight>
                    </h3>
                    <ul className="space-y-3">
                      {project.main.sidebar.role.map((role, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div 
                            className="w-1.5 h-1.5 rounded-full mt-2"
                            style={{ backgroundColor: 'var(--color-accent)' }}
                          ></div>
                          <span 
                            className="text-sm"
                            style={{ color: 'var(--color-muted-foreground)' }}
                          >
                            {role}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {project.main.sidebar?.results && (
                  <div 
                    className="p-6 rounded-2xl border"
                    style={{ 
                      backgroundColor: 'var(--color-card)', 
                      borderColor: 'var(--color-border)' 
                    }}
                  >
                    <h3 
                      className="font-semibold mb-4 flex items-center gap-2"
                      style={{ color: 'var(--color-card-foreground)' }}
                    >
                      <TrendingUp className="w-5 h-5" style={{ color: 'var(--color-primary)' }} />
                      <Highlight variant="badge">Results</Highlight>
                    </h3>
                    <div className="space-y-4">
                      {project.main.sidebar.results.map((result, i) => (
                        <div 
                          key={i} 
                          className="p-4 rounded-lg border"
                          style={{ 
                            backgroundColor: 'var(--color-secondary)', 
                            borderColor: 'var(--color-border)' 
                          }}
                        >
                          <div 
                            className="text-2xl font-bold mb-1"
                            style={{ color: 'var(--color-primary)' }}
                          >
                            <Highlight variant="emphasis">{result.value}</Highlight>
                          </div>
                          <div 
                            className="text-sm"
                            style={{ color: 'var(--color-muted-foreground)' }}
                          >
                            {result.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.nextProject && (
                  <div 
                    className="p-6 rounded-2xl border"
                    style={{ 
                      backgroundColor: 'var(--color-secondary)', 
                      borderColor: 'var(--color-primary)' 
                    }}
                  >
                    <h3 
                      className="font-semibold mb-3"
                      style={{ color: 'var(--color-foreground)' }}
                    >
                      <Highlight variant="badge">Next Project</Highlight>
                    </h3>
                    <Link
                      href={`/work/${project.nextProject.slug}`}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <div 
                        className="font-medium text-sm mb-1"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        {project.nextProject.client}
                      </div>
                      <div 
                        className="font-semibold"
                        style={{ color: 'var(--color-foreground)' }}
                      >
                        <Highlight variant="underline">{project.nextProject.title}</Highlight>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p 
                className="text-lg mb-8"
                style={{ color: 'var(--color-muted-foreground)' }}
              >
                {project.main.description}
              </p>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg transition-colors hover:opacity-90"
                style={{ 
                  backgroundColor: 'var(--color-primary)', 
                  color: 'var(--color-card)' 
                }}
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Work
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 