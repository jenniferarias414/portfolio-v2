import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox.jsx";

const githubUrl = "https://github.com/jenniferarias414/retail-data-lake-system-design/tree/main";
const imageBase = `${import.meta.env.BASE_URL}case-study-images/retail-data-lake/`;

const tags = ["AWS", "Terraform", "Lambda", "S3", "CloudWatch", "System Design", "Data Lake", "PII Masking"];

const decisions = [
  "S3 as centralized lake foundation",
  "Real-time vs batch ingestion paths",
  "Bronze/Silver/Gold data layers",
  "Terraform for repeatable infrastructure",
  "Lambda for lightweight event validation",
  "CloudWatch for operational visibility",
  "PII masking and error routing",
];

const evidenceGroups = [
  {
    title: "Infrastructure Setup",
    description: "Terraform was used to preview, deploy, and output the AWS proof-of-concept resources.",
    images: [
      { title: "Terraform Plan", src: "terraform-plan.png" },
      { title: "Terraform Apply Outputs", src: "terraform-apply.png" },
    ],
  },
  {
    title: "AWS Validation Flow",
    description:
      "Sample JSON events were uploaded to S3, processed by Lambda, routed into curated or error zones, and logged in CloudWatch.",
    images: [
      { title: "Raw S3 Upload", src: "raw-s3-upload.png" },
      { title: "Lambda Trigger", src: "lambda-trigger.png" },
      { title: "Curated Output", src: "curated-output.png" },
      { title: "Error Output", src: "error-output.png" },
      { title: "CloudWatch Logs", src: "cloudwatch-logs.png" },
    ],
  },
  {
    title: "Terminal Verification",
    description:
      "The terminal output confirms valid records were masked and routed to the Silver path, while invalid records were routed to the error path with validation metadata.",
    images: [
      { title: "Valid Terminal Output", src: "terminal-valid-output.png" },
      { title: "Invalid Terminal Output", src: "terminal-invalid-output.png" },
    ],
  },
];

const skills = [
  "AWS",
  "Terraform",
  "Python",
  "Lambda",
  "S3",
  "CloudWatch",
  "Data Quality",
  "PII Masking",
  "System Design",
  "Architecture Documentation",
  "Cost Control",
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

function RetailDataLakeCaseStudy() {
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
                Retail Data Lake System Design on AWS
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
                AWS system design case study for a retail data lake modernization with a Terraform-based proof-of-concept using S3, Lambda, and CloudWatch.
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
                A practical architecture story: business requirements, future-state AWS design, infrastructure-as-code, and a working validation slice.
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
            XYZ Retail had siloed POS, mobile/web, e-commerce, ERP, and CRM data. This created delayed reporting, inconsistent metrics, high maintenance costs, scalability issues, and gaps around PII compliance.
          </p>
        </div>
      </Section>

      <Section eyebrow="Solution" title="Proposed AWS Future-State Data Lake">
        <div className="grid gap-5 md:grid-cols-2">
          {[
            "Real-time ingestion for POS, app, and e-commerce events",
            "Batch ingestion for ERP and CRM datasets",
            "Centralized S3 data lake with Bronze, Silver, and Gold layers",
            "Governance through IAM/RBAC, KMS, CloudTrail, Lake Formation, and Glue Data Catalog",
            "Analytics through Athena, Redshift, QuickSight, and SageMaker",
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-stone-200 bg-white/70 p-5 shadow-sm">
              <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-800" size={18} />
              <p className="text-sm leading-6 text-stone-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Architecture" title="Architecture Diagram">
        <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-xl shadow-stone-900/5">
          <img src={`${imageBase}architecture-diagram.png`} alt="Retail data lake AWS architecture diagram" className="w-full rounded-2xl object-contain" />
          <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-stone-600">
            This diagram represents the proposed future-state AWS architecture. The proof-of-concept implements a smaller working slice focused on S3 ingestion, Lambda validation, curated/error routing, and CloudWatch logging.
          </figcaption>
        </figure>
      </Section>

      <Section eyebrow="Build" title="What I Built">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
            <p className="text-lg font-semibold text-stone-950">Raw S3 upload → Lambda validation → Curated/Error S3 output → CloudWatch logs</p>
            <p className="mt-4 text-base leading-8 text-stone-600">
              The proof-of-concept validates JSON events, masks email and phone values, adds metadata, routes valid records to <span className="font-semibold text-stone-900">silver/retail_events/</span>, and routes invalid records to <span className="font-semibold text-stone-900">errors/retail_events/</span>.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {["Validates JSON events", "Masks email and phone", "Adds processing metadata", "Routes valid and invalid records"].map((item) => (
              <div key={item} className="rounded-2xl border border-emerald-900/10 bg-emerald-50/60 p-5 text-sm font-semibold text-emerald-950">
                {item}
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
          Screenshots are grouped by deployment, AWS validation flow, and terminal verification. Click any screenshot to view it larger.
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
            This project demonstrates translating business requirements into a scalable cloud data architecture, documenting design decisions, and validating one working slice with AWS.
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

export default RetailDataLakeCaseStudy;
