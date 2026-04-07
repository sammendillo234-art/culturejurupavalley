<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Culture Club – Jurupa Valley | Member Exclusive</title>
  <meta name="description" content="A limited member exclusive at Culture Club Jurupa Valley. Save big — while supplies last." />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

    :root {
      --pink: #FF1493;
      --pink-light: #FF69B4;
      --pink-glow: rgba(255, 20, 147, 0.25);
      --black: #0A0A0A;
      --black-soft: #141414;
      --black-card: #1A1A1A;
      --white: #FAFAFA;
      --gray: #888;
      --gray-light: #BBB;
    }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'DM Sans', sans-serif;
      background: var(--black);
      color: var(--white);
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
      overflow-x: hidden;
    }

    /* ── NAV ── */
    .nav {
      position: fixed; top: 0; left: 0; right: 0; z-index: 100;
      padding: 1rem 2rem;
      display: flex; align-items: center; justify-content: space-between;
      background: rgba(10,10,10,0.85);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,20,147,0.1);
    }
    .nav-logo img { height: 22px; width: auto; }
    .nav-cta {
      background: var(--pink);
      color: var(--white);
      font-weight: 600;
      font-size: 0.85rem;
      padding: 0.6rem 1.5rem;
      border-radius: 50px;
      text-decoration: none;
      letter-spacing: 0.03em;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .nav-cta:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 20px var(--pink-glow);
    }

    /* ── HERO ── */
    .hero {
      min-height: 100vh;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center;
      padding: 8rem 2rem 4rem;
      position: relative;
      overflow: hidden;
    }
    .hero::before {
      content: '';
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 60% 50% at 50% 0%, rgba(255,20,147,0.12) 0%, transparent 70%),
        radial-gradient(ellipse 40% 60% at 80% 80%, rgba(255,20,147,0.06) 0%, transparent 60%);
      pointer-events: none;
    }
    .hero-badge {
      display: inline-flex; align-items: center; gap: 0.5rem;
      background: rgba(255,20,147,0.1);
      border: 1px solid rgba(255,20,147,0.25);
      border-radius: 50px;
      padding: 0.4rem 1rem;
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--pink-light);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      margin-bottom: 2rem;
      animation: fadeDown 0.8s ease-out;
    }
    .hero-badge::before {
      content: '';
      width: 6px; height: 6px;
      background: var(--pink);
      border-radius: 50%;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.4; }
    }

    .hero h1 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(3.5rem, 10vw, 8rem);
      line-height: 0.95;
      letter-spacing: 0.02em;
      margin-bottom: 1.5rem;
      animation: fadeUp 0.8s ease-out 0.1s both;
    }
    .hero h1 .accent { color: var(--pink); }

    .hero-sub {
      font-size: clamp(1rem, 2.5vw, 1.25rem);
      color: var(--gray-light);
      max-width: 540px;
      margin-bottom: 2.5rem;
      animation: fadeUp 0.8s ease-out 0.25s both;
    }

    /* ── PRICE CARD ── */
    .price-card {
      background: linear-gradient(135deg, rgba(255,20,147,0.18), rgba(255,20,147,0.04));
      border: 1.5px solid rgba(255,20,147,0.35);
      border-radius: 20px;
      padding: 2.5rem 3rem;
      margin-bottom: 2.5rem;
      animation: fadeUp 0.8s ease-out 0.35s both;
      position: relative;
      overflow: hidden;
    }
    .price-card::before {
      content: '';
      position: absolute;
      width: 220px; height: 220px;
      background: rgba(255,20,147,0.12);
      border-radius: 50%;
      top: -90px; right: -70px;
      pointer-events: none;
    }
    .price-old {
      font-family: 'DM Sans', sans-serif;
      font-size: 1.4rem;
      color: var(--gray);
      text-decoration: line-through;
      text-decoration-color: var(--pink);
      margin-bottom: 0.25rem;
    }
    .price-new {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(4.5rem, 12vw, 7rem);
      line-height: 0.9;
      color: var(--pink);
      letter-spacing: 0.01em;
    }
    .price-label {
      font-size: 0.8rem;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--gray-light);
      margin-top: 0.5rem;
      font-weight: 600;
    }
    .price-save {
      display: inline-block;
      margin-top: 1rem;
      background: var(--pink);
      color: var(--white);
      font-weight: 700;
      font-size: 0.85rem;
      padding: 0.4rem 1.1rem;
      border-radius: 50px;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .hero-actions {
      display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;
      animation: fadeUp 0.8s ease-out 0.45s both;
    }
    .btn-primary {
      background: var(--pink);
      color: var(--white);
      font-weight: 700;
      font-size: 1rem;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      transition: transform 0.2s, box-shadow 0.3s;
      letter-spacing: 0.02em;
    }
    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px var(--pink-glow);
    }
    .btn-secondary {
      background: transparent;
      color: var(--white);
      font-weight: 600;
      font-size: 1rem;
      padding: 1rem 2.5rem;
      border-radius: 50px;
      text-decoration: none;
      border: 1.5px solid rgba(255,255,255,0.2);
      transition: border-color 0.2s, background 0.2s;
    }
    .btn-secondary:hover {
      border-color: var(--pink);
      background: rgba(255,20,147,0.06);
    }

    .hero-fineprint {
      margin-top: 2rem;
      font-size: 0.75rem;
      color: var(--gray);
      letter-spacing: 0.03em;
      animation: fadeUp 0.8s ease-out 0.55s both;
    }

    /* ── FEATURES ── */
    .features {
      padding: 6rem 2rem;
      max-width: 1100px;
      margin: 0 auto;
    }
    .section-tag {
      font-size: 0.75rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: var(--pink);
      margin-bottom: 1rem;
    }
    .section-title {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(2rem, 5vw, 3.5rem);
      line-height: 1;
      margin-bottom: 3rem;
    }

    .feature-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 1.5rem;
    }
    .feature-card {
      background: var(--black-card);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 16px;
      padding: 2rem;
      transition: border-color 0.3s, transform 0.3s;
    }
    .feature-card:hover {
      border-color: rgba(255,20,147,0.3);
      transform: translateY(-4px);
    }
    .feature-icon {
      width: 48px; height: 48px;
      background: rgba(255,20,147,0.1);
      border-radius: 12px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.25rem;
      font-size: 1.3rem;
    }
    .feature-card h3 {
      font-size: 1.15rem;
      font-weight: 700;
      margin-bottom: 0.5rem;
    }
    .feature-card p {
      font-size: 0.9rem;
      color: var(--gray-light);
      line-height: 1.5;
    }

    /* ── VISIT ── */
    .visit {
      padding: 6rem 2rem;
      max-width: 1100px;
      margin: 0 auto;
    }
    .visit-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
      align-items: start;
    }
    .visit-map {
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(255,255,255,0.06);
      aspect-ratio: 4/3;
    }
    .visit-map iframe {
      width: 100%; height: 100%; border: 0;
      filter: grayscale(0.8) brightness(0.7) contrast(1.1);
      transition: filter 0.4s;
    }
    .visit-map:hover iframe {
      filter: grayscale(0.3) brightness(0.8) contrast(1.05);
    }

    .visit-details {
      display: flex; flex-direction: column; gap: 1.5rem;
    }
    .visit-item {
      background: var(--black-card);
      border: 1px solid rgba(255,255,255,0.06);
      border-radius: 14px;
      padding: 1.5rem;
    }
    .visit-item-label {
      font-size: 0.7rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.12em;
      color: var(--pink);
      margin-bottom: 0.4rem;
    }
    .visit-item-value {
      font-size: 1.05rem;
      font-weight: 500;
    }
    .visit-item-value a {
      color: var(--white);
      text-decoration: none;
      transition: color 0.2s;
    }
    .visit-item-value a:hover { color: var(--pink); }

    /* ── CTA BANNER ── */
    .cta-banner {
      margin: 4rem 2rem 6rem;
      max-width: 1100px;
      margin-left: auto; margin-right: auto;
      background: linear-gradient(135deg, rgba(255,20,147,0.15), rgba(255,20,147,0.05));
      border: 1px solid rgba(255,20,147,0.2);
      border-radius: 20px;
      padding: 4rem 3rem;
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .cta-banner::before {
      content: '';
      position: absolute;
      width: 300px; height: 300px;
      background: rgba(255,20,147,0.08);
      border-radius: 50%;
      top: -100px; right: -60px;
      pointer-events: none;
    }
    .cta-banner h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(2rem, 5vw, 3.2rem);
      margin-bottom: 1rem;
    }
    .cta-banner p {
      color: var(--gray-light);
      font-size: 1.05rem;
      margin-bottom: 2rem;
      max-width: 500px;
      margin-left: auto; margin-right: auto;
    }

    /* ── FOOTER ── */
    footer {
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 3rem 2rem;
      max-width: 1100px;
      margin: 0 auto;
      display: flex; align-items: center; justify-content: space-between;
      flex-wrap: wrap; gap: 1rem;
    }
    .footer-brand {
      font-family: 'Bebas Neue', sans-serif;
      font-size: 1.1rem;
      letter-spacing: 0.06em;
    }
    .footer-brand span { color: var(--pink); }
    .footer-legal {
      font-size: 0.75rem;
      color: var(--gray);
    }
    .footer-links {
      display: flex; gap: 1.5rem;
    }
    .footer-links a {
      font-size: 0.8rem;
      color: var(--gray);
      text-decoration: none;
      transition: color 0.2s;
    }
    .footer-links a:hover { color: var(--pink); }

    /* ── AGE GATE ── */
    .age-gate {
      position: fixed; inset: 0; z-index: 9999;
      background: var(--black);
      display: flex; align-items: center; justify-content: center;
      flex-direction: column;
      text-align: center;
      padding: 2rem;
      transition: opacity 0.5s, visibility 0.5s;
    }
    .age-gate.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
    .age-gate h2 {
      font-family: 'Bebas Neue', sans-serif;
      font-size: clamp(2.5rem, 6vw, 4rem);
      margin-bottom: 0.5rem;
    }
    .age-gate h2 span { color: var(--pink); }
    .age-gate p {
      color: var(--gray-light);
      margin-bottom: 2rem;
      font-size: 1rem;
    }
    .age-gate-actions { display: flex; gap: 1rem; }
    .age-gate-actions button {
      font-family: 'DM Sans', sans-serif;
      font-weight: 700;
      font-size: 1rem;
      padding: 0.9rem 2.5rem;
      border-radius: 50px;
      border: none;
      cursor: pointer;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    .age-yes { background: var(--pink); color: var(--white); }
    .age-yes:hover { transform: translateY(-2px); box-shadow: 0 6px 24px var(--pink-glow); }
    .age-no {
      background: transparent; color: var(--white);
      border: 1.5px solid rgba(255,255,255,0.2) !important;
    }
    .age-no:hover { border-color: var(--pink) !important; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(24px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes fadeDown {
      from { opacity: 0; transform: translateY(-16px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @media (max-width: 768px) {
      .nav { padding: 0.8rem 1.2rem; }
      .hero { padding: 7rem 1.5rem 3rem; }
      .price-card { padding: 2rem 1.5rem; }
      .visit-grid { grid-template-columns: 1fr; }
      .visit-map { aspect-ratio: 16/10; }
      .cta-banner { padding: 3rem 1.5rem; }
      footer { flex-direction: column; text-align: center; }
    }
    @media (max-width: 480px) {
      .hero-actions { flex-direction: row; width: 100%; }
      .hero-actions a { flex: 1; text-align: center; padding: 0.85rem 1rem; font-size: 0.9rem; }
      .age-gate-actions { flex-direction: row; }
    }
  </style>
</head>
<body>

  <!-- AGE GATE -->
  <div class="age-gate" id="ageGate">
    <h2>Welcome to <span>Culture</span></h2>
    <p>You must be 21 or older to enter this site.</p>
    <div class="age-gate-actions">
      <button class="age-yes" onclick="document.getElementById('ageGate').classList.add('hidden')">I'm 21+</button>
      <button class="age-no" onclick="window.location.href='https://google.com'">Under 21</button>
    </div>
  </div>

  <!-- NAV -->
  <nav class="nav">
    <a href="#" class="nav-logo"><img src="/images/culture-logo.png" alt="Culture Club"></a>
    <a href="https://culturecannabisclub.com/stores/culture-jurupa-valley/brands/time-machine?utm_source=google&utm_medium=cpc&utm_campaign=timemachinead&utm_id=ozad" class="nav-cta" target="_blank" rel="noopener">View Offer</a>
  </nav>

  <!-- HERO -->
  <section class="hero">
    <div class="hero-badge">Limited Time · Jurupa Valley</div>
    <h1>TIME <span class="accent">MACHINE.</span><br>PRICES REWOUND.</h1>
    <p class="hero-sub">A member exclusive at Culture Club Jurupa Valley. Premium selection at a throwback price — while supplies last.</p>

    <div class="price-card">
      <div class="price-old">Regularly $120</div>
      <div class="price-new">$50</div>
      <div class="price-label">Member Exclusive</div>
      <div class="price-save">Save $70</div>
    </div>

    <div class="hero-actions">
      <a href="https://culturecannabisclub.com/stores/culture-jurupa-valley/brands/time-machine?utm_source=google&utm_medium=cpc&utm_campaign=timemachinead&utm_id=ozad" class="btn-primary" target="_blank" rel="noopener">Claim Offer</a>
      <a href="https://maps.google.com/?q=10810+Limonite+Ave+Mira+Loma+CA+91752" class="btn-secondary" target="_blank" rel="noopener">Get Directions</a>
    </div>

    <div class="hero-fineprint">While supplies last. Must be 21+. Valid ID required. Terms apply.</div>
  </section>

  <!-- FEATURES -->
  <section class="features">
    <div class="section-tag">Why Culture</div>
    <h2 class="section-title">A Retail Experience<br>Like No Other</h2>
    <div class="feature-grid">
      <div class="feature-card">
        <div class="feature-icon">🎯</div>
        <h3>Curated Selection</h3>
        <p>Hand-picked from California's top names. Quality you can trust, every visit.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">💬</div>
        <h3>Expert Staff</h3>
        <p>Our knowledgeable team is here to help you find exactly what you're looking for.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚡</div>
        <h3>Order Ahead</h3>
        <p>Browse online and reserve for quick in-store pickup. Skip the wait.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🏷️</div>
        <h3>Daily Deals</h3>
        <p>Rotating specials and exclusive member rewards every day of the week.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🛡️</div>
        <h3>Safe &amp; Licensed</h3>
        <p>Fully licensed and compliant. Full transparency on everything we carry.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">📍</div>
        <h3>Easy Access</h3>
        <p>Located on Limonite Ave with ample parking. Serving Jurupa Valley, Mira Loma, Eastvale &amp; Norco.</p>
      </div>
    </div>
  </section>

  <!-- VISIT -->
  <section class="visit">
    <div class="section-tag">Visit Us</div>
    <h2 class="section-title">Come Say Hello</h2>
    <div class="visit-grid">
      <div class="visit-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5!2d-117.5551!3d33.9987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcca5e19d1b1f7%3A0x2cfe2d37a20e3e0!2s10810%20Limonite%20Ave%2C%20Mira%20Loma%2C%20CA%2091752!5e0!3m2!1sen!2sus!4v1"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          title="Culture Club Jurupa Valley location map"></iframe>
      </div>
      <div class="visit-details">
        <div class="visit-item">
          <div class="visit-item-label">Address</div>
          <div class="visit-item-value">
            <a href="https://maps.google.com/?q=10810+Limonite+Ave+Mira+Loma+CA+91752" target="_blank" rel="noopener">
              10810 Limonite Ave<br>Mira Loma, CA 91752
            </a>
          </div>
        </div>
        <div class="visit-item">
          <div class="visit-item-label">Phone</div>
          <div class="visit-item-value"><a href="tel:+19514446144">(951) 444-6144</a></div>
        </div>
        <div class="visit-item">
          <div class="visit-item-label">Hours</div>
          <div class="visit-item-value">Open Daily · 8 AM – 10 PM</div>
        </div>
        <div class="visit-item">
          <div class="visit-item-label">Serving</div>
          <div class="visit-item-value">Jurupa Valley · Mira Loma · Eastvale · Norco · Corona · Ontario</div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-banner">
    <h2>Don't Miss The Rewind</h2>
    <p>This one won't last. Lock in the throwback price before it's gone.</p>
    <a href="https://culturecannabisclub.com/stores/culture-jurupa-valley/brands/time-machine?utm_source=google&utm_medium=cpc&utm_campaign=timemachinead&utm_id=ozad" class="btn-primary" target="_blank" rel="noopener">Claim Offer</a>
  </section>

  <!-- FOOTER -->
  <footer>
    <div class="footer-brand"><span>CULTURE</span> CLUB · JURUPA VALLEY</div>
    <div class="footer-links">
      <a href="https://culturecannabisclub.com/stores/culture-jurupa-valley/brands/time-machine?utm_source=google&utm_medium=cpc&utm_campaign=timemachinead&utm_id=ozad" target="_blank" rel="noopener">Offer</a>
      <a href="tel:+19514446144">Call Us</a>
      <a href="https://maps.google.com/?q=10810+Limonite+Ave+Mira+Loma+CA+91752" target="_blank" rel="noopener">Directions</a>
    </div>
    <div class="footer-legal">© 2026 Culture Club. All rights reserved. Must be 21+.</div>
  </footer>

</body>
</html>
