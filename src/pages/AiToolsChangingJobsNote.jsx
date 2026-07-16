import { ArrowLeft, ArrowUpRight, BookOpen, GitBranch } from "lucide-react";
import { Link } from "react-router-dom";

const githubUrl = "https://github.com/jenniferarias414";

function AiToolsChangingJobsNote() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] px-5 py-10 text-stone-950 md:px-8">
      <article className="mx-auto max-w-4xl">
        <Link to="/notes" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900 transition hover:text-stone-950">
          <ArrowLeft size={16} /> Back to Notes
        </Link>

        <header className="py-12">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-800 shadow-sm">
            <BookOpen size={14} /> Learning Note
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-6xl">
            AI Tools Are Changing Jobs — Not Ending Them
          </h1>
          <p className="mt-6 text-lg leading-8 text-stone-600 md:text-xl md:leading-9">
            My 2026 take on AI tools in the workflow as I see the enterprise evolve first-hand, what I’m automating today, and why I’m betting the future still needs a human who understands the problem behind the prompt.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-stone-400">
            <span>JUL 2026</span>
            <span>3 MIN READ</span>
          </div>
          <div className="mt-8">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-900 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-emerald-950/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-stone-950 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-2"
            >
              <GitBranch size={16} /> View Project Repo
            </a>
          </div>
        </header>

        <div className="rounded-[2rem] border border-stone-200 bg-white/80 p-6 shadow-xl shadow-stone-900/5 md:p-9">
          <div className="space-y-6 text-base leading-8 text-stone-700">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <footer className="flex flex-wrap items-center justify-between gap-4 py-10">
            <Link to="/notes" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:text-emerald-900">
              <ArrowLeft size={16} /> All notes
            </Link>
            <a href={githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-900">
              Project repo <ArrowUpRight size={15} />
            </a>
          </footer>
        </div>
      </article>
    </main>
  );
}

export default AiToolsChangingJobsNote;
