'use client';

import { useState } from 'react';

const decades = ['1930s', '1940s', '1950s', '1960s', '1970s', '1980s', '1990s', '2000s', '2010s', '2020s'];

export default function Page() {
  const [note, setNote] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const email = new FormData(event.currentTarget).get('email')?.toString().trim();
    setNote(email ? 'You are on the early access list.' : 'Add an email and you are in.');
    if (email) event.currentTarget.reset();
  }

  return (
    <>
      <header className="site-header" aria-label="Primary">
        <a className="brand" href="#top" aria-label="QuantumLeap home">
          <span className="brand-mark" aria-hidden="true">QL</span>
          <span>QuantumLeap</span>
        </a>
        <nav className="nav-links" aria-label="Site">
          <a href="#loop">Game Loop</a>
          <a href="#verify">Fair Draws</a>
          <a href="#waitlist">Waitlist</a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <img
            className="hero-art"
            src="/assets/quantumleap-hero.svg"
            alt="Isometric QuantumLeap arena with ten glowing decade floors floating in space."
          />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-content">
            <p className="eyebrow">Solana GameFi MMO</p>
            <h1 id="hero-title">QuantumLeap</h1>
            <p className="hero-copy">
              Pick a decade floor, hold your ground, and split the hourly creator-fee pot when your era hits.
            </p>
            <div className="hero-actions" aria-label="Primary actions">
              <a className="button primary" href="#waitlist">Join waitlist</a>
              <a className="button secondary" href="#loop">See the loop</a>
            </div>
            <dl className="hero-stats" aria-label="QuantumLeap quick facts">
              <div>
                <dt>10</dt>
                <dd>Decade floors</dd>
              </div>
              <div>
                <dt>1/hr</dt>
                <dd>Server draw</dd>
              </div>
              <div>
                <dt>Equal</dt>
                <dd>Winner split</dd>
              </div>
            </dl>
          </div>
        </section>

        <section id="loop" className="section intro-band" aria-labelledby="loop-title">
          <div className="section-inner two-column">
            <div>
              <p className="eyebrow">The core loop</p>
              <h2 id="loop-title">Stand on the era you think will jump.</h2>
            </div>
            <p className="section-copy">
              QuantumLeap turns token holding into a live multiplayer ritual: connect your wallet, move through an
              isometric timeline, leap between eras, and wait for the next server-authoritative hourly draw.
            </p>
          </div>
        </section>

        <section className="section steps" aria-label="How QuantumLeap works">
          <div className="section-inner step-grid">
            <article className="step-card">
              <span className="step-number">01</span>
              <h3>Choose your floor</h3>
              <p>Move your avatar across one of ten decade floors, from the 1930s through the 2020s.</p>
            </article>
            <article className="step-card">
              <span className="step-number">02</span>
              <h3>Hold enough LEAP</h3>
              <p>Eligibility is checked from chain data at the snapshot tick, not from client-reported balances.</p>
            </article>
            <article className="step-card">
              <span className="step-number">03</span>
              <h3>Split the pot</h3>
              <p>If your floor wins, every eligible player on that floor shares the hour&apos;s creator-fee rewards equally.</p>
            </article>
          </div>
        </section>

        <section id="verify" className="section verify" aria-labelledby="verify-title">
          <div className="section-inner verify-layout">
            <div>
              <p className="eyebrow">Provable fairness</p>
              <h2 id="verify-title">The client never rolls the dice.</h2>
              <p className="section-copy">
                Draws are planned around a commit-reveal flow: the server commits before the hour, reveals after the
                snapshot, and publishes the inputs needed to recompute the winning floor.
              </p>
            </div>
            <div className="verify-panel" aria-label="Example verification flow">
              <div>
                <span>Commit</span>
                <code>sha256(serverSeed)</code>
              </div>
              <div>
                <span>Reveal</span>
                <code>serverSeed + hourId</code>
              </div>
              <div>
                <span>Floor</span>
                <code>hash % 10</code>
              </div>
            </div>
          </div>
        </section>

        <section className="section floors" aria-labelledby="floors-title">
          <div className="section-inner">
            <div className="section-heading">
              <p className="eyebrow">1930s to 2020s</p>
              <h2 id="floors-title">Ten floors. One hourly leap.</h2>
            </div>
            <div className="floor-strip" aria-label="Decade floors">
              {decades.map((decade) => <span key={decade}>{decade}</span>)}
            </div>
          </div>
        </section>

        <section id="waitlist" className="section waitlist" aria-labelledby="waitlist-title">
          <div className="section-inner waitlist-layout">
            <div>
              <p className="eyebrow">Early access</p>
              <h2 id="waitlist-title">Get the first jump window.</h2>
              <p className="section-copy">
                Join the waitlist for launch timing, floor previews, and the first public verifier drop.
              </p>
            </div>
            <form className="signup-form" onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <div className="signup-row">
                <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
                <button className="button primary" type="submit">Request access</button>
              </div>
              <p className="form-note" role="status" aria-live="polite">{note}</p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>QuantumLeap</span>
        <span>Hourly timeline arena on Solana</span>
      </footer>
    </>
  );
}
