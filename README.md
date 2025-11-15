# Vansh Singh - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- ✨ **Smooth Animations**: Beautiful page transitions and scroll animations using Framer Motion
- 📱 **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- 🎨 **Modern Design**: Clean, professional design with gradient effects
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal speed
- 🎯 **Smooth Navigation**: One-page layout with smooth scrolling to sections
- 🔧 **Easy to Customize**: Well-organized code structure

## 📋 Sections

1. **Hero** - Eye-catching introduction with call-to-action buttons
2. **About** - Professional summary and background
3. **Skills** - Technical skills organized by category with icons
4. **Projects** - Featured projects with detailed descriptions
5. **Certificates** - Professional certifications
6. **Education** - Academic background
7. **Contact** - Contact form and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Google Fonts (Inter)

## 📦 Installation

1. **Navigate to the portfolio folder:**
   ```bash
   cd C:\Users\HP\Desktop\portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 🎨 Customization Guide

### Update Your Information

1. **Personal Details**: Edit `components/Hero.tsx`
2. **About Section**: Edit `components/About.tsx`
3. **Skills**: Edit `components/Skills.tsx`
4. **Projects**: Edit `components/Projects.tsx`
5. **Certificates**: Edit `components/Certificates.tsx`
6. **Education**: Edit `components/Education.tsx`

### Add Your Links

Replace placeholder links with your actual URLs:

- **GitHub**: Search for `https://github.com/yourusername`
- **LinkedIn**: Search for `https://linkedin.com/in/yourusername`
- **Project Demo**: Update links in `components/Projects.tsx`
- **Certificates**: Add Google Drive links in `components/Certificates.tsx`

### Change Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#2563eb',    // Change this
      secondary: '#1e40af',  // Change this
      accent: '#3b82f6',     // Change this
    },
  },
}
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navigation.tsx      # Navigation bar
│   ├── Hero.tsx           # Hero section
│   ├── About.tsx          # About section
│   ├── Skills.tsx         # Skills section
│   ├── Projects.tsx       # Projects section
│   ├── Certificates.tsx   # Certificates section
│   ├── Education.tsx      # Education section
│   ├── Contact.tsx        # Contact section
│   └── Footer.tsx         # Footer
├── public/                # Static files (add images here)
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── next.config.js
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site"
4. Connect to GitHub and select your repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Click "Deploy"

## 📝 To-Do After Setup

- [ ] Replace all placeholder links with your actual URLs
- [ ] Upload certificates to Google Drive and add links
- [ ] Upload project demo video and add link
- [ ] Add your GitHub profile URL
- [ ] Add your LinkedIn profile URL
- [ ] Add project repository links
- [ ] Test all navigation buttons
- [ ] Test on mobile devices
- [ ] Deploy to production

## 🎯 Key Features Explanation

### Smooth Scrolling
All navigation buttons use smooth scrolling to sections. The scroll offset is set to 80px to account for the fixed navigation bar.

### Animations
- **Scroll animations**: Sections animate when they come into view
- **Hover effects**: Cards and buttons have smooth hover animations
- **Page load**: Elements fade in and slide up on initial load

### Responsive Design
- Mobile: Single column layout
- Tablet: 2-column grid for skills and certificates
- Desktop: 3-column grid for skills

## 🐛 Troubleshooting

### If npm install fails:
```bash
npm cache clean --force
npm install
```

### If port 3000 is in use:
```bash
npm run dev -- -p 3001
```

### If animations don't work:
Make sure Framer Motion is installed:
```bash
npm install framer-motion
```

## 📞 Support

If you encounter any issues:
1. Check the console for errors
2. Make sure all dependencies are installed
3. Verify Node.js version (should be 18+)

## 📄 License

This project is open source and available for personal use.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**
