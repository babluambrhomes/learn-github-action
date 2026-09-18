const testimonials = [
  {
    quote:
      "This tool saved us weeks of work. Our team switched from messy hand-rolled CSS to Tailwind in a single weekend.",
    name: "Sara Khan",
    role: "Design Lead, PixelBox",
  },
  {
    quote:
      "The cleanest, fastest workflow I have used in years. Deployment is literally one click.",
    name: "Amit Sharma",
    role: "CTO, CloudNine",
  },
  {
    quote:
      "Beautiful defaults, powerful customization, and a delight to write tests against.",
    name: "Priya Nair",
    role: "Frontend Engineer, Loop",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight">
        Loved by teams worldwide
      </h2>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="rounded-2xl border border-zinc-200 p-6"
          >
            <blockquote className="text-sm leading-6 text-zinc-700">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4">
              <p className="text-sm font-semibold">{t.name}</p>
              <p className="text-xs text-zinc-500">{t.role}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}