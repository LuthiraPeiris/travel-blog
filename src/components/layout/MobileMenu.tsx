"use client";

import Link from "next/link";
import { X } from "lucide-react";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#f4f1ed] lg:hidden">
      <div className="flex justify-end p-6">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close menu"
        >
          <X size={26} strokeWidth={1.5} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-7 pt-10">
        <Link href="/" onClick={onClose}>
          Home
        </Link>

        <Link href="/destinations" onClick={onClose}>
          Destinations
        </Link>

        <Link href="/about" onClick={onClose}>
          About
        </Link>

        <Link href="/work-with-me" onClick={onClose}>
          Work with me
        </Link>

        <Link href="/contact" onClick={onClose}>
          Contact
        </Link>
      </div>
    </div>
  );
}