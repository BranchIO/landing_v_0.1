import {
  APP_URL,
  SMS_HREF,
  SMS_NUMBER,
  el,
  enableReveals,
  mountShell,
} from "./site";

function renderHero(): HTMLElement {
  return el(`
    <section class="hero">
      <span class="hero__eyebrow">Built for venture investors</span>
      <h1 class="hero__title">Helping VCs deploy capital <em>faster</em>.</h1>
      <p class="hero__sub">
        Branch builds EarthOS — the workspace that turns everyone you have ever
        met into warm dealflow. Ask for a person, a path, or a list, and Scour
        finds it in the network you already have.
      </p>
      <div class="hero__actions">
        <a class="button button--primary button--large" href="${APP_URL}">Open the app</a>
        <a class="button button--secondary button--large" href="/sms/">Text Scour</a>
      </div>
      <p class="hero__hint">Or text Scour directly at <a href="${SMS_HREF}" style="color:inherit">${SMS_NUMBER}</a> — no app required.</p>
    </section>
  `);
}

function renderProducts(): HTMLElement {
  return el(`
    <section class="section" id="products">
      <div data-reveal>
        <span class="section__eyebrow">What we build</span>
        <h2 class="section__title">One network. Three ways in.</h2>
        <p class="section__lead">
          Everything we make works on the same idea: the people you already
          know are your most underused asset.
        </p>
      </div>
      <div class="cards">
        <article class="card" data-reveal>
          <div class="card__icon">🌍</div>
          <span class="card__kicker">The workspace</span>
          <h3 class="card__title">EarthOS</h3>
          <p class="card__body">
            Make the whole world your CRM. Your captured network, lists,
            notes, and workflows in one place — searchable, enriched, and
            always up to date.
          </p>
          <a class="card__link" href="/products/">Explore EarthOS →</a>
        </article>
        <article class="card" data-reveal>
          <div class="card__icon">🔎</div>
          <span class="card__kicker">The agent</span>
          <h3 class="card__title">Scour</h3>
          <p class="card__body">
            A goal-driven assistant that researches people, maps warm paths to
            anyone, drafts grounded intros, and runs multi-step workflows —
            in the app or over text.
          </p>
          <a class="card__link" href="/products/#scour">Meet Scour →</a>
        </article>
        <article class="card" data-reveal>
          <div class="card__icon">🫀</div>
          <span class="card__kicker">The extension</span>
          <h3 class="card__title">Heart</h3>
          <p class="card__body">
            A browser extension that captures your LinkedIn and X network as
            you browse, so EarthOS always reflects the people you actually
            know.
          </p>
          <a class="card__link" href="/products/#heart">See Heart →</a>
        </article>
      </div>
    </section>
  `);
}

function renderSteps(): HTMLElement {
  return el(`
    <section class="section">
      <div data-reveal>
        <span class="section__eyebrow">How it works</span>
        <h2 class="section__title">From cold list to warm intro in three steps.</h2>
      </div>
      <div class="steps">
        <div class="step" data-reveal>
          <h3 class="step__title">Capture</h3>
          <p class="step__body">
            Install Heart and browse like you normally do. Your connections,
            companies, and mutuals flow into EarthOS automatically.
          </p>
        </div>
        <div class="step" data-reveal>
          <h3 class="step__title">Ask</h3>
          <p class="step__body">
            Tell Scour what you need — "fintech founders I can reach through
            one intro" — and it searches, enriches, and ranks your actual
            network.
          </p>
        </div>
        <div class="step" data-reveal>
          <h3 class="step__title">Move</h3>
          <p class="step__body">
            Get warm paths, grounded draft intros, and workflows that keep
            running — every action gated behind your explicit approval.
          </p>
        </div>
      </div>
    </section>
  `);
}

function renderBand(): HTMLElement {
  return el(`
    <section class="band">
      <div class="band__inner">
        <h2 class="band__title" data-reveal>The best tool you own is <em>your network</em>. We just make it usable.</h2>
        <p class="band__sub" data-reveal>
          No new CRM to migrate to. No data entry. Start with a text message
          or jump straight into the app — we'll take it from there.
        </p>
        <div class="band__actions" data-reveal>
          <a class="button button--primary button--large" href="${APP_URL}">Open the app</a>
          <a class="button button--secondary button--large" href="/sms/">Text Scour instead</a>
        </div>
      </div>
    </section>
  `);
}

const main = mountShell({ current: "home", mainClass: "page--home" });
main.append(renderHero(), renderProducts(), renderSteps(), renderBand());
enableReveals();
