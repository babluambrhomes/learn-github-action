export default function Hero() {
  return (
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
          href="#pricing"
          className="w-full rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-zinc-700 sm:w-auto"
        >
          Try it free
        </a>
        <a
          href="#features"
          className="w-full rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-100 sm:w-auto"
        >
          Learn more
        </a>
      </div>
    </section>
  );
}