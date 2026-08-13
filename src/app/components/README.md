# Component Structure - Atomic Design

This portfolio follows the Atomic Design methodology for a scalable and maintainable component architecture.

## Hierarchy

### Atoms
Basic building blocks - smallest functional components
- `AmbientGlow` - Slow-drifting blurred gradient orbs, the site's atmospheric background layer
- `Badge` - Colored tech stack badges
- `Button` - CTA buttons with variants and hover effects
- `FloatingShape` - Static/floating gradient shapes
- `GradientText` - Text with gradient color effects
- `GrainOverlay` - Fixed low-opacity film-grain texture layer
- `HudChrome` - `StatusTick` / `ScanSweep` HUD micro-chrome
- `HudLabel` - Section eyebrow/kicker label
- `Input` - Form inputs with floating labels and focus animations
- `ScrollProgress` - Top-of-page scroll progress bar
- `SpiderWebBackground` - Mouse-reactive canvas particle web
- `ThemeToggle` - Dark/light theme switch

### Molecules
Simple combinations of atoms
- `ProfileImage` - Hero section profile image with layered glow rings
- `ProjectCard` - Editorial project row (image + content, alternating sides)
- `SkillConstellation` - Web-constellation skill visualization (hub → category → tool nodes)
- `TimelineItem` - Individual timeline entries for experience section

### Organisms
Complex, standalone sections
- `About` - About section, bento grid (journey, what-i-do, stats)
- `Certificates` - Certificate showcase, bento grid
- `Contact` - Contact form and information section
- `Experience` - Work experience timeline with education
- `Footer` - Site footer with links and social media
- `Hero` - Main hero section with parallax background
- `LoadingScreen` - Initial loading animation screen
- `Navigation` - Floating pill navigation with active-section tracking
- `Projects` - Featured projects, alternating editorial rows
- `Skills` - Skills section wrapping `SkillConstellation`

### Templates
Page layout structures
- `PortfolioTemplate` - Main portfolio page layout combining all organisms

### Pages
Specific instances of templates
- `HomePage` - Main landing page with loading screen

## Design System

### Colors
Defined as CSS variables in `src/styles/theme.css` (dark is the primary/default theme):
- Primary (crimson): `#E11D2E` dark / `#C81D3A` light
- Accent (steel blue): `#4C6B8A` dark / `#2D4A63` light
- Gold: `#C9A227` dark / `#A9791F` light
- Background: `#0A0A0C` dark / `#FAFAF8` light

### Typography
- Headings: Space Grotesk / Playfair Display
- Body: Inter
- Premium shadow system for depth
- Glass morphism effects

### Animations
- Scroll-triggered reveal + parallax (`motion`'s `useScroll`/`useTransform`)
- Staggered reveal effects
- Smooth hover interactions, 3D tilt (`useTilt`), magnetic buttons (`useMagnetic`)
- Respects `prefers-reduced-motion` globally via `MotionConfig`
