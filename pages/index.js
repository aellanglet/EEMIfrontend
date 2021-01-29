import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h1>Home page</h1>
      <Link href="/collections">Collections</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/mentions">Mentions Légales</Link>
    </div>
  );
}
