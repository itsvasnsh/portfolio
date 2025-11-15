# ⚡ QUICK START GUIDE - Portfolio

## 🚀 Get Started in 5 Minutes!

### Step 1: Open Terminal in VS Code
Press `Ctrl + ~` (backtick key)

### Step 2: Install Everything
```bash
npm install
```
Wait 2-3 minutes...

### Step 3: Start Your Portfolio
```bash
npm run dev
```

### Step 4: Open Browser
Go to: **http://localhost:3000**

🎉 **Done! Your portfolio is live!**

---

## 🔧 Must Update Before Deploying

### 1. Hero Section (`components/Hero.tsx`)
- [ ] Line 94: Add your GitHub URL
- [ ] Line 104: Add your LinkedIn URL

### 2. Projects (`components/Projects.tsx`)
- [ ] Line 167: Add demo video link
- [ ] Line 177: Add GitHub repo link
- [ ] Line 187: Add live project link

### 3. Certificates (`components/Certificates.tsx`)
- [ ] Line 105: Add HP LIFE certificate link
- [ ] Line 115: Add 100xDevs certificate link

### 4. Contact (`components/Contact.tsx`)
- [ ] Line 78: Add LinkedIn URL
- [ ] Line 88: Add GitHub URL

---

## 📁 Upload to Google Drive

### For Each File (Certificates + Video):
1. Go to drive.google.com
2. Upload file
3. Right-click → "Get link"
4. Change to "Anyone with link can view"
5. Copy link
6. Paste in your code

---

## 🎨 Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#2563eb',    // Change this!
  secondary: '#1e40af',  // Change this!
  accent: '#3b82f6',     // Change this!
}
```

---

## 🚢 Deploy (Choose One)

### Vercel (Easiest):
1. Go to vercel.com
2. Sign up with GitHub
3. Import your project
4. Click Deploy
5. Done!

### Netlify:
1. Go to netlify.com
2. Drag & drop your folder
3. Wait for deployment
4. Done!

---

## 🐛 Common Issues

### npm install fails?
```bash
npm cache clean --force
npm install
```

### Port already in use?
```bash
npm run dev -- -p 3001
```
Then visit: http://localhost:3001

### Changes not showing?
1. Save file (Ctrl + S)
2. Refresh browser (Ctrl + F5)
3. Still not working? Restart:
   - Ctrl + C (stop server)
   - `npm run dev` (start again)

---

## 📝 Important Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
```

---

## ✅ Pre-Deployment Checklist

- [ ] Updated all personal info
- [ ] Added all Google Drive links
- [ ] Added GitHub & LinkedIn URLs
- [ ] Tested all navigation buttons
- [ ] Tested on mobile (F12 → device toolbar)
- [ ] All links work
- [ ] No errors in console (F12)

---

## 📞 Need Help?

1. Check SETUP_GUIDE.md for detailed instructions
2. Check TECH_STACK.md for technology details
3. Check console for errors (F12 in browser)

---

**🎯 Ready to impress recruiters! Good luck! 🚀**
