<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Portfolio Website - Copilot Instructions

This is an Astro-based portfolio website with Vue.js integration. The project is designed to showcase projects, blog posts, and personal information.

## Project Structure

- **Framework**: Astro 5.x with Vue 3 integration
- **Styling**: Tailwind CSS v4
- **Content**: MDX for blog posts and portfolio case studies
- **Deployment**: GitHub Pages with GitHub Actions

## Key Technologies

- Astro for static site generation and routing
- Vue 3 with Composition API for interactive components
- TypeScript for type safety
- Tailwind CSS for styling
- MDX for content with embedded components

## File Organization

```
src/
├── components/        # Vue components
├── layouts/          # Astro layouts
├── pages/            # Astro pages and routing
├── content/          # MDX content (blog, portfolio)
├── styles/           # Global styles
└── types/            # TypeScript type definitions
```

## Content Collections

- **blog**: Blog posts in MDX format with frontmatter
- **portfolio**: Project case studies with detailed information

## Development Guidelines

1. Use TypeScript for all new code
2. Follow Vue 3 Composition API patterns
3. Use Tailwind CSS for styling
4. Implement responsive design mobile-first
5. Optimize for performance and SEO
6. Use proper semantic HTML

## Component Guidelines

- Use `client:load` directive for components that need immediate hydration
- Use `client:visible` for components that should hydrate when visible
- Keep components focused and reusable
- Use TypeScript interfaces for props

## Content Guidelines

- Blog posts should include proper frontmatter with title, description, date, and tags
- Portfolio items should include technologies, links, and detailed case studies
- Use meaningful alt text for images
- Follow accessibility best practices

## Deployment

The site is configured for GitHub Pages deployment with automatic builds on push to main branch. The base URL is configured for the repository name.

## Common Tasks

- Add new blog posts to `src/content/blog/`
- Add new portfolio items to `src/content/portfolio/`
- Update navigation in `src/layouts/Layout.astro`
- Add new pages to `src/pages/`
- Create reusable components in `src/components/`

When working with this project, prioritize performance, accessibility, and maintainability.
