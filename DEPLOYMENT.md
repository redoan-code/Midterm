# 🚀 Deployment Guide for EverFit on Vercel

## Quick Deployment Steps

### Option 1: Using Vercel Dashboard (Recommended for Beginners)

1. **Create a Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub, GitLab, or Bitbucket

2. **Push Your Code to GitHub**
   ```bash
   # Initialize git (if not already done)
   git init
   
   # Add all files
   git add .
   
   # Commit
   git commit -m "Initial commit - EverFit e-commerce website"
   
   # Add remote repository (replace with your GitHub repo URL)
   git remote add origin https://github.com/yourusername/everfit.git
   
   # Push to GitHub
   git push -u origin main
   ```

3. **Import Project to Vercel**
   - Log in to Vercel Dashboard
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect settings
   - Click "Deploy"

4. **Done!** 🎉
   - Your site will be live at `https://your-project-name.vercel.app`
   - Vercel provides a custom domain

### Option 2: Using Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   cd /Users/izazahmed/Projects/Midterm
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - Project name? **everfit** (or your choice)
   - Directory? **./** (press Enter)
   - Override settings? **N**

5. **Deploy to Production**
   ```bash
   vercel --prod
   ```

## 📋 Pre-Deployment Checklist

✅ All HTML files reference correct paths
✅ `products-data.js` included in all pages
✅ `vercel.json` configuration created
✅ `index.html` redirect created
✅ All images in `picture/` folder
✅ No broken links
✅ Brand name updated to "EverFit" on all pages

## 🔧 Configuration Files Created

- **vercel.json** - Vercel deployment configuration
- **.vercelignore** - Files to exclude from deployment
- **index.html** - Root redirect to Home.html
- **package.json** - Project metadata
- **.gitignore** - Git ignore rules
- **README.md** - Project documentation

## 🌐 After Deployment

1. **Test Your Live Site**
   - Visit all pages (Home, Products, Contact, etc.)
   - Test shopping cart functionality
   - Test search and filters
   - Test login/register
   - Test favorites system
   - Check mobile responsiveness

2. **Custom Domain (Optional)**
   - Go to Vercel Dashboard → Your Project → Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

3. **Environment Variables (if needed)**
   - Go to Settings → Environment Variables
   - Add any API keys or secrets

## 🐛 Troubleshooting

**Issue: Products not showing**
- Check browser console for errors
- Ensure `products-data.js` is loaded before `app.js`
- Verify all script tags are present

**Issue: Images not loading**
- Check image paths are relative (e.g., `picture/image.jpg`)
- Ensure all images are in the `picture/` folder
- Check file names match exactly (case-sensitive)

**Issue: 404 errors**
- Verify `vercel.json` routing configuration
- Check all internal links use correct file names

## 📞 Support

If you encounter issues:
1. Check Vercel deployment logs
2. Review browser console errors
3. Verify all files are committed to Git
4. Check Vercel documentation: [vercel.com/docs](https://vercel.com/docs)

---

**Your website is now ready for deployment!** 🚀

Simply run `vercel` in your project directory or import to Vercel Dashboard.
