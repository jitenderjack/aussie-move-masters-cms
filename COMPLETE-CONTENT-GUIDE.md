# Complete Content Migration Guide
## Step-by-step content for every section

This guide contains ALL content from the original design, ready to copy-paste into Storyblok.

---

## 📞 TOP BAR

**Component:** `top_bar`

```
phone: 0414 910 000
email: info@aussiemovemasters.com.au
address: Nollamara WA 6061, Australia
```

---

## 🎯 HEADER

**Component:** `header`

```
logo_text_top: AUSSIE
logo_text_bottom: MOVE MASTERS
phone: 0414 910 000

nav_items: (6 items - add as nav_item components)
1. label: Home, href: hero
2. label: Services, href: services
3. label: Why Us, href: why-us
4. label: Pricing, href: pricing
5. label: FAQ, href: faq
6. label: Contact, href: contact
```

---

## 🚀 HERO SECTION

**Component:** `hero_section`

```
headline: Moving Made Simple —<br><span style="color:hsl(38,92%,64%)">Let the Masters</span><br>Handle the Heavy Lifting

subheadline: Perth's Trusted Removalists

description: Experienced removalists & packers across Perth. Home, office or interstate — we guarantee a stress-free move at an affordable price.

phone: 0414 910 000
email: info@aussiemovemasters.com.au

background_image: Upload the hero-bg.jpg from /public folder

trust_badges: (4 items - add as trust_badge components)
1. icon: shield, label: Fully Insured
2. icon: star, label: 5.0 ★ Google
3. icon: clock, label: 7 Days a Week
4. icon: check, label: No Hidden Fees
```

---

## 👋 ABOUT SECTION

**Component:** `about_section`

```
title: Welcome To Aussie Move Masters
subtitle: Your Trusted Local Movers and Packers!

description_1: At Aussie Move Masters, we are experienced removalists specialising in top-notch moving and packing services across Perth. Whether you're relocating your home or office, our dedicated team ensures a seamless transition tailored to your unique needs.

description_2: We understand that moving can be overwhelming, which is why we prioritise a stress-free experience. Our expert team handles everything from careful packing of your cherished belongings to efficient transportation, guaranteeing their safety throughout the journey.

stats: (4 items - add as stat_item components)
1. number: 500+, label: Happy Customers
2. number: 10+, label: Years Experience
3. number: 5.0, label: Google Rating
4. number: 100%, label: Insured Moves

features: (4 items - add as feature_item components)
1. icon: shield, title: Fully Insured, description: Public Liability and Transit Insurance on every move.
2. icon: award, title: Satisfaction Guarantee, description: We're not done until you're completely happy.
3. icon: users, title: Expert Team, description: Police-cleared, trained professionals on every job.
4. icon: zap, title: Same-Day Available, description: Short-notice bookings available when slots remain.
```

---

## 🛠️ SERVICES SECTION

**Component:** `services_section`

```
title: Our Moving Services
subtitle: From studio apartments to large offices — we have the right team and truck for every move across Perth.

services: (6 items - add as service_card components)

1. icon: home, title: House Removals, tag: Most Popular
   description: Reliable relocations for units, townhouses, and family homes across all Perth suburbs. We disassemble, wrap, and reassemble with care.

2. icon: building, title: Office Relocation, tag: Business
   description: Minimal downtime, maximum efficiency. We handle desks, IT equipment and files — coordinating building access and lift bookings.

3. icon: package, title: Packing Services, tag: (leave empty)
   description: Let our expert packers wrap every item using quality materials — bubble wrap, heavy-duty blankets, and custom boxes.

4. icon: truck, title: Furniture Removalists, tag: (leave empty)
   description: Specialist furniture movers handling lounges, beds, dining sets, and fragile antiques with professional equipment.

5. icon: zap, title: Same-Day & Urgent Moves, tag: Urgent
   description: Plans changed? We offer same-day moves when slots are available. Call early for priority booking.

6. icon: users, title: Two Men & a Truck, tag: Budget-Friendly
   description: Ideal for studios and small apartments. An affordable, efficient service perfect for students and couples.
```

---

## ⭐ WHY CHOOSE US SECTION

**Component:** `why_choose_us_section`

