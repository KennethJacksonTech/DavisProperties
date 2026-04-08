import Link from "next/link";
import { Trees, ShieldCheck, DollarSign } from "lucide-react";
import { CommunityCard } from "@/components/CommunityCard";

const features = [
  {
    icon: Trees,
    title: "Spacious Lots",
    description:
      "Room for your home, your vehicles, and your life. Our lots are generously sized with mature shade trees.",
  },
  {
    icon: ShieldCheck,
    title: "Well Maintained",
    description:
      "We take pride in keeping our communities clean, safe, and well-maintained. Prompt repairs and responsive management.",
  },
  {
    icon: DollarSign,
    title: "Affordable Living",
    description:
      "Quality community living at prices that work for your budget. No hidden fees, straightforward lot rental.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex items-center overflow-hidden"
        style={{ height: 600, padding: "0 60px" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(26,46,10,0.93) 0%, rgba(26,46,10,0.53) 50%, rgba(26,46,10,0.20) 100%)",
          }}
        />
        <div className="relative z-10 max-w-[700px]">
          <p
            className="font-body text-[13px] font-semibold uppercase tracking-[3px] mb-5"
            style={{ color: "#D4A574" }}
          >
            AMARILLO MOBILE HOME COMMUNITIES
          </p>
          <h1 className="font-heading text-[56px] font-bold text-white leading-[1.1] mb-6">
            Find Your Place in the Panhandle
          </h1>
          <p className="font-body text-[17px] text-white/80 mb-8 max-w-[600px]">
            Affordable, well-maintained mobile home communities on Upton Road in
            Amarillo. Spacious lots, mature trees, and a neighborhood you can
            call home.
          </p>
          <Link
            href="/properties"
            className="inline-block bg-accent-primary text-white font-body text-[13px] font-semibold uppercase tracking-[1.5px] px-8 py-4 transition-colors hover:bg-accent-hover"
            style={{ borderRadius: 8 }}
          >
            VIEW PROPERTIES
          </Link>
        </div>
      </section>

      {/* Communities Preview */}
      <section
        className="bg-surface-primary"
        style={{ padding: "80px 60px" }}
      >
        <div className="text-center mb-12">
          <p className="font-body text-[12px] font-semibold uppercase tracking-[3px] text-accent-primary mb-3">
            OUR COMMUNITIES
          </p>
          <h2 className="font-heading text-[40px] font-bold text-foreground-primary mb-4">
            Two Great Neighborhoods
          </h2>
          <p className="font-body text-[16px] text-foreground-secondary max-w-[560px] mx-auto">
            Locally owned and managed mobile home communities on Upton Road in
            Amarillo, Texas.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1100px] mx-auto">
          <CommunityCard
            name="Sycamore Creek"
            address="8300 Upton Road, Amarillo, TX"
            description="Our flagship community, known for its mature sycamore shade trees and spacious lots. A peaceful, tree-lined setting with easy access to Amarillo amenities."
            image="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
            href="/properties"
          />
          <CommunityCard
            name="Woodberry"
            address="7900 Upton Road, Amarillo, TX"
            description="A quiet, family-friendly community with well-kept grounds, convenient access to Amarillo amenities, and affordable lot rentals for families and individuals."
            image="https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80"
            href="/properties"
          />
        </div>
      </section>

      {/* Why Davis Properties */}
      <section
        className="bg-surface-inverse"
        style={{ padding: "80px 60px" }}
      >
        <div className="text-center mb-12">
          <p
            className="font-body text-[12px] font-semibold uppercase tracking-[3px] mb-3"
            style={{ color: "#D4A574" }}
          >
            WHY DAVIS PROPERTIES
          </p>
          <h2 className="font-heading text-[40px] font-bold text-white">
            A Better Place to Call Home
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="text-center"
              style={{
                backgroundColor: "#1E3A0E",
                borderRadius: 8,
                padding: 32,
              }}
            >
              <feature.icon
                size={40}
                style={{ color: "#D4A574" }}
                className="mx-auto mb-5"
              />
              <h3 className="font-body text-[18px] font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p
                className="font-body text-[14px] leading-[1.6]"
                style={{ color: "#CBD5C4" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="bg-accent-primary text-center"
        style={{ padding: "60px 40px" }}
      >
        <h2 className="font-heading text-[36px] font-bold text-white mb-4">
          Ready to Find Your New Home?
        </h2>
        <p className="font-body text-[16px] text-white/80 mb-8 max-w-[600px] mx-auto">
          Contact us today to learn about available lots at Sycamore Creek and
          Woodberry.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-white text-accent-primary font-body text-[13px] font-semibold uppercase tracking-[1.5px] px-8 py-4 transition-colors hover:bg-gray-100"
          style={{ borderRadius: 8 }}
        >
          GET IN TOUCH
        </Link>
      </section>
    </>
  );
}
