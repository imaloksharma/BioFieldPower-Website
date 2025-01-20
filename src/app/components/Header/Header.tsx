import Link from 'next/link';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-2xl font-bold text-green-700">BioField</div>
      <nav className="space-x-6">
        <Link href="/">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/about">About Us</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
