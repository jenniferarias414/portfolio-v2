import { ArrowLeft, ArrowUpRight, CheckCircle2, GitBranch } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ImageLightbox from "../components/ImageLightbox.jsx";

const githubUrl = "https://github.com/jenniferarias414/etl-scd2-dbt-snowflake";
const imageBase = `${import.meta.env.BASE_URL}case-study-images/etl-scd2-dbt-snowflake/`;

const tags = ["Snowflake", "dbt", "SCD Type 2", "Snapshots", "AWS S3"];

const problemCards = [
  "Product attributes change over time",
  "Overwrites lose historical context",
  "Analysts need trusted version history",
];

const solutionCards = [
  { title: "Land files in S3", body: "Product CSV files are uploaded to the raw_data folder." },
  { title: "Transform with dbt", body: "A dbt macro loads Bronze data and a Silver model prepares product records." },
  { title: "Track history with snapshots", body: "A dbt snapshot detects changed product attributes and creates new versions." },
  { title: "Expose Gold view", body: "PRODUCT_VIEW presents version start and end dates for reporting and validation." },
];

const pipelineSteps = [
  "Local CSV files",
  "Python upload script",
  "Amazon S3 raw_data/ folder",
  "Snowflake external stage",
  "BRONZE.WORK_PRODUCT_COPY",
  "SILVER.WORK_PRODUCT_TRANSFORM",
  "SNAPSHOTS.PRODUCT_SNAPSHOT",
  "GOLD.PRODUCT_VIEW",
];

const architectureImage = "architecture-diagram.png";

const buildBullets = [
  "Uploaded Product_Dim.csv and Product_Dim_1.csv to S3",
  "Configured Snowflake stage, file format, and Bronze table",
  "Built dbt macro, Silver model, snapshot, and Gold view",
  "Validated that one changed product created historical and current versions",
];

const decisions = [
  "S3 landing zone for raw product files",
  "Snowflake external stage for warehouse access to S3",
  "Bronze/Silver/Gold layering to separate raw copy, transformation, and reporting",
  "dbt snapshot with check strategy because the source file does not provide a reliable updated_at timestamp",
  "Gold view to expose clearer version start/end dates for analysis",
];

const evidenceGroups = [
  {
    title: "Architecture & Stage Validation",
    description: "The architecture documents the product SCD Type 2 workflow and the S3/Snowflake connection used by the pipeline.",
    images: [
      { title: "Architecture Diagram", src: architectureImage },
      { title: "Snowflake Stage Validation", src: "snowflake-stage-validation.png" },
    ],
  },
  {
    title: "dbt Snapshot Execution",
    description: "dbt loaded the staged product file and created a snapshot table with tracked product history.",
    images: [
      { title: "dbt Snapshot Run", src: "dbt-snapshot-run-success.png" },
      { title: "Snapshot Table Validation", src: "snapshot-table-validation.png" },
    ],
  },
  {
    title: "SCD2 Versioning Validation",
    description: "The Gold view confirmed that product changes created historical and current versions for the same PRODUCT_ID.",
    images: [
      { title: "Gold View Validation", src: "gold-view-validation.png" },
      { title: "SCD Type 2 Versioning Validated", src: "scd2-versioning-validated.png" },
    ],
  },
];

