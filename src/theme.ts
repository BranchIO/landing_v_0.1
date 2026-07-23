export const theme = {
  bg: "#fffdf2",
  bgSoft: "#faf6e6",
  card: "#fffef8",
  ink: "#2f3a1f",
  inkSoft: "rgba(47, 58, 31, 0.72)",
  inkMuted: "rgba(47, 58, 31, 0.55)",
  inkFaint: "rgba(47, 58, 31, 0.5)",
  line: "rgba(47, 58, 31, 0.12)",
  brandGreen: "#6a8e24",
  brandGreenDark: "#5c7c1f",
  brandGreenSoft: "rgba(106, 142, 36, 0.1)",
  fontStack: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  displayFont: '"Fraunces", Georgia, "Times New Roman", serif',
  bodyFont: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

export type Theme = typeof theme;
