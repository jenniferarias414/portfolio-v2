import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { notes } from "../data/notes.js";

function NotesPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] px-5 py-10 text-stone-950 md:px-8">
      <div className="mx-auto max-w-6xl">
        <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-stone-600 transition-colors duration-200 hover:text-emerald-900">
          <ArrowLeft size={16} />
          Back to portfolio
        </Link>

        <section className="py-16">
          <div className="mb-10 max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-700">WRITING</p>
            <h1 className="text-4xl font-semibold tracking-tight text-stone-950 md:text-5xl">Notes From the Learning Curve</h1>
            <p className="mt-4 text-base leading-7 text-stone-600">
              Technical notes from projects I’m building, written the way I wish someone had explained them to me.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {notes.map((note) => (
              <motion.article
                key={note.title}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.18, ease: "easeOut" }}
                className="group rounded-3xl border border-stone-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-emerald-800/30 hover:shadow-xl hover:shadow-stone-900/8"
              >
                <BookOpen className="mb-4 text-emerald-800" />
                <h2 className="text-lg font-semibold text-stone-950">{note.title}</h2>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                  {note.dateLabel} · {note.readTime}
                </p>
                <p className="mt-3 text-sm leading-6 text-stone-600">{note.description}</p>
                <a href={note.path} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-emerald-900">
                  Read note <ArrowUpRight className="transition-transform duration-200 group-hover:translate-x-1" size={15} />
                </a>
              </motion.article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default NotesPage;
