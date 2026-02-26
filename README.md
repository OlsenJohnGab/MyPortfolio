# Olsen John Gabriel Provido — Portfolio

A modern single-page portfolio built with **React 18**, **Tailwind CSS v3**, and **Vite 5**.

## ✨ Features
- 🎬 **Curtain wipe transition** — 5-panel sweep effect on every navbar click
- 📱 **Slide-in drawer** — Mobile hamburger menu slides from the right
- 🔍 **Scroll reveal** — Sections animate in as you scroll
- 🌀 **Spinning ring** — Accent ring around the profile photo
- 🎯 **Active nav tracking** — Link highlights based on current scroll position
- 🎨 **Forest green theme** — Dark green with accent green (`#3ddc84`)
- 📐 **Fully responsive** — 1/2/3 column grid, stacked on mobile

## 📁 Project Structure

```
portfolio/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── components/
    │   ├── Navbar.jsx            ← Fixed navbar + hamburger drawer
    │   ├── CurtainTransition.jsx ← 5-panel curtain wipe
    │   └── Footer.jsx
    ├── sections/
    │   ├── HeroSection.jsx       ← Hero with photo, stats, CTAs
    │   ├── ProjectsSection.jsx   ← 3-column project grid
    │   ├── ExperienceSection.jsx ← Timeline + tech stack icons
    │   └── AboutSection.jsx      ← Bio + contact info cards
    └── hooks/
        └── useReveal.js          ← IntersectionObserver scroll reveal
```

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run dev server
```bash
npm run dev
```
Open http://localhost:5173

### 3. Build for production
```bash
npm run build
```

### 4. Preview production build
```bash
npm run preview
```

## 🖼️ Adding Your Profile Photo

In `src/sections/HeroSection.jsx`, replace the placeholder block:

```jsx
// Find this:
<div className="hero-img-placeholder">
  <i className="fas fa-user ..." />
  <span>Add your photo here</span>
</div>

// Replace with:
<img
  src="/your-photo.jpg"   // put your photo in the /public folder
  alt="Olsen John Gabriel Provido"
  className="w-full h-full object-cover"
/>
```

## 🎨 Customization

### Colors — `tailwind.config.js`
```js
colors: {
  forest: { 900: '#0B3D2E', ... },
  accent: { DEFAULT: '#3ddc84', ... },
}
```

### Fonts — `index.html`
Currently using **Syne** (display) + **DM Sans** (body). Replace the Google Fonts link to swap.

### Content — Edit the section files directly
- Hero text → `src/sections/HeroSection.jsx`
- Projects → `src/sections/ProjectsSection.jsx` (PROJECTS array)
- Experience → `src/sections/ExperienceSection.jsx` (EXPERIENCES + STACK arrays)
- About → `src/sections/AboutSection.jsx`

## 📦 Dependencies
- react ^18.3.1
- react-dom ^18.3.1
- vite ^5.4.1
- tailwindcss ^3.4.7
- autoprefixer ^10.4.19
- postcss ^8.4.40
- @vitejs/plugin-react ^4.3.1
