# Software Engineer Portfolio Website

A professional portfolio website built with Tailwind CSS, following production best practices.

## 🚀 Features

- **Production-Ready Tailwind CSS**: Optimized and minified CSS with purging
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Google reCAPTCHA**: Integrated form protection
- **SVG Assets**: Optimized SVG images organized in a structured folder system
- **Modern Structure**: Clean separation of concerns (HTML, CSS, JS)

## 📋 Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation

1. **Clone or download this repository**

2. **Install dependencies:**
   ```bash
   npm install
   ```

## 🎨 Development

### Watch Mode (Auto-rebuild on changes)
```bash
npm run dev
```
This will watch for changes in your HTML/JS files and automatically rebuild the CSS.

### Build for Production
```bash
npm run build
```
This generates an optimized, minified CSS file in `assets/css/styles.css`.

## 📁 Project Structure

```
WebPage/
├── assets/
│   ├── css/
│   │   └── styles.css          # Compiled CSS (generated - do not edit directly)
│   ├── images/
│   │   └── svg/                # SVG image assets
│   │       ├── logo-icon.svg
│   │       ├── hero-illustration.svg
│   │       ├── web-design-icon.svg
│   │       ├── programming-icon.svg
│   │       ├── consulting-icon.svg
│   │       └── about-illustration.svg
│   └── js/
│       └── script.js           # JavaScript functionality
├── src/
│   └── input.css              # Tailwind source file (edit this)
├── index.html                  # Main HTML file
├── package.json                # Node.js dependencies and scripts
├── tailwind.config.js          # Tailwind CSS configuration
├── postcss.config.js           # PostCSS configuration
└── README.md                   # This file
```

## ⚙️ Configuration

### Tailwind CSS Configuration

The `tailwind.config.js` file is configured to:
- Scan all HTML files for used classes
- Scan JavaScript files for dynamic class usage
- Purge unused CSS in production builds
- Optimize for minimal file size

### Content Paths

Tailwind scans these paths for class usage:
- `./index.html`
- `./**/*.html` (all HTML files)
- `./assets/js/**/*.js` (all JavaScript files)

## 🎯 Best Practices Implemented

1. **CSS Purging**: Unused Tailwind classes are automatically removed in production
2. **Minification**: CSS is minified for optimal file size
3. **Autoprefixer**: Automatically adds vendor prefixes for browser compatibility
4. **Source Maps**: Can be enabled for development debugging
5. **Separated Concerns**: Source CSS (`src/input.css`) separate from compiled output
6. **Git Ignore**: Generated files are excluded from version control

## 📝 Custom Styles

To add custom CSS, edit `src/input.css` and use Tailwind's `@layer` directive:

```css
@layer base {
  /* Base styles */
}

@layer components {
  /* Component styles */
}

@layer utilities {
  /* Utility styles */
}
```

## 🔧 Google reCAPTCHA Setup

1. Get your site key from [Google reCAPTCHA Admin](https://www.google.com/recaptcha/admin)
2. Replace `YOUR_SITE_KEY_HERE` in `index.html` with your actual site key

## 🚢 Deployment

Before deploying:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Verify the build:**
   - Check that `assets/css/styles.css` exists and is minified
   - Test the website locally

3. **Deploy:**
   - Upload all files except `node_modules/`, `src/`, and config files
   - Ensure `assets/css/styles.css` is included (it's the compiled CSS)

## 📦 What to Deploy

Deploy these files/folders:
- `index.html`
- `assets/` (entire folder including compiled CSS)
- Any other static assets

Do NOT deploy:
- `node_modules/`
- `src/` (source files)
- `package.json`, `tailwind.config.js`, `postcss.config.js` (unless needed for CI/CD)

## 🐛 Troubleshooting

### CSS not updating?
- Make sure you've run `npm run build` after making changes
- Clear your browser cache
- Check that `assets/css/styles.css` was generated

### Classes not working?
- Verify the class is in your HTML/JS files
- Check `tailwind.config.js` content paths include your files
- Rebuild: `npm run build`

### Build errors?
- Ensure Node.js is installed: `node --version`
- Delete `node_modules/` and run `npm install` again
- Check for syntax errors in `tailwind.config.js`

## 📄 License

ISC

## 👤 Author

Software Engineer Portfolio

---

**Note**: Always run `npm run build` before deploying to production to ensure you have the latest optimized CSS.

