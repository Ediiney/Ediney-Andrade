"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Briefcase, 
  Code2, 
  Zap, 
  Database,
  Globe,
  Building2
} from "lucide-react";

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/edineyandrade/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Ediiney",
  },
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4f46e5,transparent_30%),radial-gradient(circle_at_bottom_right,#06b6d4,transparent_30%)] opacity-30" />

      <header className="relative z-10 flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl">
        <h1 className="text-2xl font-bold">Ediiney</h1>

        <nav className="hidden md:flex gap-8 text-zinc-400">
          <Link href="/#projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl">
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            Building AI Products & SaaS
          </div>

          <h1 className="text-7xl md:text-8xl font-black tracking-tight leading-none">
            AI Product
            <br />
            Engineer
          </h1>

          <p className="max-w-2xl mx-auto mt-8 text-xl text-zinc-400 leading-relaxed">
            Software Engineer focused on Artificial Intelligence,
            automation systems and modern SaaS platforms.
          </p>

          <div className="mt-10 flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/edineyandrade/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl bg-white px-8 py-4 text-black font-semibold hover:scale-105 transition"
            >
              LinkedIn
            </a>

            <Link
              href="/about"
              className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 backdrop-blur-xl hover:bg-white/10 transition"
            >
              About Me
            </Link>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="relative z-10 px-8 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Featured Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "baiterstore",
                desc: "Modern e-commerce platform.",
                icon: Globe,
              },
              {
                title: "SAP-Event-Mesh-Client-with-Java",
                desc: "Enterprise event-driven integration.",
                icon: Zap,
              },
              {
                title: "Student-Management",
                desc: "Academic management platform.",
                icon: Briefcase,
              },
              {
                title: "BUSCA-CEP",
                desc: "Brazilian CEP API utility.",
                icon: Database,
              },
            ].map((project) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:-translate-y-2 transition"
                >
                  <div className="mb-6 h-14 w-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-4">
                    {project.title}
                  </h3>

                  <p className="text-zinc-400">
                    {project.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="clients" className="relative z-10 px-8 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-16">Clients & Companies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "UOL",
                role: "Web Development & Integration",
                icon: Globe,
                color: "from-orange-500 to-red-500",
              },
              {
                name: "BRASIF",
                role: "SAP CPI, ECC & BI Projects",
                icon: Building2,
                color: "from-blue-500 to-indigo-500",
              },
              {
                name: "PagBank",
                role: "SAP CPI Integration & Cloud Solutions",
                icon: Code2,
                color: "from-purple-500 to-pink-500",
              },
            ].map((client) => {
              const IconComponent = client.icon;
              return (
                <div
                  key={client.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl hover:-translate-y-2 transition"
                >
                  <div className={`mb-6 h-14 w-14 rounded-2xl bg-gradient-to-br ${client.color} flex items-center justify-center`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-2">
                    {client.name}
                  </h3>

                  <p className="text-zinc-400">
                    {client.role}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="about" className="relative z-10 px-8 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              About
            </p>
            <h2 className="mt-4 text-5xl font-black">Ediney Andrade</h2>
          </div>

          <div className="space-y-8">
            <p className="text-xl leading-relaxed text-zinc-300">
              Software Developer based in Sao Paulo, currently connected to LAB2DEV,
              with a background in Systems Analysis and Development. I build digital
              products with a focus on AI, automation, SaaS platforms and enterprise
              integrations, combining modern web development with practical business
              problem solving.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {["AI products", "SaaS platforms", "SAP ABAP"].map((skill) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-zinc-200 backdrop-blur-xl"
                >
                  {skill}
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-xl transition hover:bg-white/10"
            >
              Read full profile
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 px-8 py-24 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-black mb-8">Social Links</h2>

          <div className="flex flex-wrap gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 font-semibold text-zinc-100 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
