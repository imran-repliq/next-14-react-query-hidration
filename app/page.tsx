import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen container mx-auto p-24">
      <Link href="/users">Users</Link>
    </main>
  );
}
