import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox.jsx";

const githubUrl = "https://github.com/jenniferarias414/snowflake-scd1-customer-pipeline";
const imageBase = `${import.meta.env.BASE_URL}case-study-images/snowflake-scd1/`;

const tags = ["Snowflake", "Snowpipe", "Streams", "Tasks", "SCD Type 1"];

const painPoints = [
  "Manual CSV loads are slow and error-prone",
  "Customer records can become stale",
  "Updates and inserts need to be handled consistently",
  "Reporting should use a current-state CUSTOMER table",
  "The process should run automatically after files land in cloud storage",
];

const solutionSteps = [
  { title: "Upload files to S3", description: "Customer full-load and change-data CSV files are placed in the S3 landing folder." },
  { title: "Auto-ingest with Snowpipe", description: "Snowpipe loads newly arrived files into CUSTOMER_SOURCE." },
  { title: "Track new rows", description: "CUSTOMER_STREAM captures newly loaded rows for downstream processing." },
  { title: "Run only when needed", description: "CUSTOMER_TASK triggers processing only when the stream contains data." },
  { title: "Apply SCD Type 1 logic", description: "CUSTOMER_SP updates existing customers and inserts new ones with a SQL MERGE." },
  { title: "Maintain the target table", description: "CUSTOMER remains a current-state customer table for reporting and analysis." },
];

const pipelineFlow = [
  "Local CSV files",
  "Python upload script",
  "Amazon S3 data/ folder",
  "Snowflake external stage",
  "Snowpipe",
  "CUSTOMER_SOURCE",
  "CUSTOMER_STREAM",
  "CUSTOMER_TASK",
  "CUSTOMER_SP",
  "CUSTOMER",
];

const buildSteps = [
  "Created an S3 landing location for customer CSV files",
  "Wrote a Python boto3 script to upload full and change files to S3",
  "Configured Snowflake storage integration and external stage",
  "Created Snowpipe with auto-ingest from S3",
  "Created CUSTOMER_SOURCE and CUSTOMER target tables",
  "Created CUSTOMER_STREAM to track newly loaded source rows",
  "Created CUSTOMER_SP stored procedure with SCD Type 1 MERGE logic",
  "Created CUSTOMER_TASK to run the procedure when stream data exists",
  "Validated full-load and change-load behavior with row counts and record checks",
];

const decisions = [
  "S3 as the landing zone so files have a durable cloud handoff point before Snowflake ingestion",
  "Snowpipe for automated file ingestion instead of manual COPY INTO commands",
  "Streams to process newly loaded rows instead of manually scanning the full source table every time",
  "Task scheduling with SYSTEM$STREAM_HAS_DATA so processing only runs when there is new data",
  "Stored Procedure to centralize the SCD Type 1 merge process",
  "SQL MERGE to update matching customers and insert new customers",
  "SCD Type 1 because the requirement was to keep only the latest customer values, not historical versions",
  "Local AWS CLI profile for Python credentials instead of hardcoding access keys in code",
];

const evidenceGroups = [
  {
    title: "Architecture & Setup",
    description: "The architecture documents the automated SCD Type 1 workflow and the S3/Snowflake connection used by the pipeline.",
    images: [
      { title: "Architecture Diagram", src: "architecture-diagram.png" },
      { title: "Snowflake Stage Validation", src: "snowflake-stage-validation.png" },
      { title: "Snowpipe Created and Running", src: "snowpipe-running.png" },
    ],
  },
  {
    title: "Full Load Validation",
    description: "The full customer CSV file was uploaded to S3 and processed through Snowpipe, Stream, Task, and Stored Procedure logic. The CUSTOMER table loaded 80 records.",
    images: [
      { title: "Python Full File Upload", src: "python-full-file-upload.png" },
      { title: "Full Load: 80 Records", src: "full-load-80-records.png" },
    ],
  },
  {
    title: "SCD Type 1 Change Validation",
    description: "The change file updated existing customer records and inserted one new customer. The final CUSTOMER table count increased from 80 to 81, confirming that existing rows were overwritten while the new customer was inserted.",
    images: [
      { title: "Change Load: 81 Records", src: "change-load-81-records.png" },
      { title: "SCD Type 1 Updates Validated", src: "scd1-change-validation.png" },
    ],
  },
];

const validationResults = [
  ["Full customer load", "80 records", "Passed"],
  ["Change-data load", "81 records", "Passed"],
  ["Elizabeth Yu", "Phone updated", "Passed"],
  ["Kyung Benitez", "City updated", "Passed"],
  ["John Wick", "New customer inserted", "Passed"],
];

