import {
  ArrowDown,
  ArrowUpRight,
  Blocks,
  Braces,
  CheckCircle2,
  CloudCog,
  Github,
  Linkedin,
  MapPin,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

const expertise = [
  {
    icon: Workflow,
    number: "01",
    title: "Integrações ponta a ponta",
    text: "Desenho e implementação de iFlows conectando SAP S/4HANA, ECC, BW, SuccessFactors e plataformas SaaS.",
  },
  {
    icon: Network,
    number: "02",
    title: "APIs e eventos",
    text: "APIs REST, SOAP e OData, governança com API Management e arquiteturas orientadas a eventos com Event Mesh.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "Segurança e operação",
    text: "OAuth 2.0, certificados X.509, keystores, monitoramento, troubleshooting e sustentação de ambientes críticos.",
  },
];

const projects = [
  {
    tag: "Integração SAP",
    title: "SAP CI ↔ S/4HANA & BW",
    text: "Cenários ponta a ponta com iFlows, transformação de mensagens, exposição de APIs e integração segura entre sistemas.",
    tools: ["SAP CI", "S/4HANA", "SAP BW", "OData"],
  },
  {
    tag: "Automação",
    title: "SAP CI & DocuSign",
    text: "Automação do ciclo de documentos com APIs REST, autenticação OAuth 2.0 e tratamento de eventos.",
    tools: ["REST API", "OAuth 2.0", "DocuSign"],
  },
  {
    tag: "People Tech",
    title: "Ecossistema SuccessFactors",
    text: "Integrações entre SuccessFactors, Gupy, AchieveMore, Learning Rocks e SAP HCM.",
    tools: ["SuccessFactors", "SAP HCM", "Groovy"],
  },
  {
    tag: "Arquitetura",
    title: "API Management & Event Mesh",
    text: "Governança, versionamento e comunicação orientada a eventos para integrações escaláveis e resilientes.",
    tools: ["API Management", "Event Mesh", "BTP"],
  },
];

const stack = [
  "SAP Integration Suite",
  "Cloud Integration / CPI",
  "API Management",
  "Event Mesh",
  "Open Connectors",
  "Groovy Script",
  "XSLT 3.0",
  "REST · SOAP · OData",
  "IDoc · RFC · SFTP",
  "OAuth 2.0 · X.509",
  "S/4HANA · ECC · BW",
  "SuccessFactors",
  "Git · CI/CD",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Voltar ao início">
          EA<span>.</span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#experiencia">Experiência</a>
          <a href="#projetos">Projetos</a>
        </nav>
        <a className="header-cta" href="#contato">
          Vamos conversar <ArrowUpRight size={16} />
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
        <div className="hero-content">
          <div className="availability">
            <span />
            Disponível para novos desafios
          </div>
          <p className="eyebrow">SAP CLOUD INTEGRATION CONSULTANT</p>
          <h1>
            Ediney
            <br />
            <span>Andrade.</span>
          </h1>
          <p className="hero-description">
            Transformo processos complexos em integrações SAP
            <strong> seguras, escaláveis e fáceis de operar.</strong>
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#projetos">
              Ver minha experiência <ArrowDown size={18} />
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/edineyandrade/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={18} /> LinkedIn
            </a>
          </div>
        </div>
        <div className="hero-side">
          <p>Baseado em</p>
          <strong><MapPin size={15} /> São Paulo, Brasil</strong>
        </div>
        <p className="hero-index">PORTFÓLIO / 2026</p>
      </section>

      <section className="intro section" id="sobre">
        <div className="section-label">01 / PERFIL</div>
        <div className="intro-copy">
          <p className="kicker"><Sparkles size={18} /> SOBRE MIM</p>
          <h2>
            Integração não é só conectar sistemas.
            <span> É fazer o negócio fluir.</span>
          </h2>
          <div className="intro-grid">
            <p>
              Sou desenvolvedor de software e consultor SAP Cloud Integration na
              LAB2DEV, com mais de 4 anos de atuação em integrações empresariais,
              projetos e sustentação AMS.
            </p>
            <p>
              Trabalho com SAP Integration Suite para construir cenários robustos,
              automatizar processos e conectar ecossistemas SAP e não SAP com foco
              em disponibilidade, segurança e performance.
            </p>
          </div>
          <div className="facts">
            <div><strong>4+</strong><span>anos em tecnologia<br />e integrações</span></div>
            <div><strong>3</strong><span>grandes empresas<br />atendidas</span></div>
            <div><strong>360°</strong><span>projetos, melhorias<br />e sustentação</span></div>
          </div>
        </div>
      </section>

      <section className="expertise section" id="experiencia">
        <div className="section-heading">
          <div>
            <p className="kicker">O QUE EU ENTREGO</p>
            <h2>Especialidade que conecta<br />estratégia e execução.</h2>
          </div>
          <CloudCog className="heading-icon" />
        </div>
        <div className="expertise-list">
          {expertise.map(({ icon: Icon, number, title, text }) => (
            <article key={number}>
              <span className="item-number">{number}</span>
              <div className="item-icon"><Icon /></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
        <div className="experience-band">
          <div>
            <span>2022 — ATUAL</span>
            <h3>LAB2DEV</h3>
            <p>SAP Cloud Integration Consultant</p>
          </div>
          <ul>
            <li><CheckCircle2 /> Projetos de integração e melhorias contínuas</li>
            <li><CheckCircle2 /> AMS e troubleshooting em ambientes críticos</li>
            <li><CheckCircle2 /> Experiência com UOL, BRASIF e PagBank</li>
          </ul>
        </div>
      </section>

      <section className="projects section" id="projetos">
        <div className="section-heading">
          <div>
            <p className="kicker">EXPERIÊNCIA APLICADA</p>
            <h2>Projetos em destaque.</h2>
          </div>
          <Braces className="heading-icon" />
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <article key={project.title} className="project-card">
              <div className="project-top">
                <span>{project.tag}</span>
                <span>0{index + 1}</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <div className="chips">
                {project.tools.map((tool) => <span key={tool}>{tool}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="stack section">
        <div className="stack-title">
          <Blocks />
          <div>
            <p className="kicker">TOOLKIT</p>
            <h2>Tecnologias que uso.</h2>
          </div>
        </div>
        <div className="stack-list">
          {stack.map((item) => <span key={item}>{item}</span>)}
        </div>
      </section>

      <section className="education section">
        <div className="section-label">02 / FORMAÇÃO</div>
        <div className="education-content">
          <div>
            <span>2020 — 2022</span>
            <h3>Análise e Desenvolvimento de Sistemas</h3>
            <p>Centro Universitário FAM</p>
          </div>
          <div>
            <span>CERTIFICAÇÕES & ESTUDOS</span>
            <p>SAP BTP & CAP · Oracle Cloud Infrastructure · SAP CPI & Groovy Script</p>
          </div>
        </div>
      </section>

      <footer id="contato">
        <p className="kicker">VAMOS CONSTRUIR ALGO QUE FUNCIONE?</p>
        <h2>Pronto para o<br /><span>próximo desafio.</span></h2>
        <p className="footer-copy">
          Se você busca alguém que une visão técnica, entendimento de negócio e
          experiência em integrações SAP, vamos conversar.
        </p>
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/edineyandrade/" target="_blank" rel="noreferrer">
            <Linkedin /> LinkedIn <ArrowUpRight />
          </a>
          <a href="https://github.com/Ediiney" target="_blank" rel="noreferrer">
            <Github /> GitHub <ArrowUpRight />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Ediney Andrade</span>
          <span>SAP Integration Suite · São Paulo, BR</span>
        </div>
      </footer>
    </main>
  );
}
