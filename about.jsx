// About — the studio / brand story / editor / method / press.

const About = () => (
  <div className="tea-page" style={{ width: '100%' }}>
    <Nav />

    {/* — HERO ———————————————————————————— */}
    <section style={{ padding:'88px 56px 40px' }}>
      <div className="tea-eyebrow" style={{ marginBottom: 26, color:'var(--gold)' }}>
        — The Studio  ·  Established 2024
      </div>
      <div className="tea-display" style={{ fontSize: 160, letterSpacing:'-0.03em' }}>
        About.
      </div>
    </section>

    {/* — MANIFESTO ——————————————————————— */}
    <section style={{ padding:'56px 56px 96px', borderTop:'1px solid var(--ink)' }}>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap: 96 }}>
        <div className="tea-display" style={{ fontSize: 72 }}>
          A small studio, a small library, a single voice.
        </div>
        <div>
          <p className="tea-body" style={{ marginTop: 0, fontSize: 19 }}>
            The Edit Abroad is a small library of luxury packing guides for travelers who'd rather know the right four restaurants than the trending forty — and who'd rather pack one perfect linen suit than three almost-rights.
          </p>
          <p className="tea-body" style={{ fontSize: 19 }}>
            Each Edit is a single document — researched over years of returning — that opens on your phone the morning you land. It tells you what to put in your bag, where to stay, and where to be at four o'clock on Tuesday.
          </p>
          <p className="tea-body" style={{ fontSize: 19 }}>
            No affiliate links. No sponsored placements. No twenty-best-of lists.
          </p>
        </div>
      </div>
    </section>

    {/* — EDITOR —————————————————————————— */}
    <section style={{
      padding:'112px 56px', background:'var(--bg-2)',
      display:'grid', gridTemplateColumns:'1fr 1fr', gap: 96, alignItems:'center'
    }}>
      <Img tone="bone" caption="editor on assignment — replace with shane's portrait" style={{ aspectRatio:'4/5' }} />
      <div>
        <div className="tea-eyebrow" style={{ marginBottom: 24 }}>The Editor</div>
        <div className="tea-display" style={{ fontSize: 80, marginBottom: 28 }}>
          Shane Dunn.
        </div>
        <p className="tea-body" style={{ fontSize: 18 }}>
          Shane splits his time between Kona, Southern California, France, Greece, and Australia — equal parts ocean kid and amateur sommelier. He's spent the better part of a decade learning what to put in a bag for a ferry, a long-haul, and a six-week trip you didn't plan. The Edit Abroad collects those answers — the way he'd actually send them to a friend.
        </p>
        <div style={{
          marginTop: 32, display:'flex', gap: 28,
          fontFamily:'var(--sans)', fontSize: 11, letterSpacing:'0.16em', textTransform:'uppercase', color:'var(--ink-3)'
        }}>
          <span>Editor</span>
          <span style={{ color:'var(--mute)' }}>·</span>
          <span>Writer</span>
          <span style={{ color:'var(--mute)' }}>·</span>
          <span>Kona · So. Cal · France · Greece · Australia</span>
        </div>
      </div>
    </section>

    {/* — METHOD —————————————————————————— */}
    <section className="tea-section">
      <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 48 }}>
        <div className="tea-eyebrow">The Method</div>
        <div className="tea-display" style={{ fontSize: 56, maxWidth: 720, textAlign:'right' }}>
          Three trips, two locals, one editor — before anything makes it into the bag.
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 32 }}>
        {[
          ['Return,', 'three times minimum, across at least two seasons. The first trip is the wrong one.'],
          ['Ask,',    'the people who already live the way we want to travel. The right concierge, the off-duty chef, the friend who never left.'],
          ['Edit,',   'until the guide is short enough to actually use. Most of the work is in what we cut.'],
        ].map(([word, line]) => (
          <div key={word} style={{ paddingTop: 22, borderTop:'1px solid var(--ink)' }}>
            <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 48, marginBottom: 18, letterSpacing:'-0.02em' }}>
              {word}
            </div>
            <p className="tea-body" style={{ fontSize: 16 }}>{line}</p>
          </div>
        ))}
      </div>
    </section>

    {/* — PRESS / TRADE ————————————————————— */}
    <section style={{ padding:'80px 56px', borderTop:'1px solid var(--line-soft)', borderBottom:'1px solid var(--line-soft)' }}>
      <div className="tea-eyebrow" style={{ marginBottom: 36 }}>Press · Trade</div>
      <div style={{
        display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap: 48, alignItems:'center'
      }}>
        {['Vogue', 'Cereal', 'Cond\u00e9 Nast', 'Monocle', 'The Times'].map(p => (
          <div key={p} style={{
            fontFamily:'var(--serif)', fontSize: 26, fontStyle:'italic',
            color:'var(--ink-3)', textAlign:'center'
          }}>
            {p}
          </div>
        ))}
      </div>
    </section>

    {/* — CONTACT —————————————————————————— */}
    <section className="tea-section" style={{
      display:'grid', gridTemplateColumns:'1fr 1.4fr', gap: 96
    }}>
      <div>
        <div className="tea-eyebrow" style={{ marginBottom: 24 }}>Get in touch</div>
        <div className="tea-display" style={{ fontSize: 56 }}>
          Drop us a line.
        </div>
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap: 56 }}>
        <div>
          <div className="tea-mono" style={{ marginBottom: 10 }}>GENERAL</div>
          <a href="mailto:hello@theeditabroad.com" style={{
            fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 28,
            color:'var(--ink)', textDecoration:'none', borderBottom:'1px solid var(--ink)'
          }}>
            hello@theeditabroad.com
          </a>
          <p className="tea-body" style={{ marginTop: 16, fontSize: 15 }}>
            Questions, gift orders, custom Edits for an upcoming trip.
          </p>
        </div>
        <div>
          <div className="tea-mono" style={{ marginBottom: 10 }}>PRESS &amp; PARTNERSHIPS</div>
          <a href="mailto:press@theeditabroad.com" style={{
            fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 28,
            color:'var(--ink)', textDecoration:'none', borderBottom:'1px solid var(--ink)'
          }}>
            press@theeditabroad.com
          </a>
          <p className="tea-body" style={{ marginTop: 16, fontSize: 15 }}>
            For features, trade orders, or hotel/brand collaborations.
          </p>
        </div>
      </div>
    </section>

    <Footer />
    <FooterRule />
  </div>
);

window.About = About;
