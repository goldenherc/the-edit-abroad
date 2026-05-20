// Home D — Cover + Index (mix, v2)
// Brand-general welcome: a soft warm-cream hero showcasing the library's covers
// as a gentle horizontal "shelf" that bleeds off both sides, with the manifesto
// front and center. Then bridges into the editor's letter and the Index list
// with sticky cover preview.

const HomeD = () => {
  const cities = window.TEA_CITIES;
  const revisedDates = {
    bcn:'Apr 2026', cpt:'Jan 2026', grc:'May 2026', haw:'May 2026',
    ibz:'Feb 2026', ldn:'Mar 2026', mar:'Apr 2026', mex:'Jan 2026',
    par:'Mar 2026', sof:'Jan 2026', ita:'Apr 2026', syd:'Mar 2026',
    tam:'Feb 2026', tyo:'Oct 2025',
  };

  // We arrange the cover shelf in two staggered rows so the page feels alive
  // and so every cover can be present without competing with the headline.
  // The shelves bleed off both sides to suggest the library continues.
  const half = Math.ceil(cities.length / 2);
  const shelfTop    = cities.slice(0, half);
  const shelfBottom = cities.slice(half);

  const cream = 'var(--bg)';

  return (
    <div className="tea-page" style={{ width: '100%' }}>

      {/* — HERO ———————————————————————————— */}
      <div style={{ background: cream, position:'relative', overflow:'hidden' }}>
        <Nav />

        <section style={{ padding:'88px 56px 96px', position:'relative', zIndex: 1 }}>
          {/* Centered editorial headline block */}
          <div style={{ textAlign:'center', maxWidth: 1120, margin:'0 auto' }}>
            <div style={{ display:'flex', justifyContent:'center' }}>
              <Compass size={36} color="var(--gold)" />
            </div>
            <div className="tea-eyebrow" style={{ marginTop: 18, color:'var(--ink-3)' }}>
              Established 2024  ·  Luxury packing guides  ·  $15 each
            </div>

            <div style={{
              fontFamily:'var(--serif)', fontSize: 132, lineHeight: 0.94, letterSpacing:'-0.03em',
              marginTop: 30
            }}>
              <span style={{ fontStyle:'italic', fontWeight: 500 }}>What to pack.</span>
              <br />
              <span style={{ fontStyle:'normal', fontWeight: 400 }}>Where to be.</span>
              <span style={{ fontStyle:'italic', fontWeight: 500 }}>&nbsp;How to move.</span>
            </div>

            <p className="tea-body" style={{
              maxWidth: 640, margin:'40px auto 0', fontSize: 20, color:'var(--ink-2)',
              fontStyle:'italic'
            }}>
              A small library of city edits for the way you actually travel — the world's most considered destinations, one PDF and one set of map pins each.
            </p>

            <div style={{ marginTop: 38, display:'flex', alignItems:'center', justifyContent:'center', gap: 28 }}>
              <button className="tea-btn">Browse the library →</button>
              <a className="tea-link" style={{ borderBottom:'none', color:'var(--ink-3)' }}>
                How the Edits work
              </a>
            </div>
          </div>
        </section>

        {/* The library "shelves" — two clean even rows, every cover visible. */}
        <section style={{ padding:'24px 56px 80px' }}>
          {/* Top shelf */}
          <div className="tea-cover-shelf" style={{
            display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap: 16,
          }}>
            {shelfTop.map(c => (
              <div key={c.id}>
                <CityCover city={c} shadow showCta />
              </div>
            ))}
          </div>

          {/* Bottom shelf */}
          <div className="tea-cover-shelf" style={{
            display:'grid', gridTemplateColumns:'repeat(7, 1fr)', gap: 16,
            marginTop: 32,
          }}>
            {shelfBottom.map(c => (
              <div key={c.id}>
                <CityCover city={c} shadow showCta />
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 64,
            display:'flex', justifyContent:'space-between', alignItems:'baseline',
            fontFamily:'var(--sans)', fontSize: 10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)'
          }}>
            <span>The Library  ·  Volume 01</span>
            <span>Hover any cover, then click to open the Edit</span>
          </div>
        </section>
      </div>

      {/* — TICKER —————————————————————————— */}
      <div style={{
        display:'flex', justifyContent:'space-between',
        padding:'18px 56px', borderTop:'1px solid var(--line-soft)', borderBottom:'1px solid var(--line-soft)',
        fontFamily:'var(--sans)', fontSize: 10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)'
      }}>
        <span>Curated by a single editor</span>
        <span>Researched on the ground, three trips minimum</span>
        <span>PDF + map pins, delivered by email</span>
        <span>Free updates, forever</span>
      </div>

      {/* — EDITOR'S LETTER ———————————————— */}
      <section className="tea-section" style={{ display:'grid', gridTemplateColumns:'1fr 1.4fr', gap: 96 }}>
        <div>
          <div className="tea-eyebrow" style={{ marginBottom: 24 }}>From the Editor</div>
          <div className="tea-display" style={{ fontSize: 72, marginBottom: 32 }}>
            Pack lighter. Stay longer. Choose carefully.
          </div>
        </div>
        <div>
          <p className="tea-body" style={{ marginTop: 0, fontSize: 19 }}>
            The Edit Abroad is a small library of luxury packing guides for travelers who'd rather know the right four restaurants than the trending forty — and who'd rather pack one perfect linen suit than three almost-rights.
          </p>
          <p className="tea-body" style={{ fontSize: 19 }}>
            Each Edit is a single document — researched over years of returning — that opens on your phone the morning you land. No affiliate links, no sponsored placements, no twenty-best-of lists.
          </p>
          <div style={{ marginTop: 32, display:'flex', alignItems:'center', gap: 18 }}>
            <Img tone="warm" caption="" style={{ width: 56, height: 56, borderRadius: '50%' }} />
            <div>
              <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 22 }}>Shane Dunn</div>
              <div className="tea-meta">Editor  ·  Hawaiʻi / Greece</div>
            </div>
          </div>
        </div>
      </section>

      {/* — LIBRARY CATALOGUE (mix of B's index + Shop-B's rich rows) ——— */}
      <section style={{ padding:'72px 56px 96px', borderTop:'1px solid var(--ink)' }}>
        <div style={{
          display:'flex', justifyContent:'space-between', alignItems:'baseline',
          marginBottom: 18
        }}>
          <div className="tea-display" style={{ fontSize: 88 }}>
            The Library
          </div>
          <div className="tea-eyebrow">Volume 01  ·  Every Edit  ·  $15 each</div>
        </div>

        {/* Toolbar */}
        <div style={{
          padding:'14px 0', borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--line-soft)',
          display:'flex', justifyContent:'space-between', alignItems:'center',
          marginBottom: 8
        }}>
          <div style={{ display:'flex', gap: 28, alignItems:'baseline' }}>
            <span className="tea-label" style={{ color:'var(--ink-3)' }}>Filter</span>
            <span className="tea-label">All</span>
            <span className="tea-label" style={{ color:'var(--ink-3)' }}>Europe</span>
            <span className="tea-label" style={{ color:'var(--ink-3)' }}>Asia</span>
            <span className="tea-label" style={{ color:'var(--ink-3)' }}>Americas</span>
            <span className="tea-label" style={{ color:'var(--ink-3)' }}>Africa</span>
            <span className="tea-label" style={{ color:'var(--ink-3)' }}>Tropics</span>
          </div>
          <div style={{
            display:'flex', alignItems:'center', gap: 12,
            borderBottom:'1px solid var(--ink)', paddingBottom: 4, width: 320
          }}>
            <span style={{ fontFamily:'var(--sans)', fontSize: 11, color:'var(--ink-3)', letterSpacing:'0.08em' }}>↗</span>
            <input placeholder="Search the library — city, season, mood…" style={{
              flex: 1, border: 0, background:'transparent', outline:'none',
              fontFamily:'var(--serif-body)', fontSize: 14, fontStyle:'italic', color:'var(--ink-2)'
            }} />
          </div>
          <span className="tea-label">Sort  A → Z</span>
        </div>

        {/* Rich library rows */}
        {cities.map((c, i) => {
          const hovered = c.id === 'mar';
          return (
            <a key={c.id} href={`#/${c.id}`} style={{
              display:'grid',
              gridTemplateColumns:'72px 1.2fr 1fr 1fr 96px 110px',
              alignItems:'center', gap: 28,
              padding:'22px 0',
              borderBottom:'1px solid var(--line-soft)',
              background: hovered ? 'rgba(0,0,0,0.025)' : 'transparent',
              marginInline: hovered ? -16 : 0, paddingInline: hovered ? 16 : 0,
              color:'inherit', textDecoration:'none'
            }}>
              <div className="tea-mono" style={{ fontSize: 11 }}>No. {c.no}</div>

              <div>
                <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 46, lineHeight: 0.95, letterSpacing:'-0.02em' }}>
                  {c.name}
                </div>
                <div className="tea-body" style={{ fontSize: 14, marginTop: 6, color:'var(--ink-3)' }}>
                  {c.tag}.
                </div>
              </div>

              <div>
                <div style={{ marginBottom: 4, color:'var(--mute)', textTransform:'uppercase', letterSpacing:'0.16em', fontSize: 10, fontFamily:'var(--sans)' }}>
                  Region
                </div>
                <div className="tea-body" style={{ fontSize: 15 }}>{c.country}</div>
                <div style={{ marginTop: 10, marginBottom: 4, color:'var(--mute)', textTransform:'uppercase', letterSpacing:'0.16em', fontSize: 10, fontFamily:'var(--sans)' }}>
                  Coords
                </div>
                <div className="tea-mono">{c.coords}</div>
              </div>

              <div>
                <div style={{ marginBottom: 4, color:'var(--mute)', textTransform:'uppercase', letterSpacing:'0.16em', fontSize: 10, fontFamily:'var(--sans)' }}>
                  Best in
                </div>
                <div className="tea-body" style={{ fontSize: 15 }}>{c.season}</div>
                <div style={{ marginTop: 10, marginBottom: 4, color:'var(--mute)', textTransform:'uppercase', letterSpacing:'0.16em', fontSize: 10, fontFamily:'var(--sans)' }}>
                  Last revised
                </div>
                <div className="tea-mono">{revisedDates[c.id] || '—'}</div>
              </div>

              <CityCover city={c} style={{ width: 96 }} link={false} />

              <div style={{ textAlign:'right' }}>
                <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 28 }}>$15</div>
                <span className="tea-label" style={{ marginTop: 12, display:'inline-block' }}>
                  {hovered ? 'View edit →' : 'Add to cart'}
                </span>
              </div>
            </a>
          );
        })}

        {/* In-edit row */}
        <div style={{
          display:'grid',
          gridTemplateColumns:'72px 1.2fr 1fr 1fr 96px 110px',
          alignItems:'center', gap: 28,
          padding:'22px 0', color:'var(--ink-3)'
        }}>
          <div className="tea-mono">No. 15</div>
          <div>
            <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 46, color:'var(--mute)', letterSpacing:'-0.02em' }}>
              Lisbon
            </div>
            <div className="tea-body" style={{ fontSize: 13, marginTop: 6 }}>
              Currently in edit — expected late 2026.
            </div>
          </div>
          <div className="tea-body" style={{ fontSize: 15 }}>Portugal</div>
          <div className="tea-body" style={{ fontSize: 15 }}>April – June</div>
          <div style={{
            width: 96, aspectRatio:'1/1',
            border:'1px dashed var(--line)',
            display:'flex', alignItems:'center', justifyContent:'center'
          }}>
            <Compass size={20} color="var(--mute)" />
          </div>
          <div style={{ textAlign:'right' }}>
            <span className="tea-label">Notify me</span>
          </div>
        </div>
      </section>

      {/* — INSIDE AN EDIT ———————————————————— */}
      <section style={{ padding:'72px 56px', background:'var(--bg-2)' }}>
        <div className="tea-eyebrow" style={{ marginBottom: 36 }}>Inside an Edit</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 28 }}>
          {[
            ['01', 'The Packing List', 'A neighborhood-by-neighborhood capsule edit — what to bring, what to skip, the one piece worth the suitcase real estate.'],
            ['02', 'The Stay', 'Two or three hotels I would book myself, with the rooms that are actually worth it.'],
            ['03', 'The Days', 'Three or four loose itineraries by mood — slow, social, off-grid, weather-bad.'],
            ['04', 'The Map', 'A custom Apple/Google Maps pin set — open in your phone, no app to download.'],
          ].map(([n, title, body]) => (
            <div key={n}>
              <div className="tea-mono" style={{ marginBottom: 12 }}>{n}</div>
              <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 32, marginBottom: 12, letterSpacing:'-0.01em' }}>
                {title}
              </div>
              <div className="tea-body" style={{ fontSize: 15 }}>{body}</div>
            </div>
          ))}
        </div>
      </section>

      {/* — QUOTE ————————————————————————————— */}
      <section style={{ padding:'112px 56px', textAlign:'center' }}>
        <Compass size={36} color="var(--gold)" />
        <div className="tea-display" style={{ fontSize: 60, maxWidth: 1080, margin:'28px auto 0' }}>
          "Felt like a friend's notebook, not a guidebook. We didn't open Google Maps once — and I packed half what I usually do."
        </div>
        <div className="tea-eyebrow" style={{ marginTop: 32, color:'var(--ink-3)' }}>
          — A.M.  ·  Bought the Tokyo Edit in October
        </div>
      </section>

      <Footer />
      <FooterRule />
    </div>
  );
};

window.HomeD = HomeD;
