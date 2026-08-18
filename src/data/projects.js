const retailDataLakeCaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/retail-data-lake-system-design`;
const fraudDetectionCaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/real-time-fraud-detection-pipeline`;
const healthcareDataWarehouseCaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/healthcare-data-warehouse-modernization`;
const snowflakeScd1CaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/snowflake-scd1-customer-pipeline`;
const etlScd2CaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/etl-scd2-dbt-snowflake`;
const awsDmsS3CrossRegionReplicationCaseStudyUrl = `${import.meta.env.BASE_URL}case-studies/aws-dms-s3-cross-region-replication-pipeline`;

export const projectCategories = ["All", "Data Engineering", "Analytics Engineering", "Cloud + Infrastructure", "AI + Automation", "Apps + Tools"];

export const projects = [
  {
    title: "Baggage Claim SQL Lineage Tool",
    category: "Data Engineering",
    categories: ["Data Engineering", "Apps + Tools"],
    featured: false,
    summary:
      "Streamlit app that parses airline baggage-claims SQL and maps output columns back to source tables and columns for lineage and governance.",
    tags: ["Python", "Streamlit", "SQLGlot", "pandas", "SQL Lineage"],
    github: "https://github.com/jenniferarias414/python-automation-labs/tree/main/08_baggage_claim_sql_lineage_tool",
  },
  {
    title: "GlobalPartners Restaurant Analytics Pipeline",
    category: "Data Engineering",
    categories: ["Data Engineering", "Analytics Engineering", "Cloud + Infrastructure"],
    featured: true,
    summary:
      "End-to-end AWS pipeline that transforms SQL Server restaurant data through S3 medallion layers and AWS Glue, then serves validated Athena metrics in Streamlit.",
    tags: ["AWS", "SQL Server", "PySpark", "Athena", "Streamlit"],
    github: "https://github.com/jenniferarias414/globalpartners-business-analysis",
  },
  {
    title: "Wistia Video Analytics Pipeline",
    category: "Data Engineering",
    categories: ["Data Engineering", "Analytics Engineering", "Cloud + Infrastructure"],
    featured: true,
    summary:
      "Scheduled AWS pipeline that ingests Wistia video analytics, preserves raw API data in S3, transforms engagement events with Glue and PySpark, and exposes curated Athena tables for analysis.",
    tags: ["Video Analytics", "AWS", "Lambda", "EventBridge", "Glue", "PySpark", "S3", "Athena", "CI"],
    displayTags: ["Video Analytics"],
    github: "https://github.com/jenniferarias414/wistia-video-analytics-pipeline",
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
    title: "Real-Time Streaming Pipeline with AWS and Snowflake",
    category: "Data Engineering",
    categories: ["Data Engineering", "Cloud + Infrastructure", "Analytics Engineering"],
    featured: true,
    summary:
      "Learning project that validates API Gateway JSON events with Lambda, streams valid records through Kinesis and Firehose into S3, and loads them into Snowflake with Snowpipe.",
    tags: ["AWS", "Kinesis", "Lambda", "Snowflake", "Streaming"],
    github: "https://github.com/jenniferarias414/real-time-streaming-pipeline-aws-snowflake",
  },
  {
    title: "Snowflake SCD Type 1 Customer Pipeline",
    category: "Data Engineering",
    categories: ["Data Engineering", "Cloud + Infrastructure", "Analytics Engineering"],
    featured: true,
    summary:
      "Automated customer update pipeline that loads CSV files from S3 into Snowflake and applies SCD Type 1 logic to keep the CUSTOMER table current.",
    tags: ["Snowflake", "Snowpipe", "Streams", "Tasks", "SCD Type 1"],
    github: "https://github.com/jenniferarias414/snowflake-scd1-customer-pipeline",
    githubLabel: "GitHub",
    caseStudyUrl: snowflakeScd1CaseStudyUrl,
    caseStudyLabel: "Case Study",
  },
  // Note: the `image` property is included below for future use.
  // `ProjectCard.jsx` currently does not render images, so this
  // won't change the card UI. Add image support in the component
  // if you want thumbnails on cards later.
  {
    title: "ETL SCD Type 2 using dbt and Snowflake",
    category: "Data Engineering",
    categories: ["Data Engineering", "Analytics Engineering", "Cloud + Infrastructure"],
    featured: true,
    summary:
      "Product dimension pipeline that loads CSV files from S3 into Snowflake and uses dbt snapshots to preserve historical product changes.",
    tags: ["Snowflake", "dbt", "SCD Type 2", "Snapshots", "AWS S3"],
    github: "https://github.com/jenniferarias414/etl-scd2-dbt-snowflake",
    githubLabel: "GitHub",
    caseStudyUrl: etlScd2CaseStudyUrl,
    caseStudyLabel: "Case Study",
    image: "diagrams/etl-scd2-dbt-snowflake-architecture.png",
  },
  {
    title: "AWS DMS S3 Cross-Region Replication Pipeline",
    category: "Data Engineering",
    categories: ["Data Engineering", "Cloud + Infrastructure"],
    featured: true,
    summary:
      "AWS pipeline using DMS, S3 events, SQS, and Lambda to replicate MySQL data files across regions.",
    tags: ["AWS", "DMS", "S3", "Lambda", "CDC"],
    github: "https://github.com/jenniferarias414/aws-dms-s3-cross-region-replication",
    caseStudyUrl: awsDmsS3CrossRegionReplicationCaseStudyUrl,
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
