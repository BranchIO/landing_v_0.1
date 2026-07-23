import {
  APP_URL,
  SMS_HREF,
  SMS_NUMBER,
  el,
  enableReveals,
  mountShell,
} from "./site";

function renderHeader(): HTMLElement {
  return el(`
    <section class="section section--tight">
      <span class="section__eyebrow">Products &amp; services</span>
      <h1 class="section__title">Software that treats your network like the asset it is.</h1>
      <p class="section__lead">
        Three pieces, one system: EarthOS holds your network, Heart keeps it
        fresh, and Scour puts it to work.
      </p>
    </section>
  `);
}

function renderSplits(): HTMLElement {
  return el(`
    <section class="section section--tight">
      <div class="split" id="earthos" data-reveal>
        <div class="split__copy">
          <span class="section__eyebrow">EarthOS</span>
          <h2 class="split__title">Make the whole world your CRM.</h2>
          <p class="section__lead">
            EarthOS is a workspace built around the people you actually know.
            Instead of rows you type in by hand, it holds your captured
            network — enriched, searchable, and organised the way you think.
          </p>
          <ul class="split__list">
            <li>Your full network — connections, companies, and the mutuals between you and anyone you want to reach.</li>
            <li>Lists, custom fields, and notes that stay attached to real people, not stale spreadsheet rows.</li>
            <li>Enrichment and interaction history, so context is there when you need it.</li>
            <li>Every user's data isolated and encrypted — your network is yours.</li>
          </ul>
        </div>
        <div class="split__panel">
          <p class="split__panel-quote">"Who do we know at every fintech that raised a Series A this year?"</p>
          <p class="split__panel-note">The kind of question EarthOS answers from your own network — not a purchased database.</p>
        </div>
      </div>

      <div class="split split--flip" id="scour" data-reveal>
        <div class="split__copy">
          <span class="section__eyebrow">Scour</span>
          <h2 class="split__title">An agent that works your network for you.</h2>
          <p class="section__lead">
            Scour is the assistant inside EarthOS. Give it a goal and it
            researches people, maps warm introduction paths, drafts grounded
            outreach, and runs multi-step workflows — remembering what it
            learns along the way.
          </p>
          <ul class="split__list">
            <li>People research and network intelligence on demand.</li>
            <li>Relationship paths: who can introduce you, and how warm the path is.</li>
            <li>Drafts grounded in real context — never invented credentials.</li>
            <li>Reachable by text at ${SMS_NUMBER} — same memory, tools, and workflows as on desktop.</li>
            <li>Anything that changes your data waits for your explicit approval.</li>
          </ul>
        </div>
        <div class="split__panel">
          <div class="chat">
            <p class="chat__bubble chat__bubble--me">Find me a warm path to the founder of that robotics company in Austin</p>
            <p class="chat__bubble chat__bubble--scour">Found 3 paths. Strongest: Sarah M. — you worked together at Stripe, and she's on their board. Want a draft intro ask?</p>
            <p class="chat__bubble chat__bubble--me">Yes, keep it short</p>
          </div>
        </div>
      </div>

      <div class="split" id="heart" data-reveal>
        <div class="split__copy">
          <span class="section__eyebrow">Heart</span>
          <h2 class="split__title">Capture your network as you browse.</h2>
          <p class="section__lead">
            Heart is our browser extension. It quietly captures your LinkedIn
            and X network while you do what you already do, so EarthOS always
            reflects reality — no exports, no CSVs, no data entry.
          </p>
          <ul class="split__list">
            <li>Captures connections, company rosters, and mutuals from LinkedIn and X.</li>
            <li>Everything lands in your EarthOS workspace, tied to your account only.</li>
            <li>Nothing is shared with other users or sold — see our Privacy Policy.</li>
          </ul>
        </div>
        <div class="split__panel">
          <p class="split__panel-quote">Browse normally. Wake up to a network you can actually query.</p>
          <p class="split__panel-note">Heart works in the background of the browsing you were doing anyway.</p>
        </div>
      </div>
    </section>
  `);
}

function renderServices(): HTMLElement {
  return el(`
    <section class="section">
      <div data-reveal>
        <span class="section__eyebrow">How we work with you</span>
        <h2 class="section__title">Start with a conversation, not a contract.</h2>
      </div>
      <div class="cards">
        <article class="card" data-reveal>
          <div class="card__icon">🌍</div>
          <h3 class="card__title">Try the app</h3>
          <p class="card__body">
            The fastest way to see it is to use it. Open EarthOS in your
            browser, capture your network, and see what it can already do.
          </p>
          <a class="card__link" href="${APP_URL}">Open the app →</a>
        </article>
        <article class="card" data-reveal>
          <div class="card__icon">🤝</div>
          <h3 class="card__title">Hands-on onboarding</h3>
          <p class="card__body">
            We set up EarthOS with you: capture your network, build your first
            lists, and wire up the workflows your fund actually runs.
          </p>
          <a class="card__link" href="/contact/">Talk to us →</a>
        </article>
        <article class="card" data-reveal>
          <div class="card__icon">💬</div>
          <h3 class="card__title">Text-first access</h3>
          <p class="card__body">
            Prefer to skip the app entirely? Scour works over plain SMS —
            text ${SMS_NUMBER} and it answers with your network behind it.
          </p>
          <a class="card__link" href="/sms/">How texting works →</a>
        </article>
      </div>
    </section>
  `);
}

function renderBand(): HTMLElement {
  return el(`
    <section class="band">
      <div class="band__inner">
        <h2 class="band__title" data-reveal>See it on <em>your</em> network, not a demo account.</h2>
        <div class="band__actions" data-reveal>
          <a class="button button--primary button--large" href="${APP_URL}">Open the app</a>
          <a class="button button--secondary button--large" href="${SMS_HREF}">Text ${SMS_NUMBER}</a>
        </div>
      </div>
    </section>
  `);
}

const main = mountShell({ current: "products" });
main.append(renderHeader(), renderSplits(), renderServices(), renderBand());
enableReveals();
