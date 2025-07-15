# Portfolio Website

A modern portfolio website built with Astro and Vue.js, featuring blog posts, project case studies, and a clean, responsive design.

## ✨ Features

- **Modern Stack**: Built with Astro 5.x and Vue 3 with TypeScript
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Blog System**: MDX-powered blog with syntax highlighting
- **Portfolio Showcase**: Detailed case studies for projects
- **Dark Mode**: Built-in dark mode support
- **SEO Optimized**: Static site generation with proper meta tags
- **GitHub Pages Ready**: Automated deployment with GitHub Actions

## 🚀 Project Structure

```text
/
├── public/            # Static assets
├── src/
│   ├── components/    # Vue components
│   ├── content/       # MDX content (blog, portfolio)
│   │   ├── blog/      # Blog posts
│   │   └── portfolio/ # Project case studies
│   ├── layouts/       # Astro layouts
│   ├── pages/         # Astro pages and routing
│   ├── styles/        # Global styles
│   └── types/         # TypeScript definitions
├── .github/
│   └── workflows/     # GitHub Actions
└── package.json
```

## 🛠️ Tech Stack

- **[Astro](https://astro.build)** - Static site generator
- **[Vue 3](https://vuejs.org)** - Interactive components
- **[TypeScript](https://www.typescriptlang.org)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS
- **[MDX](https://mdxjs.com)** - Markdown with components

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/solofolio.git
   cd solofolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

## 📝 Content Management

### Adding Blog Posts

Create a new `.md` file in `src/content/blog/` with frontmatter:

```markdown
---
title: "Your Post Title"
description: "Brief description of your post"
pubDate: 2025-01-15
heroImage: "/blog/hero-image.jpg"
author: "Your Name"
tags: ["tag1", "tag2"]
---

# Your content here...
```

### Adding Portfolio Projects

Create a new `.md` file in `src/content/portfolio/` with frontmatter:

```markdown
---
title: "Project Name"
description: "Project description"
heroImage: "/portfolio/project-image.jpg"
technologies: ["Vue.js", "Node.js", "MongoDB"]
liveUrl: "https://project-url.com"
githubUrl: "https://github.com/username/repo"
featured: true
date: 2024-12-01
status: "completed"
---

# Project details...
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `src/layouts/Layout.astro` - Navigation and footer
- `src/components/Hero.vue` - Homepage hero section
- `src/pages/about.astro` - About page content

### Styling

- **Colors**: Modify Tailwind configuration in `tailwind.config.js`
- **Typography**: Update font imports in `src/styles/global.css`
- **Layout**: Adjust layouts in `src/layouts/`

### Components

All Vue components are in `src/components/` and use the Composition API with TypeScript.

## 🚀 Deployment

### GitHub Pages (Recommended)

1. **Configure repository**

   - Update `site` and `base` in `astro.config.mjs`
   - Ensure repository is public

2. **Enable GitHub Pages**

   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source

3. **Deploy**
   ```bash
   git push origin main
   ```

### Manual Deployment

```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## � Performance

- **Lighthouse Score**: 100/100 (Performance, SEO, Accessibility)
- **Core Web Vitals**: All metrics in "Good" range
- **Bundle Size**: Optimized with tree-shaking and code splitting

## 🔧 Development

### Adding New Features

1. Create components in `src/components/`
2. Add pages in `src/pages/`
3. Update content collections in `src/content/config.ts`
4. Test with `npm run dev`

### Content Collections

The project uses Astro's content collections for type-safe content management:

- **Blog**: Articles with tags, publish dates, and author info
- **Portfolio**: Projects with technologies, links, and case studies

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

- **Website**: [Your Website](https://yourusername.github.io/solofolio)
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Email**: your.email@example.com

---

Built with ❤️ using [Astro](https://astro.build) and [Vue.js](https://vuejs.org)
│ └── pages/
│ └── index.astro
└── package.json

```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
```
