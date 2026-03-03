# Content Migration Guide
## Copy content from original design to Storyblok

This guide helps you transfer all content from the Lovable design to Storyblok.

---

## 📞 Header Content

**Component:** `header`

```
phone: 0414 910 000
email: info@aussiemovemasters.com.au
address: Nollamara WA 6061, Australia
logo_text_top: AUSSIE
logo_text_bottom: MOVE MASTERS

navigation: (6 items)
- Home → hero
- Services → services
- Why Us → why-us
- Pricing → pricing
- FAQ → faq
- Contact → contact
```

---

## 🚀 Hero Section

**Component:** `hero_section`

```
headline: Moving Made Simple —<br><span style="color:hsl(38,92%,64%)">Let the Masters</span><br>Handle the Heavy Lifting

subheadline: Perth's Trusted Removalists

description: Experienced removalists & packers across Perth. Home, office or interstate — we guarantee a stress-free move at an affordable price.

background_image: Upload hero-bg.jpg (in /public folder)

phone: 0414 910 000
email: info@aussiemovemasters.com.au

trust_badges: (4 items)
1. icon: shield, label: Fully Insured
2. icon: star, label: 5.0 ★ Google
3. icon: clock, label: 7 Days a Week
4. icon: check, label: No Hidden Fees
```

---

## 🛠️ Services Section

**Component:** `services_section`

```
title: Our Moving Services
subtitle: From studio apartments to large offices — we have the right team and truck for every move across Perth.

services: (6 cards)
```

### Service Card 1
```
icon: home
title: House Removals
description: Reliable relocations for units, townhouses, and family homes across all Perth suburbs. We disassemble, wrap, and reassemble with care.
tag: Most Popular
```

### Service Card 2
```
icon: building
title: Office Relocation
description: Minimal downtime, maximum efficiency. We handle desks, IT equipment and files — coordinating building access and lift bookings.
tag: Business
```

### Service Card 3
```
icon: package
title: Packing Services
description: Let our expert packers wrap every item using quality materials — bubble wrap, heavy-duty blankets, and custom boxes.
tag: (leave empty)
```

### Service Card 4
```
icon: truck
title: Furniture Removalists
description: Specialist furniture movers handling lounges, beds, dining sets, and fragile antiques with professional equipment.
tag: (leave empty)
```

### Service Card 5
```
icon: zap
title: Same-Day & Urgent Moves
description: Plans changed? We offer same-day moves when slots are available. Call early for priority booking.
tag: Urgent
```

### Service Card 6
```
icon: users
title: Two Men & a Truck
description: Ideal for studios and small apartments. An affordable, efficient service perfect for students and couples.
tag: Budget-Friendly
```

---

## ⭐ Why Us Section

**Component:** `why_us_section`

```
title: Why Choose Aussie Move Masters?
subtitle: Clear pricing, careful handling and responsive support — every single time.

features: (8 items)
```

### Features (add all 8)
```
1. icon: dollar, title: No Hidden Costs, description: Honest quotes and transparent hourly rates. What we quote is what you pay.
2. icon: shield, title: Everything in Writing, description: Clear confirmations so your moving day runs exactly to plan.
3. icon: truck, title: Right-Sized Trucks, description: From studios to 5-bedroom homes — we match the right vehicle to every job.
4. icon: clock, title: 7 Days a Week, description: Weekend and short-notice bookings available when slots remain.
5. icon: shield, title: Fully Insured, description: Public Liability and Transit Insurance included on every move.
6. icon: shield, title: 5-Star Reviews, description: Hundreds of happy Perth families trust us. Check our Google reviews.
7. icon: shield, title: Satisfaction Guaranteed, description: We're not finished until you're completely satisfied with every detail.
8. icon: shield, title: WA Owned & Operated, description: A proud Western Australian business serving the Perth community.
```

---

## 💰 Pricing Section

**Component:** `pricing_section`

```
title: Explore Our Pricing Packages
subtitle: Transparent pricing with no hidden fees. Find the perfect truck for your move.

packages: (6 cards)
```

