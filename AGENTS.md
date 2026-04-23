# Project Architecture & Design Reference

You are building a Next.js 16 application. Use the following GitHub repository as the
authoritative reference for architecture, folder structure, UI components, data-fetching
patterns, and styling decisions:

REFERENCE REPO: https://github.com/Kiranism/next-shadcn-dashboard-starter

## Stack (match exactly)
- Next.js 16.2.4 (App Router, React Server Components, Server Actions)
- React 19.2.4
- Tailwind CSS v4 (^4.2.4) — NOT v3. Use the new @theme directive and CSS-first config.
- TypeScript
- shadcn/ui components (install via `npx shadcn@latest add <component>`)
- TanStack Query (React Query) for client-side data cache
- TanStack Table v8 for data tables
- nuqs for URL-as-state (search/filter/pagination params)
- Zustand for local client state (e.g. Kanban board)
- dnd-kit for drag-and-drop
- React Hook Form + Zod for form validation
- Recharts (or Tremor on Recharts) for charts

## Folder Structure (mirror this exactly)
src/
├── app/                          # Next.js App Router
│   ├── auth/                     # Sign-in, sign-up
│   ├── dashboard/                # Main route group
│   │   ├── overview/             # Analytics with parallel routes
│   │   ├── [feature]/            # One folder per feature
│   │   └── layout.tsx
│   └── api/
├── components/                   # Shared composite components
│   └── ui/                       # shadcn primitives live here
├── features/                     # Feature-scoped logic (queries, schemas, hooks)
├── lib/                          # Utilities, config, clients
├── hooks/                        # Cross-feature hooks
├── types/                        # Shared TS types
└── constants/

Rules:
- Co-locate feature logic under src/features/<feature-name>/
- Page files stay thin — they orchestrate, they do not contain business logic
- UI primitives are vendored (copied in), not imported from a package

## Data Fetching Pattern (non-negotiable)
For any page that displays server data, follow the React Query + HydrationBoundary pattern:
1. Server Component prefetches with queryClient.prefetchQuery
2. Wrap children in <HydrationBoundary state={dehydrate(queryClient)}>
3. Client Component consumes via useSuspenseQuery
4. URL state (search/filter/page) is managed by nuqs, never useState

Reference implementation: src/app/dashboard/product/ and src/app/dashboard/users/ in the repo.

## UI & Styling Rules
- Use shadcn/ui primitives for all base components (Button, Input, Dialog, Sheet,
  DropdownMenu, Command, Popover, Sonner for toasts, etc.)
- Tailwind v4 only — use CSS variables for theme tokens, @theme block in globals.css
- Dark mode via next-themes with class strategy
- Icons: lucide-react
- Fonts: next/font (Geist or Inter)
- Layout: collapsible sidebar + header pattern from the reference repo
- Command palette (Cmd+K) using shadcn Command component
- Use Sonner (not the old toast) for notifications

## What NOT To Do
- Do NOT use Ant Design, Material UI, Chakra, or any CSS-in-JS library — conflicts with Tailwind v4
- Do NOT use Pages Router — App Router only
- Do NOT use getServerSideProps / getStaticProps — use RSC + Server Actions
- Do NOT fetch data in Client Components with useEffect — use the React Query pattern above
- Do NOT use useState for filter/pagination/search state — use nuqs
- Do NOT install shadcn components as an npm package — vendor them into src/components/ui/
- Do NOT use Tailwind v3 syntax (tailwind.config.js-first). Use v4 CSS-first config.

## When Implementing New Features
Before writing a feature, check the reference repo for an analogous pattern:
- Table with filters/pagination → follow src/app/dashboard/users/
- CRUD form → follow src/app/dashboard/product/
- Drag-and-drop board → follow src/app/dashboard/kanban/
- Real-time list UI → follow src/app/dashboard/chat/
- Notification center → follow src/app/dashboard/notifications/
- Org/team/RBAC gating → follow src/app/dashboard/workspaces/ and the RBAC navigation system

Clone or browse the repo first, identify the closest existing pattern, then adapt it.
Do not invent a new pattern when the reference already solves the problem.

## Commit Discipline
- One feature per PR
- Follow the repo's naming: kebab-case for files, PascalCase for components
- Keep server/client boundary explicit with "use client" only where required
