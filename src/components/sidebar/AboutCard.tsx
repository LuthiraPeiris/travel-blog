export default function AboutCard() {
  return (
    <section className="mb-14">
      {/* Temporary image */}
      <div className="mb-6 aspect-[4/3] w-full bg-[#d3cec8]" />

      <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.25em] text-[#77716b]">
        About Me
      </p>

      <h2 className="mb-4 font-serif text-2xl leading-tight">
        Hi, I’m Marjut, the blogger behind The Smooth Escape.
      </h2>

      <p className="text-sm leading-7 text-[#77716b]">
        I'm on a quest to find destinations with the most beautiful
        nature on our planet, and I share travel guides based on
        first-hand experience to help you explore them too.
      </p>

      <button
        type="button"
        className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] underline underline-offset-4"
      >
        Get to know me
      </button>
    </section>
  );
}