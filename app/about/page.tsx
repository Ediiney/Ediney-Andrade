import Link from "next/link";
import { 
  Building2, 
  Code2, 
  Database,
  Globe,
  Zap,
  Briefcase
} from "lucide-react";

const professionalHighlights = [
  "Software Developer at LAB2DEV",
  "Systems Analysis and Development background from FAM",
  "Experience with AI products, automation, SaaS and enterprise integrations",
  "Certified in SAP ABAP, Python and web development bootcamp training",
];

const clients = [
  {
    name: "UOL",
    icon: Globe,
    color: "text-orange-500",
    projects: ["Web Development", "Integration Systems", "Full-Stack Solutions"],
  },
  {
    name: "BRASIF",
    icon: Building2,
    color: "text-blue-500",
    projects: ["SAP CPI (Cloud Platform Integration)", "SAP ECC", "SAP Business Intelligence"],
  },
  {
    name: "PagBank",
    icon: Code2,
    color: "text-purple-500",
    projects: ["SAP CPI Integration", "Cloud Platform Orchestration", "API Middleware & Connectors"],
  },
];

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

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <header className="flex items-center justify-between border-b border-white/10 px-8 py-6 backdrop-blur-xl">
        <Link href="/" className="text-2xl font-bold">
          Ediiney
        </Link>

        <nav className="hidden gap-8 text-zinc-400 md:flex">
          <Link href="/#projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <section className="px-8 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">
              About
            </p>
            <h1 className="mt-4 text-6xl font-black leading-none md:text-7xl">
              Ediney Andrade
            </h1>
            <p className="mt-6 text-xl text-zinc-400">
              Software Developer | AI Product Engineer | SaaS Builder
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-bold">Professional Summary</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300">
                I am a Software Developer based in Sao Paulo, currently connected
                to LAB2DEV and focused on building practical digital products. My
                work combines software engineering, artificial intelligence,
                automation and modern SaaS platforms, with experience translating
                business needs into reliable web systems and enterprise
                integrations.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-300">
                My academic foundation is in Systems Analysis and Development,
                complemented by training in SAP ABAP, Python and web development.
                This mix lets me move between product thinking, backend logic,
                integrations and user-facing experiences with a pragmatic,
                delivery-oriented mindset.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {professionalHighlights.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 text-zinc-200 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-bold mb-6">Client Experience</h2>
              <div className="grid gap-6 sm:grid-cols-3">
                {clients.map((client) => {
                  const IconComponent = client.icon;
                  return (
                    <div
                      key={client.name}
                      className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <IconComponent className={`w-6 h-6 ${client.color}`} />
                        <h3 className="font-bold text-lg text-white">{client.name}</h3>
                      </div>
                      <ul className="space-y-2">
                        {client.projects.map((project) => (
                          <li key={project} className="text-sm text-zinc-400 flex items-start gap-2">
                            <span className="text-indigo-400 mt-1">▸</span>
                            {project}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-bold">Social Links</h2>
              <div className="mt-6 flex flex-wrap gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
