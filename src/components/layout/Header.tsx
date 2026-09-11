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
            <div className="font-[family-name:var(--font-heading)] text-[34px] leading-none tracking-[-0.03em]">
              The Smooth Escape
            </div>

            <div className="mt-2 font-[family-name:var(--font-body)] text-[9px] uppercase tracking-[0.35em]">
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