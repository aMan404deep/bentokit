# BentoKitUI 🧩

A lightweight, fully customizable Bento-style UI library for modern interfaces in **HTML**, **CSS**, and **React**.

## ✨ Features
- **Complete Component Suite**: Cards, Grids, Buttons, Switches, Badges, Dividers and more
- **Rich Visual Effects**: Glass morphism, reflections, depth effects, glows, and animations
- **Theming**: Built-in themes (light, dark, cyber, pastel) and custom theme support
- **Flexible Integration**: Use with React or vanilla HTML/CSS
- **Responsive By Design**: Mobile-friendly with adaptive layouts
- **Developer Experience**: Storybook documentation and examples

## 📦 Installation

```bash
npm install bentokitui
```

## 🛠 Usage

### React
```jsx
import { BentoCard, BentoGrid, BentoButton } from 'bentokitui';
import { BentoThemeProvider } from 'bentokitui';
import 'bentokitui/styles/bentokit.css';

function App() {
  return (
    <BentoThemeProvider theme="cyber">
      <BentoGrid columns={3} gap="1.5rem">
        <BentoCard 
          title="Welcome!" 
          description="I'm a Bento card with glow effect" 
          glow 
        />
        <BentoCard 
          title="Glass Card" 
          description="This card has glass morphism effect" 
          glass 
        />
        <BentoCard depth>
          <BentoButton label="Click Me!" variant="primary" ripple />
        </BentoCard>
      </BentoGrid>
    </BentoThemeProvider>
  );
}
```

### HTML/CSS
```html
<link rel="stylesheet" href="./styles/bentokit.css" />

<div class="bento-theme-dark">
  <div class="bento-grid" style="grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
    <div class="bento-card bento-glow">
      <h3 class="bento-title">Welcome!</h3>
      <p class="bento-description">I'm a Bento card with glow effect</p>
    </div>
    <div class="bento-card bento-glass">
      <h3 class="bento-title">Glass Card</h3>
      <p class="bento-description">This card has glass morphism effect</p>
    </div>
    <div class="bento-card bento-depth">
      <button class="bento-button bento-button-ripple">Click Me!</button>
    </div>
  </div>
</div>
```

## 🧩 Components

### Core Components
- **BentoCard**: Versatile container with multiple visual effects
- **BentoGrid**: Responsive grid layout system
- **BentoButton**: Customizable buttons with different variants and animations
- **BentoImage**: Image component with zoom, rotate, and reflection effects

### Advanced Components
- **BentoSwitch**: Toggle switch with customizable sizes and colors
- **BentoBadge**: Notification badges with various styles
- **BentoProgressBar**: Progress indicators with animation options
- **BentoSpinner**: Loading spinners with size and color options
- **BentoDivider**: Horizontal/vertical dividers with text support

### Theming
- **BentoThemeProvider**: Theme context provider with built-in and custom themes

## 🎨 Themes & Effects

### Built-in Themes
- **Default**: Dark modern interface
- **Light**: Bright clean interface 
- **Cyber**: Neon futuristic style
- **Pastel**: Soft color palette

### Visual Effects
- **Glass**: Glass morphism effect with backdrop blur
- **Glow**: Subtle glow effect on hover
- **Depth**: 3D depth effect with shadows
- **Reflection**: Light reflection effect
- **Border Highlight**: Accent-colored borders

### Animations
- **Float**: Gentle floating animation
- **Pulse**: Subtle pulsing effect
- **Breathe**: Breathing glow animation
- **Ripple**: Water ripple effect for buttons

## 📚 Docs & Examples
- Live Examples: `examples/examples.html`
- Storybook: `npm run storybook`
- Landing Page: `docs/index.html`

## 🧪 Development
```bash
npm run dev         # Vite dev server
npm run storybook   # Storybook documentation
```

## 📦 Build
```bash
npm run build       # Build library
npm run build-storybook # Build static Storybook
```

---
Made with ❤️ for modern UI lovers.