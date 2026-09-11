import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  children?: ReactNode;
};

export default function PageHero({
  title,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#d8d1ca]">
      <div className="mx-auto flex min-h-[360px] w-full max-w-[1180px] items-center justify-center px-5 py-20 sm:px-8 lg:px-10">
        <div className="relative z-10 text-center">
          {children}

          <h1 className="mt-4 font-[family-name:var(--font-heading)] text-5xl font-medium leading-tight tracking-[-0.02em] sm:text-6xl">
            {title}
          </h1>
        </div>
      </div>

      {/* Temporary curved bottom */}
      <div className="absolute -bottom-1 left-[-5%] h-16 w-[110%] rounded-[50%_50%_0_0] bg-[#f4f1ed]" />
    </section>
  );
}