import { ArrowLeft, ArrowUpRight, CheckCircle2, FileCheck2, GitBranch, Route, ShieldCheck, Workflow } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox.jsx";

const githubUrl = "https://github.com/jenniferarias414/real-time-fraud-detection-pipeline";
const imageBase = `${import.meta.env.BASE_URL}case-study-images/fraud-detection/`;

const tags = ["AWS", "System Design", "Streaming", "Fraud Detection", "Data Pipeline", "Terraform"];

const solutionPoints = [
  "Payment events enter through Amazon API Gateway",
  "Amazon Kinesis Data Streams handles real-time ingestion and buffering",
  "AWS Lambda validates schemas, masks sensitive fields, and enriches events",
  "Amazon Managed Service for Apache Flink represents continuous stream processing and anomaly logic",
  "DynamoDB serves as a low-latency feature store for customer and device risk history",
  "SageMaker Real-Time Endpoint represents model-based fraud inference",
  "EventBridge, SQS, SNS, and a blocking service route fraud decisions into action workflows",
  "S3, Glue, Athena, Redshift, and QuickSight support governed storage, analytics, and reporting",
  "IAM, KMS, CloudTrail, CloudWatch, Terraform, and CI/CD represent governance, observability, and repeatable infrastructure",
];

const decisions = [
  "Kinesis Data Streams for real-time ingestion instead of hourly batch processing",
  "Lambda for lightweight schema validation, masking, and enrichment",
  "Flink for continuous stream processing, windowing, and anomaly detection patterns",
  "DynamoDB as a low-latency feature store for customer and device risk history",
  "SageMaker endpoint to represent real-time model inference",
  "EventBridge for routing fraud decisions",
  "SQS to decouple downstream block and review workflows",
  "SNS for analyst notifications",
  "S3 raw, scored, and audit zones for storage, analytics, and traceability",
  "Glue Data Catalog for discoverability and table metadata",
  "IAM, KMS, CloudTrail, and CloudWatch for governance, encryption, auditability, and monitoring",
  "Terraform to document repeatable infrastructure patterns",
];

const buildHighlights = [
  { label: "Validates transaction events", icon: FileCheck2 },
  { label: "Masks sensitive fields", icon: ShieldCheck },
  { label: "Scores fraud risk", icon: Workflow },
  { label: "Routes fraud decisions", icon: Route },
];

const evidenceGroups = [
  {
    title: "Architecture & Repository",
    description: "The repository documents the proposed AWS design, project structure, and published GitHub project experience.",
    images: [
      { title: "Architecture Diagram", src: "02-architecture-diagram.png" },
      { title: "Project Structure", src: "01-repo-structure.png" },
      { title: "GitHub Repository", src: "07-github-repo.png" },
    ],
  },
  {
    title: "Local Pipeline Proof of Concept",
    description:
      "The local Python slice simulates transaction validation, sensitive-field masking, fraud scoring, routing decisions, and audit-style outputs.",
    images: [
      { title: "Successful Pipeline Run", src: "03-terminal-run.png" },
      { title: "Scored Transaction Output", src: "04-scored-output.png" },
      { title: "Audit Decision Output", src: "05-audit-output.png" },
    ],
  },
  {
    title: "Infrastructure-as-Code Validation",
    description: "The Terraform skeleton documents core infrastructure resources and validates the repeatable infrastructure pattern.",
    images: [{ title: "Terraform Validation", src: "06-terraform-validate.png" }],
  },
];

const skills = [
  "AWS Architecture",
  "System Design",
  "Streaming Data Pipelines",
  "Python",
  "Terraform",
  "Event-Driven Architecture",
  "Fraud Detection",
  "Data Lake Design",
  "Data Governance",
  "Audit Lineage",
  "Data Quality",
  "Documentation",
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

function FraudDetectionCaseStudy() {
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
                Real-Time Fraud Detection Pipeline
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
                AWS system design case study for a real-time fraud detection pipeline with streaming ingestion, fraud-risk scoring, event-driven routing, audit lineage, and governed data lake storage.
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
                This project designs and prototypes a low-latency fraud pipeline for ABC FinTech, connecting business risk to AWS architecture, local pipeline behavior, and audit-ready data outputs.
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
            ABC FinTech relied on hourly batch fraud detection. Suspicious transactions could go undetected for up to an hour, allowing fraud to complete before alerts or blocks were triggered. This created financial loss, manual operational work, compliance and audit risk, and scalability concerns during transaction spikes.
          </p>
        </div>
      </Section>

      <Section eyebrow="Solution" title="Proposed AWS Future-State Architecture">
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
          <img src={`${imageBase}architecture-diagram.png`} alt="Real-time fraud detection AWS architecture diagram" className="w-full rounded-2xl object-contain" />
          <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-stone-600">
            This diagram represents the proposed future-state AWS architecture. The proof-of-concept implements a smaller local slice focused on JSON validation, sensitive-field masking, fraud-risk scoring, decision routing, and audit-style lineage output.
          </figcaption>
        </figure>
      </Section>

      <Section eyebrow="Build" title="What I Built">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
            <p className="text-lg font-semibold text-stone-950">Sample JSON transactions → validation → masking → fraud scoring → decision routing → audit output</p>
            <p className="mt-4 text-base leading-8 text-stone-600">
              The local proof-of-concept simulates the core behavior of a real-time fraud pipeline. It validates transaction events, protects sensitive fields, scores fraud risk, and creates audit-ready decision records.
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
          Screenshots are grouped by architecture, local proof-of-concept output, and Terraform validation. Click any screenshot to view it larger.
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
                  const imageIndex = evidenceImages.findIndex((item) => item.src === fullSrc);

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
                      <span className="flex items-center justify-between gap-3 px-2 py-3 text-sm font-semibold text-stone-800">
                        {image.title}
                        <ArrowUpRight className="shrink-0 text-emerald-800 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" size={15} />
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
            This project demonstrates how to translate a business problem, hourly fraud detection latency, into a scalable real-time AWS architecture with streaming ingestion, fraud scoring, event-driven actioning, audit-ready lineage, and governed data lake storage.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-emerald-50/75">
            The local proof-of-concept provides a practical slice of the core pipeline behavior while the architecture and Terraform skeleton document how the solution could scale in a cloud environment.
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

export default FraudDetectionCaseStudy;
