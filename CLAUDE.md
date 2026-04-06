# DavisProperties — Site Specification

> **Design:** Fieldwork Green
> **Client:** Shea Davis — Davis Properties
> **Domain:** davisprop.kennethjackson.tech
> **Routes:** Home `/`, About `/about`, Properties `/properties`, Contact `/contact`
> **Fonts:** Playfair Display (headings, weight 700) + Inter (body, weights 400–600)
> **Border Radius:** 8px (buttons, cards, images, inputs)

---

## Brand Identity — "Fieldwork Green"

Locally owned mobile home community management in Amarillo, Texas.
Two parks on Upton Road: Sycamore Creek (8300) and Woodberry (7900).
Green outdoor feel — grounded, natural, trustworthy.

---

## Color System

```
--surface-primary:      #FAFAF5    /* warm cream background */
--surface-inverse:      #1A2E0A    /* deep forest green-black */
--foreground-primary:   #1A2E0A    /* dark green text */
--foreground-secondary: #5C6B4F    /* muted sage */
--foreground-inverse:   #FAFAF5    /* light text on dark */
--border-subtle:        #D6D3C4    /* warm gray border */
--accent-primary:       #2D5016    /* deep forest green */
--accent-hover:         #1E3A0E    /* darker green */
--earth-tan:            #D4A574    /* warm earth accent */
```

---

## Layout Pattern

- Dark nav bar and footer (`surface-inverse`)
- Cream body (`surface-primary`)
- Dark sections for "why us" and values (`surface-inverse`)
- Green accent on CTAs, labels, and icons
- Earth tan for eyebrow labels on dark backgrounds
- 8px border-radius on all interactive elements and cards

---

## Property Data

### Sycamore Creek
- **Address:** 8300 Upton Road, Amarillo, TX
- **Type:** Mobile home community
- **Features:** Spacious lots, mature sycamore trees, on-site management, pet-friendly

### Woodberry
- **Address:** 7900 Upton Road, Amarillo, TX
- **Type:** Mobile home community
- **Features:** Family-friendly, well-kept grounds, convenient Amarillo location, affordable lot rentals

---
## Route: Home `/` — `src/app/page.tsx`

### Nav Bar (sticky, dark `surface-inverse`, z-index 50)
- "DAVIS PROPERTIES" logo left (Playfair Display 22px 700, letter-spacing 2px, white)
- 4 links right: HOME, ABOUT, PROPERTIES, CONTACT (Inter 13px 500, uppercase, letter-spacing 1.5px)
- Active link uses `earth-tan` color, others white
- Padding: 18px vertical, 60px horizontal

### Hero Section (600px height)
- Full-bleed AI-generated image (aerial mobile home community), dark gradient overlay
- Gradient: surface-inverse 93% opacity → 53% → 20%, left-to-right at 90deg
- Left-aligned content (max-width 700px), vertically centered:
  - Eyebrow: "AMARILLO MOBILE HOME COMMUNITIES" (Inter 13px 600, earth-tan, letter-spacing 3px)
  - Heading: "Find Your Place in the Panhandle" (Playfair Display 56px 700, white, line-height 1.1)
  - Subheading (Inter 17px, white/80%): "Affordable, well-maintained mobile home communities on Upton Road in Amarillo. Spacious lots, mature trees, and a neighborhood you can call home."
  - CTA button: "VIEW PROPERTIES" → links to /properties

### Communities Preview Section
- Cream background, centered header:
  - Label: "OUR COMMUNITIES" (Inter 12px 600, accent-primary, letter-spacing 3px)
  - Heading: "Two Great Neighborhoods" (Playfair Display 40px 700)
  - Subtext (Inter 16px, foreground-secondary, max-width 560px)
- Two community cards side by side (gap 32px):
  - Each card: white bg, border-subtle stroke, 8px radius
  - Image top (260px height, 8px radius top corners only)
  - Body padding 28px, gap 12px
  - Title: Playfair Display 26px 700
  - Address: Inter 14px, foreground-secondary
  - Description: Inter 14px, foreground-secondary, line-height 1.6
  - "LEARN MORE" button (accent-primary, links to /properties)

### Why Davis Properties Section (dark `surface-inverse`)
- Centered header:
  - Label: "WHY DAVIS PROPERTIES" (Inter 12px 600, earth-tan, letter-spacing 3px)
  - Heading: "A Better Place to Call Home" (Playfair Display 40px 700, white)
- 3 feature cards in row (gap 32px):
  - Each: darker green #1E3A0E bg, 8px radius, 32px padding, centered content
  - Lucide icon (40×40, earth-tan): trees, shield-check, dollar-sign
  - Title: Inter 18px 600, white
  - Description: Inter 14px, #CBD5C4, line-height 1.6

**Card content:**
1. **Spacious Lots** (trees) — Room for your home, your vehicles, and your life. Our lots are generously sized with mature shade trees.
2. **Well Maintained** (shield-check) — We take pride in keeping our communities clean, safe, and well-maintained. Prompt repairs and responsive management.
3. **Affordable Living** (dollar-sign) — Quality community living at prices that work for your budget. No hidden fees, straightforward lot rental.

### CTA Banner (accent-primary background)
- Padding: 60px vertical, centered
- Heading: "Ready to Find Your New Home?" (Playfair Display 36px 700, white)
- Subtext: "Contact us today to learn about available lots at Sycamore Creek and Woodberry." (Inter 16px, white/80%)
- Button: "GET IN TOUCH" (white bg, accent-primary text, links to /contact)

