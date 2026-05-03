import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import RetailDataLakeCaseStudy from "./pages/RetailDataLakeCaseStudy.jsx";

const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "");

function App() {
  return (
    <BrowserRouter basename={routerBasename}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/case-studies/retail-data-lake-system-design" element={<RetailDataLakeCaseStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
