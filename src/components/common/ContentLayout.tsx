import type { ReactNode } from "react";

type ContentLayoutProps = {
  children: ReactNode;
  sidebar?: ReactNode;
};

export default function ContentLayout({
  children,
  sidebar,
}: ContentLayoutProps) {
  return (
    <div className="mx-auto flex w-full max-w-[1180px] gap-14 px-5 sm:px-8 lg:px-10">
      <div className="min-w-0 flex-1">
        {children}
      </div>

      {sidebar && (
        <div className="hidden lg:block">
          {sidebar}
        </div>
      )}
    </div>
  );
}