const latestPosts = [
  {
    title:
      "Hike to Maja e Vajushës, the most scenic peak in the Albanian Alps",
  },
  {
    title:
      "10-day Albania road trip itinerary for nature lovers",
  },
  {
    title:
      "Visiting Santa Catalina, Panama: Beaches, surfing & marine life",
  },
];

export default function LatestPosts() {
  return (
    <section>
      <p className="mb-7 text-[11px] font-medium uppercase tracking-[0.25em] text-[#77716b]">
        Latest Posts
      </p>

      <div className="space-y-7">
        {latestPosts.map((post) => (
          <article
            key={post.title}
            className="grid grid-cols-[90px_1fr] gap-4"
          >
            {/* Temporary image */}
            <div className="aspect-square bg-[#d3cec8]" />

            <h3 className="font-serif text-lg leading-snug">
              {post.title}
            </h3>
          </article>
        ))}
      </div>
    </section>
  );
}