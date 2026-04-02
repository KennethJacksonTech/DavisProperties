import { House, Wrench, Handshake } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const values = [
  {
    icon: House,
    title: "Safe Communities",
    description:
      "We maintain clean, well-lit communities where families feel safe and welcome.",
  },
  {
    icon: Wrench,
    title: "Responsive Service",
    description:
      "When something needs fixing, we handle it quickly. Our residents know they can count on us.",
  },
  {
    icon: Handshake,
    title: "Fair & Honest",
    description:
      "No hidden fees, no surprise charges. We keep things simple and treat every resident with respect.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="ABOUT US"
        heading="Rooted in the Panhandle"
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
      />

      {/* Our Story */}
      <section
        className="bg-surface-primary"
        style={{ padding: "80px 60px" }}
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[60px] items-center">
          <div>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[3px] text-accent-primary mb-3">
              OUR STORY
            </p>
            <h2 className="font-heading text-[36px] font-bold text-foreground-primary mb-6">
              Locally Owned, Community Focused
            </h2>
            <p className="font-body text-[15px] text-foreground-secondary leading-[1.7] mb-5">
              Davis Properties is a locally owned property management company
              operating two mobile home communities on Upton Road in Amarillo,
              Texas. We believe everyone deserves a safe, affordable, and
              well-maintained place to call home.
            </p>
            <p className="font-body text-[15px] text-foreground-secondary leading-[1.7]">
              Our communities — Sycamore Creek and Woodberry — have been home to
              families across the Texas Panhandle for years. We take a hands-on
              approach to management, keeping our parks clean, safe, and
              welcoming for residents of all ages.
            </p>
          </div>
          <div
            className="bg-cover bg-center w-full"
            style={{
              maxWidth: 480,
              height: 380,
              borderRadius: 8,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80)",
            }}
          />
        </div>
      </section>

      {/* Values */}
      <section
        className="bg-surface-inverse"
        style={{ padding: "80px 60px" }}
      >
        <div className="text-center mb-12">
          <p
            className="font-body text-[12px] font-semibold uppercase tracking-[3px] mb-3"
            style={{ color: "#D4A574" }}
          >
            WHAT WE STAND FOR
          </p>
          <h2 className="font-heading text-[36px] font-bold text-white">
            Our Commitment to You
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto">
          {values.map((value) => (
            <div
              key={value.title}
              className="text-center"
              style={{
                backgroundColor: "#1E3A0E",
                borderRadius: 8,
                padding: 28,
              }}
            >
              <value.icon
                size={40}
                style={{ color: "#D4A574" }}
                className="mx-auto mb-5"
              />
              <h3 className="font-body text-[18px] font-semibold text-white mb-3">
                {value.title}
              </h3>
              <p
                className="font-body text-[14px] leading-[1.6]"
                style={{ color: "#CBD5C4" }}
              >
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
