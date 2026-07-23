import { SMS_HREF, SMS_NUMBER, SUPPORT_EMAIL, mountShell } from "./site";

const OPT_IN_IMAGE = "/sms-opt-in.png";

const STEPS = [
  "Send any text from your phone to the number above.",
  "Scour texts back a one-time sign-in link.",
  "Open it, sign in, and your number is linked to your account.",
];

function renderNumber(): HTMLElement {
  const wrapper = document.createElement("p");
  wrapper.className = "sms__number";

  const link = document.createElement("a");
  link.href = SMS_HREF;
  link.textContent = SMS_NUMBER;

  wrapper.append(link);
  return wrapper;
}

function renderSteps(): HTMLElement {
  const list = document.createElement("ol");
  list.className = "sms__steps";
  for (const step of STEPS) {
    const item = document.createElement("li");
    item.textContent = step;
    list.append(item);
  }
  return list;
}

function renderOptInImage(): HTMLElement {
  const figure = document.createElement("figure");
  figure.className = "sms__figure";

  const image = document.createElement("img");
  image.className = "sms__image";
  image.src = OPT_IN_IMAGE;
  image.alt =
    "The Branch app, Settings → Phone, showing the number to text and the three steps to link your phone";
  image.loading = "lazy";

  const caption = document.createElement("figcaption");
  caption.className = "sms__caption";
  caption.textContent =
    "Where the number appears in the Branch app: Settings → Phone.";

  figure.append(image, caption);
  return figure;
}

function renderParagraph(text: string, className = "legal__body"): HTMLElement {
  const paragraph = document.createElement("p");
  paragraph.className = className;
  paragraph.textContent = text;
  return paragraph;
}

function mount(): void {
  const main = mountShell({ current: "legal" });

  const article = document.createElement("article");
  article.className = "legal";

  const title = document.createElement("h1");
  title.className = "legal__title";
  title.textContent = "Text Scour";

  article.append(
    title,
    renderParagraph(
      "Scour is the Branch assistant. Text it from your phone and it answers with the same network, memory, and workflows you have in the app.",
      "legal__body legal__body--lead"
    ),
    renderNumber(),
    renderSteps(),
    renderOptInImage()
  );

  const consent = document.createElement("section");
  consent.className = "legal__section";

  const consentHeading = document.createElement("h2");
  consentHeading.className = "legal__heading";
  consentHeading.textContent = "Consent, frequency, and opting out";
  consent.append(
    consentHeading,
    renderParagraph(
      "You opt in by texting us first. We never send a message to a number that has not messaged us, and we do not send marketing texts."
    ),
    renderParagraph(
      "Message frequency varies and depends on you — our messages are replies to yours, plus any reminders from workflows you set up. Message and data rates may apply."
    ),
    renderParagraph(
      "Reply STOP at any time to stop all messages, or unlink your number in the app under Settings → Phone. Reply HELP for help, or email " +
        SUPPORT_EMAIL +
        "."
    )
  );

  article.append(consent);
  main.append(article);
}

mount();
