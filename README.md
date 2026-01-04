# IRA FORCE - Enterprise Security Workforce Management Platform

![IRA FORCE](https://img.shields.io/badge/IRA%20FORCE-Security%20Platform-003594?style=for-the-badge&logo=shield&logoColor=white)
![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

A modern, enterprise-grade product website for IRA FORCE security workforce management platform. Built with React, Framer Motion animations, and optimized for GitHub Pages deployment.

## 🌟 Features

- **Modern Design**: Clean, minimalist interface with glassmorphism effects
- **Responsive**: Fully responsive across all device sizes
- **Animated**: Smooth scroll-triggered animations using Framer Motion
- **Fast**: Optimized for performance and SEO
- **Accessible**: Built with accessibility in mind

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- Git installed

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/iraforce-website.git
   cd iraforce-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open in browser**
   Navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📦 Deployment to GitHub Pages

### Automatic Deployment (Recommended)

This project includes a GitHub Actions workflow for automatic deployment.

1. **Push your code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/iraforce-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to your repository Settings
   - Navigate to "Pages" section
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically deploy on every push to main

3. **Access your site**
   Your site will be available at: `https://yourusername.github.io/iraforce-website`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run deploy
```

This uses gh-pages to deploy the build folder.

## 🎨 Customization

### Colors

Edit the CSS variables in `src/index.css`:

```css
:root {
  --primary-blue: #003594;
  --deep-navy: #002554;
  --cyan-accent: #13B5EA;
  --silver: #B3B3B3;
  --alert-yellow: #FFCD00;
}
```

### Content

Edit the content in `src/App.js`:
- Hero section text and statistics
- Feature cards and descriptions
- Pricing plans
- Testimonials
- Footer links

### Fonts

The site uses Google Fonts (Outfit). To change fonts:

1. Update the font import in `public/index.html`
2. Update the font-family in `src/index.css`

## 📁 Project Structure

```
iraforce-website/
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # Site favicon
├── src/
│   ├── App.js              # Main React component
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── .github/
│   └── workflows/
│       └── deploy.yml      # GitHub Actions workflow
├── package.json            # Dependencies
├── .gitignore             # Git ignore rules
└── README.md              # This file
```

## 🛠️ Tech Stack

- **React 18** - UI framework
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **React Intersection Observer** - Scroll animations
- **GitHub Actions** - CI/CD
- **GitHub Pages** - Hosting

## 📱 Sections

1. **Hero** - Main landing with animated dashboard preview
2. **Trust Badges** - Security certifications (SOC2, GDPR, ISO)
3. **Features** - Platform capabilities grid
4. **Command Center** - SOC showcase with live preview
5. **Pricing** - Three-tier pricing structure
6. **Testimonials** - Customer reviews
7. **CTA** - Call-to-action section
8. **Footer** - Links and contact info

## ⚡ Performance Tips

- Images are optimized and lazy-loaded
- CSS is minified in production
- Animations use GPU acceleration
- Code splitting enabled by default

## 🔧 Environment Variables

Create a `.env` file for custom configurations:

```env
PUBLIC_URL=/iraforce-website
REACT_APP_API_URL=https://api.iraforce.com
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🤝 Support

For support, email support@iraforce.com or visit our [Help Center](https://help.iraforce.com).

---

Made with ❤️ for the security industry
