# Aussie Move Masters - Storyblok CMS Setup Guide

## 🎯 What You Get

A **fully CMS-managed** landing page where you can edit:
- ✏️ Header (logo, phone, email, navigation)
- ✏️ Hero section (headline, background image, trust badges)
- ✏️ Services (add/edit/remove services with icons)
- ✏️ Why Choose Us features
- ✏️ Pricing packages
- ✏️ Testimonials
- ✏️ FAQ items
- ✏️ Contact info
- ✏️ Footer

**Zero code changes needed!** Everything editable in Storyblok visual editor.

---

## 📋 Step 1: Create Storyblok Account

1. Go to https://app.storyblok.com/#!/signup
2. Sign up (free tier: 10,000 API calls/month)
3. Create a new space: **"Aussie Move Masters"**
4. Copy your **Preview Token**:
   - Go to Settings > Access Tokens
   - Copy the "Preview" token

5. Update `.env.local` with your token:
```bash
NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN=your_preview_token_here
```

---

## 📦 Step 2: Create Storyblok Components

In Storyblok, go to **Block Library** and create these components:

### 1. Page Component
- **Name:** `page`
- **Fields:**
  - `body` (Blocks) - Allow: all components

### 2. Header Component
- **Name:** `header`
- **Fields:**
  - `phone` (Text)
  - `email` (Text)
  - `address` (Text)
  - `logo_text_top` (Text) - e.g. "AUSSIE"
  - `logo_text_bottom` (Text) - e.g. "MOVE MASTERS"
  - `navigation` (Blocks) - **Create nested block:**
    - `label` (Text)
    - `href` (Text)

### 3. Hero Section Component
- **Name:** `hero_section`
- **Fields:**
  - `headline` (Richtext)
  - `subheadline` (Text)
  - `description` (Textarea)
  - `background_image` (Asset - Single)
  - `phone` (Text)
  - `email` (Text)
  - `trust_badges` (Blocks) - **Nested:**
    - `icon` (Single-Option: shield, star, clock, check)
    - `label` (Text)

### 4. Services Section Component
- **Name:** `services_section`
- **Fields:**
  - `title` (Text)
  - `subtitle` (Textarea)
  - `services` (Blocks) - Allow: `service_card`

### 5. Service Card Component
- **Name:** `service_card`
- **Fields:**
  - `icon` (Single-Option: home, building, package, truck, zap, users)
  - `title` (Text)
  - `description` (Textarea)
  - `tag` (Text) - Optional, e.g. "Most Popular"

### 6. Why Us Section Component
- **Name:** `why_us_section`
- **Fields:**
  - `title` (Text)
  - `subtitle` (Textarea)
  - `features` (Blocks) - Allow: `why_us_feature`

### 7. Why Us Feature Component
- **Name:** `why_us_feature`
- **Fields:**
  - `icon` (Single-Option: dollar, shield, truck, clock)
  - `title` (Text)
  - `description` (Textarea)

### 8. Pricing Section Component
- **Name:** `pricing_section`
- **Fields:**
  - `title` (Text)
  - `subtitle` (Textarea)
  - `packages` (Blocks) - Allow: `pricing_card`

### 9. Pricing Card Component
- **Name:** `pricing_card`
- **Fields:**
  - `title` (Text) - e.g. "2-Bedroom"
  - `truck` (Text) - e.g. "4.5 Ton Truck"
  - `price` (Text) - e.g. "$110"
  - `popular` (Boolean)

### 10. Testimonials Section
- **Name:** `testimonials_section`
- **Fields:**
  - `title` (Text)
  - `testimonials` (Blocks) - Allow: `testimonial_card`

### 11. Testimonial Card
- **Name:** `testimonial_card`
- **Fields:**
  - `name` (Text)
  - `location` (Text)
  - `review` (Textarea)

### 12. FAQ Section
- **Name:** `faq_section`
- **Fields:**
  - `title` (Text)
  - `items` (Blocks) - Allow: `faq_item`

### 13. FAQ Item
- **Name:** `faq_item`
- **Fields:**
  - `question` (Text)
  - `answer` (Textarea)

### 14. Contact Section
- **Name:** `contact_section`
- **Fields:**
  - `title` (Text)
  - `subtitle` (Text)
  - `phone` (Text)
  - `email` (Text)
  - `address` (Textarea)
  - `phone_label` (Text) - e.g. "Call Us (Free Quote)"
  - `form_title` (Text)

