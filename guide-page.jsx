// GuidePage — the individual product page for a city.
// Renders for any city in cities.js; we never give the full guide away — just
// the cover, intro, table of contents, sample-page teaser, and the PDF link.

const GuidePage = ({ cityId }) => {
  const city = window.TEA_CITY_BY_ID[cityId] || window.TEA_CITIES[0];
  const cities = window.TEA_CITIES;
  const cream = '#f1ecdd';

  // "Other Edits" = three more covers from the library, skipping this one.
  const others = cities.filter(c => c.id !== city.id).slice(0, 4);

  // Inside-the-Edit sections — high-level only, never the actual content.
  const sections = [
    ['01', 'The Packing List',  'A neighborhood-by-neighborhood capsule edit — what to bring, what to skip, the one piece worth the suitcase real estate.'],
    ['02', 'The Stay',          'Two or three hotels and rentals I would book myself, with the rooms that are actually worth it.'],
    ['03', 'The Days',          'Three or four loose itineraries by mood — slow, social, off-grid, weather-bad.'],
    ['04', 'The Table',         'Where to eat at 1pm, 4pm, 8pm and 11pm, by neighborhood, on a weekday.'],
    ['05', 'The Map',           'A custom Apple/Google Maps pin set — open in your phone, no app to download.'],
    ['06', 'The Aside',         'The bookshop, the swim, the small detour. The things that turn a trip into a memory.'],
  ];

  return (
    <div className="tea-page" style={{ width: '100%' }}>

      {/* — BREADCRUMB ——————————————————————— */}
      <Nav />

      <div style={{
        padding:'18px 56px', borderBottom:'1px solid var(--line-soft)',
        fontFamily:'var(--sans)', fontSize: 10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink-3)',
        display:'flex', gap: 18, alignItems:'center'
      }}>
        <span>Shop</span>
        <span style={{ color:'var(--mute)' }}>/</span>
        <span>The Edits</span>
        <span style={{ color:'var(--mute)' }}>/</span>
        <span style={{ color:'var(--ink)' }}>{city.name}</span>
      </div>

      {/* — HERO ———————————————————————————— */}
      <section style={{ background: cream, padding:'72px 56px 80px' }}>
        <div style={{
          display:'grid', gridTemplateColumns:'1fr 1.1fr', gap: 80, alignItems:'center'
        }}>
          {/* Cover */}
          <div style={{ position:'relative' }}>
            <CityCover city={city} shadow link={false} />
            <div style={{
              position:'absolute', top: -22, left: 24,
              background: cream, padding:'6px 14px',
              fontFamily:'var(--sans)', fontSize: 10, letterSpacing:'0.22em', textTransform:'uppercase',
              color:'var(--ink)'
            }}>
              ◊  Edit No. {city.no}
            </div>
            <div style={{
              marginTop: 18, display:'flex', justifyContent:'space-between',
              fontFamily:'var(--sans)', fontSize: 10, letterSpacing:'0.18em', textTransform:'uppercase', color:'var(--ink-3)'
            }}>
              <span>The Luxury Packing Guide</span>
              <span>PDF · 42pp · 64 map pins</span>
            </div>
          </div>

          {/* Copy */}
          <div>
            <div className="tea-eyebrow" style={{ marginBottom: 22, color:'var(--gold)' }}>
              {city.country}  ·  Best in {city.season.toLowerCase()}
            </div>

            <div style={{
              fontFamily:'var(--serif)', fontStyle:'italic', fontWeight: 500,
              fontSize: 144, lineHeight: 0.88, letterSpacing:'-0.03em'
            }}>
              {city.name}
            </div>

            <div className="tea-body" style={{ marginTop: 18, fontSize: 17, color:'var(--ink-2)' }}>
              {city.tag}.
            </div>

            <p className="tea-body" style={{ marginTop: 28, fontSize: 19, maxWidth: 560 }}>
              {city.intro}
            </p>

            {/* Coords / format / season strip */}
            <div style={{
              marginTop: 36, display:'grid', gridTemplateColumns:'auto auto auto', gap: 32,
              fontFamily:'var(--sans)', fontSize: 10, letterSpacing:'0.16em', textTransform:'uppercase'
            }}>
              <div>
                <div style={{ color:'var(--mute)', marginBottom: 6 }}>Coords</div>
                <div className="tea-mono" style={{ color:'var(--ink)' }}>{city.coords}</div>
              </div>
              <div>
                <div style={{ color:'var(--mute)', marginBottom: 6 }}>Best in</div>
                <div style={{ color:'var(--ink)' }}>{city.season}</div>
              </div>
              <div>
                <div style={{ color:'var(--mute)', marginBottom: 6 }}>Format</div>
                <div style={{ color:'var(--ink)' }}>PDF + map pins</div>
              </div>
            </div>

            {/* Price + actions */}
            <div style={{
              marginTop: 40, paddingTop: 32, borderTop:'1px solid var(--ink)',
              display:'flex', alignItems:'center', gap: 28, flexWrap:'wrap'
            }}>
              <span style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 56 }}>$15</span>
              <a href={city.gumroad || '#'} target="_blank" rel="noopener" className="tea-btn" style={{ textDecoration:'none' }}>
                Buy on Gumroad →
              </a>
              <a href="#" className="tea-link" style={{ borderBottom:'none', color:'var(--ink-3)' }}>
                Preview a sample
              </a>
            </div>
            <div className="tea-meta" style={{ marginTop: 16, color:'var(--ink-3)' }}>
              Delivered to your inbox within the hour. Updates, free, forever.
            </div>
          </div>
        </div>
      </section>

      {/* — INSIDE THIS EDIT —————————————————— */}
      <section className="tea-section">
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 48 }}>
          <div>
            <div className="tea-eyebrow" style={{ marginBottom: 16 }}>Inside this Edit</div>
            <div className="tea-display" style={{ fontSize: 80 }}>
              What you'll find.
            </div>
          </div>
          <div className="tea-body" style={{ fontSize: 16, maxWidth: 360, color:'var(--ink-3)', paddingBottom: 12 }}>
            We never give the full guide away — but here's the table of contents, so you know exactly what you're buying.
          </div>
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap: 28, rowGap: 56 }}>
          {sections.map(([n, title, body]) => (
            <div key={n} style={{ paddingTop: 22, borderTop:'1px solid var(--ink)' }}>
              <div className="tea-mono" style={{ marginBottom: 14 }}>{n}</div>
              <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 38, marginBottom: 14, letterSpacing:'-0.01em' }}>
                {title}
              </div>
              <div className="tea-body" style={{ fontSize: 15 }}>{body}</div>
            </div>
          ))}
        </div>

        {/* Sample-spread teaser */}
        <div style={{
          marginTop: 80, padding: 48,
          background:'var(--bg-2)',
          display:'grid', gridTemplateColumns:'1fr 1.3fr', gap: 64, alignItems:'center'
        }}>
          <div>
            <div className="tea-eyebrow" style={{ marginBottom: 18 }}>Sample · 2 pp</div>
            <div className="tea-display" style={{ fontSize: 48, marginBottom: 22 }}>
              Want to see a spread?
            </div>
            <p className="tea-body" style={{ fontSize: 16, marginBottom: 28 }}>
              We'll email you a two-page sample from the {city.short} Edit — the introduction, plus one neighborhood overview. No newsletter sign-up, no strings.
            </p>
            <button className="tea-btn tea-btn-ghost">Email me a sample →</button>
          </div>
          <div style={{ display:'flex', gap: 16 }}>
            <div className="tea-img dune" style={{
              flex: 1, aspectRatio:'8.5/11',
              boxShadow:'0 24px 50px -20px rgba(40,30,15,0.35)',
            }}>
              <span className="tea-img__caption">sample · cover spread</span>
            </div>
            <div className="tea-img bone" style={{
              flex: 1, aspectRatio:'8.5/11',
              boxShadow:'0 24px 50px -20px rgba(40,30,15,0.35)',
              transform:'translateY(20px)'
            }}>
              <span className="tea-img__caption">sample · {city.short.toLowerCase()} overview</span>
            </div>
          </div>
        </div>
      </section>

      {/* — TESTIMONIAL ———————————————————————— */}
      <section style={{
        padding:'112px 56px', textAlign:'center',
        borderTop:'1px solid var(--line-soft)'
      }}>
        <Compass size={32} color="var(--gold)" />
        <div className="tea-display" style={{ fontSize: 52, maxWidth: 1020, margin:'28px auto 0' }}>
          "We didn't open Google Maps once — and I packed half what I usually do. The {city.short} Edit is now the only thing I bring on a first trip."
        </div>
        <div className="tea-eyebrow" style={{ marginTop: 28, color:'var(--ink-3)' }}>
          — Past buyer  ·  August 2025
        </div>
      </section>

      {/* — OTHER EDITS ———————————————————————— */}
      <section className="tea-section" style={{ background:'var(--bg-2)' }}>
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between', marginBottom: 48 }}>
          <div className="tea-display" style={{ fontSize: 64 }}>
            Other Edits.
          </div>
          <a className="tea-link">Open the shop →</a>
        </div>
        <div className="tea-cover-shelf" style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap: 28 }}>
          {others.map(c => (
            <article key={c.id}>
              <CityCover city={c} showCta />
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'baseline', marginTop: 14 }}>
                <div className="tea-mono">No. {c.no}  ·  {c.country}</div>
                <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 18 }}>$15</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Footer />
      <FooterRule />
    </div>
  );
};

window.GuidePage = GuidePage;
