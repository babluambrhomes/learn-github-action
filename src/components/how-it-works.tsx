const steps = [
  {
    title: "Sign up",
    desc: "Create your free account in under a minute. No credit card required.",
  },
  {
    title: "Customize",
    desc: "Pick a template and tweak colors, fonts, and sections to match your brand.",
  },
  {
    title: "Publish",
    desc: "Go live with one click. Your site is served fast from anywhere in the world.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-zinc-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          How it works
        </h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700 text-lg font-bold">
                {i + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-400">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}