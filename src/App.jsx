import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Mail,
  FileText,
  Database,
  Bot,
  Cloud,
  BookOpen,
  Award,
  Send,
  GitBranch,
  Sparkles,
} from "lucide-react";

const githubUrl = "https://github.com/jenniferarias414";
const linkedinUrl = "https://www.linkedin.com/in/jennifer-arias-427851289/";

const projects = [
  {
    title: "Baggage Claim SQL Lineage Tool",
    category: "Data Engineering",
    summary:
      "Streamlit app that parses airline baggage-claims SQL and maps output columns back to source tables and columns for lineage and governance.",
    tags: ["Python", "Streamlit", "SQLGlot", "pandas", "SQL Lineage"],
    github: githubUrl,
    caseStudy: "#",
  },
  {
    title: "Python Automation Labs",
    category: "AI + Automation",
    summary:
      "Collection of Python automation projects covering files, regex, Excel reports, JSON conversion, scheduling, email alerts, and web scraping.",
    tags: ["Python", "Automation", "ETL", "SMTP", "Web Scraping"],
    github: githubUrl,
    caseStudy: "#",
  },
  {
    title: "dbt Data Projects",
    category: "Analytics Engineering",
    summary:
      "Analytics engineering projects focused on transforming raw data into modeled, tested, analytics-ready datasets.",
    tags: ["dbt", "SQL", "Data Modeling", "Testing"],
    github: githubUrl,
    caseStudy: "#",
  },
  {
    title: "Delta Lake Fundamentals Lab",
    category: "Data Engineering",
    summary:
      "Databricks project demonstrating Delta Lake versioning, time travel, schema evolution, and merge operations.",
    tags: ["Databricks", "Delta Lake", "PySpark", "Lakehouse"],
    github: githubUrl,
    caseStudy: "#",
  },
  {
    title: "Databricks Customer Analysis",
    category: "Analytics Engineering",
    summary:
      "PySpark analysis project using joins, aggregations, and ranking logic to analyze customer transaction data.",
    tags: ["PySpark", "Databricks", "Analytics", "SQL"],
    github: githubUrl,
    caseStudy: "#",
  },
  {
    title: "Bookstore Web Data Pipeline",
    category: "Apps + Tools",
    summary:
      "Python web ingestion project that scrapes a practice website, parses HTML with XPath, and exports structured CSV/report outputs.",
    tags: ["requests", "lxml", "pandas", "XPath", "ETL"],
    github: githubUrl,
    caseStudy: "#",
  },
];

const notes = [
  {
    title: "What I Learned Building a SQL Lineage Tool",
    meta: "Apr 2026 · 3 min read",
    summary:
      "How SQL parsing, table aliases, and column lineage connect to data governance.",
  },
  {
    title: "Web Scraping as a Data Pipeline",
    meta: "Apr 2026 · 3 min read",
    summary:
      "How HTTP requests, HTML parsing, XPath, and CSV outputs map to ETL concepts.",
  },
  {
    title: "AI-Assisted Learning in Data Engineering",
    meta: "Apr 2026 · 3 min read",
    summary:
      "How AI tools help me learn faster, debug more effectively, and document technical work.",
  },
];

const toolkitItems = [
  { name: "Python", logo: "python" },
  { name: "SQL", logo: "sql" },
  { name: "PySpark", logo: "spark" },
  { name: "Databricks", logo: "databricks" },
  { name: "dbt", logo: "dbt" },
  { name: "AWS", logo: "aws" },
  { name: "Git", logo: "git" },
  { name: "Docker", logo: "docker" },
  { name: "React", logo: "react" },
];

const categories = ["All", "Data Engineering", "AI + Automation", "Analytics Engineering", "Apps + Tools"];

function SectionHeader({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-base leading-7 text-stone-600">{children}</p>}
    </div>
  );
}

