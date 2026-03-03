# Vercel Deployment Guide

## Quick Deployment Steps

### 1. Login to Vercel
```bash
vercel login
```
Follow the prompts to authenticate with your Vercel account.

### 2. Deploy the Project
```bash
cd /home/kulwinder-dhanajal/.openclaw/workspace/aussie-move-masters-cms
vercel
```

When prompted:
- **Set up and deploy?** → Yes
- **Which scope?** → Select your account
- **Link to existing project?** → No
- **Project name?** → aussie-move-masters (or your preference)
- **Directory?** → `.` (current directory)
- **Override settings?** → No (defaults are fine for Next.js)

### 3. Add Environment Variables

After deployment, you'll need to add the Storyblok preview token. You can do this via:

**Option A: Vercel Dashboard**
1. Go to your project on vercel.com
2. Settings → Environment Variables
3. Add:
   - Key: `NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN`
   - Value: `2oT82h2vMSGUe7pHq2VHowtt`
   - Environment: Production, Preview, Development (select all)

**Option B: Vercel CLI**
```bash
vercel env add NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN
```
When prompted, paste: `2oT82h2vMSGUe7pHq2VHowtt`

### 4. Redeploy (if you added env vars after first deploy)
```bash
vercel --prod
```

## Alternative: One-Command Deploy

If you want to deploy directly to production:
```bash
vercel --prod
```

## Custom Domain Setup

To use a custom domain (e.g., aussiemovemasters.com.au):

1. Go to your project on vercel.com
2. Settings → Domains
3. Add your domain
4. Update DNS records as instructed by Vercel

## Environment Variables Reference

The project needs one environment variable:
- `NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN` → For fetching Storyblok content

This is already in the `.env.local` file for local development, but Vercel needs it configured separately.

## Automatic Deployments

Once deployed, Vercel will automatically:
- Deploy when you push to the `main` branch on GitHub
- Create preview deployments for pull requests
- Build and deploy in seconds

## Troubleshooting

**Build fails?**
- Check environment variables are set
- Verify the Storyblok token is correct
- Check build logs in Vercel dashboard

**Content not loading?**
- Verify NEXT_PUBLIC_STORYBLOK_PREVIEW_TOKEN is set
- Check Storyblok space ID is correct in `lib/storyblok.ts`

**Need help?**
Run `vercel help` or visit vercel.com/docs
