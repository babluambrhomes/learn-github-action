const features = [
  {
    title: "Fast",
    desc: "Built with Tailwind CSS for instant styling with zero runtime overhead. Pages load in milliseconds.",
    icon: "⚡",
  },
  {
    title: "Responsive",
    desc: "Looks great on every screen size, from mobile phones to desktop monitors.",
    icon: "📱",
  },
  {
    title: "Simple",
    desc: "Clean, readable markup that is easy to extend, test, and maintain.",
    icon: "✨",
  },
  {
    title: "Secure",
    desc: "Industry-standard security practices keep your data safe at every layer.",
    icon: "🔒",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight">
        Everything you need
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-center text-zinc-600">
        Powerful features packaged in a dead-simple interface so you can ship
        faster.
      </p>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg"
          >
            <span className="text-2xl" role="img" aria-label={card.title}>
              {card.icon}
            </span>
            <h3 className="mt-4 text-lg font-bold">{card.title}</h3>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{card.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}