import { injectStyles } from "./styles";

// Business facts shared across every page. Carriers check that the number and
// address published here match the messaging registration, so keep these in
// sync with TELNYX_FROM_NUMBER and the campaign record.
export const BRAND_NAME = "Branch";
export const LOGO_URL = "/branch-logo.png";
export const SMS_NUMBER = "+1 (833) 787-0356";
export const SMS_HREF = `sms:${SMS_NUMBER.replace(/[^\d+]/g, "")}`;
export const TEL_HREF = `tel:${SMS_NUMBER.replace(/[^\d+]/g, "")}`;
export const SUPPORT_EMAIL = "support@trybranch.io";
export const ADDRESS = "144 Townsend St, San Francisco, CA 94107";
export const CAL_URL = "https://cal.com/raeedzzz/branch-chat";
export const APP_URL = "https://app.trybranch.io";

export type NavPage = "home" | "products" | "about" | "contact" | "legal";

const NAV_LINKS: Array<{ href: string; label: string; page: NavPage }> = [
  { href: "/products/", label: "Products", page: "products" },
  { href: "/about/", label: "About", page: "about" },
  { href: "/contact/", label: "Contact", page: "contact" },
];

function el(html: string): HTMLElement {
  const template = document.createElement("template");
  template.innerHTML = html.trim();
  return template.content.firstElementChild as HTMLElement;
}

export function renderNav(current: NavPage): HTMLElement {
  const links = NAV_LINKS.map(
    (link) =>
      `<a class="nav__link${link.page === current ? " nav__link--current" : ""}" href="${link.href}"${
        link.page === current ? ' aria-current="page"' : ""
      }>${link.label}</a>`
  ).join("");

  return el(`
    <header class="nav">
      <div class="nav__inner">
        <a class="nav__brand" href="/" aria-label="${BRAND_NAME} home">
          <img class="nav__logo" src="${LOGO_URL}" alt="" />
          <span class="nav__wordmark">${BRAND_NAME}</span>
        </a>
        <nav class="nav__links" aria-label="Main">${links}</nav>
        <a class="button button--primary nav__cta" href="${APP_URL}">Open the app</a>
      </div>
    </header>
  `);
}

export function renderFooter(): HTMLElement {
  return el(`
    <footer class="footer">
      <div class="footer__inner">
        <div class="footer__brand">
          <a class="nav__brand" href="/">
            <img class="nav__logo" src="${LOGO_URL}" alt="" />
            <span class="nav__wordmark">${BRAND_NAME}</span>
          </a>
          <p class="footer__tagline">Helping VCs deploy capital faster, with the tools they already have.</p>
          <address class="footer__contact">
            ${ADDRESS}<br />
            <a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a><br />
            <a href="${TEL_HREF}">${SMS_NUMBER}</a>
          </address>
        </div>
        <nav class="footer__col" aria-label="Product">
          <h3 class="footer__heading">Product</h3>
          <a href="/products/">EarthOS</a>
          <a href="/products/#scour">Scour</a>
          <a href="/products/#heart">Heart</a>
          <a href="/sms/">Text Scour</a>
        </nav>
        <nav class="footer__col" aria-label="Company">
          <h3 class="footer__heading">Company</h3>
          <a href="/about/">About</a>
          <a href="/contact/">Contact</a>
          <a href="${CAL_URL}" target="_blank" rel="noopener noreferrer">Book a chat</a>
        </nav>
        <nav class="footer__col" aria-label="Legal">
          <h3 class="footer__heading">Legal</h3>
          <a href="/privacy/">Privacy Policy</a>
          <a href="/terms/">Terms of Service</a>
        </nav>
      </div>
      <div class="footer__base">
        <span>© ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.</span>
        <span>Made in San Francisco.</span>
      </div>
    </footer>
  `);
}

/**
 * Reveal-on-scroll for elements marked [data-reveal]. Elements stay visible
 * when JavaScript is off or the user prefers reduced motion; the observer only
 * hides them the moment it is ready to reveal them again.
 */
export function enableReveals(root: ParentNode = document): void {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-reveal]"));
  if (reduced || targets.length === 0 || !("IntersectionObserver" in window)) {
    return;
  }

  document.documentElement.classList.add("reveals-on");

  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      }
    },
    { rootMargin: "0px 0px -60px 0px", threshold: 0.05 }
  );

  for (const target of targets) {
    observer.observe(target);
  }
}

export interface PageOptions {
  current: NavPage;
  /** Extra class on <main>, e.g. "page--home". */
  mainClass?: string;
}

/** Injects styles and mounts nav + main + footer. Returns the <main> element. */
export function mountShell({ current, mainClass }: PageOptions): HTMLElement {
  injectStyles();

  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) {
    throw new Error("Root element #app not found");
  }

  const main = document.createElement("main");
  main.className = ["page", mainClass].filter(Boolean).join(" ");

  app.append(renderNav(current), main, renderFooter());
  return main;
}

export { el };
