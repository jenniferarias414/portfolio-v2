import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox.jsx";

const githubUrl = "https://github.com/jenniferarias414/aws-dms-s3-cross-region-replication";
const imageBase = `${import.meta.env.BASE_URL}case-study-images/aws-dms-s3-cross-region-replication/`;

const tags = ["AWS", "DMS", "RDS", "MySQL", "S3", "Lambda", "SNS", "SQS", "CDC", "Data Engineering"];

const problemCards = [
  "Transactional data starts in a relational database",
  "Teams need database output available in S3",
  "Cross-region copies support backup, recovery, and downstream access",
];

const solutionCards = [
  {
    title: "Source database",
    body: "RDS MySQL stores retail-style source data for customers, products, and orders.",
  },
  {
    title: "Migrate with DMS",
    body: "AWS DMS performs full load and ongoing CDC into a source S3 bucket.",
  },
  {
    title: "Publish object events",
    body: "S3 object-created notifications publish new file events to SNS.",
  },
  {
    title: "Queue and process messages",
    body: "SQS buffers the event messages and triggers Lambda.",
  },
  {
    title: "Replicate to target region",
    body: "Lambda copies new DMS output files into a target S3 bucket in us-west-1.",
  },
];

const pipelineSteps = [
  "Amazon RDS MySQL",
  "AWS DMS full load + CDC",
  "Source S3 bucket dms-output/",
  "S3 object-created event",
  "SNS topic",
  "SQS queue",
  "Lambda copy function",
  "Target S3 bucket replicated-output/",
];

const architectureImage = "architecture/architecture-diagram.png";

const decisions = [
  "Used AWS DMS to avoid custom database extraction logic",
  "Used full load + CDC to model both initial migration and ongoing changes",
  "Used S3 as the landing zone for database output files",
  "Used SNS and SQS to decouple file-created events from Lambda processing",
  "Used Lambda for custom cross-region copy logic and prefix rewriting",
  "Used separate S3 prefixes: dms-output/ for source files and replicated-output/ for target files",
  "Kept screenshots and documentation as validation evidence after AWS cleanup",
];

const evidenceGroups = [
  {
    title: "Architecture & Source Setup",
    description: "This group documents the architecture and initial AWS source setup for the migration workflow.",
    images: [
      { title: "Architecture Diagram", src: architectureImage },
      { title: "RDS Source Created", src: "screenshots/selected-for-readme/01-rds-mysql-instance-created.png" },
      { title: "Source Data Loaded", src: "screenshots/selected-for-readme/02-rds-source-data-loaded.png" },
      { title: "S3 Buckets Created", src: "screenshots/selected-for-readme/03-source-and-target-s3-buckets-created.png" },
    ],
  },
  {
    title: "Event Flow Setup",
    description: "These screenshots show the event-driven replication pipeline with Lambda, SQS, SNS, and S3 notifications.",
    images: [
      { title: "Lambda SQS Trigger", src: "screenshots/selected-for-readme/07-lambda-sqs-trigger-created.png" },
      { title: "S3 Event Notification", src: "screenshots/selected-for-readme/08-s3-event-notification-configured.png" },
    ],
  },
  {
    title: "DMS Validation",
    description: "The validation screenshots confirm DMS connections and the migration task state.",
    images: [
      { title: "DMS Source Endpoint Success", src: "screenshots/selected-for-readme/12-dms-source-endpoint-test-success.png" },
      { title: "DMS Target Endpoint Success", src: "screenshots/selected-for-readme/13-dms-target-s3-endpoint-test-success.png" },
      { title: "DMS CDC Running", src: "screenshots/selected-for-readme/18-dms-task-cdc-running.png" },
    ],
  },
  {
    title: "Replication Validation",
    description: "The final evidence group shows the files replicated into the target region bucket.",
    images: [
      { title: "Target Bucket Replicated Files", src: "screenshots/selected-for-readme/19-cdc-files-replicated-target-bucket.png" },
    ],
  },
];

