import Link from "next/link";

interface CommunityCardProps {
  name: string;
  address: string;
  description: string;
  image: string;
  href: string;
}

export function CommunityCard({ name, address, description, image, href }: CommunityCardProps) {
  return (
    <div
      className="bg-white border border-border-subtle overflow-hidden"
      style={{ borderRadius: 8 }}
    >
      <div
        className="w-full bg-cover bg-center"
        style={{
          height: 260,
          backgroundImage: `url(${image})`,
          borderRadius: "8px 8px 0 0",
        }}
      />
      <div className="flex flex-col gap-3" style={{ padding: 28 }}>
        <h3 className="font-heading text-[26px] font-bold text-foreground-primary">
          {name}
        </h3>
        <p className="font-body text-[14px] text-foreground-secondary">{address}</p>
        <p className="font-body text-[14px] text-foreground-secondary leading-[1.6]">
          {description}
        </p>
        <Link
          href={href}
          className="inline-block mt-2 bg-accent-primary text-white font-body text-[13px] font-semibold uppercase tracking-[1.5px] px-6 py-3 text-center transition-colors hover:bg-accent-hover"
          style={{ borderRadius: 8 }}
        >
          LEARN MORE
        </Link>
      </div>
    </div>
  );
}
