import Link from "next/link";
import { Check } from "lucide-react";
import { PageHero } from "@/components/PageHero";

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <Check size={18} className="text-accent-primary flex-shrink-0" />
      <span className="font-body text-[14px] text-foreground-secondary">
        {text}
      </span>
    </li>
  );
}

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="OUR PROPERTIES"
        heading="Your Next Home Awaits"
        backgroundImage="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80"
      />

      {/* Sycamore Creek */}
      <section
        className="bg-surface-primary"
        style={{ padding: "80px 60px" }}
      >
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div
            className="bg-cover bg-center w-full"
            style={{
              maxWidth: 600,
              height: 420,
              borderRadius: 8,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80)",
            }}
          />
          <div>
            <p className="font-body text-[12px] font-semibold uppercase tracking-[3px] text-accent-primary mb-3">
              COMMUNITY
            </p>
            <h2 className="font-heading text-[36px] font-bold text-foreground-primary mb-2">
              Sycamore Creek
            </h2>
            <p className="font-body text-[15px] font-medium text-foreground-secondary mb-5">
              8300 Upton Road, Amarillo, TX
            </p>
            <p className="font-body text-[15px] text-foreground-secondary leading-[1.7] mb-6">
              Sycamore Creek is our flagship community, known for its mature
              shade trees and spacious lots. Residents enjoy easy access to
              shopping, schools, and medical facilities while living in a
              peaceful, tree-lined setting.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureItem text="Spacious lots with mature sycamore trees" />
              <FeatureItem text="On-site management and maintenance" />
              <FeatureItem text="Pet-friendly community" />
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-accent-primary text-white font-body text-[13px] font-semibold uppercase tracking-[1.5px] px-8 py-4 transition-colors hover:bg-accent-hover"
              style={{ borderRadius: 8 }}
            >
              INQUIRE ABOUT AVAILABILITY
            </Link>
          </div>
        </div>
      </section>

      {/* Woodberry */}
      <section style={{ padding: "80px 60px", backgroundColor: "#F0EDE2" }}>
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="font-body text-[12px] font-semibold uppercase tracking-[3px] text-accent-primary mb-3">
              COMMUNITY
            </p>
            <h2 className="font-heading text-[36px] font-bold text-foreground-primary mb-2">
              Woodberry
            </h2>
            <p className="font-body text-[15px] font-medium text-foreground-secondary mb-5">
              7900 Upton Road, Amarillo, TX
            </p>
            <p className="font-body text-[15px] text-foreground-secondary leading-[1.7] mb-6">
              Woodberry is a quiet, family-friendly community just down the road
              from Sycamore Creek. Well-kept grounds, convenient access to
              Amarillo amenities, and affordable lot rentals make this an ideal
              choice for families and individuals looking for a comfortable,
              established neighborhood.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              <FeatureItem text="Family-friendly atmosphere" />
              <FeatureItem text="Convenient Amarillo location" />
              <FeatureItem text="Affordable lot rentals" />
            </ul>
            <Link
              href="/contact"
              className="inline-block bg-accent-primary text-white font-body text-[13px] font-semibold uppercase tracking-[1.5px] px-8 py-4 transition-colors hover:bg-accent-hover"
              style={{ borderRadius: 8 }}
            >
              INQUIRE ABOUT AVAILABILITY
            </Link>
          </div>
          <div
            className="bg-cover bg-center w-full order-1 md:order-2"
            style={{
              maxWidth: 600,
              height: 420,
              borderRadius: 8,
              backgroundImage:
                "url(https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&q=80)",
            }}
          />
        </div>
      </section>
    </>
  );
}
