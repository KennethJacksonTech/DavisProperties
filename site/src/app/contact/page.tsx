import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT US"
        heading="Get in Touch"
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
      />

      {/* Contact Body */}
      <section
        className="bg-surface-primary"
        style={{ padding: "80px 60px" }}
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-[1fr_420px] gap-[60px]">
          {/* Left: Form */}
          <div>
            <h2 className="font-heading text-[32px] font-bold text-foreground-primary mb-3">
              Send Us a Message
            </h2>
            <p className="font-body text-[15px] text-foreground-secondary mb-8">
              Interested in lot availability or have questions about our
              communities? Fill out the form and we&apos;ll get back to you.
            </p>
            <ContactForm />
          </div>

          {/* Right: Info Card */}
          <div
            className="bg-surface-inverse h-fit"
            style={{ borderRadius: 8, padding: "40px 32px" }}
          >
            <p
              className="font-body text-[11px] font-semibold uppercase tracking-[2px] mb-2"
              style={{ color: "#D4A574" }}
            >
              CALL US
            </p>
            <p className="font-body text-[20px] font-semibold text-white mb-6">
              (806) 681-1251
            </p>
            <div
              className="mb-6"
              style={{ height: 1, backgroundColor: "#1E3A0E" }}
            />
            <p
              className="font-body text-[11px] font-semibold uppercase tracking-[2px] mb-4"
              style={{ color: "#D4A574" }}
            >
              OUR COMMUNITIES
            </p>
            <div className="mb-4">
              <p className="font-body text-[15px] font-semibold text-white">
                Sycamore Creek
              </p>
              <p className="font-body text-[13px]" style={{ color: "#8B9A7E" }}>
                8300 Upton Road, Amarillo, TX
              </p>
            </div>
            <div>
              <p className="font-body text-[15px] font-semibold text-white">
                Woodberry
              </p>
              <p className="font-body text-[13px]" style={{ color: "#8B9A7E" }}>
                7900 Upton Road, Amarillo, TX
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
