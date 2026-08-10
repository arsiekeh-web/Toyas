import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-white/10 bg-black/80 px-4 py-3 backdrop-blur-lg">
      <Link href="/" className="font-serif text-2xl font-bold text-orange-light" style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
        Toyas
      </Link>
      <div className="h-8 w-8 rounded-full bg-purple" />
    </header>
  );
}
