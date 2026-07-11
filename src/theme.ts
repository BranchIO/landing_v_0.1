export const theme = {
  bg: "#fffdf2",
  ink: "#2f3a1f",
  brandGreen: "#6a8e24",
  fontStack: '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  displayFont: '"Fraunces", Georgia, "Times New Roman", serif',
  bodyFont: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
} as const;

export type Theme = typeof theme;