### Pricing Cards
```
1. title: 2-Bedroom, truck: 4.5 Ton Truck, price: $110, popular: false
2. title: 3-Bedroom, truck: 6.5 Ton Truck, price: $140, popular: true (✅ check this!)
3. title: 4-Bedroom, truck: 8.5 Ton Truck, price: $165, popular: false
4. title: Studio / 1-Bed, truck: 3.5 Ton Truck, price: $90, popular: false
5. title: Large 4–5 Bed, truck: 10 Ton Truck, price: $170, popular: false
6. title: Office / Commercial, truck: Custom Quote, price: POA, popular: false
```

---

## 💬 Testimonials Section

**Component:** `testimonials_section`

```
title: What Our Clients Say

testimonials: (3 cards)
```

### Testimonials
```
1. name: Stephanie W., location: Cottesloe, review: Aussie Move Masters made our relocation completely stress-free. The team arrived on time, handled everything with care, and the final price matched the quote exactly.

2. name: Jared K., location: Fremantle, review: We booked at short notice and the crew still nailed it. Friendly, organised, and fast — without cutting any corners. Absolutely recommend!

3. name: Anita R., location: Joondalup, review: Great value for money. Truck was clean, team was polite, and all our furniture arrived without a scratch. Will definitely use again.
```

---

## ❓ FAQ Section

**Component:** `faq_section`

```
title: Frequently Asked Questions

items: (7 items)
```

### FAQ Items
```
1. Q: How much do removalists in Perth cost?
   A: Our Perth removalists offer transparent hourly pricing starting from $90/hr for a studio or 1-bedroom move. Prices include 2 professional movers and a truck. No call-out fee for metro Perth moves.

2. Q: What truck size do I need?
   A: A 2-bedroom house usually fits a 4.5–5.5 ton truck (≈20–25 m³). For a 3-bedroom house, we recommend a 6.5 ton truck (≈30 m³). Our team will suggest the best option when you get in touch.

3. Q: Do you offer same-day or urgent moves?
   A: Yes — we provide same-day removals when slots are available. Call us early for priority booking on urgent or last-minute moves.

4. Q: Are you fully insured?
   A: Absolutely. We hold Public Liability and Transit Insurance on every move. Your belongings are protected from pickup to delivery.

5. Q: Can you help with office relocations?
   A: Yes — our office relocation service minimises downtime. We handle desks, IT equipment, and files with careful planning, and offer after-hours availability.

6. Q: Is there a call-out or travel fee?
   A: No call-out or travel fee for standard metro Perth moves. Our transparent hourly rates are all-inclusive with no surprises.

7. Q: Can you move heavy items like fridges or safes?
   A: Our crews are trained for heavy furniture and appliances. We bring heavy-duty trolleys, straps, and ramps to safely move fridges, large cabinets, pool tables, and safes.
```

---

## 📧 Contact Section

**Component:** `contact_section`

```
title: Ready to Make Your Move?
subtitle: Contact us today for a free, no-obligation quote. We'll get back to you within 30 minutes.
phone: 0414 910 000
email: info@aussiemovemasters.com.au
address: Kindra Way, Nollamara WA 6061, Australia
phone_label: Call Us (Free Quote)
form_title: Request a Free Quote
```

---

## 🦶 Footer

**Component:** `footer`

```
logo_text_top: AUSSIE
logo_text_bottom: MOVE MASTERS
tagline: Perth's trusted removalists — making every move stress-free, affordable, and professional.
phone: 0414 910 000
copyright: © 2026 Aussie Move Masters · ABN Registered · Fully Insured · Perth, Western Australia · All Rights Reserved

links: (6 items - same as header navigation)
- Home
- Services
- Why Us
- Pricing
- FAQ
- Contact
```

---

## ✅ Migration Checklist

- [ ] Header configured
- [ ] Hero section filled (including background image upload)
- [ ] All 6 services added
- [ ] All 8 Why Us features added
- [ ] All 6 pricing packages added
- [ ] All 3 testimonials added
- [ ] All 7 FAQ items added
- [ ] Contact section filled
- [ ] Footer configured
- [ ] Published story
- [ ] Tested visual editor

---

**Time estimate:** 30-45 minutes for full content migration

Once done, everything is editable through Storyblok admin panel! 🎉