const skills = [
  "AWS",
  "AWS DMS",
  "Amazon RDS",
  "MySQL",
  "Amazon S3",
  "AWS Lambda",
  "Amazon SNS",
  "Amazon SQS",
  "IAM",
  "CloudWatch",
  "CDC",
  "Event-Driven Architecture",
  "Cross-Region Replication",
  "Python",
  "boto3",
  "SQL",
  "Data Engineering",
  "Troubleshooting",
  "Cost Control",
  "Technical Documentation",
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

function AwsDmsS3CrossRegionReplicationCaseStudy() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const evidenceImages = useMemo(
    () => evidenceGroups.flatMap((group) => group.images.map((image) => ({ ...image, src: `${imageBase}${image.src}` }))),
    [],
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
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">AWS DMS S3 Cross-Region Replication Pipeline</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
                Database migration and cross-region S3 replication workflow using RDS MySQL, AWS DMS, S3 event notifications, SNS, SQS, and Lambda.
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
                This project demonstrates how operational database data can be migrated into Amazon S3 and replicated across regions using managed AWS services. AWS DMS performs a full load and ongoing CDC from RDS MySQL into a source S3 bucket, while an event-driven SNS/SQS/Lambda workflow copies new output files into a target-region bucket.
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
            Operational database data often needs to be moved into object storage for analytics, backup, disaster recovery, or downstream processing. When source data changes over time, teams need a way to capture both the initial data load and ongoing changes without manually exporting files or copying objects between regions.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {problemCards.map((card, index) => (
            <div key={card} className="flex min-h-28 gap-4 rounded-2xl border border-stone-200 bg-white/75 p-5 shadow-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-stone-100 text-xs font-semibold text-stone-500">
                {index + 1}
              </span>
              <p className="text-sm font-semibold leading-6 text-stone-800">{card}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Solution" title="AWS DMS + Event-Driven Cross-Region Replication">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
            <p className="text-lg font-semibold text-stone-950">The workflow migrates existing and changed data from RDS MySQL into S3, then uses serverless event handling to replicate new data to another region.</p>
            <p className="mt-4 text-base leading-8 text-stone-600">AWS DMS writes to a source S3 bucket, S3 object-created events flow through SNS and SQS, and Lambda copies new objects to the target bucket in another AWS region.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {solutionCards.map((s) => (
              <div key={s.title} className="flex gap-3 rounded-2xl border border-stone-200 bg-white/70 p-5 shadow-sm">
                <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-800" size={18} />
                <div>
                  <p className="text-sm font-semibold text-stone-900">{s.title}</p>
                  <p className="mt-1 text-sm text-stone-700">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-6xl px-5 md:px-8">
          <h3 className="text-xl font-semibold tracking-tight text-stone-950">Pipeline Flow</h3>
          <div className="mt-4 flex flex-wrap items-center gap-2 rounded-3xl border border-stone-200 bg-white/75 p-5 shadow-sm">
            {pipelineSteps.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">{step}</span>
                {index < pipelineSteps.length - 1 && <span className="text-sm font-semibold text-stone-400">→</span>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Architecture" title="Architecture Diagram">
        <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-xl shadow-stone-900/5">
          <img src={`${imageBase}${architectureImage}`} alt="AWS DMS S3 cross-region replication architecture diagram" className="w-full rounded-2xl object-contain" />
          <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-stone-600">
            This diagram shows the database-to-S3 migration and cross-region replication workflow. AWS DMS moves full-load and CDC data from RDS MySQL into a source S3 bucket. New S3 output files trigger an event-driven flow through SNS, SQS, and Lambda, which copies the files into a target S3 bucket in another AWS region.
          </figcaption>
        </figure>
      </Section>

      <Section eyebrow="Build" title="What I Built">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
            <p className="text-lg font-semibold text-stone-950">The project combines managed AWS database migration with an event-driven cross-region replication workflow.</p>
            <p className="mt-4 text-base leading-8 text-stone-600">
              I built the source database, configured DMS to land database output in S3, then connected S3 events through SNS, SQS, and Lambda to copy new files into a target-region bucket.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-3xl border border-stone-200 bg-white/75 p-5 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Source Database + DMS Setup</p>
              <p className="text-sm leading-6 text-stone-700">Created an RDS MySQL source with customer, product, and order tables, then configured AWS DMS source and S3 target endpoints.</p>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-white/75 p-5 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Full Load + CDC Migration</p>
              <p className="text-sm leading-6 text-stone-700">Built a DMS migration task that performed the initial full load and continued running for ongoing change data capture.</p>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-white/75 p-5 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Event-Driven Replication Flow</p>
              <p className="text-sm leading-6 text-stone-700">Connected S3 object-created events to SNS, delivered messages to SQS, and triggered Lambda from the queue.</p>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-white/75 p-5 shadow-sm">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Lambda Copy + Validation</p>
              <p className="text-sm leading-6 text-stone-700">Wrote Python Lambda logic to parse SQS/SNS/S3 event messages, rewrite the target prefix, and copy files into the target-region S3 bucket.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section eyebrow="Decisions" title="Key Technical Decisions">
        <div className="grid gap-4 md:grid-cols-2">
          {decisions.map((decision) => (
            <div key={decision} className="rounded-2xl border border-stone-200 bg-white/75 p-5 shadow-sm">
              <p className="text-sm font-semibold leading-6 text-stone-800">{decision}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Evidence" title="Implementation Evidence">
        <p className="-mt-3 mb-8 max-w-3xl text-base leading-7 text-stone-600">Screenshots are grouped by architecture, AWS source setup, event flow configuration, DMS validation, and replication verification.</p>
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
                      aria-label={`View larger screenshot: ${image.title}`}>
                      <span className="block overflow-hidden rounded-2xl bg-stone-100">
                        <img src={fullSrc} alt={image.title} className="aspect-[4/3] w-full object-contain transition duration-300 group-hover:scale-[1.025] group-hover:brightness-105" />
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

      <Section eyebrow="Validation" title="Final Validation Summary">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-6 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">DMS Task Running</p>
            <p className="text-sm leading-6 text-stone-700">The migration task reached “Load complete, replication ongoing,” confirming the initial load completed and CDC remained active.</p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-6 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Source S3 Output Created</p>
            <p className="text-sm leading-6 text-stone-700">DMS wrote customer, product, and order output files into the source bucket under <span className="font-semibold text-stone-900">dms-output/</span>.</p>
          </div>
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-6 shadow-sm">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Target Bucket Replication Confirmed</p>
            <p className="text-sm leading-6 text-stone-700">The Lambda workflow copied new DMS output files into the target bucket under <span className="font-semibold text-stone-900">replicated-output/</span>.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Skills" title="Skills Demonstrated">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill} className="rounded-2xl border border-stone-200 bg-white/75 p-4 shadow-sm">
              <p className="text-sm font-semibold text-stone-800">{skill}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="px-5 pb-24 pt-8 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#10261d] p-8 text-white shadow-2xl shadow-emerald-950/10 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200/75">Final Takeaway</p>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-emerald-50/85">
            This project demonstrates how AWS managed services can be combined to move relational database data into S3 and replicate new output files across regions. AWS DMS handled the database migration and CDC portion, while S3, SNS, SQS, and Lambda handled the event-driven file replication workflow.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-emerald-50/75">
            The final validation confirmed that source database data was migrated into S3, the DMS task reached load complete with replication ongoing, and new output files were copied into the target-region bucket.
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

export default AwsDmsS3CrossRegionReplicationCaseStudy;
