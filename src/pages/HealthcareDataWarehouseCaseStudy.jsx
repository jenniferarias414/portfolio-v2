import { ArrowLeft, ArrowUpRight, CheckCircle2, Database, GitBranch, Lock, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox.jsx";

const githubUrl = "https://github.com/jenniferarias414/healthcare-warehouse-modernization";
const imageBase = `${import.meta.env.BASE_URL}case-study-images/healthcare/`;

const tags = ["AWS", "Snowflake", "System Design", "Data Warehouse", "Healthcare"];

const solutionPoints = [
  "EHR, billing, appointment, and lab systems feed into AWS ingestion services",
  "Amazon S3 landing zone stages raw healthcare data securely",
  "AWS Glue Catalog provides metadata discovery and data quality checks",
  "Data quality framework validates missing patient IDs, duplicate records, invalid billing codes, and schema drift",
  "PHI masking reduces exposure of sensitive patient fields before broader analytics use",
  "Snowpipe automates loading into Snowflake Bronze, Silver, and Gold layers",
  "dbt-style SQL models represent maintainable ELT transformations and tests",
  "RBAC, encryption, CloudTrail, and audit logs provide governance and compliance",
  "Analytics dashboards and self-service models support regulatory reporting and business intelligence",
  "Terraform documents repeatable AWS infrastructure patterns for staging and orchestration",
];

const decisions = [
  "AWS for ingestion, staging, orchestration, monitoring, and infrastructure automation",
  "Snowflake for elastic cloud warehouse storage and compute",
  "ELT instead of legacy SSIS workflows",
  "Bronze/Silver/Gold layers to separate raw, cleaned, and analytics-ready data",
  "Data quality checks to improve reporting trust and compliance",
  "PHI masking to reduce unnecessary exposure of sensitive patient data",
  "dbt-style SQL for maintainable transformations and tests",
  "Terraform skeleton to document repeatable AWS infrastructure patterns",
];

const buildHighlights = [
  { label: "Validates healthcare data quality", icon: CheckCircle2 },
  { label: "Masks sensitive PHI fields", icon: Lock },
  { label: "Builds Bronze/Silver/Gold outputs", icon: Database },
  { label: "Generates reporting-ready data", icon: Zap },
];

const evidenceGroups = [
  {
    title: "Architecture & Repository",
    description: "The proposed future-state architecture and GitHub repository structure demonstrate the system design and project organization.",
    images: [
      { title: "Architecture Diagram", src: "02-architecture-diagram.png" },
      { title: "Repository Structure", src: "01-repo-structure.png" },
    ],
  },
  {
    title: "Local Pipeline Proof of Concept",
    description:
      "The local Python proof-of-concept simulates healthcare data quality validation, PHI masking, Bronze/Silver/Gold layering, and quality reporting.",
    images: [
      { title: "Successful Pipeline Run", src: "03-terminal-run.png" },
      { title: "Data Quality Summary", src: "04-quality-summary.png" },
      { title: "Data Quality Issues", src: "05-quality-issues.png" },
    ],
  },
  {
    title: "Data Layers: Bronze → Silver → Gold",
    description:
      "The local proof-of-concept creates Bronze, Silver, and Gold-style data layers to demonstrate how healthcare source data can move from source-aligned ingestion toward cleaned, governed, analytics-ready reporting.",
    images: [
      {
        title: "Bronze Layer: Source-Aligned Output",
        description:
          "Bronze represents data close to how it arrived from source systems, with minimal transformation. In a cloud warehouse design, this can live as raw/source-aligned Snowflake tables or staged outputs.",
        src: "03-terminal-run.png",
      },
      {
        title: "Silver Layer: Cleaned + Masked Output",
        description:
          "Silver represents cleaned, standardized, validated, and PHI-masked data that is safer for downstream analytics.",
        src: "06-silver-output.png",
      },
      {
        title: "Gold Layer: Analytics-Ready Output",
        description:
          "Gold represents curated reporting data designed for dashboards, regulatory reports, and self-service analytics.",
        src: "07-gold-output.png",
      },
    ],
  },
  {
    title: "Infrastructure-as-Code Validation",
    description: "The Terraform skeleton documents core infrastructure resources and validates the framework for repeatable AWS infrastructure patterns.",
    images: [{ title: "Terraform Validation", src: "08-terraform-validate.png" }],
  },
];

const skills = [
  "AWS Architecture",
  "Snowflake",
  "System Design",
  "Data Warehouse Modernization",
  "ELT Pipeline Design",
  "Data Quality",
  "PHI Masking",
  "HIPAA-Aware Governance",
  "Bronze/Silver/Gold Modeling",
  "SQL",
  "Python",
  "Terraform",
  "Analytics Engineering",
  "Architecture Documentation",
];

function Section({ eyebrow, title, children }) {
  return (
    <section className="mx-auto max-w-6xl px-5 py-14 md:px-8">
      <div className="mb-7 max-w-3xl">
        {eyebrow && <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">{eyebrow}</p>}
        <h2 className="text-2xl font-semibold tracking-tight text-stone-950 md:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function HealthcareDataWarehouseCaseStudy() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const evidenceImages = useMemo(
    () => evidenceGroups.flatMap((group) => group.images.map((image) => ({ ...image, src: `${imageBase}${image.src}` }))),
    []
  );
  const activeImage = activeImageIndex === null ? null : evidenceImages[activeImageIndex];
  const showNextImage = () => setActiveImageIndex((index) => (index === null ? 0 : (index + 1) % evidenceImages.length));
  const showPreviousImage = () =>
    setActiveImageIndex((index) => (index === null ? evidenceImages.length - 1 : (index - 1 + evidenceImages.length) % evidenceImages.length));

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-stone-950">
      <ImageLightbox
        image={activeImage}
        hasMultiple={evidenceImages.length > 1}
        onClose={() => setActiveImageIndex(null)}
        onNext={showNextImage}
        onPrevious={showPreviousImage}
      />

      <section className="px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14">
        <div className="mx-auto max-w-6xl">
          <Link to="/#projects" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition hover:text-stone-950">
            <ArrowLeft size={16} /> Back to Projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Case Study</p>
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
                Healthcare Data Warehouse Modernization
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
                AWS and Snowflake system design case study for modernizing a legacy healthcare warehouse with ELT pipelines, data quality checks, PHI governance, and self-service analytics.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-emerald-900/10 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-900 shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-stone-200 bg-white/80 p-6 shadow-xl shadow-stone-900/5">
              <p className="text-sm leading-6 text-stone-600">
                This project designs and prototypes a healthcare analytics modernization journey: from legacy SQL Server and SSIS, through cloud ingestion, Snowflake warehouse layers, data quality, PHI governance, and reporting performance goals.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-950/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-950 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2">
                  <GitBranch size={16} /> View GitHub Repo
                </a>
                <Link to="/#projects" className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/75 px-4 py-2 text-sm font-semibold text-stone-800 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-800 hover:bg-emerald-50 hover:text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2">
                  Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section eyebrow="Problem" title="Business Problem">
        <div className="max-w-4xl rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
          <p className="text-lg leading-9 text-stone-700">
            MediCore Health operates multiple hospitals and diagnostic centers. Its legacy on-prem SQL Server data warehouse and SSIS-based workflows struggle with growing healthcare data volume from EHR, billing, appointment, and lab systems. The platform faces slow query performance, costly scaling, brittle manual workflows, inconsistent data quality, HIPAA compliance pressure, and regulatory reports that can take 6–8 hours to generate.
          </p>
        </div>
      </Section>

      <Section eyebrow="Solution" title="Proposed Architecture">
        <div className="grid gap-5 md:grid-cols-2">
          {solutionPoints.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-stone-200 bg-white/70 p-5 shadow-sm">
              <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-800" size={18} />
              <p className="text-sm leading-6 text-stone-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Architecture" title="Architecture Diagram">
        <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-xl shadow-stone-900/5">
          <img src={`${imageBase}02-architecture-diagram.png`} alt="Healthcare data warehouse AWS and Snowflake architecture diagram" className="w-full rounded-2xl object-contain" />
          <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-stone-600">
            This diagram represents the proposed future-state AWS + Snowflake architecture. AWS handles secure ingestion, staging, metadata, orchestration, monitoring, and infrastructure automation. Snowflake provides the elastic warehouse layer with Bronze, Silver, and Gold models, governed access, masking, and auditability.
          </figcaption>
        </figure>
      </Section>

      <Section eyebrow="Build" title="What I Built">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
            <p className="text-lg font-semibold text-stone-950">Sample healthcare files → data quality validation → PHI masking → Bronze/Silver/Gold outputs → quality report</p>
            <p className="mt-4 text-base leading-8 text-stone-600">
              The local proof-of-concept simulates the core behavior of a healthcare warehouse modernization. It validates sample healthcare source files, masks sensitive PHI fields, creates Bronze/Silver/Gold-style outputs, and generates data quality reports.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {buildHighlights.map(({ label, icon: Icon }) => (
              <div key={label} className="flex min-h-28 items-center justify-between gap-4 rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-5 text-sm font-semibold leading-6 text-emerald-950">
                <span className="max-w-[9rem]">{label}</span>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-emerald-900/10 bg-white/70 text-emerald-800">
                  <Icon size={22} strokeWidth={1.8} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Decisions" title="Key Technical Decisions">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {decisions.map((decision) => (
            <div key={decision} className="rounded-2xl border border-stone-200 bg-white/75 p-5 shadow-sm transition hover:border-emerald-800/25 hover:shadow-lg hover:shadow-stone-900/5">
              <p className="text-sm font-semibold leading-6 text-stone-800">{decision}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Evidence" title="Implementation Evidence">
        <p className="-mt-3 mb-8 max-w-3xl text-base leading-7 text-stone-600">
          Screenshots are grouped by architecture, local proof-of-concept output, and infrastructure validation. Click any screenshot to view it larger.
        </p>
        <div className="space-y-8">
          {evidenceGroups.map((group) => (
            <div key={group.title} className="rounded-[2rem] border border-stone-200 bg-white/60 p-5 shadow-sm md:p-6">
              <div className="mb-5 max-w-3xl">
                <h3 className="text-lg font-semibold text-stone-950">{group.title}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-600">{group.description}</p>
              </div>
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {group.images.map((image) => {
                  const fullSrc = `${imageBase}${image.src}`;
                  const imageIndex = evidenceImages.findIndex((item) => item.src === fullSrc && item.title === image.title);

                  return (
                    <button
                      key={image.src}
                      type="button"
                      onClick={() => setActiveImageIndex(imageIndex)}
                      className="group cursor-pointer overflow-hidden rounded-3xl border border-stone-200 bg-white p-3 text-left shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-emerald-800/30 hover:shadow-xl hover:shadow-stone-900/8 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2 focus:ring-offset-[#f7f3ea]"
                      aria-label={`View larger screenshot: ${image.title}`}
                    >
                      <span className="block overflow-hidden rounded-2xl bg-stone-100">
                        <img
                          src={fullSrc}
                          alt={image.title}
                          className="aspect-[4/3] w-full object-cover object-left-top transition duration-300 group-hover:scale-[1.025] group-hover:brightness-105"
                        />
                      </span>
                      <span className="flex items-start justify-between gap-3 px-2 py-3">
                        <span>
                          <span className="block text-sm font-semibold text-stone-800">{image.title}</span>
                          {image.description && <span className="mt-2 block text-sm font-normal leading-6 text-stone-600">{image.description}</span>}
                        </span>
                        <ArrowUpRight className="mt-0.5 shrink-0 text-emerald-800 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" size={15} />
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Skills" title="Skills Demonstrated">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-stone-200 bg-white/75 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">
              {skill}
            </span>
          ))}
        </div>
      </Section>

      <section className="px-5 pb-24 pt-8 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#10261d] p-8 text-white shadow-2xl shadow-emerald-950/10 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200/75">Final Takeaway</p>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-emerald-50/85">
            This project demonstrates how to translate healthcare analytics pain points into a modern cloud data warehouse architecture. The proposed solution uses AWS for ingestion and platform operations, Snowflake for scalable warehouse analytics, dbt-style SQL for maintainable ELT, and data quality/PHI controls to improve trust, governance, and reporting performance.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-emerald-50/75">
            The local proof-of-concept makes the architecture easier to understand by simulating the core pattern: validate quality → mask PHI → create Bronze/Silver/Gold outputs → produce a quality report.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50">
              View GitHub Repo <ArrowUpRight size={16} />
            </a>
            <Link to="/#projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-200/50 hover:bg-white/10">
              Back to Projects
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HealthcareDataWarehouseCaseStudy;
