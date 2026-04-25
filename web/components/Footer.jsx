"use client";

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-social-icon">
      <path
        d="M6.94 8.5v9.56H3.76V8.5h3.18zM5.35 3.25c1.01 0 1.84.83 1.84 1.84a1.84 1.84 0 0 1-3.68 0c0-1.01.82-1.84 1.84-1.84zm13.9 9.33v5.48h-3.16v-5.12c0-1.22-.44-2.06-1.53-2.06-.84 0-1.34.56-1.56 1.11-.08.2-.1.48-.1.76v5.3H9.74s.04-8.6 0-9.56h3.16v1.35l-.02.02h.02v-.02c.42-.65 1.17-1.58 2.86-1.58 2.08 0 3.49 1.36 3.49 4.32z"
        fill="currentColor"
      />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-social-icon">
      <path
        d="M12 2.25a9.75 9.75 0 0 0-3.08 19c.49.09.67-.21.67-.47v-1.84c-2.73.6-3.31-1.16-3.31-1.16-.45-1.12-1.09-1.41-1.09-1.41-.89-.62.07-.61.07-.61 1 .07 1.53 1.02 1.53 1.02.87 1.49 2.29 1.06 2.85.81.09-.63.34-1.06.62-1.31-2.18-.25-4.47-1.08-4.47-4.82 0-1.06.38-1.92 1-2.6-.1-.25-.43-1.27.1-2.64 0 0 .82-.26 2.69 1a9.33 9.33 0 0 1 4.89 0c1.87-1.26 2.69-1 2.69-1 .53 1.37.2 2.39.1 2.64.62.68 1 1.54 1 2.6 0 3.75-2.3 4.57-4.49 4.81.35.3.67.9.67 1.83v2.71c0 .26.18.57.68.47A9.75 9.75 0 0 0 12 2.25z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="footer-social-icon">
      <path
        d="M7.72 2.75h8.56a4.97 4.97 0 0 1 4.97 4.97v8.56a4.97 4.97 0 0 1-4.97 4.97H7.72a4.97 4.97 0 0 1-4.97-4.97V7.72a4.97 4.97 0 0 1 4.97-4.97zm0 1.8A3.17 3.17 0 0 0 4.55 7.7v8.58a3.17 3.17 0 0 0 3.17 3.17h8.58a3.17 3.17 0 0 0 3.17-3.17V7.7a3.17 3.17 0 0 0-3.17-3.17H7.72zm8.95 1.39a1.17 1.17 0 1 1 0 2.34 1.17 1.17 0 0 1 0-2.34zm-4.67 1.18a4.88 4.88 0 1 1 0 9.76 4.88 4.88 0 0 1 0-9.76zm0 1.8a3.08 3.08 0 1 0 0 6.16 3.08 3.08 0 0 0 0-6.16z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="footer-root" role="contentinfo">
      <button
        type="button"
        className="footer-back-top footer-back-top-on-divider"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        ↑
      </button>

      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <p className="footer-name">Design × Code × AI</p>
            <p className="footer-tagline">Based between New York and Cape Town</p>
          </div>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/samanthahavas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Samantha's LinkedIn profile"
              className="footer-social-link"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://github.com/samhavasdesign"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Samantha's GitHub profile"
              className="footer-social-link"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.instagram.com/samhavas"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Samantha's Instagram profile"
              className="footer-social-link"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">© 2026 Samantha Havas</p>
        </div>
      </div>
    </footer>
  );
}
