export default function Footer() {
  return (
    <footer className="pb-8">
      <div className="flex justify-center items-center gap-8 text-sm text-zinc-700">
        <a href="#" className="hover:text-black transition">
          Privacy
        </a>

        <a href="#" className="hover:text-black transition">
          Terms
        </a>

        <a href="#" className="hover:text-black transition">
          Contact
        </a>
      </div>

      <p className="text-center text-xs text-zinc-500 mt-4">
        © 2026 Recally. All rights reserved.
      </p>
    </footer>
  );
}