import { theme } from "./theme";

export function createStyles(): string {
  return `
:root {
  --bg: ${theme.bg};
  --bg-soft: ${theme.bgSoft};
  --card: ${theme.card};
  --ink: ${theme.ink};
  --ink-soft: ${theme.inkSoft};
  --ink-muted: ${theme.inkMuted};
  --ink-faint: ${theme.inkFaint};
  --line: ${theme.line};
  --brand-green: ${theme.brandGreen};
  --brand-green-dark: ${theme.brandGreenDark};
  --brand-green-soft: ${theme.brandGreenSoft};
  --ease-out: cubic-bezier(0.23, 1, 0.32, 1);
  --ease-in-out: cubic-bezier(0.77, 0, 0.175, 1);
  --container: 1080px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html,
body {
  height: 100%;
}

body {
  font-family: ${theme.bodyFont};
  background-color: var(--bg);
  color: var(--ink);
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.page {
  flex: 1;
}

::selection {
  background: var(--brand-green-soft);
}

/* ---------- Navigation ---------- */

.nav {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 253, 242, 0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
}

.nav__inner {
  max-width: var(--container);
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav__brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.nav__logo {
  width: 30px;
  height: auto;
  display: block;
}

.nav__wordmark {
  font-family: ${theme.displayFont};
  color: var(--brand-green);
  font-weight: 500;
  font-size: 24px;
  letter-spacing: -0.02em;
  line-height: 1;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
}

.nav__link {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  color: var(--ink-soft);
  text-decoration: none;
  transition: color 0.15s ease;
}

.nav__link--current {
  color: var(--ink);
}

@media (hover: hover) and (pointer: fine) {
  .nav__link:hover {
    color: var(--brand-green);
  }
}

/* ---------- Buttons ---------- */

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 10px 22px;
  border-radius: 999px;
  font-family: ${theme.bodyFont};
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.01em;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid transparent;
  transition: background-color 0.15s ease, border-color 0.15s ease,
    color 0.15s ease, transform 160ms var(--ease-out);
}

.button:active {
  transform: scale(0.97);
}

.button--primary {
  background-color: var(--brand-green);
  color: #fffdf2;
}

.button--secondary {
  background-color: transparent;
  color: var(--ink);
  border-color: var(--line);
}

@media (hover: hover) and (pointer: fine) {
  .button--primary:hover {
    background-color: var(--brand-green-dark);
  }
  .button--secondary:hover {
    border-color: var(--brand-green);
    color: var(--brand-green);
  }
}

.button--large {
  padding: 13px 28px;
  font-size: 15px;
}

/* ---------- Sections ---------- */

.section {
  max-width: var(--container);
  margin: 0 auto;
  padding: 72px 24px;
}

.section--tight {
  padding-top: 40px;
  padding-bottom: 40px;
}

.section__eyebrow {
  display: inline-block;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-green);
  margin-bottom: 14px;
}

.section__title {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: clamp(30px, 4.5vw, 44px);
  letter-spacing: -0.02em;
  line-height: 1.12;
  max-width: 620px;
}

.section__lead {
  margin-top: 16px;
  font-size: 17px;
  line-height: 1.65;
  color: var(--ink-soft);
  max-width: 560px;
}

/* ---------- Hero ---------- */

.hero {
  max-width: var(--container);
  margin: 0 auto;
  padding: clamp(72px, 12vh, 140px) 24px 64px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero__eyebrow {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.02em;
  color: var(--ink-muted);
  background: var(--brand-green-soft);
  border-radius: 999px;
  padding: 6px 16px;
  margin-bottom: 26px;
}

.hero__title {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: clamp(42px, 7vw, 76px);
  letter-spacing: -0.025em;
  line-height: 1.05;
  max-width: 800px;
}

.hero__title em {
  font-style: italic;
  color: var(--brand-green);
}

.hero__sub {
  margin-top: 22px;
  font-size: clamp(16px, 2vw, 19px);
  line-height: 1.6;
  color: var(--ink-soft);
  max-width: 560px;
}

.hero__actions {
  margin-top: 34px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.hero__hint {
  margin-top: 16px;
  font-size: 13px;
  letter-spacing: 0.02em;
  color: var(--ink-faint);
}

/* Staggered hero entrance — page load only, so it can afford to be gentle. */
@keyframes rise-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero > * {
  animation: rise-in 600ms var(--ease-out) both;
}

.hero > *:nth-child(2) { animation-delay: 60ms; }
.hero > *:nth-child(3) { animation-delay: 120ms; }
.hero > *:nth-child(4) { animation-delay: 180ms; }
.hero > *:nth-child(5) { animation-delay: 240ms; }

/* ---------- Reveal on scroll ---------- */

html.reveals-on [data-reveal] {
  opacity: 0;
  transform: translateY(14px);
  transition: opacity 550ms var(--ease-out), transform 550ms var(--ease-out);
}

html.reveals-on [data-reveal].is-revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ---------- Cards ---------- */

.cards {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 28px 26px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: transform 200ms var(--ease-out), box-shadow 200ms var(--ease-out),
    border-color 0.15s ease;
}

@media (hover: hover) and (pointer: fine) {
  .card:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(47, 58, 31, 0.08);
    border-color: rgba(106, 142, 36, 0.35);
  }
}

.card__icon {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--brand-green-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  margin-bottom: 4px;
}

.card__kicker {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-green);
}

.card__title {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: 22px;
  letter-spacing: -0.01em;
}

.card__body {
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-soft);
}

.card__link {
  margin-top: auto;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 500;
  color: var(--brand-green);
  text-decoration: none;
}

@media (hover: hover) and (pointer: fine) {
  .card__link:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
}

/* ---------- Steps ---------- */

.steps {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  counter-reset: step;
}

.step {
  counter-increment: step;
  border-top: 2px solid var(--line);
  padding-top: 20px;
}

.step::before {
  content: "0" counter(step);
  display: block;
  font-family: ${theme.displayFont};
  font-size: 15px;
  font-weight: 600;
  color: var(--brand-green);
  margin-bottom: 10px;
  font-variant-numeric: tabular-nums;
}

.step__title {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.01em;
  margin-bottom: 8px;
}

.step__body {
  font-size: 14.5px;
  line-height: 1.65;
  color: var(--ink-soft);
}

/* ---------- Feature split (products page) ---------- */

.split {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 6fr);
  gap: clamp(28px, 5vw, 72px);
  align-items: center;
  padding: 56px 0;
}

.split + .split {
  border-top: 1px solid var(--line);
}

.split--flip .split__copy {
  order: 2;
}

.split__copy .section__lead {
  margin-top: 12px;
  font-size: 15.5px;
}

.split__title {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: clamp(26px, 3.4vw, 34px);
  letter-spacing: -0.015em;
  line-height: 1.15;
}

.split__list {
  margin-top: 18px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.split__list li {
  position: relative;
  padding-left: 26px;
  font-size: 14.5px;
  line-height: 1.6;
  color: var(--ink-soft);
}

.split__list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 7px;
  width: 14px;
  height: 8px;
  border-left: 2px solid var(--brand-green);
  border-bottom: 2px solid var(--brand-green);
  transform: rotate(-45deg);
}

.split__panel {
  background: var(--bg-soft);
  border: 1px solid var(--line);
  border-radius: 20px;
  padding: 34px;
  min-height: 240px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
}

.split__panel-quote {
  font-family: ${theme.displayFont};
  font-size: clamp(20px, 2.6vw, 26px);
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.35;
}

.split__panel-note {
  font-size: 13.5px;
  color: var(--ink-muted);
  line-height: 1.6;
}

/* Chat mock inside panels */
.chat {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.chat__bubble {
  max-width: 85%;
  padding: 10px 15px;
  border-radius: 16px;
  font-size: 14px;
  line-height: 1.5;
}

.chat__bubble--me {
  align-self: flex-end;
  background: var(--brand-green);
  color: #fffdf2;
  border-bottom-right-radius: 5px;
}

.chat__bubble--scour {
  align-self: flex-start;
  background: var(--card);
  border: 1px solid var(--line);
  border-bottom-left-radius: 5px;
  color: var(--ink);
}

/* ---------- Band (full-width tinted callout) ---------- */

.band {
  background: var(--ink);
  color: #fffdf2;
}

.band__inner {
  max-width: var(--container);
  margin: 0 auto;
  padding: 80px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.band__title {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: clamp(28px, 4.5vw, 42px);
  letter-spacing: -0.02em;
  line-height: 1.15;
  max-width: 640px;
}

.band__title em {
  font-style: italic;
  color: #b9d97a;
}

.band__sub {
  margin-top: 16px;
  font-size: 16px;
  line-height: 1.6;
  color: rgba(255, 253, 242, 0.72);
  max-width: 520px;
}

.band__actions {
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.band .button--secondary {
  color: #fffdf2;
  border-color: rgba(255, 253, 242, 0.3);
}

@media (hover: hover) and (pointer: fine) {
  .band .button--secondary:hover {
    border-color: #b9d97a;
    color: #b9d97a;
  }
}

/* ---------- Contact page ---------- */

.contact-grid {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
}

.contact-card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 18px;
  padding: 26px;
}

.contact-card__label {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--brand-green);
  margin-bottom: 10px;
}

.contact-card__value {
  font-family: ${theme.displayFont};
  font-weight: 500;
  font-size: 21px;
  letter-spacing: -0.01em;
  line-height: 1.3;
  overflow-wrap: anywhere;
}

.contact-card__value a {
  color: inherit;
  text-decoration: none;
}

@media (hover: hover) and (pointer: fine) {
  .contact-card__value a:hover {
    color: var(--brand-green);
  }
}

.contact-card__note {
  margin-top: 8px;
  font-size: 13.5px;
  line-height: 1.6;
  color: var(--ink-muted);
}

/* ---------- Prose (about page) ---------- */

.prose {
  max-width: 640px;
}

.prose p {
  font-size: 16px;
  line-height: 1.75;
  color: var(--ink-soft);
}

.prose p + p {
  margin-top: 18px;
}

.prose strong {
  color: var(--ink);
  font-weight: 600;
}

.values {
  margin-top: 44px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

/* ---------- Footer ---------- */

.footer {
  border-top: 1px solid var(--line);
  background: var(--bg-soft);
  margin-top: 48px;
}

.footer__inner {
  max-width: var(--container);
  margin: 0 auto;
  padding: 56px 24px 40px;
  display: grid;
  grid-template-columns: minmax(0, 2fr) repeat(3, minmax(0, 1fr));
  gap: 32px;
}

.footer__tagline {
  margin-top: 14px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--ink-muted);
  max-width: 260px;
}

.footer__contact {
  margin-top: 16px;
  font-style: normal;
  font-size: 13.5px;
  line-height: 1.7;
  color: var(--ink-muted);
}

.footer__contact a {
  color: inherit;
  text-decoration: none;
}

.footer__col {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer__heading {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-bottom: 4px;
}

.footer__col a {
  font-size: 14px;
  color: var(--ink-soft);
  text-decoration: none;
  transition: color 0.15s ease;
}

@media (hover: hover) and (pointer: fine) {
  .footer__col a:hover,
  .footer__contact a:hover {
    color: var(--brand-green);
  }
}

.footer__base {
  max-width: var(--container);
  margin: 0 auto;
  padding: 20px 24px 28px;
  border-top: 1px solid var(--line);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px 18px;
  font-size: 13px;
  letter-spacing: 0.02em;
  color: var(--ink-faint);
}

/* ---------- Legal pages (/privacy, /terms, /sms) ---------- */

.legal {
  max-width: 720px;
  margin: 0 auto;
  padding: 56px 24px 72px;
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
  font-size: 13px;
  letter-spacing: 0.02em;
  color: var(--ink-faint);
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
  font-size: 15px;
  line-height: 1.65;
  color: rgba(47, 58, 31, 0.85);
}

.legal__list li + li {
  margin-top: 8px;
}

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
  border: 1px solid var(--line);
}

.sms__caption {
  margin-top: 10px;
  font-size: 13px;
  letter-spacing: 0.02em;
  color: var(--ink-faint);
}

/* ---------- Responsive ---------- */

@media (max-width: 860px) {
  .cards,
  .steps,
  .values {
    grid-template-columns: 1fr;
  }

  .split {
    grid-template-columns: 1fr;
    padding: 40px 0;
  }

  .split--flip .split__copy {
    order: 0;
  }

  .footer__inner {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 640px) {
  .nav__inner {
    gap: 16px;
    padding: 12px 18px;
  }

  .nav__links {
    gap: 14px;
  }

  .nav__link {
    font-size: 13px;
  }

  .nav__cta {
    display: none;
  }

  .section {
    padding: 52px 20px;
  }

  .contact-grid {
    grid-template-columns: 1fr;
  }

  .footer__inner {
    grid-template-columns: 1fr;
    gap: 28px;
  }
}

/* ---------- Reduced motion ---------- */

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .hero > * {
    animation: none;
  }

  html.reveals-on [data-reveal] {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .card,
  .button {
    transition: none;
  }
}
`;
}

export function injectStyles(doc: Document = document): void {
  const style = doc.createElement("style");
  style.textContent = createStyles();
  doc.head.append(style);
}