### Footer (dark `surface-inverse`)
- Padding: 40px vertical, 60px horizontal, space-between
- Left: "DAVIS PROPERTIES" (Playfair Display 16px 700, letter-spacing 2px) + "Mobile Home Communities · Amarillo, Texas" (Inter 13px, #8B9A7E)
- Right: "© 2026 Davis Properties" + "Built by itK Software" (Inter 12–13px, #8B9A7E/#5C6B4F)

---

## Route: About `/about` — `src/app/about/page.tsx`

### Page Hero Banner (300px, dark overlay over landscape image)
- Centered: "ABOUT US" eyebrow (earth-tan) + "Rooted in the Panhandle" heading (Playfair 48px, white)

### Our Story Section (cream bg, two-column, gap 60px)
- Left column:
  - Label: "OUR STORY" (Inter 12px 600, accent-primary)
  - Heading: "Locally Owned, Community Focused" (Playfair 36px 700)
  - P1: "Davis Properties is a locally owned property management company operating two mobile home communities on Upton Road in Amarillo, Texas. We believe everyone deserves a safe, affordable, and well-maintained place to call home."
  - P2: "Our communities — Sycamore Creek and Woodberry — have been home to families across the Texas Panhandle for years. We take a hands-on approach to management, keeping our parks clean, safe, and welcoming for residents of all ages."
  - Text: Inter 15px, foreground-secondary, line-height 1.7
- Right: Image (480px wide, 380px height, 8px radius, neighborhood scene)

### Values Section (dark `surface-inverse`)
- Centered header: "WHAT WE STAND FOR" eyebrow (earth-tan) + "Our Commitment to You" heading (Playfair 36px, white)
- 3 cards (darker green #1E3A0E, 28px padding, 8px radius):
  1. **Safe Communities** (house icon, earth-tan) — We maintain clean, well-lit communities where families feel safe and welcome.
  2. **Responsive Service** (wrench, earth-tan) — When something needs fixing, we handle it quickly. Our residents know they can count on us.
  3. **Fair & Honest** (handshake, earth-tan) — No hidden fees, no surprise charges. We keep things simple and treat every resident with respect.

### Footer (same as Home)

---

## Route: Properties `/properties` — `src/app/properties/page.tsx`

### Page Hero Banner (300px, dark overlay)
- Centered: "OUR PROPERTIES" eyebrow (earth-tan) + "Your Next Home Awaits" heading (Playfair 48px, white)

### Sycamore Creek Detail Section (cream bg, two-column, gap 48px)
- Left: Image (600px, 420px height, 8px radius)
- Right column:
  - Label: "COMMUNITY" (Inter 12px 600, accent-primary)
  - Heading: "Sycamore Creek" (Playfair 36px 700)
  - Address: "8300 Upton Road, Amarillo, TX" (Inter 15px 500, foreground-secondary)
  - Description: Inter 15px, foreground-secondary, line-height 1.7
  - Feature checklist (lucide check icon, accent-primary, Inter 14px):
    - Spacious lots with mature sycamore trees
    - On-site management and maintenance
    - Pet-friendly community
  - CTA: "INQUIRE ABOUT AVAILABILITY" button → /contact

### Woodberry Detail Section (warm beige #F0EDE2 bg, two-column reversed, gap 48px)
- Left column: same structure as Sycamore Creek but for Woodberry
  - Heading: "Woodberry"
  - Address: "7900 Upton Road, Amarillo, TX"
  - Features: Family-friendly atmosphere, Convenient Amarillo location, Affordable lot rentals
  - CTA: "INQUIRE ABOUT AVAILABILITY" button → /contact
- Right: Image (600px, 420px height, 8px radius)

### Footer (same as Home)

---

## Route: Contact `/contact` — `src/app/contact/page.tsx`

### Page Hero Banner (300px, dark overlay over landscape)
- Centered: "CONTACT US" eyebrow (earth-tan) + "Get in Touch" heading (Playfair 48px, white)

### Contact Body (cream bg, two-column, gap 60px)
- **Left: Contact Form**
  - Heading: "Send Us a Message" (Playfair 32px 700)
  - Subtext: "Interested in lot availability or have questions about our communities? Fill out the form and we'll get back to you." (Inter 15px, foreground-secondary)
  - Fields: Name + Email side by side, Phone, Message (textarea)
  - Submit: "SEND MESSAGE" button (accent-primary)
  - See Contact Form Integration below

- **Right sidebar (420px): Info card** (surface-inverse bg, 8px radius, 40px/32px padding)
  - "CALL US" label (earth-tan) + "(806) 681-1251" (Inter 20px 600, white)
  - Divider (1px, #1E3A0E)
  - "OUR COMMUNITIES" label (earth-tan)
  - Sycamore Creek: name (Inter 15px 600, white) + address (Inter 13px, #8B9A7E)
  - Woodberry: name + address (same style)

### Footer (same as Home)

---

## Contact Form Integration

**Worker:** `https://forms.kennethjackson.tech/submit`
**site_id:** `davisproperties`

Create `src/components/ContactForm.tsx` as a `"use client"` component.

**Fields:**
- `name` (required)
- `email` (required, validated)
- `phone` (optional)
- `message` (required, textarea)
- `_hp` (honeypot — hidden, tabIndex -1, autoComplete off)

**States:** idle → sending → success / error
- Success: "Thank you! We'll be in touch soon." (green)
- Error: "Something went wrong. Please try again or call us at (806) 681-1251." (red)

**Style:** White inputs, border-subtle stroke, accent-primary submit button, 8px radius.

---

## Technical Config

- **Framework:** Next.js (App Router, TypeScript, Tailwind CSS)
- **Directory:** `site/`
- **Fonts:** Playfair Display + Inter — load via `next/font/google`
- **Images:** Use Unsplash placeholders. Search: "mobile home community trees", "texas panhandle landscape", "amarillo texas neighborhood"
- **Phone number:** (806) 681-1251
