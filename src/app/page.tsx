export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <nav className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-bold tracking-tight">
            MySite
          </a>
          <ul className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
            <li>
              <a href="#" className="transition-colors hover:text-zinc-900">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-zinc-900">
                About
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-zinc-900">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-zinc-900">
                Contact
              </a>
            </li>
          </ul>
          <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
            Get Started
          </button>
        </div>
      </nav>

      <section className="mx-auto max-w-6xl px-6 pt-24 pb-16 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
          Build something great with ease
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-600">
          A simple, fast, and modern home page built with Tailwind CSS. Clean,
          responsive, and ready to customize.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 sm:w-auto"
          >
            Try it free
          </a>
          <a
            href="#"
            className="w-full rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 sm:w-auto"
          >
            Learn more
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Fast",
              desc: "Built with Tailwind CSS for instant styling with zero runtime overhead.",
            },
            {
              title: "Responsive",
              desc: "Looks great on every screen size, from mobile to desktop.",
            },
            {
              title: "Simple",
              desc: "Clean, readable markup that is easy to extend and maintain.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-zinc-200 p-6 transition-shadow hover:shadow-lg"
            >
              <h3 className="text-lg font-bold">{card.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} MySite. All rights reserved.
        </div>
      </footer>
    </div>
  );
}