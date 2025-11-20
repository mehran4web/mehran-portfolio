import Link from "next/link";

export default function Footer() {
  const lastUpdated = "Nov 2025"; // manually update when needed

  return (
    <footer className="w-full py-10 px-6 text-center text-sm text-zinc-600 dark:text-zinc-400 mt-20">
      <div className="flex justify-center gap-6 mb-4">
        <Link href="https://github.com/mehran4web" target="_blank" rel="noopener noreferrer">
          GitHub
        </Link>
        <Link href="https://x.com/mehran4web" target="_blank" rel="noopener noreferrer">
          Twitter
        </Link>
        <Link href="https://linkedin.com/in/mehran4web" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </Link>
      </div>

      <p>Email: mehran4web@gmail.com</p>
      <p className="mt-2">Last updated: {lastUpdated}</p>
    </footer>
  );
}
