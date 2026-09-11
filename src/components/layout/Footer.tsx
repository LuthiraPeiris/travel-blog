import Link from "next/link";
// No icon import needed for now

import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#d7d0c9]">
      <Container>
        <div className="py-14">
          <div className="flex flex-col items-center text-center">

            <div className="font-[family-name:var(--font-heading)] text-3xl">
              The Smooth Escape
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-7 gap-y-3">
              <Link href="/">About</Link>

              <Link href="/destinations">
                Destinations
              </Link>

              <Link href="/work-with-me">
                Work with me
              </Link>

              <Link href="/contact">
                Contact
              </Link>

              <Link href="/privacy-policy">
                Privacy Policy
              </Link>
            </div>

            <p className="mt-8 text-xs tracking-wide">
              © 2026 The Smooth Escape
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}