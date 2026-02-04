# Modern Portfolio Website

A fully responsive, modern, and professional personal portfolio website built with React, TypeScript, MUI, and Vite following the atomic design pattern.

## Features

- **Modern Design**: Clean, attractive, and professional UI with consistent theme colors
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Framer Motion animations for sections, buttons, and hover effects
- **Atomic Design Pattern**: Well-structured, reusable components (atoms, molecules, organisms, templates, pages)
- **MUI Components**: Material-UI for consistent and accessible components
- **Smooth Scrolling**: Seamless navigation between sections
- **Production Ready**: TypeScript for type safety and scalability

## Project Structure

```
src/
├── components/
│   ├── atoms/
│   │   ├── CustomButton.tsx
│   │   └── SectionTitle.tsx
│   ├── molecules/
│   │   ├── ProjectCard.tsx
│   │   ├── SkillChip.tsx
│   │   └── SocialLink.tsx
│   ├── organisms/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Navigation.tsx
│   │   └── Footer.tsx
│   ├── templates/
│   │   └── PortfolioTemplate.tsx
│   ├── pages/
│   │   └── HomePage.tsx
│   └── index.ts
├── theme/
│   └── theme.ts
├── App.tsx
├── main.tsx
└── index.css
```

## Sections

1. **Hero Section**: Landing page with profile image, name, and introduction
2. **About Me**: Personal background and key features
3. **Skills**: Technical skills with visual indicators
4. **Projects**: Showcase of work with clickable project cards
5. **Contact**: Contact information, social media links, and resume download button
6. **Footer**: Copyright and attribution

## Technologies Used

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe code
- **Vite**: Fast build tool and dev server
- **Material-UI (MUI)**: Component library
- **Framer Motion**: Animation library
- **Lucide React**: Icon library
- **Tailwind CSS**: Utility-first CSS (for base styling)

## Customization

### Update Personal Information

Edit the following files to customize with your information:

1. **Hero Section** (`src/components/organisms/Hero.tsx`):
   - Update name, title, and introduction
   - Change profile image URL

2. **About Section** (`src/components/organisms/About.tsx`):
   - Modify personal description and features

3. **Skills Section** (`src/components/organisms/Skills.tsx`):
   - Add/remove skills and skill levels

4. **Projects Section** (`src/components/organisms/Projects.tsx`):
   - Update projects array with your own projects
   - Change project images, descriptions, and links

5. **Contact Section** (`src/components/organisms/Contact.tsx`):
   - Update email, location, and social media links
   - Configure resume download link

### Theme Customization

Edit `src/theme/theme.ts` to customize:
- Color palette
- Typography
- Shadows
- Border radius
- Component styles

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Lint code
npm run lint
```

## Atomic Design Pattern

This project follows the atomic design methodology:

- **Atoms**: Basic building blocks (buttons, typography)
- **Molecules**: Simple component combinations (cards, chips)
- **Organisms**: Complex components (sections, navigation)
- **Templates**: Page layouts
- **Pages**: Specific instances of templates

## Responsive Breakpoints

- **Mobile**: < 600px
- **Tablet**: 600px - 960px
- **Desktop**: > 960px

## Performance

- Optimized images from Pexels
- Lazy loading for animations
- Code splitting ready
- Efficient re-renders with React best practices

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.
