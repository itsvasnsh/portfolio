# 🚀 PORTFOLIO SETUP GUIDE

## Complete Step-by-Step Instructions

### 📋 Prerequisites
- Windows 10/11
- Internet connection
- VS Code installed

---

## STEP 1: Install Node.js

1. Go to https://nodejs.org
2. Download the **LTS version** (v20.x.x or later)
3. Run the installer
4. Click "Next" through all steps
5. Verify installation:
   - Open Command Prompt (CMD)
   - Type: `node --version`
   - Should show: v20.x.x or higher

---

## STEP 2: Open Project in VS Code

1. Open VS Code
2. Click **File** → **Open Folder**
3. Navigate to: `C:\Users\HP\Desktop\portfolio`
4. Click **Select Folder**

---

## STEP 3: Install Dependencies

1. In VS Code, press **Ctrl + `** (backtick) to open terminal
2. Run this command:
   ```bash
   npm install
   ```
3. Wait 2-3 minutes for installation to complete
4. You should see "added XXX packages"

---

## STEP 4: Start Development Server

1. In the same terminal, run:
   ```bash
   npm run dev
   ```
2. Wait for "Ready in X ms" message
3. Open your browser
4. Go to: **http://localhost:3000**
5. Your portfolio should now be visible! 🎉

---

## STEP 5: Customize Your Portfolio

### A. Update Personal Information

**File: `components/Hero.tsx`**
- Line 52: Change email
- Line 57: Change location
- Lines 94-107: Add your GitHub and LinkedIn URLs

**File: `components/About.tsx`**
- Lines 36-56: Edit your about text

### B. Update Projects

**File: `components/Projects.tsx`**
- Lines 167-195: Replace "#" with your actual links:
  - Demo video link (Google Drive)
  - GitHub repository link
  - Live project link

### C. Update Certificates

**File: `components/Certificates.tsx`**
- Lines 105-115: Replace "#" with Google Drive certificate links

### D. Update Contact Links

**File: `components/Contact.tsx`**
- Lines 78-85: Add LinkedIn URL
- Lines 87-94: Add GitHub URL

---

## STEP 6: Upload Files to Google Drive

### For Certificates:
1. Go to drive.google.com
2. Click **New** → **File upload**
3. Upload your HP LIFE certificate image
4. Upload your 100xDevs certificate image
5. For each file:
   - Right-click → **Get link**
   - Change to **"Anyone with the link can view"**
   - Click **Copy link**
   - Paste in your code (replace the "#")

### For Project Video:
1. Upload your screen recording to Google Drive
2. Right-click → **Get link**
3. Change to **"Anyone with the link can view"**
4. Copy link and paste in `components/Projects.tsx`

---

## STEP 7: Test All Features

### Check Navigation:
- Click each menu item (Home, About, Skills, etc.)
- Should smoothly scroll to that section
- URL should update with #section-name

### Check Buttons:
- Click "Get In Touch" - scrolls to contact
- Click "View Projects" - scrolls to projects
- Click certificate buttons - should open Google Drive links
- Click project buttons - should work

### Check Responsiveness:
1. Press **F12** in browser
2. Click the device icon (top-left)
3. Test different screen sizes:
   - Mobile (375px)
   - Tablet (768px)
   - Desktop (1920px)

---

## STEP 8: Deploy Your Portfolio

### Option A: Deploy to Vercel (EASIEST)

1. Go to https://vercel.com
2. Sign up with GitHub
3. Click **"Add New Project"**
4. Import your portfolio from GitHub
5. Click **"Deploy"**
6. Done! You'll get a URL like: `yourname.vercel.app`

### Option B: Deploy to Netlify

1. Go to https://netlify.com
2. Sign up
3. Drag and drop your portfolio folder
4. Wait for deployment
5. Done! You'll get a URL

---

## 🎨 CUSTOMIZATION TIPS

### Change Colors:

**File: `tailwind.config.js`**
```javascript
colors: {
  primary: '#2563eb',    // Main blue color
  secondary: '#1e40af',  // Dark blue
  accent: '#3b82f6',     // Light blue
}
```

Change these hex codes to your preferred colors!

### Change Fonts:

**File: `app/layout.tsx`**
```typescript
import { Inter } from 'next/font/google'
```
Replace `Inter` with any Google Font name

---

## 🐛 TROUBLESHOOTING

### Problem: npm install fails
**Solution:**
```bash
npm cache clean --force
npm install
```

### Problem: Port 3000 already in use
**Solution:**
```bash
npm run dev -- -p 3001
```
Then visit: http://localhost:3001

### Problem: Changes not showing
**Solution:**
1. Save all files (Ctrl + S)
2. Refresh browser (Ctrl + F5)
3. If still not working, restart dev server:
   - Press Ctrl + C in terminal
   - Run: `npm run dev` again

### Problem: Smooth scroll not working
**Solution:**
- Make sure all section IDs match exactly
- Hero section has `id="home"`
- About section has `id="about"`
- Skills section has `id="skills"`
- etc.

---

## 📱 TESTING CHECKLIST

- [ ] All navigation buttons work
- [ ] Smooth scrolling works
- [ ] Mobile responsive (test on phone)
- [ ] All animations work
- [ ] Contact form opens email
- [ ] Certificate links open Google Drive
- [ ] Project links work
- [ ] GitHub/LinkedIn links work
- [ ] Footer links work

---

## 🚀 GOING LIVE

### Before Deployment:
1. ✅ Replace ALL placeholder links
2. ✅ Add real certificate links
3. ✅ Add real project links
4. ✅ Add real social media links
5. ✅ Test on multiple devices
6. ✅ Check spelling and grammar

### After Deployment:
1. Share your portfolio URL!
2. Add URL to your resume
3. Add URL to LinkedIn
4. Share with recruiters

---

## 💡 PRO TIPS

1. **SEO**: Edit `app/layout.tsx` metadata for better Google ranking
2. **Analytics**: Add Google Analytics to track visitors
3. **Domain**: Buy a custom domain (yourname.com) for $10/year
4. **Updates**: Keep adding new projects as you build them
5. **Backup**: Push code to GitHub regularly

---

## 📞 NEED HELP?

If you're stuck:
1. Check the error message in terminal/console
2. Google the error message
3. Check Next.js documentation: https://nextjs.org/docs
4. Check Tailwind documentation: https://tailwindcss.com/docs

---

## ✅ FINAL CHECKLIST

Before you deploy:
- [ ] Installed Node.js
- [ ] Ran npm install successfully
- [ ] Portfolio loads on localhost:3000
- [ ] Updated all personal information
- [ ] Uploaded certificates to Google Drive
- [ ] Added all certificate links
- [ ] Uploaded project video
- [ ] Added all project links
- [ ] Added GitHub URL
- [ ] Added LinkedIn URL
- [ ] Tested all navigation
- [ ] Tested on mobile
- [ ] Ready to deploy!

---

**🎉 Congratulations! Your portfolio is ready to impress recruiters!**

Good luck with your job search! 🚀
