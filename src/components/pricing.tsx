const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    features: ["1 project", "Community support", "Basic templates"],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    features: [
      "Unlimited projects",
      "Priority support",
      "All templates",
      "Custom domains",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "$29",
    period: "/month",
    features: [
      "Everything in Pro",
      "Collaboration tools",
      "Analytics dashboard",
      "API access",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t border-zinc-200 bg-zinc-50 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Simple, transparent pricing
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-zinc-600">
          Start free and upgrade when you are ready. No surprises.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={
                plan.highlighted
                  ? "rounded-2xl bg-zinc-900 p-8 text-white shadow-xl"
                  : "rounded-2xl border border-zinc-200 bg-white p-8"
              }
            >
              <h3 className="text-sm font-semibold uppercase tracking-wide">
                {plan.name}
              </h3>
              <p className="mt-4 text-4xl font-extrabold">
                {plan.price}
                <span
                  className={
                    plan.highlighted
                      ? "text-sm font-normal text-zinc-400"
                      : "text-sm font-normal text-zinc-500"
                  }
                >
                  {plan.period}
                </span>
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <span>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={
                  plan.highlighted
                    ? "mt-8 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 transition-colors hover:bg-zinc-200"
                    : "mt-8 w-full rounded-full border border-zinc-300 px-6 py-3 text-sm font-semibold transition-colors hover:bg-zinc-100"
                }
              >
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}