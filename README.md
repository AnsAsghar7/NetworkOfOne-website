# NetworkOf.One Website

[![Next.js](https://img.shields.io/badge/Next.js-14.0.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

A modern, responsive website for NetworkOf.One - an AI-powered scheduling and XRPL payments platform. Built with Next.js, React, and Tailwind CSS, featuring an engaging intro video overlay and fully mobile-optimized design.

![NetworkOf.One Website Preview](https://via.placeholder.com/800x400/fcb315/0a2e2f?text=NetworkOf.One+Website)

## 🚀 Live Demo

**[View Live Website](https://networkofone-website.vercel.app)** *(Deploy to see it live)*

## ✨ Features

### 🎬 **Interactive Video Experience**
- **Intro Video Overlay**: 17-second showcase video with auto-fade
- **Progress Tracking**: Real-time countdown with visual progress bar
- **Skip Functionality**: User-controlled with dynamic countdown timer
- **Mobile Optimized**: `playsInline` support for iOS/Android

### 📱 **Mobile-First Design**
- **Responsive Layout**: Perfect on all devices (mobile, tablet, desktop)
- **Touch Optimized**: 44px minimum touch targets for iOS/Android
- **Mobile Navigation**: Hamburger menu with touch-friendly interactions
- **Viewport Scaling**: 90vw width ensures full-screen utilization

### 🎨 **Modern UI/UX**
- **Professional Design**: Clean, modern aesthetic with smooth animations
- **Brand Colors**: Gold primary (#fcb315), Deep navy (#0f373e) theme
- **Smooth Animations**: Reveal-on-scroll, floating elements, scale transitions
- **Accessibility**: Respects `prefers-reduced-motion` settings

### 📊 **Content Sections**
- **Hero Section**: AI-powered scheduling and XRPL payments introduction
- **About**: Company overview with founder information
- **How It Works**: 6-step process workflow
- **Technical Overview**: XRPL integration, security, architecture
- **Roadmap**: 12-month development timeline
- **Market Analysis**: Revenue targets and monetization strategy
- **Demo Section**: Video demonstration and screenshots
- **Contact Forms**: Join network and general contact forms

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Frontend**: [React 18](https://reactjs.org/) with TypeScript
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- **Video**: MP4 with mobile optimization
- **Icons**: SVG icons with custom styling

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/AnsAsghar7/NetworkOfOne-website.git
   cd NetworkOfOne-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗️ Project Structure

```
NetworkOfOne-Website/
├── app/
│   ├── globals.css          # Global styles with Tailwind
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── public/
│   └── assets/
│       └── img/             # Images and videos
│           ├── intro.mp4    # Main intro video
│           ├── logo-white.jpg
│           └── logo-transparent.jpeg
├── assets/                  # Source assets
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # Tailwind configuration
├── next.config.js           # Next.js configuration
├── tsconfig.json            # TypeScript configuration
└── README.md               # This file
```

## 🎯 Key Components

### Video Integration
- **Intro Overlay**: Full-screen video with progress tracking
- **Hero Video**: Floating video container in hero section
- **Demo Video**: Interactive video player with controls

### Responsive Design
- **Mobile**: 95vw width, 65vh height
- **Desktop**: 90vw width, 75vh height
- **Touch Targets**: Minimum 44px for accessibility

### Forms & Interactions
- **Join Network Form**: Multi-field form with validation
- **Contact Form**: Professional contact with success states
- **Mobile Menu**: Touch-optimized navigation

## 🎨 Design System

### Colors
```css
--gold: #fcb315        /* Primary CTA, highlights */
--deep: #0f373e        /* Deep navy for text/bg */
--aqua: #37e7e2        /* Focus/success states */
--bg-soft: #f7f9fb     /* Soft page background */
--ink-1: #0a2e2f       /* Primary text */
--ink-2: #6b7a7a       /* Muted text */
```

### Typography
- **Headings**: Bold, modern hierarchy
- **Body**: Inter font, 16px base (prevents mobile zoom)
- **Mobile**: Responsive scaling for readability

### Animations
- **Reveal on Scroll**: Smooth element entrance
- **Floating Elements**: Subtle hover animations
- **Scale Transitions**: Professional micro-interactions

## 📱 Mobile Optimizations

### iOS/Android Support
- **Video**: `playsInline` prevents fullscreen takeover
- **Fonts**: 16px minimum prevents zoom on input focus
- **Touch**: Proper highlight removal and tap targets
- **Scrolling**: Momentum scrolling support

### Performance
- **Lazy Loading**: Optimized resource loading
- **Video Optimization**: Proper codec and compression
- **CSS**: Minimal, efficient styling
- **Images**: Optimized formats and sizes

## 🚀 Deployment

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Production Deployment

**Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
- Build command: `npm run build`
- Publish directory: `.next`

**Custom Server**
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏢 About NetworkOf.One

NetworkOf.One unifies scheduling, payments, and communication in a single mobile-first experience. Starting in the Oregon sports market with 150-175 officials, then expanding West Coast, USA, and globally.

### Key Features
- **AI-Powered Scheduling**: Intelligent game creation and assignment
- **XRPL Payments**: Fast, low-cost blockchain payments
- **Real-Time Communication**: Instant notifications and updates
- **Multi-Platform**: Web and mobile applications

### Technical Highlights
- **XRPL Integration**: Payment Channels, Hooks, Multi-currency
- **Security**: Multi-sig wallets, MFA, encrypted keys
- **Architecture**: Modular services, real-time analytics
- **Performance**: 3-4s settlement, ~0.000015 XRP fees

## 📞 Contact

- **Website**: [NetworkOf.One](https://networkof.one)
- **Email**: contact@networkof.one
- **Location**: Oregon, USA
- **GitHub**: [@AnsAsghar7](https://github.com/AnsAsghar7)

## 🌟 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Fonts by [Google Fonts](https://fonts.google.com/)
- Icons and graphics custom designed

---

<div align="center">
  <p><strong>NetworkOf.One</strong> - Building the future of decentralized networking</p>
  <p>Made with ❤️ and ⚡ by the NetworkOf.One team</p>
</div>