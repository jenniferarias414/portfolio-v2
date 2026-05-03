import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

function ImageLightbox({ image, onClose, onNext, onPrevious, hasMultiple = false }) {
  useEffect(() => {
    if (!image) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && hasMultiple) onNext();
      if (event.key === "ArrowLeft" && hasMultiple) onPrevious();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [hasMultiple, image, onClose, onNext, onPrevious]);

  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-stone-950/85 px-4 py-6 backdrop-blur-sm"
      onMouseDown={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.title}
    >
      <div className="relative flex max-h-full w-full max-w-6xl flex-col" onMouseDown={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          className="absolute -top-3 right-0 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-stone-900 shadow-lg transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:-right-3"
          aria-label="Close screenshot preview"
        >
          <X size={18} />
        </button>

        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={onPrevious}
              className="absolute left-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-lg transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:inline-flex"
              aria-label="Previous screenshot"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              onClick={onNext}
              className="absolute right-2 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-stone-900 shadow-lg transition hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-300 md:inline-flex"
              aria-label="Next screenshot"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <figure className="overflow-hidden rounded-3xl border border-white/15 bg-white p-3 shadow-2xl shadow-black/30">
          <img src={image.src} alt={image.title} className="max-h-[78vh] w-full rounded-2xl object-contain" />
          <figcaption className="px-2 pb-1 pt-3 text-sm font-semibold text-stone-800">{image.title}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImageLightbox;
