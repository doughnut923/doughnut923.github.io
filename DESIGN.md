# Design System

## Typography

### Font Families
| Token | Font | Usage |
|-------|------|-------|
| `Primary-Font` | Helvetica Neue (Heavy/Medium/Light Italic) | Headings, spans |
| `Secondary-Font` | JetBrains Mono (Bold/Medium/Regular/Light) | Body text, links, buttons, code |

### Font Size Scale
| Size | Value | Usage |
|------|-------|-------|
| `text-xs` | 0.75rem | Captions |
| `text-sm` | 0.875rem | Callouts, descriptions |
| `text-lg` | 1.125rem | Nav links, social icons |
| `text-xl` | 1.25rem | Sliding text labels |
| `text-2xl` | 1.75rem (custom) | EST. labels |
| `text-3xl` | 2rem (custom) | Navbar brand |
| `text-4xl` | 2.25rem | Project card titles |
| `text-7xl` | 4.5rem | Mobile hero, CFA heading |
| `text-8xl` | 6rem | CFA heading (desktop) |
| `text-9xl` | 8rem | Background text, section watermarks |
| `text-xxl` | 12.25rem (custom) | Desktop hero name |

### Typography Rules
- Headings: `font-bold` (700), tight leading `leading-[0.65]` for hero text
- Body: `font-light` (300) or `font-thin` (100) for descriptions
- Captions: `text-xs`, `font-mono`, `text-gray-500`, centered
- Links: underline with `decoration-neutral-400/600`, `underline-offset-2`, `decoration-[0.1em]`
- Use `.title` class for `text-wrap: balance` on titles

---

## Spacing

### Spacing Scale
| Level | Values | Usage |
|-------|--------|-------|
| Micro | `mt-1`, `mt-2`, `mb-2` | Tight element groupings |
| Small | `mt-3`, `mb-4`, `mt-5` | Between related elements |
| Medium | `mt-6`, `mb-8`, `mt-10`, `mt-11` | Section element separation |
| Large | `mt-12`, `mt-16`, `mb-12`, `mt-20` | Between major sections |
| XL | `lg:mt-24`, `mt-[20rem]` | Layout-level spacing |

### Standard Patterns
- **Component padding**: `p-3` (landing, footer, works)
- **Grid gap**: `gap-6` (major layouts), `gap-4` (image grids), `gap-3.5` (social icons)
- **Inter-element margin**: `mt-2` / `mt-3` within components
- **Content spacing**: `my-6` (embeds), `my-8` (image grids)
- **Section padding**: `px-4 py-3` (callout blocks)

---

## Layout

### Grid System
- Root: `grid grid-cols-2` (main layout)
- Sections: `grid grid-cols-9` (landing, works)
- Full-width: `col-span-full`
- Responsive splits: `md:grid-cols-2`, `md:grid-cols-4`, `md:grid-cols-5`

### Container
- Max width: `lg:max-w-[1600px]` on body
- Standard: `w-full` for sections
- Centered: `mx-auto` for buttons, footer elements

### Height Patterns
| Pattern | Usage |
|---------|-------|
| `h-screen` | Landing section |
| `h-[70vh]` | Project card images (mobile) |
| `sm:h-100` | Project card images (desktop) |
| `md:h-screen` | CV section (desktop) |
| `md:h-[40rem]` | CV image height |

### Responsive Breakpoints
- Mobile-first: default = mobile
- `sm:` (640px): Image grid columns
- `md:` (768px): Grid activation, show/hide elements
- `lg:` (1024px): Max-width container, extra margins

---

## Colors

### Theme
| Theme | Background | Text |
|-------|------------|------|
| Light | `#F1F1F1` | `#000000` |
| Dark | `#111010` | `#FFFFFF` |

### Dark Mode Strategy
- Uses `class`-based dark mode (`darkMode: "class"`)
- Heavy use of `dark:invert` for images/SVGs instead of explicit color swaps
- Footer text: `#1C1C1C` (light) / `#D4D4D4` (dark)

### Accent Colors
- Selection: `#47a3f3` bg, `#fefefe` text
- Button: black bg → white bg on hover
- Link hover: `decoration-neutral-600` (light) / `decoration-neutral-400` (dark)

### Code Blocks
- Pre bg: `#F7F7F7` (light) / `#181818` (dark)
- Syntax tokens defined in `global.css` (sugar-high)

---

## Components

### Spacing Conventions
| Component | Pattern |
|-----------|---------|
| Landing | `h-screen`, `p-3`, `gap-6`, hero `mt-3 mb-4`, hr `mt-20` |
| CV | `md:h-screen`, sliding text centered, mesh `py-3` |
| Works | `mt-10`, `p-3 md:p-0`, `gap-6`, watermark `text-9xl opacity-10` |
| CFA | `p-2`, heading `mt-11 mb-7`, button `m-auto w-fit` |
| Footer | `p-3`, `mt-16 lg:mt-24`, social `gap-3.5 text-lg` |
| Project Card | image `mb-2`, title `mt-3 mb-2`, desc `mt-3 font-thin` |

### Visual Elements
- **Dividers**: `h-[3px] bg-black` (thick solid black)
- **Shadows**: Hard offset shadows (zero blur) — `shadow-[-24px_30px_0px_-3px_#000000]`
- **Rounded**: `rounded-lg` for code blocks, images, callouts
- **Opacity**: hover states use `opacity-90`, project arrow `opacity-100 → group-hover:opacity-70`

### Animations
| Class | Purpose |
|-------|---------|
| `.smooth-ease-l` | Long transition: 0.8s cubic-bezier(0.86, 0, 0.14, 1) |
| `.smooth-ease-s` | Short transition: 0.2s same easing |
| `.appear-left/right` | Slide-in: 1.5s cubic-bezier(1, 0, 0, 1) |
| `.move-right` | Slide-out: 1.5s same easing |
| `.appear-container` | Overflow hidden for reveal animations |
| `.stroked` | Outlined text: 7px stroke, transparent fill |
| Marquee | `slide-left/right` 25s infinite linear |

---

## Design Philosophy

**Neo-brutalist aesthetic:**
- Monospace + sans-serif pairing (JetBrains Mono + Helvetica Neue)
- Extreme typography: oversized hero text, stroked text, tight leading
- High contrast: near-black and warm gray, pure black/white text
- Grid-heavy: 9-column system, full-span sections, asymmetric splits
- Decorative SVGs: barcode, mesh patterns as visual dividers
- Animation-rich: scroll-reveal, hover transforms, marquee text, custom cursor
- Minimal color: monochrome with syntax highlighting as only accent
- Hard shadows: zero-blur offset shadows for brutalist card effect
