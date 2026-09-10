"use client";

import Link from "next/link";
import { Search, Menu } from "lucide-react";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="w-full">
      <div className="hidden items-center justify-center gap-8 lg:flex">
        <Link
          href="/"
          className="text-[13px] font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
        >
          Home
        </Link>

        <Link
          href="/destinations"
          className="text-[13px] font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
        >
          Destinations
        </Link>

        <Link
          href="/about"
          className="text-[13px] font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
        >
          About
        </Link>

        <Link
          href="/work-with-me"
          className="text-[13px] font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
        >
          Work with me
        </Link>

        <Link
          href="/contact"
          className="text-[13px] font-medium uppercase tracking-[0.16em] transition-opacity hover:opacity-60"
        >
          Contact
        </Link>

        <button
          type="button"
          aria-label="Search"
          className="transition-opacity hover:opacity-60"
        >
          <Search size={18} strokeWidth={1.5} />
        </button>

      </div>

      <div className="flex items-center justify-end lg:hidden">
        <button
          type="button"
          onClick={onMenuClick}
          aria-label="Open menu"
          className="p-2"
        >
          <Menu size={25} strokeWidth={1.5} />
        </button>
      </div>
    </nav>
  );
}