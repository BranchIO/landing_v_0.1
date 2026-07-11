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

#app {
  min-height: 100vh;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 28px;
  padding: 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: clamp(4px, 1vw, 10px);
}

.brand__logo {
  width: clamp(56px, 9vw, 88px);
  height: auto;
  display: block;
  align-self: center;
}

.brand__name {
  font-family: ${theme.displayFont};
  color: var(--brand-green);
  font-weight: 500;
  font-size: clamp(44px, 8vw, 80px);
  letter-spacing: -0.02em;
  line-height: 1;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  text-align: center;
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: rgba(47, 58, 31, 0.55);
}

.footer__line {
  display: block;
}
`;
}

export function injectStyles(doc: Document = document): void {
  const style = doc.createElement("style");
  style.textContent = createStyles();
  doc.head.append(style);
}
