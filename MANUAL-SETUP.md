# Manual Storyblok Setup Guide

Since the automatic script requires a personal access token, follow these steps to set up components manually.

## Step 1: Create Components in Storyblok

Go to **Storyblok** → **Components** → **New Component** and create each one:

### 1. Top Bar (top_bar)
- **Type:** Nestable
- **Fields:**
  - `phone` - Text
  - `email` - Text
  - `address` - Text

### 2. Navigation Item (nav_item)
- **Type:** Nestable
- **Fields:**
  - `label` - Text
  - `href` - Text

### 3. Header (header)
- **Type:** Nestable
- **Fields:**
  - `logo_text_top` - Text (default: "AUSSIE")
  - `logo_text_bottom` - Text (default: "MOVE MASTERS")
  - `phone` - Text
  - `nav_items` - Blocks (allow: nav_item)

### 4. Trust Badge (trust_badge)
- **Type:** Nestable
- **Fields:**
  - `icon` - Single-Option (options: shield, star, clock, check)
  - `label` - Text

### 5. Hero Section (hero_section)
- **Type:** Nestable
- **Fields:**
  - `headline` - Textarea
  - `subheadline` - Text
  - `description` - Textarea
  - `background_image` - Asset (images only)
  - `phone` - Text
  - `email` - Text
  - `trust_badges` - Blocks (allow: trust_badge)

### 6. Stat Item (stat_item)
- **Type:** Nestable
- **Fields:**
  - `number` - Text
  - `label` - Text

### 7. Feature Item (feature_item)
- **Type:** Nestable
- **Fields:**
  - `icon` - Single-Option (options: shield, award, users, zap)
  - `title` - Text
  - `description` - Textarea

### 8. About Section (about_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `subtitle` - Text
  - `description_1` - Textarea
  - `description_2` - Textarea
  - `stats` - Blocks (allow: stat_item)
  - `features` - Blocks (allow: feature_item)

### 9. Service Card (service_card)
- **Type:** Nestable
- **Fields:**
  - `icon` - Single-Option (options: home, building, package, truck, zap, users)
  - `title` - Text
  - `description` - Textarea
  - `tag` - Text (optional)

### 10. Services Section (services_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `subtitle` - Textarea
  - `services` - Blocks (allow: service_card)

### 11. Why Us Feature (why_us_feature)
- **Type:** Nestable
- **Fields:**
  - `icon` - Single-Option (options: dollar, fileText, truck, clock, shield, thumbsUp, heart, award)
  - `title` - Text
  - `description` - Textarea

### 12. Why Choose Us Section (why_choose_us_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `subtitle` - Textarea
  - `features` - Blocks (allow: why_us_feature)

### 13. Step Item (step_item)
- **Type:** Nestable
- **Fields:**
  - `number` - Text
  - `title` - Text
  - `description` - Textarea

### 14. How It Works Section (how_it_works_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `subtitle` - Textarea (optional)
  - `steps` - Blocks (allow: step_item)

### 15. Pricing Card (pricing_card)
- **Type:** Nestable
- **Fields:**
  - `size` - Text
  - `truck` - Text
  - `price` - Text
  - `price_period` - Text (default: "/ hr")
  - `capacity` - Text
  - `dimensions` - Text
  - `popular` - Boolean
  - `label` - Text

### 16. Pricing Section (pricing_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `subtitle` - Textarea
  - `packages` - Blocks (allow: pricing_card)
  - `footer_note` - Textarea (optional)

### 17. Testimonial Card (testimonial_card)
- **Type:** Nestable
- **Fields:**
  - `name` - Text
  - `location` - Text
  - `review` - Textarea
  - `rating` - Number (default: 5)

### 18. Testimonials Section (testimonials_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `testimonials` - Blocks (allow: testimonial_card)

### 19. FAQ Item (faq_item)
- **Type:** Nestable
- **Fields:**
  - `question` - Text
  - `answer` - Textarea

### 20. FAQ Section (faq_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `items` - Blocks (allow: faq_item)

### 21. Story Feature (story_feature)
- **Type:** Nestable
- **Fields:**
  - `icon` - Single-Option (options: mapPin, award, users, heart)
  - `title` - Text
  - `description` - Textarea

### 22. Story Section (story_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `subtitle` - Text
  - `paragraph_1` - Textarea
  - `paragraph_2` - Textarea
  - `paragraph_3` - Textarea
  - `cta_text` - Text
  - `features` - Blocks (allow: story_feature)

### 23. Contact Section (contact_section)
- **Type:** Nestable
- **Fields:**
  - `title` - Text
  - `subtitle` - Textarea
  - `phone` - Text
  - `email` - Text
  - `address` - Text
  - `phone_label` - Text
  - `form_title` - Text

### 24. Footer (footer)
- **Type:** Nestable
- **Fields:**
  - `logo_text_top` - Text (default: "AUSSIE")
  - `logo_text_bottom` - Text (default: "MOVE MASTERS")
  - `tagline` - Textarea
  - `phone` - Text
  - `email` - Text
  - `address` - Text
  - `copyright` - Textarea
  - `nav_items` - Blocks (allow: nav_item)

---

## Step 2: Create the Home Story

1. Go to **Content** → **Create new** → **Story**
2. Name it **"home"**
3. Slug: **"home"**
4. Add blocks in this order:
   - top_bar
   - header
   - hero_section
   - about_section
   - services_section
   - why_choose_us_section
   - how_it_works_section
   - pricing_section
   - testimonials_section
   - faq_section
   - story_section
   - contact_section
   - footer

---

## Step 3: Fill in Content

Use `COMPLETE-CONTENT-GUIDE.md` to copy-paste all content into each section.

---

## Step 4: Upload Background Image

1. Go to **Assets**
2. Upload the `hero-bg.jpg` file from `/public` folder
3. Use this in the hero_section's background_image field

---

## Step 5: Publish

1. Click **Publish** in the story
2. Test in the Visual Editor
3. Deploy and verify!

---

**Time estimate:** 45-60 minutes for complete setup

This is a one-time setup. After this, everything is editable through the visual editor! 🎉
