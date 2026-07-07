export default function Hero() {
  return (
    <div className="hero-split">
      <div className="hero-left">
        <div className="hero-left-inner">
          <h1 className="headline">
            The AI assistant that helps you meet more people
          </h1>
          <p className="subtitle">
            Everything about your network.
            <br />
            Controlled from your messages
          </p>
          <div className="cta-row">
            <button className="cta-primary" type="button">
              Start by meeting us!
            </button>
          </div>

          <p className="availability">
            <svg
              className="check-icon"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9.25" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M8.5 12.2l2.4 2.4 4.6-5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Works everywhere
          </p>
        </div>
      </div>

      <div className="hero-right">
        {/* reserved — right-side content to be added */}
      </div>
    </div>
  );
}
