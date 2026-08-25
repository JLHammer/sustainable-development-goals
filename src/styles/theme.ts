export const sdgColors = {
  1: "#E5243B", // No Poverty
  2: "#DDA63A", // Zero Hunger
  3: "#4C9F38", // Good Health and Well-being
  4: "#C5192D", // Quality Education
  5: "#FF3A21", // Gender Equality
  6: "#26BDE2", // Clean Water and Sanitation
  7: "#FCC30B", // Affordable and Clean Energy
  8: "#A21942", // Decent Work and Economic Growth
  9: "#FD6925", // Industry, Innovation and Infrastructure
  10: "#DD1367", // Reduced Inequalities
  11: "#FD9D24", // Sustainable Cities and Communities
  12: "#BF8B2E", // Responsible Consumption and Production
  13: "#3F7E44", // Climate Action
  14: "#0A97D9", // Life Below Water
  15: "#56C02B", // Life on Land
  16: "#00689D", // Peace, Justice and Strong Institutions
  17: "#19486A", // Partnerships for the Goals
} as const;

export type GoalNumber = keyof typeof sdgColors;

const breakpoints = {
  sm: "480px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

export const theme = {
  colors: {
    primary: "#00689D",
    primaryDark: "#19486A",
    primaryLight: "#26BDE2",

    background: "#FFFFFF",
    surface: "#F5F7FA",
    surfaceAlt: "#EAEEF3",

    text: "#1A1F26",
    textMuted: "#5A6572",
    textInverse: "#FFFFFF",

    border: "#D8DEE6",
    borderStrong: "#A8B3C1",

    success: "#4C9F38",
    warning: "#FCC30B",
    danger: "#E5243B",
    info: "#0A97D9",

    focus: "#26BDE2",
    overlay: "rgba(26, 31, 38, 0.55)",

    sdg: sdgColors,
  },

  fonts: {
    body: "'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif",
    heading:
      "'Segoe UI', system-ui, -apple-system, Helvetica, Arial, sans-serif",
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.375rem",
    "2xl": "1.75rem",
    "3xl": "2.25rem",
    "4xl": "3rem",
  },

  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.7,
  },

  space: {
    none: "0",
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
    "2xl": "3rem",
    "3xl": "4.5rem",
  },

  radii: {
    none: "0",
    sm: "4px",
    md: "8px",
    lg: "16px",
    pill: "999px",
    circle: "50%",
  },

  shadows: {
    sm: "0 1px 2px rgba(26, 31, 38, 0.08)",
    md: "0 4px 12px rgba(26, 31, 38, 0.10)",
    lg: "0 12px 28px rgba(26, 31, 38, 0.16)",
    focus: "0 0 0 3px rgba(38, 189, 226, 0.45)",
  },

  transitions: {
    fast: "120ms ease",
    base: "200ms ease",
    slow: "320ms ease",
  },

  zIndices: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    overlay: 300,
    modal: 400,
    toast: 500,
  },

  breakpoints,

  media: {
    sm: `@media (min-width: ${breakpoints.sm})`,
    md: `@media (min-width: ${breakpoints.md})`,
    lg: `@media (min-width: ${breakpoints.lg})`,
    xl: `@media (min-width: ${breakpoints.xl})`,
    reducedMotion: "@media (prefers-reduced-motion: reduce)",
  },

  layout: {
    maxWidth: "1200px",
    headerHeight: "4rem",
  },
} as const;

export type AppTheme = typeof theme;

export default theme;
