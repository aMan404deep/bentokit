# README.md

# BentoKit 🧩

A lightweight, fully customizable Bento-style UI library you can use in **HTML**, **CSS**, and **React**.

## ✨ Features
- BentoCard, Grid, Image, Button components
- Themeable & style-agnostic
- Use with or without React
- Storybook-powered live preview
- Ready for NPM publishing

## 📦 Installation

```bash
npm install bentokitui
```

## 🛠 Usage

### React
```jsx
import { BentoCard, BentoGrid } from 'bentokit';
import 'bentokit/styles/bentokit.css';

<BentoGrid columns={3}>
  <BentoCard title="Hi!" description="I'm a Bento card" />
</BentoGrid>
```

### HTML/CSS
```html
<link rel="stylesheet" href="./styles/bentokit.css" />
<div class="bento-card">Simple HTML Bento Card</div>
```

## 📚 Docs & Examples
- Live Examples: `examples/examples.html`
- Storybook: `npm run storybook`
- Landing Page: `docs/index.html`

## 🧪 Dev
```bash
npm run dev         # Vite
npm run storybook   # Storybook
```

## 📦 Build
```bash
npm run build
```

---
Made with ❤️ for modern UI lovers.