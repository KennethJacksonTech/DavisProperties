"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/properties", label: "PROPERTIES" },
  { href: "/contact", label: "CONTACT" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-surface-inverse" style={{ padding: "18px 60px" }}>
      <div className="flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-[22px] font-bold tracking-[2px] text-white"
        >
          DAVIS PROPERTIES
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-body text-[13px] font-medium uppercase tracking-[1.5px] transition-colors"
              style={{
                color: pathname === link.href ? "#D4A574" : "#FAFAF5",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="font-body text-[13px] font-medium uppercase tracking-[1.5px]"
              style={{
                color: pathname === link.href ? "#D4A574" : "#FAFAF5",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
