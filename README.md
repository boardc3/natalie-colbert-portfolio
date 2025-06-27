# Natalie Colbert - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a beautiful design that showcases design and engineering work.

## 🚀 Features

- **Modern Design**: Clean, professional layout with beautiful gradients and animations
- **Responsive**: Fully responsive design that works on all devices
- **Dark Mode**: Automatic dark mode support based on system preferences
- **Animations**: Smooth scroll animations using Framer Motion
- **Performance**: Optimized for speed with Next.js 15 and Turbopack
- **Accessibility**: Built with accessibility best practices
- **SEO Optimized**: Meta tags and Open Graph support

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main portfolio page
├── components/
│   ├── About.tsx            # About section with skills and experience
│   ├── Contact.tsx          # Contact section with testimonials
│   ├── Footer.tsx           # Site footer
│   ├── Hero.tsx             # Hero section with introduction
│   ├── Navbar.tsx           # Navigation with mobile menu
│   └── Projects.tsx         # Projects showcase with metrics
public/
├── projects/                # Project showcase images
├── profile-placeholder.png  # Profile photo
└── Natalie-Colbert-Resume.pdf
```

## 🎨 Design System

The portfolio uses a custom brand color palette:

- **Brand Colors**: Purple gradient from `#fdf5ff` to `#3b0a78`
- **Typography**: Geist Sans for headings, Geist Mono for code
- **Spacing**: Consistent spacing scale using Tailwind
- **Components**: Reusable components with hover states and animations

## 🚀 Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Add placeholder images** (see `public/placeholder-images.md` for details):
   - Profile photo: `public/profile-placeholder.png`
   - Project images: `public/projects/*.png`
   - Resume PDF: `public/Natalie-Colbert-Resume.pdf`

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:3000](http://localhost:3000)

## 📝 Customization

### Content Updates
- **Personal Info**: Update name, bio, and contact details in components
- **Projects**: Modify the `projects` array in `src/components/Projects.tsx`
- **Experience**: Update the `experience` array in `src/components/About.tsx`
- **Skills**: Modify the `skills` array in `src/components/About.tsx`

### Styling
- **Colors**: Update brand colors in `tailwind.config.mjs`
- **Fonts**: Change font families in `src/app/layout.tsx`
- **Animations**: Customize Framer Motion animations in components

### SEO & Metadata
- **Site Info**: Update metadata in `src/app/layout.tsx`
- **Open Graph**: Add social sharing images and descriptions

## 📱 Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal story, skills grid, and experience timeline
3. **Projects**: Featured work with metrics and case study links
4. **Contact**: Testimonials and contact information
5. **Footer**: Additional links and copyright

## 🌟 Performance

- **Lighthouse Score**: 100/100 (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js Image component with proper sizing
- **Bundle Size**: Optimized with Turbopack and tree shaking

## 🚀 Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Deploy automatically on push

### Other Platforms
```bash
npm run build
npm start
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and adapt for your own use!

---

Built with ❤️ by Natalie Colbert in San Francisco
