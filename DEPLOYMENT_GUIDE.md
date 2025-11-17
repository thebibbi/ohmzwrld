# 🚀 Quick Deployment Guide

## Fastest Way to Deploy (5 minutes)

### Step 1: Commit Your Code

```bash
git add .
git commit -m "Setup Next.js portfolio demos for Vercel"
git push -u origin claude/review-repo-files-01F6bEMshZr6HSsFj7hcZjZw
```

### Step 2: Connect to Vercel

1. Go to **[vercel.com](https://vercel.com/)**
2. Click **"Sign Up"** or **"Login"** (use GitHub)
3. Click **"Add New Project"**
4. Click **"Import Git Repository"**
5. Select **`thebibbi/ohmzwrld`** from your GitHub repos
6. **IMPORTANT**: Select the branch `claude/review-repo-files-01F6bEMshZr6HSsFj7hcZjZw`

### Step 3: Configure & Deploy

Vercel will auto-detect Next.js. Just:

1. **Project Name**: `ohmzwrld-demos` (or whatever you prefer)
2. **Framework Preset**: Next.js (should be auto-detected)
3. **Root Directory**: `./` (leave as default)
4. **Build Settings**: (leave defaults, Vercel handles it)
5. Click **"Deploy"**

### Step 4: Wait 2 Minutes ☕

Vercel will:
- Install dependencies
- Build your Next.js app
- Deploy to a global CDN
- Give you a live URL like `ohmzwrld-demos.vercel.app`

### Step 5: Review Your Demos! 🎉

Your live URLs will be:
- **Landing**: `https://your-project.vercel.app/`
- **Broadcast**: `https://your-project.vercel.app/broadcast-archive`
- **Studio**: `https://your-project.vercel.app/studio-dark`
- **Cinéma**: `https://your-project.vercel.app/cinema-verite`
- **Comparison**: `https://your-project.vercel.app/comparison.html`

---

## Alternative: Use Vercel CLI

If you prefer command line:

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy (from project root)
vercel

# Deploy to production
vercel --prod
```

---

## Troubleshooting

### "Module not found" errors during build

Run locally first to catch any issues:

```bash
npm install
npm run build
```

If it builds locally but fails on Vercel, check:
- Node version (18+ required)
- All imports are correct
- No missing dependencies in package.json

### Images not loading

Check `next.config.js` has the correct image domains configured.

### 404 on comparison page

Make sure `COMPARISON.html` is in the `/public` folder (it should be at `/home/user/ohmzwrld/public/comparison.html`).

---

## Custom Domain (Optional)

After deployment, add a custom domain:

1. Go to your project in Vercel dashboard
2. Click "Settings" → "Domains"
3. Add your domain (e.g., `ohmzwrld.com`)
4. Follow Vercel's DNS instructions
5. Wait for DNS propagation (5-30 minutes)

---

## Environment Variables (If Needed Later)

To add environment variables:

1. Vercel Dashboard → Your Project
2. Settings → Environment Variables
3. Add key-value pairs
4. Redeploy for changes to take effect

---

## Continuous Deployment

Every time you push to your GitHub branch, Vercel will:
- Automatically rebuild
- Deploy the new version
- Give you a preview URL for each commit

This means you can continuously iterate and review changes!

---

**Need Help?** Check the main README.md or Vercel's documentation.
