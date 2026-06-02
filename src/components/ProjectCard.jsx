import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const toPortfolioRoute = (url) => `/${url.replace(import.meta.env.BASE_URL, "")}`;

function ProjectCard({ project, index = 0, peekProject }) {
  return (
    <motion.article
      layout
      key={project.title}
      initial={{ opacity: 0, y: 4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.08, delay: index * 0.005, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 ease-out hover:border-emerald-800/30 hover:shadow-xl hover:shadow-stone-900/8"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-800 via-sage-500 to-stone-300" />
      <AnimatePresence>
        {peekProject === project.title && (
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0, x: 18, rotate: 4 }}
            animate={{ opacity: 0.92, x: 0, rotate: 0 }}
            exit={{ opacity: 0, x: 18, rotate: 3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute -right-3 top-24 z-0 hidden h-6 w-6 rounded-full border border-stone-900/10 bg-[#b9a17c] shadow-[0_2px_6px_rgba(87,75,58,0.10)] md:block"
          >
            <span className="absolute -left-px top-px h-2 w-2 -rotate-12 rounded-sm bg-[#8d7656]" />
            <span className="absolute right-0.5 top-px h-2 w-2 rotate-12 rounded-sm bg-[#8d7656]" />
            <span className="absolute left-1.5 top-2.5 h-1 w-0.5 rounded-full bg-stone-800 [animation:blink_1.4s_ease-in-out_0.75s_1]" />
            <span className="absolute right-1.5 top-2.5 h-1 w-0.5 rounded-full bg-stone-800 [animation:blink_1.4s_ease-in-out_0.75s_1]" />
            <span className="absolute left-1/2 top-[0.9rem] h-0.5 w-0.5 -translate-x-1/2 rounded-full bg-stone-700" />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
          {project.category}
        </span>
        <Sparkles className="text-stone-300 transition-all duration-200 ease-out group-hover:rotate-6 group-hover:text-emerald-700 group-hover:opacity-90" size={20} />
      </div>
      <h3 className="text-xl font-semibold tracking-tight text-stone-950">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600">{project.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-xs font-medium text-stone-600">
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-3 pt-6">
        {project.caseStudyUrl?.startsWith("http") ? (
          <a href={project.caseStudyUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-emerald-900/20 bg-emerald-900 px-3 py-1 text-sm font-semibold leading-5 text-white shadow-[0_2px_6px_rgba(6,78,59,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-950 hover:shadow-sm hover:shadow-stone-900/10">
            {project.caseStudyLabel ?? "Case Study"} <ArrowUpRight size={14} />
          </a>
        ) : project.caseStudyUrl ? (
          <Link to={toPortfolioRoute(project.caseStudyUrl)} className="inline-flex items-center gap-1.5 rounded-full border border-emerald-900/20 bg-emerald-900 px-3 py-1 text-sm font-semibold leading-5 text-white shadow-[0_2px_6px_rgba(6,78,59,0.10)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-950 hover:shadow-sm hover:shadow-stone-900/10">
            {project.caseStudyLabel ?? "Case Study"} <ArrowUpRight size={14} />
          </Link>
        ) : null}
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-1 py-2 text-sm font-semibold text-stone-500 transition-colors duration-200 hover:text-emerald-900">
          {project.githubLabel ?? "GitHub"} <ArrowUpRight size={15} />
        </a>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