```
title: Why Choose Aussie Move Masters?
subtitle: Clear pricing, careful handling and responsive support — every single time.

features: (8 items - add as why_us_feature components)

1. icon: dollar, title: No Hidden Costs
   description: Honest quotes and transparent hourly rates. What we quote is what you pay.

2. icon: fileText, title: Everything in Writing
   description: Clear confirmations so your moving day runs exactly to plan.

3. icon: truck, title: Right-Sized Trucks
   description: From studios to 5-bedroom homes — we match the right vehicle to every job.

4. icon: clock, title: 7 Days a Week
   description: Weekend and short-notice bookings available when slots remain.

5. icon: shield, title: Fully Insured
   description: Public Liability and Transit Insurance included on every move.

6. icon: thumbsUp, title: 5-Star Reviews
   description: Hundreds of happy Perth families trust us. Check our Google reviews.

7. icon: heart, title: Satisfaction Guaranteed
   description: We're not finished until you're completely satisfied with every detail.

8. icon: award, title: WA Owned & Operated
   description: A proud Western Australian business serving the Perth community.
```

---

## 🔄 HOW IT WORKS SECTION

**Component:** `how_it_works_section`

```
title: Moving in 4 Simple Steps
subtitle: (leave empty)

steps: (4 items - add as step_item components)

1. number: 01, title: Get a Free Quote
   description: Fill out our quick form or call us. We provide a clear, upfront price with zero hidden fees.

2. number: 02, title: Plan Your Move
   description: We confirm addresses, times, and any special requirements you have — everything in writing.

3. number: 03, title: We Move You
   description: Our professional team arrives on time, ready to transport your belongings with expert care.

4. number: 04, title: Settle In
   description: We unload into the correct rooms, ensuring your new place feels like home from day one.
```

---

## 💰 PRICING SECTION

**Component:** `pricing_section`

```
title: Explore Our Pricing Packages
subtitle: Transparent pricing with no hidden fees. Find the perfect truck for your move.

footer_note: All prices are hourly rates. Minimum 2 hours applies. <strong>No call-out fee</strong> for metro Perth. <button onclick="document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Contact us</button> for a tailored quote.

packages: (6 items - add as pricing_card components)

1. size: 2-Bedroom, truck: 4.5 Ton Truck, price: $110, price_period: / hr
   capacity: 20 m³, dimensions: 4.2m × 2.1m × 2.1m
   popular: false, label: Great for couples

2. size: 3-Bedroom, truck: 6.5 Ton Truck, price: $140, price_period: / hr
   capacity: 30 m³, dimensions: 5.2m × 2.4m × 2.4m
   popular: true ✅, label: Most Popular

3. size: 4-Bedroom, truck: 8.5 Ton Truck, price: $165, price_period: / hr
   capacity: 40 m³, dimensions: 5.8m × 2.4m × 2.8m
   popular: false, label: Family homes

4. size: Studio / 1-Bed, truck: 3.5 Ton Truck, price: $90, price_period: / hr
   capacity: 15 m³, dimensions: 3.5m × 2.1m × 2.1m
   popular: false, label: Budget-friendly

5. size: Large 4–5 Bed, truck: 10 Ton Truck, price: $170, price_period: / hr
   capacity: 50 m³, dimensions: 7.4m × 2.4m × 2.8m
   popular: false, label: Biggest homes

6. size: Office / Commercial, truck: Custom Quote, price: POA, price_period: (empty)
   capacity: Tailored, dimensions: Call for details
   popular: false, label: Business moves
```

---

## 💬 TESTIMONIALS SECTION

**Component:** `testimonials_section`

```
title: What Our Clients Say

testimonials: (3 items - add as testimonial_card components)

1. name: Stephanie W., location: Cottesloe, rating: 5
   review: Aussie Move Masters made our relocation completely stress-free. The team arrived on time, handled everything with care, and the final price matched the quote exactly.

2. name: Jared K., location: Fremantle, rating: 5
   review: We booked at short notice and the crew still nailed it. Friendly, organised, and fast — without cutting any corners. Absolutely recommend!

3. name: Anita R., location: Joondalup, rating: 5
   review: Great value for money. Truck was clean, team was polite, and all our furniture arrived without a scratch. Will definitely use again.
```

---

## ❓ FAQ SECTION

**Component:** `faq_section`

