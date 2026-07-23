import {
  ADDRESS,
  APP_URL,
  SUPPORT_EMAIL,
  el,
  enableReveals,
  mountShell,
} from "./site";

function renderStory(): HTMLElement {
  return el(`
    <section class="section section--tight">
      <span class="section__eyebrow">About Branch</span>
      <h1 class="section__title">We think the best deals travel through people, not databases.</h1>
      <div class="prose" style="margin-top: 28px">
        <p>
          Branch started with a simple observation: the fastest capital
          deployment we ever saw didn't come from better sourcing tools. It
          came from investors who knew exactly who they knew — and could act
          on it in minutes instead of weeks.
        </p>
        <p>
          Most funds sit on thousands of relationships scattered across
          LinkedIn, inboxes, and memory. The data is there; the leverage
          isn't. So we built <strong>EarthOS</strong> to hold that network,
          <strong>Heart</strong> to keep it current, and <strong>Scour</strong>
          to put it to work — an agent you can reach from the app or a plain
          text message.
        </p>
        <p>
          We're a small team in San Francisco, and we'd rather show you than
          pitch you. Open the app and see it on your own network.
        </p>
      </div>
    </section>
  `);
}

function renderValues(): HTMLElement {
  return el(`
    <section class="section">
      <div data-reveal>
        <span class="section__eyebrow">What we believe</span>
        <h2 class="section__title">Three things we won't compromise on.</h2>
      </div>
      <div class="values">
        <article class="card" data-reveal>
          <div class="card__icon">🌱</div>
          <h3 class="card__title">Use what you have</h3>
          <p class="card__body">
            The tools you already use — your browser, your phone, your
            messages — are enough. Software should meet you there, not demand
            a migration.
          </p>
        </article>
        <article class="card" data-reveal>
          <div class="card__icon">🔒</div>
          <h3 class="card__title">Your network is yours</h3>
          <p class="card__body">
            Your data is isolated per user, encrypted, and never sold. Agents
            act only with your explicit approval. Trust is the whole product.
          </p>
        </article>
        <article class="card" data-reveal>
          <div class="card__icon">⚡</div>
          <h3 class="card__title">Speed is the point</h3>
          <p class="card__body">
            Every feature is judged by one metric: does it shorten the time
            between "we should meet them" and the meeting happening?
          </p>
        </article>
      </div>
    </section>
  `);
}

function renderBand(): HTMLElement {
  return el(`
    <section class="band">
      <div class="band__inner">
        <h2 class="band__title" data-reveal>Come say hi — in person or over text.</h2>
        <p class="band__sub" data-reveal>${ADDRESS} · <a href="mailto:${SUPPORT_EMAIL}" style="color:inherit">${SUPPORT_EMAIL}</a></p>
        <div class="band__actions" data-reveal>
          <a class="button button--primary button--large" href="${APP_URL}">Open the app</a>
          <a class="button button--secondary button--large" href="/contact/">Contact us</a>
        </div>
      </div>
    </section>
  `);
}

const main = mountShell({ current: "about" });
main.append(renderStory(), renderValues(), renderBand());
enableReveals();
