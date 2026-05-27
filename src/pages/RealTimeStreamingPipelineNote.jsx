import { ArrowLeft, ArrowUpRight, BookOpen, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

const githubUrl = "https://github.com/jenniferarias414/real-time-streaming-pipeline-aws-snowflake";

const tools = [
  "API Gateway",
  "Lambda",
  "Kinesis Data Streams",
  "Firehose",
  "S3",
  "Snowpipe",
  "Snowflake",
  "Postman",
  "IAM roles and permissions",
];

const happyPath = [
  "Postman sends a JSON event",
  "API Gateway receives the request",
  "Lambda validates the data",
  "Valid records go to Kinesis",
  "Firehose delivers them to S3",
  "Snowpipe loads them into Snowflake",
  "Snowflake makes the data queryable",
];

const errorPath = [
  "Postman sends bad data",
  "API Gateway receives the request",
  "Lambda catches the issue",
  "The bad record is written to an S3 error bucket",
];

const responsibilities = [
  ["API Gateway", "the front door"],
  ["Lambda", "the checkpoint"],
  ["Kinesis", "the stream"],
  ["Firehose", "the delivery service"],
  ["S3", "the landing zone"],
  ["Snowpipe", "the bridge into Snowflake"],
  ["Snowflake", "where the event becomes queryable data"],
];

const questions = [
  "Where does the data come from?",
  "What shape is it in?",
  "What validates it?",
  "Where does good data go?",
  "Where does bad data go?",
  "How is it stored?",
  "How is it loaded?",
  "How is it queried?",
  "How would someone monitor or troubleshoot it?",
];

const permissionHandoffs = [
  "API Gateway needed permission to invoke Lambda.",
  "Lambda needed permission to write to Kinesis and S3.",
  "Firehose needed permission to deliver records to S3.",
  "Snowflake needed permission to read from the S3 raw folder.",
  "S3 needed an event notification to tell Snowpipe when new files arrived.",
];

const snowflakeFlow = [
  "New file lands in S3",
  "S3 sends an event notification",
  "Snowpipe is notified",
  "Snowflake loads the data",
  "The event becomes queryable",
];

function NoteSection({ title, children }) {
  return (
    <section className="border-t border-stone-200 pt-9">
      <h2 className="text-2xl font-semibold tracking-tight text-stone-950">{title}</h2>
      <div className="mt-4 space-y-5 text-base leading-8 text-stone-700">{children}</div>
    </section>
  );
}

function FlowList({ items }) {
  return (
    <ol className="space-y-3">
      {items.map((item, index) => (
        <li key={item} className="flex gap-3 text-sm leading-6 text-stone-700">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-900 text-xs font-semibold text-white">
            {index + 1}
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ol>
  );
}

function RealTimeStreamingPipelineNote() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] px-5 py-10 text-stone-950 md:px-8">
      <article className="mx-auto max-w-4xl">
        <Link to="/#notes" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition hover:text-stone-950">
          <ArrowLeft size={16} /> Back to Notes
        </Link>

        <header className="py-12">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
            <BookOpen size={14} /> Learning Note
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
            What Finally Clicked Building a Real-Time Streaming Pipeline
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
            How API Gateway, Lambda, Kinesis, Firehose, S3, Snowpipe, and Snowflake started making sense as one connected data flow.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
            <span>MAY 2026</span>
            <span>4 MIN READ</span>
          </div>
          <div className="mt-8">
            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-950/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-950 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2">
              <GitBranch size={16} /> View Project Repo
            </a>
          </div>
        </header>

        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-xl shadow-stone-900/5 md:p-9">
          <div className="space-y-6 text-base leading-8 text-stone-700">
            <p>
              I recently completed a guided real-time streaming project using AWS and Snowflake as part of my data engineering studies.
            </p>
            <p>
              This one stretched me because it brought together a lot of services that are easy to hear about separately, but harder to understand as one connected system.
            </p>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span key={tool} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-semibold text-stone-700">
                  {tool}
                </span>
              ))}
            </div>
            <p>
              The real learning happened when I stopped seeing them as random AWS and Snowflake vocabulary words and started seeing them as a chain of responsibilities.
            </p>
          </div>

          <section className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-emerald-900/10 bg-emerald-50/60 p-5">
              <h2 className="text-lg font-semibold text-stone-950">The Main Flow</h2>
              <div className="mt-4">
                <FlowList items={happyPath} />
              </div>
            </div>
            <div className="rounded-3xl border border-stone-200 bg-white p-5">
              <h2 className="text-lg font-semibold text-stone-950">The Invalid Path</h2>
              <div className="mt-4">
                <FlowList items={errorPath} />
              </div>
            </div>
          </section>

          <div className="mt-11 space-y-11">
            <NoteSection title="What Finally Clicked">
              <p>
                A streaming pipeline is not just one tool. It is a set of services, each doing a specific job.
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {responsibilities.map(([service, role]) => (
                  <div key={service} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                    <p className="text-sm font-semibold text-stone-950">{service}</p>
                    <p className="mt-1 text-sm leading-6 text-stone-600">is {role}.</p>
                  </div>
                ))}
              </div>
              <p>
                The project stopped feeling like a pile of cloud acronyms and started feeling more like a relay race. Each service had one job, and the data was the baton.
              </p>
              <p>
                Once I started thinking about the architecture this way, the diagram felt less like a cloud services lineup and more like a data story I could actually follow.
              </p>
            </NoteSection>

            <NoteSection title="Why Postman Mattered">
              <p>
                I had used Postman during my first web development bootcamp, but it had been long enough that opening it again felt a little foreign.
              </p>
              <p>
                The interface had changed, and now AI is built into the experience in a way I did not remember from before. That actually helped. Instead of losing momentum trying to remember every click, I could use the tool and its AI help to get unstuck faster and focus on what I was really trying to prove: could I send a JSON event into my AWS pipeline and watch it move?
              </p>
              <p>
                Testing with Postman proved the AWS side worked before Snowflake was involved: Postman to API Gateway, Lambda, Kinesis, Firehose, and S3. Then Snowpipe completed the final step into Snowflake.
              </p>
              <p>
                That felt encouraging because the tooling has changed a lot, and AI can help me stay productive while I am still building fluency with the workflow itself.
              </p>
            </NoteSection>

            <NoteSection title="The Part That Felt Like a Real Cloud Project">
              <p>
                This is the kind of project where the work is not only "write the code." A lot of the work is wiring: permissions, roles, integrations, event notifications, and making sure each service knows what it is allowed to do.
              </p>
              <ul className="space-y-3">
                {permissionHandoffs.map((item) => (
                  <li key={item} className="rounded-2xl border border-stone-200 bg-stone-50 px-4 py-3 text-sm leading-6 text-stone-700">
                    {item}
                  </li>
                ))}
              </ul>
              <p>
                That was pretty mind-blowing because so much of cloud engineering is not just building one thing. It is making sure separate services can securely talk to each other without opening the doors too wide.
              </p>
            </NoteSection>

            <NoteSection title="The Snowflake Part">
              <p>
                The Snowflake piece was probably the most surprising part for me. Snowflake is not inside AWS, but it still needed a secure way to read files from my S3 bucket.
              </p>
              <p>
                That meant creating a Snowflake storage integration, updating an AWS IAM trust policy with Snowflake's IAM user ARN and external ID, creating a stage, creating a Snowpipe, and then wiring an S3 event notification to the Snowpipe notification channel.
              </p>
              <p>That sounds like a lot because it is a lot. But once it worked, the concept finally made sense:</p>
              <div className="rounded-3xl border border-emerald-900/10 bg-emerald-50/60 p-5">
                <FlowList items={snowflakeFlow} />
              </div>
              <p>
                This is the kind of thing that used to feel like magic until I could finally see the handoffs.
              </p>
            </NoteSection>

            <NoteSection title="What I Learned About Error Handling">
              <p>
                The happy path is only half the story. This project also routed bad records into an S3 error bucket when the Id field was blank or missing.
              </p>
              <p>
                In data work, messy records are not an exception; they are part of the job. A pipeline needs a place for bad data to go so it can be reviewed without breaking the main flow.
              </p>
              <p>
                That part felt practical to me. It is one thing to say, "the data streams into Snowflake." It is another thing to ask, "what happens when the data is wrong?"
              </p>
            </NoteSection>

            <NoteSection title="What I Am Taking Away">
              <p>
                A lot of my current learning is about exposure, building mental models, and connecting terminology to real workflows.
              </p>
              <p>These are the questions I kept coming back to:</p>
              <ul className="grid gap-2 sm:grid-cols-2">
                {questions.map((question) => (
                  <li key={question} className="rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm leading-6 text-stone-700">
                    {question}
                  </li>
                ))}
              </ul>
              <p>
                This project was not just about clicking through AWS services. It was about understanding the handoffs: who receives the data, who validates it, who delivers it, who stores it, who loads it, and who makes it useful. That is the part I want to remember.
              </p>
            </NoteSection>
          </div>
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 py-10">
          <Link to="/notes" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:text-emerald-900">
            <ArrowLeft size={16} /> All notes
          </Link>
          <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900">
            Project repo <ArrowUpRight size={15} />
          </a>
        </footer>
      </article>
    </main>
  );
}

export default RealTimeStreamingPipelineNote;
