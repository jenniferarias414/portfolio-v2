const noteData = [
  {
    title: "How I’m Turning AWS/Snowflake Pipelines into a Reusable Playbook",
    date: "2026-06-01",
    dateLabel: "JUN 2026",
    readTime: "5 MIN READ",
    description:
      "A short note on capturing the common AWS, Snowflake, and dbt pipeline steps I keep rebuilding so the next project feels more planned and less weirdly accidental.",
    path: "#",
    featured: true,
  },
  {
    title: "What Finally Clicked Building a Real-Time Streaming Pipeline",
    date: "2026-05-27",
    dateLabel: "MAY 2026",
    readTime: "4 MIN READ",
    description:
      "How API Gateway, Lambda, Kinesis, Firehose, S3, Snowpipe, and Snowflake started making sense as one connected data flow.",
    path: `${import.meta.env.BASE_URL}notes/real-time-streaming-pipeline`,
    featured: true,
  },
  {
    title: "What I Learned Building a SQL Lineage Tool",
    date: "2026-04-01",
    dateLabel: "APR 2026",
    readTime: "4 MIN READ",
    description:
      "How SQL parsing, aliases, and column tracing helped me understand why lineage matters in data pipelines.",
    path: "#",
    featured: true,
  },
  {
    title: "What Terraform Finally Means to Me",
    date: "2026-05-01",
    dateLabel: "MAY 2026",
    readTime: "3 MIN READ",
    description:
      "A layman-friendly mental model for infrastructure as code, cloud resources, and why teams don’t just click around in AWS.",
    path: "#",
    featured: true,
  },
  {
    title: "Real-Time Fraud Detection as a Data Pipeline",
    date: "2026-05-01",
    dateLabel: "MAY 2026",
    readTime: "4 MIN READ",
    description:
      "How streaming ingestion, fraud scoring, queues, alerts, and audit logs fit together in a real-time data pipeline.",
    path: "#",
    featured: true,
  },
  {
    title: "AI Tools Are Changing Jobs — Not Ending Them",
    date: "2026-07-10",
    dateLabel: "JUL 2026",
    readTime: "3 MIN READ",
    description:
      "My 2026 take on AI tools in the workflow, what I’m automating today, and why I’m betting the future still needs a human who understands the problem behind the prompt.",
    path: "#",
    featured: true,
  },
];

const sortedNotes = [...noteData].sort((a, b) => b.date.localeCompare(a.date));

export const notes = sortedNotes;
export const recentNotes = sortedNotes.slice(0, 3);
