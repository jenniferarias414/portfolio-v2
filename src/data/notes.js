export const notes = [
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
];

export const recentNotes = notes.slice(0, 3);
