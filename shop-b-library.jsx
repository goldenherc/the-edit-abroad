// Shop B â Library Index
// Quiet, library-catalogue feel. Each guide as a long row with a small
// branded cover thumbnail, lots of metadata. One row mock-hovered.

const ShopB = () => {
  const cities = window.TEA_CITIES;
  const bundlePrice = Math.round(cities.length * 15 * 0.8);
  const revisedDates = {
    bcn:'Apr 2026', cpt:'Jan 2026', grc:'May 2026', haw:'May 2026',
    ibz:'Feb 2026', ldn:'Mar 2026', mar:'Apr 2026', mex:'Jan 2026',
    par:'Mar 2026', sof:'Jan 2026', ita:'Apr 2026', syd:'Mar 2026',
    tam:'Feb 2026', tyo:'Oct 2025',
  };

  return (
    <div className="tea-page" style={{ width: '100%' }}>
      <Nav />

      {/* â TITLE BAR ââââââââââââââââââââââ */}
      <section style={{ padding:'72px 56px 40px' }}>
        <div className="tea-eyebrow" style={{ marginBottom: 26, color:'var(--gold)' }}>
          The Catalogue  Â·  Updated 18 May 2026
        </div>
        <div style={{ display:'flex', alignItems:'baseline', justifyContent:'space-between' }}>
          <div style={{ fontFamily:'var(--serif)', fontSize: 120, fontWeight: 400, letterSpacing:'-0.02em' }}>
            The <span style={{ fontStyle:'italic', fontWeight: 500 }}>complete</span> library.
          </div>
          <div className="tea-body" style={{ fontSize: 17, maxWidth: 360, paddingBottom: 8 }}>
            Browse the library. Click any row for the full table of contents, sample pages, and what's been updated in this revision.
          </div>
        </div>
      </section>

      {/* â TOOLBAR ââââââââââââââââââââââââ */}
      <section style={{
        padding:'14px 56px', borderTop:'1px solid var(--ink)', borderBottom:'1px solid var(--line-soft)',
        display:'flex', justifyContent:'space-between', alignItems:'center'
      }}>
        <div style={{ display:'flex', gap: 28, alignItems:'baseline' }}>
          <span className="tea-label" style={{ color:'var(--ink-3)' }}>View</span>
          <span className="tea-label">List</span>
          <span className="tea-label" style={{ color:'var(--ink-3)' }}>Grid</span>
          <span className="tea-label" style={{ color:'var(--ink-3)' }}>Map</span>
        </div>
        <div style={{
          display:'flex', alignItems:'center', gap: 12,
          borderBottom:'1px solid var(--ink)', paddingBottom: 6, width: 340
        }}>
          <span style={{ fontFamily:'var(--sans)', fontSize: 11, color:'var(--ink-3)', letterSpacing:'0.08em' }}>â</span>
          <input placeholder="Search the library â city, season, moodâ¦" style={{
            flex: 1, border: 0, background:'transparent', outline:'none',
            fontFamily:'var(--serif-body)', fontSize: 15, fontStyle:'italic', color:'var(--ink-2)'
          }} />
        </div>
        <div style={{ display:'flex', gap: 22 }}>
          <span className="tea-label">Sort  A â Z</span>
        </div>
      </section>

      {/* â LIST âââââââââââââââââââââââââââ */}
      <section style={{ padding:'0 56px' }}>
        {cities.map((c, i) => {
          const hovered = c.id === 'mar';
          return (
            <article key={c.id} onClick={() => { window.location.href = '/guide/' + c.id; }} style={{ cursor:'pointer',
              display:'grid',
              gridTemplateColumns:'72px 1.2fr 1fr 1fr 96px 90px',
              alignItems:'center', gap: 28,
              padding:'24px 0',
              borderBottom:'1px solid var(--line-soft)',
              background: hovered ? 'var(--bg-2)' : 'transparent',
              marginInline: hovered ? -24 : 0,
              paddingInline: hovered ? 24 : 0,
            }}>
              <div className="tea-mono" style={{ fontSize: 11 }}>No. {c.no}</div>

              {/* Name + tag */}
              <div>
                <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 48, lineHeight: 0.95, letterSpacing:'-0.02em' }}>
                  {c.name}
                </div>
                <div className="tea-body" style={{ fontSize: 14, marginTop: 8, color:'var(--ink-3)' }}>
                  {c.tag}.
                </div>
              </div>

              {/* Region */}
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

              {/* Season + revised */}
              <div>
                <div style={{ marginBottom: 4, color:'var(--mute)', textTransform:'uppercase', letterSpacing:'0.16em', fontSize: 10, fontFamily:'var(--sans)' }}>
                  Best in
                </div>
                <div className="tea-body" style={{ fontSize: 15 }}>{c.season}</div>
                <div style={{ marginTop: 10, marginBottom: 4, color:'var(--mute)', textTransform:'uppercase', letterSpacing:'0.16em', fontSize: 10, fontFamily:'var(--sans)' }}>
                  Last revised
                </div>
                <div className="tea-mono">{revisedDates[c.id]}</div>
              </div>

              {/* Cover thumbnail */}
              <CityCover city={c} style={{ width: 96 }} />

              {/* Price + cart */}
              <div style={{ textAlign:'right' }}>
                <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 30 }}>$15</div>
                <a href={hovered ? `/guide/${c.id}` : (c.gumroad || `/guide/${c.id}`)}
                   target={hovered ? '_self' : (c.gumroad ? '_blank' : '_self')}
                   rel="noopener"
                   className="tea-btn tea-btn-ghost"
                   style={{ marginTop: 12, padding:'8px 12px', fontSize: 10, textDecoration:'none' }}>
                  {hovered ? 'View edit â' : 'Buy on Gumroad'}
                </a>
              </div>
            </article>
          );
        })}

        {/* In-edit row */}
        <article style={{
          display:'grid',
          gridTemplateColumns:'72px 1.2fr 1fr 1fr 96px 90px',
          alignItems:'center', gap: 28,
          padding:'24px 0', color:'var(--ink-3)'
        }}>
          <div className="tea-mono">No. 15</div>
          <div>
            <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 48, color:'var(--mute)', letterSpacing:'-0.02em' }}>
              Lisbon
            </div>
            <div className="tea-body" style={{ fontSize: 13, marginTop: 8 }}>
              Currently in edit â expected late 2026.
            </div>
          </div>
          <div className="tea-body" style={{ fontSize: 15 }}>Portugal</div>
          <div className="tea-body" style={{ fontSize: 15 }}>April â June</div>
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
        </article>
      </section>

      {/* â BUNDLE PROMPT âââââââââââââââââââââ */}
      <section style={{ padding:'80px 56px' }}>
        <div style={{
          border:'1px solid var(--ink)', padding:'48px 56px',
          display:'grid', gridTemplateColumns:'1.4fr 1fr', gap: 64, alignItems:'center'
        }}>
          <div>
            <div className="tea-eyebrow" style={{ marginBottom: 22, color:'var(--gold)' }}>Library Subscription</div>
            <div className="tea-display" style={{ fontSize: 60 }}>
              Take the whole library. Receive every new Edit, free, for the next two years.
            </div>
          </div>
          <div style={{ display:'flex', flexDirection:'column', alignItems:'flex-end', gap: 14 }}>
            <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 96, lineHeight: 1 }}>${bundlePrice}</div>
            <div className="tea-meta">save 20% vs. one at a time</div>
            <button className="tea-btn" style={{ marginTop: 12 }}>Add bundle to cart</button>
          </div>
        </div>
      </section>

      <Footer />
      <FooterRule />
    </div>
  );
};

window.ShopB = ShopB;
