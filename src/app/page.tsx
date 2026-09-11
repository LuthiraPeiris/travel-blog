import PageHero from "@/components/common/PageHero";

export default function Home() {
  return (
    <div>
      <PageHero title="Destinations" />

      <div className="mx-auto max-w-[1180px] px-5 py-20 sm:px-8 lg:px-10">
        <h2 className="font-serif text-3xl">
          Test content
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-8 text-[#77716b]">
          This content is temporary. We are currently building
          the shared components before implementing the six pages.
        </p>
      </div>
    </div>
  );
}