const skills = [
  "Snowflake",
  "Snowpipe",
  "Snowflake Streams",
  "Snowflake Tasks",
  "Stored Procedures",
  "SQL MERGE",
  "SCD Type 1",
  "AWS S3",
  "AWS IAM",
  "Python",
  "boto3",
  "Data Warehousing",
  "Automated Ingestion",
  "Customer Dimension Modeling",
  "Pipeline Validation",
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

function SnowflakeScd1CustomerPipelineCaseStudy() {
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
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
                Snowflake SCD Type 1 Customer Pipeline
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
                Automated Snowflake customer-dimension pipeline for processing full-load and change-data files, keeping the CUSTOMER table current with SCD Type 1 update/insert logic.
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
                This project demonstrates a Snowflake-native workflow for customer data updates: CSV files land in S3, Snowpipe loads them into Snowflake, Streams track new rows, and a Task-triggered Stored Procedure keeps the customer dimension current.
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
            Customer profile data changes over time. Phone numbers, addresses, cities, and account details can be updated after the original customer record is created.
          </p>
          <p className="mt-4 text-lg leading-9 text-stone-700">
            If those updates are handled manually, reporting tables can become stale, inconsistent, or incomplete. Analysts and downstream reports need one trusted CUSTOMER table that reflects the latest known customer values.
          </p>
          <p className="mt-4 text-lg leading-9 text-stone-700">
            The business requirement for this scenario is SCD Type 1 behavior: when customer attributes change, overwrite the old values with the newest values instead of preserving history.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((item, index) => (
            <div key={item} className="flex min-h-28 gap-4 rounded-2xl border border-stone-200 bg-white/65 p-5 shadow-sm">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-stone-300 bg-stone-100 text-xs font-semibold text-stone-500">
                {index + 1}
              </span>
              <p className="text-sm leading-6 text-stone-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Solution" title="Snowflake-Native SCD Type 1 Pipeline">
        <div className="max-w-4xl rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
          <p className="text-lg leading-9 text-stone-700">
            Customer files land in Amazon S3 and are processed through Snowflake-native automation. Snowpipe loads new files into a source table, a Stream tracks new rows, and a Task calls a Stored Procedure to apply SCD Type 1 logic. The result is a current-state CUSTOMER table with the latest customer values.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutionSteps.map((step) => (
            <div key={step.title} className="rounded-2xl border border-stone-200 bg-white/70 p-5 shadow-sm">
              <p className="text-sm font-semibold text-stone-900">{step.title}</p>
              <p className="mt-2 text-sm leading-6 text-stone-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-semibold tracking-tight text-stone-950">Pipeline Flow</h3>
          <div className="mt-4 flex flex-wrap items-center gap-2 rounded-3xl border border-stone-200 bg-white/75 p-5 shadow-sm">
            {pipelineFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-2">
                <span className="rounded-full border border-emerald-900/10 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-900">
                  {step}
                </span>
                {index < pipelineFlow.length - 1 && <span className="text-sm font-semibold text-stone-400">→</span>}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Architecture" title="Architecture Diagram">
        <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-white p-4 shadow-xl shadow-stone-900/5">
          <img src={`${imageBase}architecture-diagram.png`} alt="Snowflake SCD Type 1 customer pipeline architecture diagram" className="w-full rounded-2xl object-contain" />
          <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-stone-600">
            This diagram shows the automated file-to-dimension workflow. Customer CSV files land in S3, Snowpipe loads them into Snowflake, Streams track newly loaded rows, and a Task-triggered Stored Procedure applies SCD Type 1 merge logic into the CUSTOMER target table.
          </figcaption>
        </figure>
      </Section>

      <Section eyebrow="Build" title="What I Built">
        <div className="rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
          <p className="text-lg font-semibold text-stone-950">
            customer_full_data.csv / customer_change_data.csv → S3 upload → Snowpipe ingestion → Stream change capture → Task-triggered stored procedure → CUSTOMER merge result
          </p>
          <p className="mt-4 text-base leading-8 text-stone-600">
            The project simulates a customer-dimension update workflow using a full customer file followed by a change-data file. The pipeline validates that initial records load successfully, existing customer records are overwritten when changes arrive, and new customer records are inserted.
          </p>
        </div>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {buildSteps.map((item) => (
            <div key={item} className="flex gap-3 rounded-2xl border border-stone-200 bg-white/70 p-5 shadow-sm">
              <CheckCircle2 className="mt-0.5 shrink-0 text-emerald-800" size={18} />
              <p className="text-sm leading-6 text-stone-700">{item}</p>
            </div>
          ))}
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
          Screenshots are grouped by architecture, ingestion, automation, and SCD Type 1 validation. Click any screenshot to view it larger.
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
                      <span className="flex h-72 items-center justify-center overflow-hidden rounded-2xl bg-stone-100 p-3">
                        <img src={fullSrc} alt={image.title} className="max-h-full w-full object-contain object-center transition duration-300 group-hover:brightness-105" />
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

      <Section eyebrow="Validation" title="Final Validation Results">
        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white/75 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[38rem] text-left text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-stone-900">
                <tr>
                  <th className="px-5 py-4 font-semibold">Validation Step</th>
                  <th className="px-5 py-4 font-semibold">Expected Result</th>
                  <th className="px-5 py-4 font-semibold">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                {validationResults.map(([step, expected, outcome]) => (
                  <tr key={step}>
                    <td className="px-5 py-4">{step}</td>
                    <td className="px-5 py-4">{expected}</td>
                    <td className="px-5 py-4 font-semibold text-emerald-800">{outcome}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <p className="mt-5 max-w-4xl text-base leading-8 text-stone-600">
          The final result confirmed that the pipeline applied SCD Type 1 behavior correctly: existing customer records were updated, new customer records were inserted, old values were overwritten, and the final CUSTOMER table reflected the latest known customer values.
        </p>
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
            This project demonstrates how to turn a common customer-data problem into an automated Snowflake-native pipeline. Instead of manually loading files and updating customer records, the workflow uses S3, Snowpipe, Streams, Tasks, and a Stored Procedure to keep the CUSTOMER table current.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-emerald-50/75">
            The final validation showed the full file loading 80 records and the change file producing 81 final records, with existing customer values overwritten and a new customer inserted. This confirms the SCD Type 1 pattern: latest values only, no history retained.
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

export default SnowflakeScd1CustomerPipelineCaseStudy;
