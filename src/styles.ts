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
  transform: translateX(-20px);
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

.tagline {
  margin-top: -16px;
  font-family: ${theme.bodyFont};
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: rgba(47, 58, 31, 0.55);
}

.cta {
  margin-top: 8px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 9px 22px;
  border-radius: 999px;
  background-color: var(--brand-green);
  color: #fffdf2;
  font-family: ${theme.bodyFont};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.cta:hover {
  background-color: #5c7c1f;
}

.colophon {
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 6px 18px;
  padding: 0 16px;
  text-align: center;
  font-family: ${theme.bodyFont};
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: rgba(47, 58, 31, 0.5);
}

.colophon a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(47, 58, 31, 0.2);
  padding-bottom: 1px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.colophon a:hover {
  color: var(--brand-green);
  border-bottom-color: var(--brand-green);
}

/* Legal pages (/privacy, /terms) */
.legal {
  max-width: 720px;
  margin: 0 auto;
  padding: 56px 24px 72px;
}

.legal__home {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  text-decoration: none;
  margin-bottom: 40px;
}

.legal__logo {
  width: 34px;
  height: auto;
  display: block;
}

.legal__wordmark {
  font-family: ${theme.displayFont};
  color: var(--brand-green);
  font-weight: 500;
  font-size: 28px;
  letter-spacing: -0.02em;
  line-height: 1;
}

.legal__title {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: clamp(32px, 5vw, 44px);
  letter-spacing: -0.02em;
  line-height: 1.1;
}

.legal__updated {
  margin-top: 10px;
  font-family: ${theme.bodyFont};
  font-size: 13px;
  letter-spacing: 0.02em;
  color: rgba(47, 58, 31, 0.5);
}

.legal__section {
  margin-top: 36px;
}

.legal__heading {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: 21px;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}

.legal__body {
  font-family: ${theme.bodyFont};
  font-size: 15px;
  line-height: 1.65;
  color: rgba(47, 58, 31, 0.85);
}

.legal__body + .legal__body {
  margin-top: 14px;
}

.legal__body--lead {
  margin-top: 28px;
  font-size: 16px;
}

.legal__list {
  margin: 14px 0 0 20px;
  font-family: ${theme.bodyFont};
  font-size: 15px;
  line-height: 1.65;
  color: rgba(47, 58, 31, 0.85);
}

.legal__list li + li {
  margin-top: 8px;
}

/* Text-Scour page (/sms) */
.sms__number {
  margin-top: 24px;
  font-family: ${theme.displayFont};
  font-size: clamp(28px, 4.5vw, 38px);
  font-weight: 500;
  letter-spacing: -0.01em;
}

.sms__number a {
  color: var(--brand-green);
  text-decoration: none;
}

.sms__steps {
  margin: 20px 0 0 20px;
  font-family: ${theme.bodyFont};
  font-size: 15px;
  line-height: 1.65;
  color: rgba(47, 58, 31, 0.85);
}

.sms__steps li + li {
  margin-top: 8px;
}

.sms__figure {
  margin-top: 32px;
}

.sms__image {
  width: 100%;
  height: auto;
  display: block;
  border-radius: 10px;
  border: 1px solid rgba(47, 58, 31, 0.12);
}

.sms__caption {
  margin-top: 10px;
  font-family: ${theme.bodyFont};
  font-size: 13px;
  letter-spacing: 0.02em;
  color: rgba(47, 58, 31, 0.5);
}

.legal__footer {
  margin-top: 56px;
  padding-top: 24px;
  border-top: 1px solid rgba(47, 58, 31, 0.12);
  display: flex;
  flex-wrap: wrap;
  gap: 6px 18px;
  font-family: ${theme.bodyFont};
  font-size: 13px;
  letter-spacing: 0.02em;
  color: rgba(47, 58, 31, 0.5);
}

.legal__footer a {
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid rgba(47, 58, 31, 0.2);
  padding-bottom: 1px;
  transition: color 0.15s ease, border-color 0.15s ease;
}

.legal__footer a:hover {
  color: var(--brand-green);
  border-bottom-color: var(--brand-green);
}
`;
}

export function injectStyles(doc: Document = document): void {
  const style = doc.createElement("style");
  style.textContent = createStyles();
  doc.head.append(style);
}