### 15. Footer
- **Name:** `footer`
- **Fields:**
  - `logo_text_top` (Text)
  - `logo_text_bottom` (Text)
  - `tagline` (Textarea)
  - `phone` (Text)
  - `copyright` (Text)
  - `links` (Blocks) - **Nested:**
    - `label` (Text)
    - `href` (Text)

---

## 📝 Step 3: Create Your First Story

1. In Storyblok, go to **Content**
2. Create new story: **"home"**
3. Select `page` as the content type
4. Add blocks in this order:
   - Header
   - Hero Section
   - Services Section
     - Add 6 Service Cards inside
   - Why Us Section
     - Add 8 Why Us Features inside
   - Pricing Section
     - Add 6 Pricing Cards inside
   - Testimonials Section
     - Add 3 Testimonial Cards
   - FAQ Section
     - Add 7 FAQ Items
   - Contact Section
   - Footer

5. Fill in all the content from the original design

---

## 🚀 Step 4: Run Locally

```bash
cd aussie-move-masters-cms
pnpm install
pnpm dev
```

Visit: http://localhost:3000

You should see your page loading from Storyblok!

---

## 🎨 Step 5: Enable Visual Editor

1. In Storyblok story editor, click the **eye icon** (Preview)
2. Enter: `http://localhost:3000`
3. Now you can edit visually and see changes in real-time!

---

## 🌐 Step 6: Deploy to Production

### Option A: Vercel (Recommended - FREE)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your GitHub repository
4. Add environment variable:
   - `NEXT_PUBLIC_STORYBLOK_ACCESS_TOKEN` = your token
5. Deploy!

### Option B: Your VPS (139.99.97.232)

```bash
# On VPS
cd /var/www
git clone [your-repo]
cd aussie-move-masters-cms
pnpm install
pnpm build

# Add to PM2
pm2 start npm --name "aussie-cms" -- start
pm2 save

# Configure Nginx
# Point domain to http://localhost:3000
```

---

## 🎯 Step 7: Update Storyblok Visual Editor URL

Once deployed, update Storyblok preview URL:
1. Go to Settings > Visual Editor
2. Change from `http://localhost:3000` to your live domain
3. Save

---

## 📖 Content Management Guide

### To Edit Content:
1. Log into https://app.storyblok.com
2. Go to Content > home
3. Click any section to edit
4. Click **Publish** to make live

### To Add a New Service:
1. Open Services Section
2. Click "+ Add block" in services field
3. Select `service_card`
4. Fill in title, description, icon, tag
5. Publish

### To Add FAQ:
1. Open FAQ Section
2. Click "+ Add block" in items
3. Select `faq_item`
4. Add question & answer
5. Publish

### To Change Prices:
1. Open Pricing Section
2. Click any Pricing Card
3. Edit price, title, or truck details
4. Publish

### To Upload Background Image:
1. Open Hero Section
2. Click background_image field
3. Upload your image (recommended: 1920x1080px)
4. Publish

---

## 🎨 To Change Colors/Branding

Edit `app/globals.css`:

```css
:root {
  --primary: 174 70% 28%; /* Main teal color */
  --accent: 38 92% 64%; /* Gold/orange accent */
  /* Change numbers to customize */
}
```

---

## 🔧 Troubleshooting

### "Story not found"
- Make sure story is named exactly "home"
- Check slug is `/home`

### "Cannot read property content"
- Verify Storyblok token is correct
- Check story is published (or use draft mode)

### Visual editor not updating
- Hard refresh: Ctrl+Shift+R
- Check preview URL matches your deployment

---

## 📞 Need Help?

Contact Robert:
- Telegram: @robert_nevrio
- Will help with setup and content migration

---

## ✅ Checklist

- [ ] Storyblok account created
- [ ] All 15 components created in Block Library
- [ ] "home" story created
- [ ] All sections added with content
- [ ] Preview token added to .env.local
- [ ] Tested locally (pnpm dev)
- [ ] Deployed to Vercel/VPS
- [ ] Visual editor URL updated
- [ ] First content edits published

---

**You now have a fully CMS-managed landing page! 🎉**

All content editable without touching code. Perfect for Jack or any client!
