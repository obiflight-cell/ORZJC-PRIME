const awards = [
  "World Travel Excellence Award 2024",
  "Luxury Journey Gold Seal",
  "5-Star Destination Curator",
  "Best in Class — Global Travel Summit",
  "Prestige Hospitality Excellence 2023",
  "International Travel Awards — Gold",
  "World Luxury Travel Award 2024",
  "Elite Curator — BAFTA of Travel",
];

export default function AwardsTicker() {
  const doubled = [...awards, ...awards];

  return (
    <div className="w-full bg-blue-deep border-y border-brown-warm/20 py-4 overflow-hidden">
      <div className="ticker-track flex items-center gap-0">
        {doubled.map((award, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="text-white-muted text-sm font-semibold tracking-wider px-8 uppercase whitespace-nowrap">
              {award}
            </span>
            <span
              className="text-brown-light text-lg leading-none shrink-0"
              aria-hidden="true"
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
