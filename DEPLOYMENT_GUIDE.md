# 🚀 Deployment Guide — bilkamanzi.com

## Pre-Deployment Checklist

✅ **Build Test:** Passed successfully  
✅ **All Critical Fixes:** Completed  
✅ **Linting:** No errors  
✅ **TypeScript:** All types valid  

## Required Environment Variables

You need to set up **ONE** environment variable in your deployment platform:

### `RESEND_API_KEY`
- **Purpose:** Sends emails from the contact form
- **Where to get it:** https://resend.com/api-keys
- **Required for:** Contact form functionality

---

## Deployment Options

### Option 1: Vercel (Recommended for Next.js)

**Why Vercel:** 
- Zero-config deployment for Next.js
- Automatic HTTPS
- Global CDN
- Free tier available

**Steps:**

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```
   
   Follow the prompts:
   - Link to existing project or create new
   - Set project name (e.g., `bilkamanzi-portfolio`)
   - Choose production deployment

4. **Set Environment Variable:**
   - Go to your project dashboard on vercel.com
   - Navigate to **Settings** → **Environment Variables**
   - Add: `RESEND_API_KEY` = `your-resend-api-key`
   - Redeploy after adding the variable

5. **Configure Custom Domain:**
   - Go to **Settings** → **Domains**
   - Add `bilkamanzi.com` and `www.bilkamanzi.com`
   - Follow DNS configuration instructions

**Alternative: Deploy via GitHub:**
1. Push your code to GitHub
2. Go to vercel.com
3. Click "New Project"
4. Import your GitHub repository
5. Add environment variable `RESEND_API_KEY`
6. Deploy

---

### Option 2: Netlify

**Steps:**

1. **Install Netlify CLI:**
   ```bash
   npm i -g netlify-cli
   ```

2. **Build command:** `npm run build`
3. **Publish directory:** `.next`
4. **Set environment variable:** `RESEND_API_KEY`

---

### Option 3: Manual Deployment (Any Node.js Host)

**Requirements:**
- Node.js 18+ 
- Environment variable: `RESEND_API_KEY`

**Steps:**
1. Build: `npm run build`
2. Start: `npm start`
3. Set `RESEND_API_KEY` environment variable

---

## Post-Deployment Checklist

After deployment, verify:

- [ ] Homepage loads correctly
- [ ] All pages are accessible
- [ ] Contact form sends emails (test submission)
- [ ] Images load properly
- [ ] Sitemap is accessible: `https://bilkamanzi.com/sitemap.xml`
- [ ] Google Analytics is tracking (check browser console)
- [ ] Mobile responsiveness works
- [ ] All links work correctly

---

## Quick Deploy Command (Vercel)

If you have Vercel CLI installed:

```bash
vercel --prod
```

This will:
1. Build your project
2. Deploy to production
3. Give you a live URL

**Don't forget to add `RESEND_API_KEY` in Vercel dashboard after first deployment!**

---

## Troubleshooting

### Contact Form Not Working
- Check that `RESEND_API_KEY` is set correctly
- Verify the API key is active in Resend dashboard
- Check Vercel function logs for errors

### Build Fails
- Ensure Node.js version is 18+
- Check that all dependencies are in `package.json`
- Verify TypeScript types are correct

### Images Not Loading
- Verify images exist in `public/images/`
- Check Next.js Image component configuration
- Ensure image paths are correct

---

## Need Help?

Check the deployment platform documentation:
- **Vercel:** https://vercel.com/docs
- **Netlify:** https://docs.netlify.com
- **Resend:** https://resend.com/docs

---

**Ready to deploy!** 🎉

