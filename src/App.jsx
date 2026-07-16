import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import FraudDetectionCaseStudy from "./pages/FraudDetectionCaseStudy.jsx";
import HealthcareDataWarehouseCaseStudy from "./pages/HealthcareDataWarehouseCaseStudy.jsx";
import Home from "./pages/Home.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import RealTimeStreamingPipelineNote from "./pages/RealTimeStreamingPipelineNote.jsx";
import AiToolsChangingJobsNote from "./pages/AiToolsChangingJobsNote.jsx";
import RetailDataLakeCaseStudy from "./pages/RetailDataLakeCaseStudy.jsx";

const SnowflakeScd1CustomerPipelineCaseStudy = lazy(() => import("./pages/SnowflakeScd1CustomerPipelineCaseStudy.jsx"));
const EtlScd2DbtSnowflakeCaseStudy = lazy(() => import("./pages/EtlScd2DbtSnowflakeCaseStudy.jsx"));
const AwsDmsS3CrossRegionReplicationCaseStudy = lazy(() => import("./pages/AwsDmsS3CrossRegionReplicationCaseStudy.jsx"));

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "");

function ScrollToTop() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [hash, pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/notes/real-time-streaming-pipeline" element={<RealTimeStreamingPipelineNote />} />
        <Route path="/notes/ai-tools-changing-jobs" element={<AiToolsChangingJobsNote />} />
        <Route path="/case-studies/retail-data-lake-system-design" element={<RetailDataLakeCaseStudy />} />
        <Route path="/case-studies/real-time-fraud-detection-pipeline" element={<FraudDetectionCaseStudy />} />
        <Route path="/case-studies/healthcare-data-warehouse-modernization" element={<HealthcareDataWarehouseCaseStudy />} />
        <Route
          path="/case-studies/snowflake-scd1-customer-pipeline"
          element={
            <Suspense fallback={<main className="min-h-screen bg-[#f7f3ea]" />}>
              <SnowflakeScd1CustomerPipelineCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/case-studies/etl-scd2-dbt-snowflake"
          element={
            <Suspense fallback={<main className="min-h-screen bg-[#f7f3ea]" />}>
              <EtlScd2DbtSnowflakeCaseStudy />
            </Suspense>
          }
        />
        <Route
          path="/case-studies/aws-dms-s3-cross-region-replication-pipeline"
          element={
            <Suspense fallback={<main className="min-h-screen bg-[#f7f3ea]" />}>
              <AwsDmsS3CrossRegionReplicationCaseStudy />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
