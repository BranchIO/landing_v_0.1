import { injectStyles } from "./styles";

// The number people text to reach Branch. Carriers check that the number in
// the messaging registration matches what the site publishes, so keep this in
// sync with TELNYX_FROM_NUMBER.
export const SMS_NUMBER = "+1 (833) 787-0356";

export const SUPPORT_EMAIL = "support@trybranch.io";
export const LAST_UPDATED = "22 July 2026";

const BRAND_NAME = "Branch";
const logoUrl = "/branch-logo.png";

/** One block of a legal document: a heading and its paragraphs. */
export interface LegalSection {
  heading: string;
  /** Strings become paragraphs; arrays become bulleted lists. */
  blocks: Array<string | string[]>;
}

export interface LegalDoc {
  title: string;
  intro: string;
  sections: LegalSection[];
}

function renderHomeLink(): HTMLElement {
  const link = document.createElement("a");
  link.className = "legal__home";
  link.href = "/";

  const logo = document.createElement("img");
  logo.className = "legal__logo";
  logo.src = logoUrl;
  logo.alt = `${BRAND_NAME} logo`;

  const wordmark = document.createElement("span");
  wordmark.className = "legal__wordmark";
  wordmark.textContent = BRAND_NAME;

  link.append(logo, wordmark);
  return link;
}

function renderBlock(block: string | string[]): HTMLElement {
  if (Array.isArray(block)) {
    const list = document.createElement("ul");
    list.className = "legal__list";
    for (const item of block) {
      const entry = document.createElement("li");
      entry.textContent = item;
      list.append(entry);
    }
    return list;
  }

  const paragraph = document.createElement("p");
  paragraph.className = "legal__body";
  paragraph.textContent = block;
  return paragraph;
}

function renderSection(section: LegalSection): HTMLElement {
  const wrapper = document.createElement("section");
  wrapper.className = "legal__section";

  const heading = document.createElement("h2");
  heading.className = "legal__heading";
  heading.textContent = section.heading;
  wrapper.append(heading);

  for (const block of section.blocks) {
    wrapper.append(renderBlock(block));
  }
  return wrapper;
}

function renderFooter(): HTMLElement {
  const footer = document.createElement("footer");
  footer.className = "legal__footer";

  const copyright = document.createElement("span");
  copyright.textContent = `© ${new Date().getFullYear()} ${BRAND_NAME}. All rights reserved.`;

  const privacy = document.createElement("a");
  privacy.href = "/privacy/";
  privacy.textContent = "Privacy Policy";

  const terms = document.createElement("a");
  terms.href = "/terms/";
  terms.textContent = "Terms of Service";

  footer.append(copyright, privacy, terms);
  return footer;
}

export function mountLegal(doc: LegalDoc): void {
  injectStyles();

  const app = document.querySelector<HTMLDivElement>("#app");
  if (!app) {
    throw new Error("Root element #app not found");
  }

  const article = document.createElement("article");
  article.className = "legal";

  const title = document.createElement("h1");
  title.className = "legal__title";
  title.textContent = doc.title;

  const updated = document.createElement("p");
  updated.className = "legal__updated";
  updated.textContent = `Last updated ${LAST_UPDATED}`;

  const intro = document.createElement("p");
  intro.className = "legal__body legal__body--lead";
  intro.textContent = doc.intro;

  article.append(renderHomeLink(), title, updated, intro);
  for (const section of doc.sections) {
    article.append(renderSection(section));
  }
  article.append(renderFooter());

  app.append(article);
}