```
title: Frequently Asked Questions

items: (7 items - add as faq_item components)

1. question: How much do removalists in Perth cost?
   answer: Our Perth removalists offer transparent hourly pricing starting from $90/hr for a studio or 1-bedroom move. Prices include 2 professional movers and a truck. No call-out fee for metro Perth moves.

2. question: What truck size do I need?
   answer: A 2-bedroom house usually fits a 4.5–5.5 ton truck (≈20–25 m³). For a 3-bedroom house, we recommend a 6.5 ton truck (≈30 m³). Our team will suggest the best option when you get in touch.

3. question: Do you offer same-day or urgent moves?
   answer: Yes — we provide same-day removals when slots are available. Call us early for priority booking on urgent or last-minute moves.

4. question: Are you fully insured?
   answer: Absolutely. We hold Public Liability and Transit Insurance on every move. Your belongings are protected from pickup to delivery.

5. question: Can you help with office relocations?
   answer: Yes — our office relocation service minimises downtime. We handle desks, IT equipment, and files with careful planning, and offer after-hours availability.

6. question: Is there a call-out or travel fee?
   answer: No call-out or travel fee for standard metro Perth moves. Our transparent hourly rates are all-inclusive with no surprises.

7. question: Can you move heavy items like fridges or safes?
   answer: Our crews are trained for heavy furniture and appliances. We bring heavy-duty trolleys, straps, and ramps to safely move fridges, large cabinets, pool tables, and safes.
```

---

## 📖 STORY SECTION

**Component:** `story_section`

```
title: A Journey of Expertise and Dedication
subtitle: Your Moving Experience Starts Here

paragraph_1: Aussie Move Masters was founded on a simple belief: moving should be a fresh start, not a stressful ordeal. With over a decade of experience in Perth removals, our team has grown into one of the most trusted names in the industry.

paragraph_2: We're more than just a truck and a team — we are dedicated relocation specialists who treat every item as if it were our own. From heavy furniture to delicate heirlooms, our commitment to care is unwavering.

paragraph_3: Operating 7 days a week across all Perth suburbs — from <strong>Fremantle</strong> to <strong>Joondalup</strong>, <strong>Subiaco</strong> to <strong>Rockingham</strong> — we've helped over 500 families and businesses make their move with confidence.

cta_text: Start Your Move Today

features: (4 items - add as story_feature components)

1. icon: mapPin, title: All Perth Suburbs
   description: Fremantle, Joondalup, Subiaco, Scarborough, Rockingham & more.

2. icon: award, title: Licensed & Certified
   description: Fully licensed removalists with police-cleared staff.

3. icon: users, title: Family Business
   description: WA owned and operated — we care about our community.

4. icon: heart, title: Our Promise
   description: We won't rest until you're completely settled and satisfied.
```

---

## 📧 CONTACT SECTION

**Component:** `contact_section`

```
title: Ready to Make Your Move?
subtitle: Contact us today for a free, no-obligation quote. We'll get back to you within 30 minutes.

phone: 0414 910 000
email: info@aussiemovemasters.com.au
address: Kindra Way, Nollamara WA 6061
phone_label: Call Us (Free Quote)
form_title: Request a Free Quote
```

---

## 🦶 FOOTER

**Component:** `footer`

```
logo_text_top: AUSSIE
logo_text_bottom: MOVE MASTERS

tagline: Perth's trusted removalists — making every move stress-free, affordable, and professional.

phone: 0414 910 000
email: info@aussiemovemasters.com.au
address: Kindra Way, Nollamara WA 6061, Australia

copyright: © 2026 Aussie Move Masters · ABN Registered · Fully Insured · Perth, Western Australia · All Rights Reserved

nav_items: (6 items - add as nav_item components, same as header)
1. label: Home, href: hero
2. label: Services, href: services
3. label: Why Us, href: why-us
4. label: Pricing, href: pricing
5. label: FAQ, href: faq
6. label: Contact, href: contact
```

---

## ✅ MIGRATION CHECKLIST

- [ ] Run setup script: `node setup-complete-storyblok.js`
- [ ] Create "home" story in Storyblok
- [ ] Add all sections in order (see list above)
- [ ] Fill in ALL content from this guide
- [ ] Upload hero-bg.jpg background image
- [ ] Test in Visual Editor
- [ ] Publish story
- [ ] Test on deployed site

---

## 🎨 STYLING NOTES

All styling is already pixel-perfect in the components. Colors match original:
- Primary Teal: `hsl(174,70%,28%)`
- Accent Gold: `hsl(38,92%,64%)`
- Fonts: Montserrat (headings) + Open Sans (body)

No additional CSS needed! 🎉
