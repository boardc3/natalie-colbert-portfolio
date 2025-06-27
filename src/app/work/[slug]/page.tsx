import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { Project } from "@/data/types";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Target, TrendingUp, Calendar, Users } from "lucide-react";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = (projects as Project[]).find((p) => p.slug === params.slug);
  if (!project) return notFound();

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
                <span className="text-brand-600 font-semibold text-lg">{project.client}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded-full">
                  {project.tag}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                {project.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
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
                    <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{section.heading}</h2>
                    <div className="prose prose-lg max-w-none">
                      {section.content.map((c, j) => (
                        <p key={j} className="text-gray-600 dark:text-gray-300 mb-4">{c}</p>
                      ))}
                    </div>
                  </section>
                ))}
              </div>
              {/* Sidebar */}
              <div className="space-y-8">
                {project.main.sidebar?.role && (
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <Target className="w-5 h-5 text-brand-600" />
                      My Role
                    </h3>
                    <ul className="space-y-3">
                      {project.main.sidebar.role.map((role, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-brand-400 rounded-full mt-2"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-300">{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {project.main.sidebar?.results && (
                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl">
                    <h3 className="font-semibold mb-4 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-brand-600" />
                      Results
                    </h3>
                    <div className="space-y-4">
                      {project.main.sidebar.results.map((result, i) => (
                        <div key={i} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-brand-600 mb-1">{result.value}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{result.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {project.nextProject && (
                  <div className="bg-brand-50 dark:bg-brand-900/20 p-6 rounded-2xl">
                    <h3 className="font-semibold mb-3">Next Project</h3>
                    <Link
                      href={`/work/${project.nextProject.slug}`}
                      className="block hover:opacity-80 transition-opacity"
                    >
                      <div className="text-brand-600 font-medium text-sm mb-1">{project.nextProject.client}</div>
                      <div className="text-gray-900 dark:text-white font-semibold">{project.nextProject.title}</div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="text-center">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                {project.main.description}
              </p>
              <Link
                href="/#work"
                className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 text-white rounded-lg hover:bg-brand-700 transition-colors"
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