const skills = [
  "Snowflake",
  "dbt",
  "dbt Snapshots",
  "SCD Type 2",
  "AWS S3",
  "AWS IAM",
  "Python",
  "boto3",
  "SQL",
  "Data Warehousing",
  "Dimensional Modeling",
  "Bronze/Silver/Gold Layers",
  "Historical Versioning",
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

function EtlScd2DbtSnowflakeCaseStudy() {
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
              <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">ETL SCD Type 2 using dbt and Snowflake</h1>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
                Historical product-dimension pipeline that loads product CSV files from S3 into Snowflake, transforms them with dbt, and uses dbt snapshots to preserve product change history.
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
                Product attributes such as model numbers, dimensions, categories, and prices can change over time. This project demonstrates how dbt snapshots can preserve historical product versions instead of overwriting old values, giving analysts a trusted Gold view of product history.
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
            Product dimension data changes over time as product details are corrected, enriched, or updated. If those changes are overwritten in place, the business loses visibility into what changed and when. Analysts may need to understand both the current product value and the historical version that existed before the update.
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

      <Section eyebrow="Solution" title="dbt Snapshot-Based SCD Type 2 Pipeline">
        <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
            <p className="text-lg font-semibold text-stone-950">Product CSV files land in S3, Snowflake reads them through an external stage, and dbt manages transformation plus historical versioning.</p>
            <p className="mt-4 text-base leading-8 text-stone-600">A dbt snapshot compares tracked product fields and creates a new version when selected attributes change.</p>
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
          <img src={`${imageBase}${architectureImage}`} alt="ETL SCD2 dbt Snowflake architecture diagram" className="w-full rounded-2xl object-contain" />
          <figcaption className="px-2 pb-2 pt-4 text-sm leading-6 text-stone-600">This diagram shows the SCD Type 2 product-dimension workflow. Product CSV files land in S3, Snowflake reads them through an external stage, dbt loads and transforms the data, and dbt snapshots preserve historical product versions that are exposed through a Gold view.</figcaption>
        </figure>
      </Section>

      <Section eyebrow="Build" title="What I Built">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-stone-200 bg-white/75 p-7 shadow-sm">
            <p className="text-lg font-semibold text-stone-950">The project simulates an initial product file followed by a changed product file.</p>
            <p className="mt-4 text-base leading-8 text-stone-600">The pipeline validates that dbt snapshots preserve historical versions while keeping the latest product record available through the Gold view.</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {buildBullets.map((b) => (
              <div key={b} className="flex min-h-28 items-center gap-4 rounded-2xl border border-stone-200 bg-white/70 p-5 shadow-sm">
                <span className="text-sm font-semibold leading-6 text-stone-800">{b}</span>
              </div>
            ))}
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
        <p className="-mt-3 mb-8 max-w-3xl text-base leading-7 text-stone-600">Screenshots are grouped by architecture, ingestion, dbt execution, and SCD Type 2 version validation. Click any screenshot to view it larger.</p>
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

      <Section eyebrow="Validation" title="Final Validation Results">
        <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white/75 shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[40rem] text-sm">
              <thead className="border-b border-stone-200 bg-stone-50 text-stone-900">
                <tr>
                  <th className="px-5 py-4 text-left font-semibold">Validation Step</th>
                  <th className="px-5 py-4 text-left font-semibold">Expected Result</th>
                  <th className="px-5 py-4 text-left font-semibold">Outcome</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-200 text-stone-700">
                {[
                  ["Initial product file uploaded", "Product_Dim.csv in S3", "Passed"],
                  ["Snowflake stage validation", "Product file visible from stage", "Passed"],
                  ["dbt Silver transform", "WORK_PRODUCT_TRANSFORM created", "Passed"],
                  ["dbt snapshot", "PRODUCT_SNAPSHOT created with dbt validity columns", "Passed"],
                  ["Gold view", "PRODUCT_VIEW created", "Passed"],
                  ["Changed product file uploaded", "Product_Dim_1.csv in S3", "Passed"],
                  ["SCD2 versioning", "Same PRODUCT_ID has historical and current versions", "Passed"],
                ].map((row) => (
                  <tr key={row[0]} className={row[0] === "SCD2 versioning" ? "bg-emerald-50/60" : undefined}>
                    <td className="px-5 py-4 align-top">{row[0]}</td>
                    <td className="px-5 py-4 align-top">{row[1]}</td>
                    <td className="px-5 py-4 align-top font-semibold text-emerald-800">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-5 py-6">
            <p className="text-sm leading-6 text-stone-600">The final validation confirmed that the pipeline applied SCD Type 2 behavior correctly. The changed product record created a new current version while preserving the prior version with an end timestamp.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Skills" title="Skills Demonstrated">
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span key={skill} className="rounded-full border border-stone-200 bg-white/75 px-4 py-2 text-sm font-semibold text-stone-700 shadow-sm">{skill}</span>
          ))}
        </div>
      </Section>

      <section className="px-5 pb-24 pt-8 md:px-8">
        <div className="mx-auto max-w-6xl rounded-[2rem] bg-[#10261d] p-8 text-white shadow-2xl shadow-emerald-950/10 md:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-200/75">Final Takeaway</p>
          <p className="mt-5 max-w-4xl text-xl leading-9 text-emerald-50/85">This project demonstrates how dbt snapshots can preserve product history in Snowflake. Instead of overwriting changed product attributes, the pipeline retains the prior version, creates a new current version, and exposes both through a Gold product history view.</p>
          <p className="mt-4 max-w-4xl text-base leading-8 text-emerald-50/75">The final validation confirmed the same PRODUCT_ID had both a historical row and a current row after the changed product file was processed.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-emerald-950 transition hover:bg-emerald-50">View GitHub Repo <ArrowUpRight size={16} /></a>
            <Link to="/#projects" className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-emerald-200/50 hover:bg-white/10">Back to Projects</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EtlScd2DbtSnowflakeCaseStudy;
