import { theme } from "./theme";

export function createStyles(): string {
  return `
:root {
  --bg: ${theme.bg};
  --ink: ${theme.ink};
  --brand-green: ${theme.brandGreen};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  height: 100%;
}

body {
  font-family: ${theme.fontStack};
  background-color: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: clamp(4px, 1vw, 10px);
}

.brand__logo {
  width: clamp(36px, 6vw, 56px);
  height: auto;
  display: block;
}

.brand__name {
  font-family: ${theme.fontStack};
  color: var(--brand-green);
  font-weight: 500;
  font-size: clamp(22px, 4vw, 40px);
  letter-spacing: -0.02em;
  line-height: 1;
}

.footer {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: rgba(47, 58, 31, 0.5);
}
`;
}

export function injectStyles(doc: Document = document): void {
  const style = doc.createElement("style");
  style.textContent = createStyles();
  doc.head.append(style);
}
