"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between py-6 px-6 backdrop-blur-md">
      {/* Logo / Name */}
      <Link href="/" className="text-xl font-bold">
        Mehran
      </Link>

      {/* Nav Links */}
      <div className="flex items-center gap-6 text-sm">
        <Link href="#projects" className="hover:text-zinc-600 dark:hover:text-zinc-300">
          Projects
        </Link>

        <Link href="#about" className="hover:text-zinc-600 dark:hover:text-zinc-300">
          About
        </Link>

        <Link href="mailto:mehran4web@gmail.com" className="hover:text-zinc-600 dark:hover:text-zinc-300">
          Contact
        </Link>

        <Button asChild>
          <Link href="https://github.com/mehran4web" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
        </Button>
      </div>
    </nav>
  );
}
