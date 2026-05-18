const retailDataLakeCaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/retail-data-lake-system-design`;
const fraudDetectionCaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/real-time-fraud-detection-pipeline`;
const healthcareDataWarehouseCaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/healthcare-data-warehouse-modernization`;

export const projectCategories = ["All", "Data Engineering", "Analytics Engineering", "Cloud + Infrastructure", "AI + Automation", "Apps + Tools"];

export const projects = [
  {
    title: "Baggage Claim SQL Lineage Tool",
    category: "Data Engineering",
    categories: ["Data Engineering", "Apps + Tools"],
    featured: true,
    summary:
      "Streamlit app that parses airline baggage-claims SQL and maps output columns back to source tables and columns for lineage and governance.",
    tags: ["Python", "Streamlit", "SQLGlot", "pandas", "SQL Lineage"],
    github: "https://github.com/jenniferarias414/python-automation-labs/tree/main/08_baggage_claim_sql_lineage_tool",
  },
  {
    title: "Retail Data Lake System Design",
    category: "Data Engineering",
    categories: ["Data Engineering", "Cloud + Infrastructure"],
    featured: true,
    summary:
      "AWS data lake case study with Terraform, S3, Lambda validation, curated/error routing, and CloudWatch logging.",
    tags: ["AWS", "Terraform", "Lambda", "Data Lake", "System Design"],
    github: "https://github.com/jenniferarias414/retail-data-lake-system-design/tree/main",
    caseStudyUrl: retailDataLakeCaseStudyUrl,
  },
  {
    title: "Real-Time Fraud Detection Pipeline",
    category: "Data Engineering",
    categories: ["Data Engineering", "Cloud + Infrastructure"],
    featured: true,
    summary:
      "AWS system design case study for real-time fraud scoring, event-driven alerts, audit lineage, and governed data lake storage.",
    tags: ["AWS", "System Design", "Streaming", "Fraud Detection", "Data Pipeline"],
    github: "https://github.com/jenniferarias414/real-time-fraud-detection-pipeline",
    caseStudyUrl: fraudDetectionCaseStudyUrl,
  },
  {
    title: "Healthcare Data Warehouse Modernization",
    category: "Data Engineering",
    categories: ["Data Engineering", "Cloud + Infrastructure"],
    featured: true,
    summary:
      "AWS and Snowflake system design case study for modernizing a legacy healthcare warehouse with ELT pipelines, data quality checks, PHI governance, and self-service analytics.",
    tags: ["AWS", "Snowflake", "System Design", "Data Warehouse", "Healthcare"],
    github: "https://github.com/jenniferarias414/healthcare-warehouse-modernization",
    caseStudyUrl: healthcareDataWarehouseCaseStudyUrl,
  },
  {
    title: "Terraform Static Site Mini Project",
    category: "Cloud + Infrastructure",
    categories: ["Cloud + Infrastructure", "Apps + Tools"],
    featured: true,
    summary:
      "Infrastructure as Code mini-project using Terraform to define an AWS S3 static website hosting setup and practice the plan, apply, validate, and destroy workflow.",
    tags: ["Terraform", "AWS", "S3", "IaC", "Cloud"],
    github: "https://github.com/jenniferarias414/terraform-static-site-mini-project",
  },
  {
    title: "Python Automation Labs",
    category: "AI + Automation",
    featured: false,
    summary:
      "Collection of Python automation projects covering files, regex, Excel reports, JSON conversion, scheduling, email alerts, and web scraping.",
    tags: ["Python", "Automation", "ETL", "SMTP", "Web Scraping"],
    github: "https://github.com/jenniferarias414/python-automation-labs/tree/main",
  },
  {
    title: "dbt Data Projects",
    category: "Analytics Engineering",
    featured: true,
    summary:
      "Analytics engineering projects focused on transforming raw data into modeled, tested, analytics-ready datasets.",
    tags: ["dbt", "SQL", "Data Modeling", "Testing"],
    github: "https://github.com/jenniferarias414/dbt-data-projects",
  },
  {
    title: "Delta Lake Fundamentals Lab",
    category: "Data Engineering",
    featured: true,
    summary:
      "Databricks project demonstrating Delta Lake versioning, time travel, schema evolution, and merge operations.",
    tags: ["Databricks", "Delta Lake", "PySpark", "Lakehouse"],
    github: "https://github.com/jenniferarias414/delta-lake-fundamentals-lab",
  },
  {
    title: "Databricks Customer Analysis",
    category: "Analytics Engineering",
    featured: false,
    summary:
      "PySpark analysis project using joins, aggregations, and ranking logic to analyze customer transaction data.",
    tags: ["PySpark", "Databricks", "Analytics", "SQL"],
    github: "https://github.com/jenniferarias414/databricks-pyspark-customer-analysis",
  },
  {
    title: "Bookstore Web Data Pipeline",
    category: "Apps + Tools",
    featured: false,
    summary:
      "Python web ingestion project that scrapes a practice website, parses HTML with XPath, and exports structured CSV/report outputs.",
    tags: ["requests", "lxml", "pandas", "XPath", "ETL"],
    github: "https://github.com/jenniferarias414/python-automation-labs/tree/main/09_bookstore_web_data_pipeline",
  },
];

export const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

export function projectMatchesCategory(project, category) {
  return category === "All" || project.category === category || project.categories?.includes(category);
}