function TechnologyLogo({ logo }) {
  const base = "h-7 w-7";

  switch (logo) {
    case "python":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <path fill="#386d8f" d="M23.9 5c-8.1 0-7.6 3.5-7.6 3.5v3.7H24v1.1H13.2S6 12.5 6 20.9c0 8.3 6.3 8 6.3 8h3.8v-5.3s-.2-6.3 6.2-6.3h7.5s5.9.1 5.9-5.7V8.5S36.6 5 23.9 5Zm-4.2 3.3a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z" />
          <path fill="#d2a83f" d="M24.1 43c8.1 0 7.6-3.5 7.6-3.5v-3.7H24v-1.1h10.8s7.2.8 7.2-7.6c0-8.3-6.3-8-6.3-8h-3.8v5.3s.2 6.3-6.2 6.3h-7.5s-5.9-.1-5.9 5.7v3.1s-.9 3.5 11.8 3.5Zm4.2-3.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z" />
        </svg>
      );
    case "sql":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <ellipse cx="24" cy="11" rx="15" ry="6" fill="#0f766e" opacity="0.9" />
          <path fill="#0f766e" opacity="0.78" d="M9 11v22c0 3.3 6.7 6 15 6s15-2.7 15-6V11c0 3.3-6.7 6-15 6S9 14.3 9 11Z" />
          <path fill="none" stroke="#f7f3ea" strokeWidth="2" d="M9 22c0 3.3 6.7 6 15 6s15-2.7 15-6" opacity="0.8" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <path fill="#d17c2d" d="m24 5 4.2 12.5L41 13.8 32.5 24 41 34.2l-12.8-3.7L24 43l-4.2-12.5L7 34.2 15.5 24 7 13.8l12.8 3.7L24 5Z" opacity="0.9" />
          <path fill="#f7f3ea" d="m24 17 2 5.1 5.4 1.9-5.4 1.9-2 5.1-2-5.1-5.4-1.9 5.4-1.9 2-5.1Z" />
        </svg>
      );
    case "databricks":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <path fill="none" stroke="#c95f45" strokeWidth="3" strokeLinejoin="round" d="M24 7 7 16l17 9 17-9-17-9Z" />
          <path fill="none" stroke="#c95f45" strokeWidth="3" strokeLinejoin="round" d="m7 24 17 9 17-9M7 32l17 9 17-9" opacity="0.72" />
        </svg>
      );
    case "dbt":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <path
            fill="#d9785f"
            d="M9.6 7.5c2.7-1.6 5.7-1.4 8.5.4l11.7 7.4a10.8 10.8 0 0 1 4.3 5.2L39 17c2.8-1.8 5.8-2 8.5-.4 2.8 1.6 3.6 5.2 1.8 8l-6.1 9.8a12.2 12.2 0 0 0 0 13l6.1 9.8c1.8 2.8 1 6.4-1.8 8-2.7 1.6-5.7 1.4-8.5-.4L27.3 57.4a10.8 10.8 0 0 1-4.3-5.2L18.1 55c-2.8 1.8-5.8 2-8.5.4-2.8-1.6-3.6-5.2-1.8-8l6.1-9.8a12.2 12.2 0 0 0 0-13L7.8 14.7c-1.8-2.8-1-6.4 1.8-7.2Z"
            opacity="0.92"
            transform="translate(0 1) scale(.72)"
          />
          <rect x="20.5" y="20.5" width="7" height="7" rx="1.8" fill="#f7f3ea" transform="rotate(45 24 24)" />
        </svg>
      );
    case "aws":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <text x="3.5" y="27" fill="#0f172a" fontSize="20" fontWeight="800" fontFamily="Arial, sans-serif">aws</text>
          <path fill="none" stroke="#a86618" strokeLinecap="round" strokeWidth="3.4" d="M8 33c8.8 5.8 22.2 5.8 31-1" />
          <path fill="#a86618" d="m38 28.5 4.8 2.3-3.6 4.7-.9-3.6-3.7-.8 3.4-2.6Z" />
        </svg>
      );
    case "git":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <rect x="10" y="10" width="28" height="28" rx="4" fill="#d76545" transform="rotate(45 24 24)" opacity="0.9" />
          <path fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="3" d="M18 18 30 30M22 22h7" />
          <circle cx="18" cy="18" r="2.5" fill="#fff" />
          <circle cx="30" cy="30" r="2.5" fill="#fff" />
          <circle cx="29" cy="22" r="2.5" fill="#fff" />
        </svg>
      );
    case "docker":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <g transform="translate(-2 -2) scale(1.1)">
            <path fill="#2879a8" d="M12 22h5v5h-5v-5Zm6 0h5v5h-5v-5Zm6 0h5v5h-5v-5Zm-6-6h5v5h-5v-5Zm6 0h5v5h-5v-5Zm6 6h5v5h-5v-5Z" opacity="0.9" />
            <path fill="#2879a8" d="M7 28h31c-.8 5.7-5.4 10-13.8 10H20C13.3 38 8.5 34.7 7 28Z" opacity="0.9" />
            <path fill="#2879a8" d="M38 24c2 0 3.4 1 4 2.5-1.3.8-2.8 1.2-4.7 1.1.5-1 .7-2.2.7-3.6Z" opacity="0.75" />
          </g>
        </svg>
      );
    case "react":
      return (
        <svg viewBox="0 0 48 48" className={base} aria-hidden="true">
          <circle cx="24" cy="24" r="3.5" fill="#2b9bb8" />
          <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#2b9bb8" strokeWidth="2.5" />
          <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#2b9bb8" strokeWidth="2.5" transform="rotate(60 24 24)" />
          <ellipse cx="24" cy="24" rx="18" ry="7" fill="none" stroke="#2b9bb8" strokeWidth="2.5" transform="rotate(120 24 24)" />
        </svg>
      );
    default:
      return <Database className={base} aria-hidden="true" />;
  }
}

