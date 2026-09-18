export default function Footer() {
  return (
    <footer className="border-t border-zinc-200">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} MySite. All rights reserved.
      </div>
    </footer>
  );
}