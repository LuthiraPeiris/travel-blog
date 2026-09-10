"use client";

import { useState } from "react";

import Container from "./Container";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-40 bg-[#f4f1ed]">
      <Container>
        <div className="flex min-h-[150px] flex-col items-center justify-center gap-7">
          {/* Temporary logo */}
          <div className="text-center">
            <div className="font-serif text-[32px] leading-none tracking-[-0.04em]">
              The Smooth Escape
            </div>

            <div className="mt-2 text-[9px] uppercase tracking-[0.38em]">
              Travel • Nature • Adventure
            </div>
          </div>

          <Navbar
            onMenuClick={() => setMobileMenuOpen(true)}
          />
        </div>
      </Container>

      <MobileMenu
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}