function ButtonLink({ href, children, variant = "primary", icon: Icon }) {
  const isExternal = href?.startsWith("http");
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2";
  const styles =
    variant === "primary"
      ? "bg-stone-950 text-white shadow-lg shadow-stone-900/15 hover:-translate-y-0.5 hover:bg-emerald-900"
      : "border border-stone-300 bg-white/70 text-stone-900 hover:-translate-y-0.5 hover:border-emerald-700 hover:bg-emerald-50";
  return (
    <a href={href} target={isExternal ? "_blank" : undefined} rel={isExternal ? "noreferrer" : undefined} className={`${base} ${styles}`}>
      {Icon && <Icon size={17} />}
      {children}
    </a>
  );
}

function Navbar() {
  const links = ["About", "Projects", "Skills", "Certifications", "Notes", "Contact"];
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-cream/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
        <a href="#home" className="flex items-center gap-3 font-semibold text-stone-950">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-900 text-sm text-white">JA</span>
          <span>Jenny Arias</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="text-sm font-medium text-stone-600 transition hover:text-emerald-800">
              {link}
            </a>
          ))}
          <a
            href="#"
            className="rounded-full border border-emerald-900/45 px-4 py-2 text-sm font-semibold text-emerald-900 transition hover:bg-emerald-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 focus:ring-offset-cream"
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 py-20 md:px-8 md:py-28">
      <div className="absolute left-1/2 top-10 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute right-8 top-40 -z-10 h-52 w-52 rounded-full bg-stone-300/30 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-900/15 bg-white/60 px-4 py-2 text-sm font-medium text-emerald-900 shadow-sm">
            <Sparkles size={16} /> AI-driven data engineer
          </div>
          <h1 className="max-w-4xl text-4xl font-medium tracking-tight text-stone-950 md:text-6xl">
            Hi, I’m Jenny Arias.
          </h1>
          <p className="mt-6 max-w-3xl text-2xl font-medium leading-snug text-stone-800 md:text-3xl">
            Data Engineer building reliable pipelines, intelligent automation, and analytics workflows.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
            I combine operational experience, cloud data tools, and AI-assisted development to turn messy inputs into clear, useful systems.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projects" icon={Database}>View Projects</ButtonLink>
            <ButtonLink href="#" variant="secondary" icon={FileText}>Download Resume</ButtonLink>
            <ButtonLink href={githubUrl} variant="secondary" icon={GitBranch}>GitHub</ButtonLink>
            <ButtonLink href={linkedinUrl} variant="secondary" icon={BriefcaseBusiness}>LinkedIn</ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -left-8 top-12 hidden rounded-2xl border border-stone-200 bg-white/85 px-4 py-3 shadow-xl shadow-stone-900/10 md:block">
            <p className="text-xs font-semibold uppercase tracking-widest text-stone-500">Focus</p>
            <p className="text-sm font-semibold text-stone-900">Python + SQL</p>
          </div>
          <div className="absolute -right-8 top-[19.825rem] hidden rounded-2xl border border-stone-200 bg-white/85 px-3.5 py-2.5 shadow-xl shadow-stone-900/10 lg:block">
            <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-stone-500">Stack</p>
            <p className="text-xs font-semibold text-stone-900">AWS + Databricks</p>
          </div>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-4 shadow-2xl shadow-stone-900/10">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-emerald-50 via-stone-100 to-white p-6">
              <div className="mx-auto flex aspect-square max-w-xs items-center justify-center overflow-hidden rounded-full border-8 border-white bg-stone-200 shadow-inner">
                <img
                  src="/headshot.png"
                  alt="Jenny Arias"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mt-6 rounded-2xl bg-white/80 p-5 text-center shadow-sm">
                <p className="text-sm font-semibold text-emerald-900">AI-Assisted Builder</p>
                <p className="mt-2 text-sm leading-6 text-stone-600">
                  Building practical systems with documentation, clarity, and business context.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ValueStrip() {
  const values = [
    { icon: Database, title: "Data Engineering", text: "Pipelines, lakehouse patterns, SQL, and PySpark workflows." },
    { icon: Bot, title: "Intelligent Automation", text: "AI-assisted tools, alerts, email workflows, and repeatable scripts." },
    { icon: Cloud, title: "Business Context", text: "Experience across airline operations, healthcare, and enterprise teams." },
    { icon: BookOpen, title: "Clear Documentation", text: "Projects built with READMEs, screenshots, and explainable workflows." },
  ];

  return (
    <section className="px-5 pb-14 pt-4 md:px-8 md:pt-2">
      <div className="mx-auto mb-7 max-w-3xl text-center">
        <h2 className="text-2xl font-medium tracking-tight text-stone-950 md:text-3xl">What I Bring</h2>
        <p className="mt-3 text-base leading-7 text-stone-600">
          A blend of technical execution, business experience, and modern AI-enabled delivery.
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-4">
        {values.map(({ icon: Icon, title, text }) => (
          <motion.div
            key={title}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="rounded-3xl border border-stone-200 bg-white/70 p-6 shadow-sm transition-all duration-200 hover:border-emerald-800/35 hover:shadow-2xl hover:shadow-stone-900/10"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-900 text-white">
              <Icon size={20} />
            </div>
            <h3 className="font-semibold text-stone-950">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  const [active, setActive] = useState("All");
  const [peekProject, setPeekProject] = useState(null);
  const filtered = useMemo(
    () => (active === "All" ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  useEffect(() => {
    setPeekProject(null);

    if (filtered.length === 0) return undefined;

    const getPeekDelay = () => 55000 + Math.random() * 20000;

    const showPeek = () => {
      const edgeIndexes = [...new Set([0, Math.min(filtered.length - 1, 2), filtered.length - 1])];
      const edgeProject = filtered[edgeIndexes[Math.floor(Math.random() * edgeIndexes.length)]];
      setPeekProject(edgeProject.title);

      return window.setTimeout(() => {
        setPeekProject(null);
      }, 2000);
    };

    let hideTimer;
    let peekTimer;

    const schedulePeek = () => {
      peekTimer = window.setTimeout(() => {
      hideTimer = showPeek();
        peekTimer = window.setTimeout(schedulePeek, 2000);
      }, getPeekDelay());
    };

    schedulePeek();

    return () => {
      window.clearTimeout(peekTimer);
      window.clearTimeout(hideTimer);
    };
  }, [filtered]);

  return (
    <section id="projects" className="px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Portfolio" title="Featured Projects">
        Hands-on projects focused on data pipelines, automation, analytics engineering, and AI-enabled workflows.
      </SectionHeader>

      <div className="mx-auto mb-8 flex max-w-5xl flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActive(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              active === category
                ? "border border-emerald-900 bg-emerald-900 text-white shadow-lg shadow-emerald-950/10"
                : "border border-stone-300 bg-white/60 text-stone-700 hover:border-emerald-800 hover:bg-emerald-50/70 hover:text-emerald-900"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>

      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.08, delay: index * 0.005, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:border-emerald-800/30 hover:shadow-xl hover:shadow-stone-900/8"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-800 via-sage-500 to-stone-300" />
              <AnimatePresence>
                {peekProject === project.title && (
                  <motion.div
                    aria-hidden="true"
                    initial={{ opacity: 0, x: 18, rotate: 4 }}
                    animate={{ opacity: 0.92, x: 0, rotate: 0 }}
                    exit={{ opacity: 0, x: 18, rotate: 3 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="pointer-events-none absolute -right-3 top-24 z-0 hidden h-6 w-6 rounded-full border border-stone-900/10 bg-[#b9a17c] shadow-[0_2px_6px_rgba(87,75,58,0.10)] md:block"
                  >
                    <span className="absolute -left-px top-px h-2 w-2 -rotate-12 rounded-sm bg-[#8d7656]" />
                    <span className="absolute right-0.5 top-px h-2 w-2 rotate-12 rounded-sm bg-[#8d7656]" />
                    <span className="absolute left-1.5 top-2.5 h-1 w-0.5 rounded-full bg-stone-800 [animation:blink_2s_ease-in-out_0.45s_1]" />
                    <span className="absolute right-1.5 top-2.5 h-1 w-0.5 rounded-full bg-stone-800 [animation:blink_2s_ease-in-out_0.45s_1]" />
                    <span className="absolute left-1/2 top-[0.9rem] h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-stone-700" />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="mb-5 flex items-center justify-between gap-4">
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                  {project.category}
                </span>
                <Sparkles className="text-stone-300 transition-all duration-200 ease-out group-hover:rotate-6 group-hover:text-emerald-700 group-hover:opacity-90" size={20} />
              </div>
              <h3 className="text-xl font-semibold tracking-tight text-stone-950">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-600">{project.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-600">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-3 pt-6">
                <a href={project.caseStudy} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-900/20 bg-emerald-900 px-3 py-1 text-sm font-semibold leading-5 text-white shadow-[0_2px_6px_rgba(6,78,59,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-950 hover:shadow-sm hover:shadow-stone-900/10">
                  Case Study <ArrowUpRight size={14} />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-1 py-2 text-sm font-semibold text-stone-500 transition-colors duration-200 hover:text-emerald-900">
                  GitHub <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="bg-white/55 px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Toolkit" title="Technical Toolkit">
        A focused core stack for data pipelines, analytics workflows, cloud delivery, and modern front-end work.
      </SectionHeader>
      <div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-9">
        {toolkitItems.map(({ name, logo }) => (
          <motion.div
            key={name}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="group flex min-h-28 flex-col items-center justify-center rounded-2xl border border-stone-200 bg-white/70 px-4 py-5 text-center shadow-sm transition-all duration-200 hover:border-emerald-800/30 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-900/10 bg-cream/80 text-emerald-900 transition-all duration-200 group-hover:border-emerald-800/25 group-hover:bg-emerald-50 group-hover:shadow-sm group-hover:shadow-emerald-950/10">
              <TechnologyLogo logo={logo} />
            </div>
            <p className="mt-3 text-sm font-semibold text-stone-800">{name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">About</p>
          <h2 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-4xl">Operational experience meets modern data engineering.</h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm"
        >
          <p className="text-lg leading-9 text-stone-700">
            I’m a data engineer with a background in healthcare operations and enterprise technology. My path into tech has been driven by curiosity, resilience, and a passion for building systems that make work easier.
          </p>
          <p className="mt-7 text-lg leading-9 text-stone-700">
            Today I focus on <strong className="font-semibold text-stone-950">Python</strong>, <strong className="font-semibold text-stone-950">SQL</strong>, <strong className="font-semibold text-stone-950">PySpark</strong>, <strong className="font-semibold text-stone-950">Databricks</strong>, dbt, <strong className="font-semibold text-stone-950">AWS</strong>, and AI-assisted development—creating practical solutions for automation, reporting, data quality, and analytics workflows.
          </p>
          <p className="mt-7 text-base leading-8 text-stone-600">
            Outside of tech, I enjoy travel, plants, lifelong learning, and finding smarter ways to solve everyday problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Certifications() {
  const certs = [
    { group: "Cloud & AI", items: ["AWS Certified Cloud Practitioner", "AWS Certified AI Practitioner"] },
    { group: "Data Engineering", items: ["Databricks Fundamentals Accreditation", "dbt Fundamentals"] },
    { group: "Enterprise & Foundations", items: ["Certified SAFe® 6 Practitioner", "React.js Web Development Program (Full Stack) — Devmountain"] },
  ];
  return (
    <section id="certifications" className="bg-emerald-950 px-5 py-24 text-white md:px-8">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200">Credentials</p>
        <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Certifications & Training</h2>
        <p className="mt-4 text-base leading-7 text-white/80">
          A mix of cloud, AI, data engineering, enterprise delivery, and front-end foundations.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {certs.map((cert) => (
          <motion.div
            key={cert.group}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="rounded-3xl border border-white/10 bg-white/8 p-6 shadow-sm shadow-black/5 backdrop-blur transition-all duration-200 hover:border-emerald-200/35 hover:shadow-xl hover:shadow-black/15"
          >
            <Award className="mb-4 text-emerald-200" />
            <h3 className="font-semibold text-white">{cert.group}</h3>
            <ul className="mt-4 space-y-2.5 text-sm leading-6 text-emerald-50/80">
              {cert.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Notes() {
  return (
    <section id="notes" className="px-5 py-24 md:px-8">
      <SectionHeader eyebrow="Writing" title="Technical Notes">
        Short technical writeups and learning notes from projects I’m building.
      </SectionHeader>
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {notes.map((note) => (
          <motion.article
            key={note.title}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-emerald-800/30 hover:shadow-xl hover:shadow-stone-900/8"
          >
            <BookOpen className="mb-4 text-emerald-800" />
            <h3 className="text-lg font-semibold text-stone-950">{note.title}</h3>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">{note.meta}</p>
            <p className="mt-3 text-sm leading-6 text-stone-600">{note.summary}</p>
            <a href="#" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900">
              Read note <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1" size={15} />
            </a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] border border-emerald-100/10 bg-[#10261d] p-8 text-white shadow-2xl shadow-emerald-950/10 md:grid-cols-[0.9fr_1.1fr] md:p-12 lg:p-14">
        <div className="self-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200/75">Contact</p>
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s connect.</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-emerald-50/75">
            I’m open to data engineering, analytics engineering, and AI-enabled automation opportunities.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={githubUrl} variant="secondary" icon={GitBranch}>GitHub</ButtonLink>
            <ButtonLink href={linkedinUrl} variant="secondary" icon={BriefcaseBusiness}>LinkedIn</ButtonLink>
            <ButtonLink href="mailto:jenniferarias414@gmail.com" variant="secondary" icon={Mail}>Email</ButtonLink>
          </div>
        </div>
        <form className="rounded-3xl border border-white/70 bg-white/95 p-6 text-stone-950 shadow-xl shadow-black/10 md:p-7">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm font-semibold text-stone-800">
              Name
              <input className="rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-900/10" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-stone-800">
              Email
              <input className="rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-900/10" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-stone-800">
              Message
              <textarea className="min-h-32 rounded-2xl border border-stone-200 bg-white/90 px-4 py-3 outline-none transition focus:border-emerald-700 focus:ring-2 focus:ring-emerald-900/10" placeholder="Tell me about the role or project..." />
            </label>
            <button type="button" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white shadow-sm shadow-emerald-950/10 transition hover:bg-[#10261d] hover:shadow-md">
              Send Message <Send size={16} />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-stone-950">
      <Navbar />
      <Hero />
      <ValueStrip />
      <Projects />
      <Skills />
      <About />
      <Certifications />
      <Notes />
      <Contact />
      <footer className="border-t border-stone-200 px-5 py-8 text-center text-sm text-stone-500 md:px-8">
        Built with React, Tailwind CSS, and a lot of curiosity. © 2026 Jenny Arias
      </footer>
    </main>
  );
}

export default App;
