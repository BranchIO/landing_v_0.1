import { setupHead } from "./head";
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

function renderFooter(name: string): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = "footer";
  footer.textContent = `© ${new Date().getFullYear()} ${name}. All rights reserved.`;
  return footer;
}

function mount(root: HTMLElement): void {
  const hero = document.createElement("main");
  hero.className = "hero";
  hero.append(
    renderBrand({ name: BRAND_NAME, logoUrl, logoAlt: `${BRAND_NAME} logo` })
  );
  root.append(hero, renderFooter(BRAND_NAME));
}

setupHead({
  title: BRAND_NAME,
  faviconUrl: logoUrl,
  fontHref:
    "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap",
});
injectStyles();

const app = document.querySelector<HTMLDivElement>("#app");
if (!app) {
  throw new Error("Root element #app not found");
}
mount(app);
