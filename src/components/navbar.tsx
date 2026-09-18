export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-lg font-bold tracking-tight">
          MySite
        </a>
        <ul className="hidden items-center gap-6 text-sm font-medium text-zinc-600 md:flex">
          <li>
            <a href="#features" className="transition-colors hover:text-zinc-900">
              Features
            </a>
          </li>
          <li>
            <a href="#pricing" className="transition-colors hover:text-zinc-900">
              Pricing
            </a>
          </li>
          <li>
            <a href="#faq" className="transition-colors hover:text-zinc-900">
              FAQ
            </a>
          </li>
          <li>
            <a href="#contact" className="transition-colors hover:text-zinc-900">
              Contact
            </a>
          </li>
        </ul>
        <button className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700">
          Get Started
        </button>
      </div>
    </nav>
  );
}