import { injectStyles } from "./styles";

// Served from /public, referenced by absolute URL.
const logoUrl = "/branch-logo.png";
const BRAND_NAME = "Branch";

interface BrandConfig {
  name: string;
  logoUrl: string;
  logoAlt: string;
}

function renderBrand({ name, logoUrl, logoAlt }: BrandConfig): HTMLElement {
  const brand = document.createElement("div");
  brand.className = "brand";

  const logo = document.createElement("img");
  logo.className = "brand__logo";
  logo.src = logoUrl;
  logo.alt = logoAlt;

  const wordmark = document.createElement("span");
  wordmark.className = "brand__name";
  wordmark.textContent = name;

  brand.append(logo, wordmark);
  return brand;
}

function renderTagline(): HTMLElement {
  const tagline = document.createElement("p");
  tagline.className = "tagline";
  tagline.textContent = "Helping VCs deploy capital faster.";
  return tagline;
}

function renderContactButton(): HTMLElement {
  const link = document.createElement("a");
  link.className = "cta";
  link.href = "https://cal.com/raeedzzz/branch-chat";
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.textContent = "Free coffee";
  return link;
}

function renderColophon(name: string): HTMLElement {
  const colophon = document.createElement("footer");
  colophon.className = "colophon";

  const copyright = document.createElement("span");
  copyright.textContent = `© ${new Date().getFullYear()} ${name}. All rights reserved.`;

  const terms = document.createElement("a");
  terms.href = "/terms/";
  terms.textContent = "Terms of Service";

  const privacy = document.createElement("a");
  privacy.href = "/privacy/";
  privacy.textContent = "Privacy Policy";

  colophon.append(copyright, terms, privacy);
  return colophon;
}

function mount(root: HTMLElement): void {
  const hero = document.createElement("main");
  hero.className = "hero";
  hero.append(
    renderBrand({ name: BRAND_NAME, logoUrl, logoAlt: `${BRAND_NAME} logo` }),
    renderTagline(),
    renderContactButton()
  );
  root.append(hero, renderColophon(BRAND_NAME));
}

injectStyles();

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Root element #app not found");
}
mount(app);
