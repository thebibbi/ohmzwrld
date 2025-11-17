# OHMZWRLD Portfolio Demos

Three distinct portfolio website designs for an audio-visual engineer, deployed as interactive demos.

## 🎨 Live Demos

Once deployed, your demos will be available at:

- **Landing Page**: `/` - Overview of all three designs
- **Broadcast Archive**: `/broadcast-archive` - Vintage VHS aesthetic
- **Studio Dark**: `/studio-dark` - Recording studio theme
- **Cinéma Vérité**: `/cinema-verite` - Documentary film style
- **Comparison Page**: `/comparison.html` - Side-by-side comparison

## 🚀 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Add Next.js portfolio demos"
   git push origin claude/review-repo-files-01F6bEMshZr6HSsFj7hcZjZw
   ```

2. **Go to [Vercel](https://vercel.com/)**
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Done!** Your site will be live in ~2 minutes

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy from project root**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? **Y**
   - Which scope? Choose your account
   - Link to existing project? **N**
   - Project name? `ohmzwrld-demos` (or your choice)
   - Directory? `./` (just press Enter)
   - Override settings? **N**

5. **Deploy to production**:
   ```bash
   vercel --prod
   ```

## 💻 Local Development

### Prerequisites
- Node.js 18.0 or later
- npm or yarn

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run development server**:
   ```bash
   npm run dev
   ```

3. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

Test the production build locally:

```bash
npm run build
npm start
```

## 📁 Project Structure

```
ohmzwrld/
├── pages/
│   ├── index.js              # Landing page with demo links
│   ├── broadcast-archive.js  # Broadcast Archive demo
│   ├── studio-dark.js        # Studio Dark demo
│   ├── cinema-verite.js      # Cinéma Vérité demo
│   ├── _app.js              # Next.js app wrapper
│   └── _document.js         # Custom document
├── public/
│   └── comparison.html      # Static comparison page
├── styles/
│   └── globals.css          # Global styles
├── package.json             # Dependencies
├── next.config.js           # Next.js configuration
└── README.md               # This file
```

## 🎯 Features

### All Designs Include:
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations
- ✅ Project filtering by category
- ✅ Modal popups for project details
- ✅ Contact form layouts
- ✅ Video embed placeholders
- ✅ Production-ready code

### Design Comparisons:

| Feature | Broadcast Archive | Studio Dark | Cinéma Vérité |
|---------|------------------|-------------|---------------|
| **Mood** | Bold, Retro | Intimate, Premium | Authentic, Editorial |
| **Colors** | Amber/Charcoal | Gold/Navy | B&W with selective color |
| **Best For** | Tech/Creative brands | Audio/Music clients | Documentary/Film industry |

## 🛠️ Customization

To customize with real content:

1. **Update project data** in each page file (pages/*.js)
2. **Replace placeholder images** with actual project photos
3. **Add real video embeds** (YouTube/Vimeo URLs)
4. **Connect contact forms** to your backend/service
5. **Update social media links**
6. **Modify "About" sections** with real bio

## 📝 Environment Variables (Optional)

Create `.env.local` for sensitive data:

```env
NEXT_PUBLIC_CONTACT_EMAIL=your@email.com
NEXT_PUBLIC_INSTAGRAM_URL=https://instagram.com/yourhandle
NEXT_PUBLIC_VIMEO_URL=https://vimeo.com/yourprofile
```

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:

```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Try building again
npm run build
```

### Image Loading Issues

If Unsplash images don't load, check `next.config.js` and ensure `images.domains` includes `images.unsplash.com`.

## 📚 Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [React Documentation](https://react.dev)

## 🎬 What's Next?

After reviewing the demos:

1. Choose your preferred design
2. Customize with your real content
3. Add backend functionality (contact forms, CMS)
4. Set up custom domain
5. Add analytics tracking
6. Optimize SEO metadata

## 📧 Support

For questions about these demos or customization needs, refer to:
- Original guide: `PORTFOLIO_GUIDE.md`
- Comparison page: `/comparison.html` (once deployed)

---

**Built with** Next.js • React • Tailwind CSS • Lucide Icons
