# GitHub Copilot Instructions for DevPortfolio

## Project Architecture

This is a **React 18 + TypeScript + Vite** portfolio site with three distinct themes (light, dark, neon) and a chatbot feature. The architecture follows React Router v6 for navigation with a shared layout pattern.

### Core Structure
- **Theme System**: Custom ThemeContext with three themes (`light`, `dark`, `neon`) that apply CSS classes to `document.documentElement` and manage localStorage persistence
- **Layout Pattern**: Uses React Router's `<Outlet />` with shared `<Navbar />` and `<Footer />` components in `Layout.tsx`
- **Animation**: Framer Motion with `AnimatePresence` for page transitions and micro-interactions
- **Styling**: Tailwind CSS with custom theme-specific color variables in `tailwind.config.js`

## Theme System Implementation

The theme system is the core architectural pattern - **all components must support all three themes**:

```tsx
// Always use conditional classes based on theme
const { theme } = useTheme();
className={`
  ${theme === 'light' ? 'bg-light-bg text-light-text' : ''}
  ${theme === 'dark' ? 'bg-dark-bg text-dark-text' : ''}
  ${theme === 'neon' ? 'bg-neon-bg text-neon-text' : ''}
`}
```

### Theme Color Conventions
- **Light**: `light-bg`, `light-primary`, `light-text`, etc.
- **Dark**: `dark-bg`, `dark-primary`, `dark-text`, etc.  
- **Neon**: `neon-bg`, `neon-primary` (teal/mint green), `neon-text`, etc.

## Component Patterns

### 1. Page Components
- Located in `/src/pages/` 
- Wrapped with Framer Motion for page transitions:
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.3 }}
>
```

### 2. Project Components
- `ProjectCard.tsx` expects `ProjectProps` interface with specific fields
- Uses both desktop and mobile image variants (`image`, `mobileImage`)
- Includes `demoUrl` and `githubUrl` for external links

### 3. Interactive Components
- Import `useTheme` hook for theme-aware styling
- Use Lucide React icons consistently (already imported: `ExternalLink`, `Github`, `User`, `Send`, etc.)
- Apply hover states with theme-appropriate colors

## ChatBot Implementation

The `ChatBot.tsx` component is a sophisticated conversational interface:
- **State Management**: Uses predefined response objects with options arrays
- **Message Interface**: `Message` type with `id`, `text`, `sender`, optional `options`
- **Action Patterns**: Options contain `action` functions for external links, email, clipboard operations
- **Responsive Design**: Mobile-first with fixed positioning (`fixed inset-0` mobile, `md:bottom-6 md:right-6` desktop)

### ChatBot Response Pattern
```tsx
const botResponses = {
  welcome: {
    text: "Message text",
    options: [
      {
        id: 'unique-id',
        text: 'Button text',
        action: () => handleBotResponse('next-response-key')
      }
    ]
  }
}
```

## Development Workflows

### Commands
- `npm run dev` - Start Vite dev server
- `npm run build` - Production build
- `npm run lint` - ESLint check
- `npm run preview` - Preview production build

### File Structure Rules
- **Components**: Organized by feature in `/src/components/[Feature]/`
- **Pages**: Route components in `/src/pages/`
- **Context**: Global state in `/src/context/`
- **Hooks**: Custom hooks in `/src/hooks/`

## Key Dependencies & Integrations

- **Framer Motion**: Use `motion` components for animations, `AnimatePresence` for conditional rendering
- **React Router v6**: Nested routes with shared layout via `<Outlet />`
- **Lucide React**: Icon library - prefer over other icon sets
- **Tailwind CSS**: Utility-first with custom theme variables defined in config

## Mobile-First Responsive Patterns

All components follow mobile-first design:
- Start with base mobile styles
- Use `md:` prefix for desktop breakpoints  
- ChatBot uses `h-[100dvh]` for mobile, `md:h-[calc(100vh-6rem)]` for desktop
- Navigation considers mobile touch targets and spacing

## Critical Files for Context

- `/src/context/ThemeContext.tsx` - Theme system implementation
- `/tailwind.config.js` - Theme color definitions and custom utilities
- `/src/components/Layout/Layout.tsx` - App shell and routing structure
- `/src/components/Contact/ChatBot.tsx` - Complex interactive component example