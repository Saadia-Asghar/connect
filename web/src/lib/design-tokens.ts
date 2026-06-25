/**
 * GIKI Connect design tokens — keep in sync with docs/GIKI-Connect-PRD.md §14
 * References: Meetup, Alan, Fi (Mobbin)
 */
export const colors = {
  primary: "#1B4D3E",
  primaryLight: "#2D7A5F",
  primarySoft: "#E8F5F0",
  accent: "#E8A838",
  background: "#F7F5F0",
  surface: "#FFFFFF",
  textPrimary: "#1A1A1A",
  textSecondary: "#6B7280",
  success: "#22C55E",
  pending: "#F59E0B",
  error: "#DC2626",
} as const;

export const radius = {
  card: "16px",
  button: "12px",
  sheet: "24px",
  chip: "9999px",
} as const;

export const shadow = {
  card: "0 2px 12px rgba(0, 0, 0, 0.06)",
  elevated: "0 8px 24px rgba(0, 0, 0, 0.08)",
} as const;

export const spacing = {
  page: "16px",
  cardGap: "12px",
} as const;

export const navItems = [
  { id: "home", label: "Home", href: "/" },
  { id: "events", label: "Events", href: "/events" },
  { id: "meetups", label: "Meetups", href: "/meetups" },
  { id: "discover", label: "Discover", href: "/discover" },
  { id: "profile", label: "Profile", href: "/profile" },
] as const;
