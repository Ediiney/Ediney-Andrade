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
  "SAP Cloud Integration Consultant at LAB2DEV (2022-Present)",
  "Systems Analysis & Development - Centro Universitário FAM (2020-2022)",
  "SAP Integration Suite expertise: CPI, APIs, Event Mesh, Open Connectors",
  "Enterprise integrations with S/4HANA, BW, SuccessFactors and SaaS platforms",
];

const clients = [
  {
    name: "UOL Group",
    icon: Globe,
    color: "text-orange-500",
    projects: ["SAP Cloud Integration (iFlows)", "API Management & Governance", "Message Processing & EIPs"],
  },
  {
    name: "BRASIF",
    icon: Building2,
    color: "text-blue-500",
    projects: ["SAP CPI ↔ S/4HANA integrations", "SAP ECC interfaces", "SAP Business Intelligence (BW/BDP)"],
  },
  {
    name: "PagBank",
    icon: Code2,
    color: "text-purple-500",
    projects: ["SAP CPI with REST/SOAP protocols", "Event Mesh architecture", "Secure API connectivity"],
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
              Software Engineer | SAP Integration Suite | Enterprise Integrations
            </p>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-bold">Professional Summary</h2>
              <p className="mt-6 text-lg leading-relaxed text-zinc-300">
                Software Engineer based in São Paulo with 4+ years building enterprise 
                integrations and cloud solutions. Currently working at LAB2DEV as SAP 
                Cloud Integration Consultant, specializing in SAP Integration Suite 
                (SAP CPI, APIs, Event Mesh). I design and implement complex integration 
                scenarios with high availability, security and performance focus.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-300">
                Experience in AMS (Application Management Services), projects and continuous 
                improvements in critical environments. Expertise in iFlows, Message Processing, 
                Groovy scripting, XSLT 3.0, REST/SOAP protocols, OAuth2, and integrations 
                with SAP S/4HANA, SAP BW, SuccessFactors and external SaaS platforms.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-zinc-300">
                Education: Systems Analysis & Development (FAM, 2020-2022). Certifications: 
                SAP BTP & CAP, Oracle Cloud Infrastructure, SAP CPI & Groovy Script.
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
              <h2 className="text-3xl font-bold mb-6">Technical Skills</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <h3 className="font-bold text-cyan-300 mb-3">Integration & APIs</h3>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li>• SAP Cloud Integration (iFlows, Message Processing)</li>
                    <li>• API Management & Governance</li>
                    <li>• Event Mesh (event-driven architecture)</li>
                    <li>• Open Connectors & REST/SOAP/OData</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-cyan-300 mb-3">Scripting & Security</h3>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li>• Groovy Script & XSLT 3.0</li>
                    <li>• OAuth2 & X.509 Certificates</li>
                    <li>• Graphical Mapping & Content Modifiers</li>
                    <li>• IDoc, RFC, SFTP protocols</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-cyan-300 mb-3">SAP Systems</h3>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li>• SAP S/4HANA integrations</li>
                    <li>• SAP BW (Business Warehouse)</li>
                    <li>• SAP SuccessFactors HCM</li>
                    <li>• SAP ECC & SAP BTP</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-cyan-300 mb-3">DevOps & Tools</h3>
                  <ul className="space-y-1 text-sm text-zinc-300">
                    <li>• Git & CI/CD pipelines</li>
                    <li>• Message Processing Logs & Monitoring</li>
                    <li>• Troubleshooting & Performance tuning</li>
                    <li>• Keystore & Security materials</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <h2 className="text-3xl font-bold mb-6">Featured Projects</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <h3 className="font-bold text-indigo-300 mb-2">SAP CI ↔ S/4HANA & BW</h3>
                  <p className="text-sm text-zinc-400">End-to-end integration scenarios with iFlows, complex message mapping and API exposure.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <h3 className="font-bold text-indigo-300 mb-2">SAP CI & DocuSign</h3>
                  <p className="text-sm text-zinc-400">REST API integration for document management with OAuth2 authentication and event handling.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <h3 className="font-bold text-indigo-300 mb-2">SuccessFactors Integrations</h3>
                  <p className="text-sm text-zinc-400">Multi-system integration: SuccessFactors → Gupy, AchieveMore, Learning Rocks, SAP HCM.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                  <h3 className="font-bold text-indigo-300 mb-2">API Management & Event Mesh</h3>
                  <p className="text-sm text-zinc-400">API versioning, governance, and event-driven architectures with high availability focus.</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
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
