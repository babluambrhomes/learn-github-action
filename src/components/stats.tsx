const stats = [
  { value: "10k+", label: "Active users" },
  { value: "120+", label: "Countries served" },
  { value: "99.9%", label: "Uptime" },
  { value: "4.9/5", label: "Average rating" },
];

export default function Stats() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 py-12 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-3xl font-extrabold text-zinc-900">{s.value}</p>
            <p className="mt-1 text-sm text-zinc-600">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}