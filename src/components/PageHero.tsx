interface PageHeroProps {
  eyebrow: string;
  heading: string;
  backgroundImage: string;
}

export function PageHero({ eyebrow, heading, backgroundImage }: PageHeroProps) {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden"
      style={{ height: 300 }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: "#1A2E0ADD" }} />
      <div className="relative z-10 text-center px-6">
        <p
          className="font-body text-[13px] font-semibold uppercase tracking-[3px] mb-4"
          style={{ color: "#D4A574" }}
        >
          {eyebrow}
        </p>
        <h1 className="font-heading text-[48px] font-bold text-white leading-tight">
          {heading}
        </h1>
      </div>
    </section>
  );
}
