import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard.jsx";
import { projectCategories, projectMatchesCategory, projects } from "../data/projects.js";

function ProjectsPage() {
  const [active, setActive] = useState("All");
  const [peekProject, setPeekProject] = useState(null);
  const filtered = useMemo(
    () => projects.filter((project) => projectMatchesCategory(project, active)),
    [active],
  );

  useEffect(() => {
    if (filtered.length === 0) return undefined;

    const getPeekDelay = () => 45000 + Math.random() * 10000;

    const showPeek = () => {
      const edgeIndexes = [...new Set([0, Math.min(filtered.length - 1, 2), filtered.length - 1])];
      const edgeProject = filtered[edgeIndexes[Math.floor(Math.random() * edgeIndexes.length)]];
      setPeekProject(edgeProject.title);

      return window.setTimeout(() => {
        setPeekProject(null);
      }, 3000);
    };

    let hideTimer;
    let peekTimer;
    const resetTimer = window.setTimeout(() => {
      setPeekProject(null);
    }, 0);

    const schedulePeek = () => {
      peekTimer = window.setTimeout(() => {
        hideTimer = showPeek();
        peekTimer = window.setTimeout(schedulePeek, 2000);
      }, getPeekDelay());
    };

    schedulePeek();

    return () => {
      window.clearTimeout(resetTimer);
      window.clearTimeout(peekTimer);
      window.clearTimeout(hideTimer);
    };
  }, [filtered]);

  return (
    <main className="min-h-screen bg-[#f7f3ea] px-5 py-10 text-stone-950 md:px-8">
      <div className="mx-auto max-w-7xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:text-emerald-900">
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <section className="py-16">
          <div className="mx-auto mb-10 max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">Portfolio</p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">Project Library</h1>
            <p className="mt-4 text-base leading-7 text-stone-600">
              A fuller collection of data engineering, analytics, cloud, automation, and app-building projects.
            </p>
          </div>

          <div className="mx-auto mb-8 flex max-w-5xl flex-wrap justify-center gap-3">
            {projectCategories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => setActive(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.16, ease: "easeOut" }}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                  active === category
                    ? "border border-emerald-900 bg-emerald-900 text-white shadow-lg shadow-emerald-950/10"
                    : "border border-stone-300 bg-white/60 text-stone-700 hover:border-emerald-800 hover:bg-emerald-50/70 hover:text-emerald-900"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, index) => (
                <ProjectCard key={project.title} project={project} index={index} peekProject={peekProject} />
              ))}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </main>
  );
}

export default ProjectsPage;
