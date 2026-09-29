import {
  DEFAULT_PLACEHOLDER_IMAGE,
  TECH_PLACEHOLDER_IMAGE,
  DESIGN_PLACEHOLDER_IMAGE,
  WRITING_PLACEHOLDER_IMAGE
} from "./utils/imageUtils";

// Key used in localStorage
const postKey = "post";

const DEFAULT_POSTS = [
  {
    id: "1",
    title: "Designing Modern Web Apps with React 19 & Clean Architecture",
    summary: "Explore modern design systems, fluid layouts, and state management techniques that power production-grade web applications.",
    author: "Alex Morgan",
    date: "9/25/2026",
    imageUrl: TECH_PLACEHOLDER_IMAGE,
    blogContent: `## Introduction to Modern Web Application Design

Building scalable, beautiful web applications requires a thoughtful combination of **solid architecture**, **accessible design systems**, and **responsive layouts**. In this article, we'll dive deep into best practices for React 19 applications.

### Key Architectural Principles

1. **Component Scoping**: Keep components small, focused, and single-purpose.
2. **Design Tokens**: Standardize colors, spacing, and typography using CSS custom properties.
3. **Responsive Aesthetics**: Design with mobile-first fluidity in mind.

\`\`\`jsx
function WelcomeCard({ user }) {
  return (
    <div className="card">
      <h3>Welcome back, {user.name}!</h3>
    </div>
  );
}
\`\`\`

> "Good design is as little design as possible." — Dieter Rams

Stay tuned for more updates as we continue expanding our web engineering toolkit!`
  },
  {
    id: "2",
    title: "Mastering CSS Grid & Dark Mode Themes in SaaS Interfaces",
    summary: "A practical guide to creating adaptive UI themes, glassmorphism cards, and fluid grid layouts with CSS native variables.",
    author: "Elena Rostova",
    date: "9/20/2026",
    imageUrl: DESIGN_PLACEHOLDER_IMAGE,
    blogContent: `## Crafting Polished SaaS Dashboards

User interface design has evolved rapidly. Today's web users expect **instant responsiveness**, **dark mode compatibility**, and **silky micro-interactions**.

### Why Dark Mode Matters

Dark mode isn't just an aesthetic choice — it reduces eye strain during long writing and browsing sessions. Here is how we structure CSS custom variables:

\`\`\`css
:root {
  --bg-primary: #ffffff;
  --text-primary: #0f172a;
}

[data-theme="dark"] {
  --bg-primary: #0b0f17;
  --text-primary: #f8fafc;
}
\`\`\`

### Responsive Layout Strategy

- **Desktop (1200px+)**: Multi-column grid layout with sidebar filters.
- **Tablet (768px)**: 2-column stacked layout with full-width preview images.
- **Mobile (<480px)**: Single column stream with optimized touch targets.`
  },
  {
    id: "3",
    title: "The Art of Writing Markdown-Driven Technical Blogs",
    summary: "Learn how markdown rendering transforms simple text into beautifully formatted technical documentation and blog posts.",
    author: "Marcus Chen",
    date: "9/15/2026",
    imageUrl: WRITING_PLACEHOLDER_IMAGE,
    blogContent: `## Why Markdown Wins for Content Creators

Markdown remains the gold standard for developer-focused blogging platforms. It decouples **content creation** from **presentation markup**.

### Features of Markdown Support

- **Rich Headings**: Easily organize ideas with hierarchical headers.
- **Code Highlighting**: Share snippet examples directly in your post.
- **Blockquotes**: Highlight key takeaways or quotes.

> Markdown lets you focus on what matters most: your ideas and writing.`
  }
];

export function savePosts(posts) {
  try {
    localStorage.setItem(postKey, JSON.stringify(posts));
  } catch (error) {
    console.error("Error saving posts to localStorage:", error);
  }
}

export function loadPosts() {
  try {
    const stored = localStorage.getItem(postKey);
    if (stored !== null) {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.map((p, idx) => ({
          ...p,
          imageUrl: p.imageUrl || [TECH_PLACEHOLDER_IMAGE, DESIGN_PLACEHOLDER_IMAGE, WRITING_PLACEHOLDER_IMAGE][idx % 3] || DEFAULT_PLACEHOLDER_IMAGE
        }));
      }
    }
    savePosts(DEFAULT_POSTS);
    return DEFAULT_POSTS;
  } catch (error) {
    console.error("Error loading posts from localStorage:", error);
    return DEFAULT_POSTS;
  }
}

