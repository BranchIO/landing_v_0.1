import {
  ADDRESS,
  CAL_URL,
  SMS_HREF,
  SMS_NUMBER,
  SUPPORT_EMAIL,
  TEL_HREF,
  el,
  enableReveals,
  mountShell,
} from "./site";

function renderHeader(): HTMLElement {
  return el(`
    <section class="section section--tight">
      <span class="section__eyebrow">Contact us</span>
      <h1 class="section__title">Talk to a person. Or an agent. Your call.</h1>
      <p class="section__lead">
        We answer email within one business day, and Scour answers texts in
        seconds. For anything else, the booking link below goes straight to
        our calendar.
      </p>
    </section>
  `);
}

function renderGrid(): HTMLElement {
  return el(`
    <section class="section section--tight" style="padding-top: 0">
      <div class="contact-grid">
        <div class="contact-card" data-reveal>
          <p class="contact-card__label">Email</p>
          <p class="contact-card__value"><a href="mailto:${SUPPORT_EMAIL}">${SUPPORT_EMAIL}</a></p>
          <p class="contact-card__note">Support, privacy requests, partnerships — everything lands here and gets a reply within one business day.</p>
        </div>
        <div class="contact-card" data-reveal>
          <p class="contact-card__label">Text or call</p>
          <p class="contact-card__value"><a href="${TEL_HREF}">${SMS_NUMBER}</a></p>
          <p class="contact-card__note">Texting this number reaches Scour, our assistant. Reply STOP anytime to stop messages, HELP for help. Message and data rates may apply.</p>
        </div>
        <div class="contact-card" data-reveal>
          <p class="contact-card__label">Book a chat</p>
          <p class="contact-card__value"><a href="${CAL_URL}" target="_blank" rel="noopener noreferrer">Grab time with the team</a></p>
          <p class="contact-card__note">Thirty minutes, no pitch deck required. Tell us how your fund works and we'll show you EarthOS on a real network.</p>
        </div>
        <div class="contact-card" data-reveal>
          <p class="contact-card__label">Office</p>
          <p class="contact-card__value">${ADDRESS}</p>
          <p class="contact-card__note">We're in SoMa, San Francisco. If you're nearby, come say hi in person — just book a time first so we're around.</p>
        </div>
      </div>
    </section>
  `);
}

function renderBand(): HTMLElement {
  return el(`
    <section class="band">
      <div class="band__inner">
        <h2 class="band__title" data-reveal>Fastest way to reach us? <em>Text us.</em></h2>
        <div class="band__actions" data-reveal>
          <a class="button button--primary button--large" href="${SMS_HREF}">Text ${SMS_NUMBER}</a>
          <a class="button button--secondary button--large" href="/sms/">How texting Scour works</a>
        </div>
      </div>
    </section>
  `);
}

const main = mountShell({ current: "contact" });
main.append(renderHeader(), renderGrid(), renderBand());
enableReveals();
