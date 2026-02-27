# Component Structure - Atomic Design

This portfolio follows the Atomic Design methodology for a scalable and maintainable component architecture.

## Hierarchy

### Atoms
Basic building blocks - smallest functional components
- `Badge` - Colored tech stack badges
- `Button` - CTA buttons with variants and hover effects
- `FloatingShape` - Animated background gradient shapes
- `GradientText` - Text with gradient color effects
- `Input` - Form inputs with floating labels and focus animations

### Molecules
Simple combinations of atoms
- `ProfileImage` - Hero section profile image with glow effect
- `ProjectCard` - Project showcase cards with image zoom and overlays
- `SkillCard` - Skill display cards with gradient backgrounds
- `TimelineItem` - Individual timeline entries for experience section

### Organisms
Complex, standalone sections
- `About` - About section with glass card layout and stats
- `Contact` - Contact form and information section
- `Experience` - Work experience timeline with education
- `Footer` - Site footer with links and social media
- `Hero` - Main hero section with animated background
- `LoadingScreen` - Initial loading animation screen
- `Navigation` - Sticky navigation with mobile menu
- `Projects` - Featured projects grid section
- `Skills` - Skills showcase with technology tags

### Templates
Page layout structures
- `PortfolioTemplate` - Main portfolio page layout combining all organisms

### Pages
Specific instances of templates
- `HomePage` - Main landing page with loading screen

## Design System

### Colors
- Royal Blue: #2563EB
- Emerald Green: #059669
- Soft Violet: #7C3AED
- Coral: #FF6B6B
- Champagne Gold: #C6A75E
- Background: #F8F9FB
- White Sections: #FFFFFF

### Typography
- Headings: Space Grotesk / Playfair Display
- Body: Inter
- Premium shadow system for depth
- Glass morphism effects

### Animations
- Scroll-triggered fade-up animations
- Staggered reveal effects
- Smooth hover interactions
- Floating gradient shapes
- Loading screen with progress bar
