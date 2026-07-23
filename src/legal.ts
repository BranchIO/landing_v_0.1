import { mountShell, SMS_NUMBER, SUPPORT_EMAIL } from "./site";

export { SMS_NUMBER, SUPPORT_EMAIL };
export const LAST_UPDATED = "22 July 2026";

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

export function mountLegal(doc: LegalDoc): void {
  const main = mountShell({ current: "legal" });

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

  article.append(title, updated, intro);
  for (const section of doc.sections) {
    article.append(renderSection(section));
  }

  main.append(article);
}
