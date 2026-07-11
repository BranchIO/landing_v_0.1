interface HeadConfig {
  title: string;
  faviconUrl: string;
  fontHref: string;
}

function link(doc: Document, attrs: Record<string, string>): HTMLLinkElement {
  const el = doc.createElement("link");
  for (const [key, value] of Object.entries(attrs)) {
    el.setAttribute(key, value);
  }
  return el;
}

export function setupHead(config: HeadConfig, doc: Document = document): void {
  doc.title = config.title;

  doc.head.append(
    link(doc, { rel: "icon", type: "image/png", href: config.faviconUrl }),
    link(doc, { rel: "preconnect", href: "https://fonts.googleapis.com" }),
    link(doc, {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossorigin: "",
    }),
    link(doc, { rel: "stylesheet", href: config.fontHref })
  );
}
