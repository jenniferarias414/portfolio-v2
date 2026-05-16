import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import FraudDetectionCaseStudy from "./pages/FraudDetectionCaseStudy.jsx";
import Home from "./pages/Home.jsx";
import NotesPage from "./pages/NotesPage.jsx";
import RetailDataLakeCaseStudy from "./pages/RetailDataLakeCaseStudy.jsx";

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
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/case-studies/retail-data-lake-system-design" element={<RetailDataLakeCaseStudy />} />
        <Route path="/case-studies/real-time-fraud-detection-pipeline" element={<FraudDetectionCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
