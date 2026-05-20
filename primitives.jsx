// Shared primitives for The Edit Abroad
// Now anchored to the real branded covers + the Luxury Packing Guide positioning.

const Wordmark = ({ size = 18, light = false }) => (
  <span className="tea-nav-wordmark" style={{ fontSize: size, color: light ? '#fafaf7' : 'inherit' }}>
    The <em>Edit</em> <span>ABROAD</span>
  </span>
);

// Tiny gold compass — a subtle nod to the brand mark from the covers.
const Compass = ({ size = 22, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="1" style={{ flex:'0 0 auto' }}>
    <circle cx="16" cy="16" r="13.5" />
    <circle cx="16" cy="16" r="1.5" fill={color} />
    <path d="M16 4 L13 14 L16 12 L19 14 Z" fill={color} stroke="none" />
    <path d="M16 28 L13 18 L16 20 L19 18 Z" fill={color} stroke="none" opacity="0.6" />
    <line x1="2.5" y1="16" x2="6" y2="16" />
    <line x1="26" y1="16" x2="29.5" y2="16" />
    <line x1="16" y1="2.5" x2="16" y2="6" />
    <line x1="16" y1="26" x2="16" y2="29.5" />
  </svg>
);

const Nav = ({ light = false, transparent = false }) => (
  <nav className="tea-nav" style={{
    background: transparent ? 'transparent' : 'var(--bg)',
    color: light ? '#fafaf7' : 'var(--ink)',
    borderColor: light ? 'rgba(250,250,247,0.18)' : 'var(--line-soft)',
  }}>
    <a href="/" style={{ display:'flex', alignItems:'center', gap: 14, textDecoration:'none', color:'inherit' }}>
      <Compass size={20} color={light ? 'rgba(250,250,247,0.85)' : 'var(--gold)'} />
      <Wordmark light={light} />
    </a>
    <div className="tea-nav-links" style={{ color: light ? '#fafaf7' : 'var(--ink)' }}>
      <a href="/shop">Shop</a>
      <a href="/shop">The Edits</a>
      <a href="#journal">Journal</a>
      <a href="#about">About</a>
    </div>
    <div className="tea-nav-utility" style={{ color: light ? 'rgba(250,250,247,0.85)' : 'var(--ink-2)' }}>
      <span>Search</span>
      <span>Cart (0)</span>
    </div>
  </nav>
);

// CityCover — renders a city's branded product cover as a clickable card.
// Hovering lifts the cover and ramps shadow; clicking opens that city's
// individual Edit page. Pass `link={false}` to render as a static image only.
const CityCover = ({ city, style = {}, shadow = false, frame = false, link = true, showCta = false }) => {
  const img = (
    <img
      src={city.cover}
      alt={`The Edit Abroad — ${city.name} luxury packing guide`}
      style={{
        display:'block', width:'100%', aspectRatio:'1/1', objectFit:'cover',
        boxShadow: shadow ? '0 24px 60px -20px rgba(0,0,0,0.35)' : 'none',
        border: frame ? '1px solid var(--line-soft)' : 'none',
        ...style,
      }}
    />
  );
  if (!link) return img;
  return (
    <a href={`/guide/${city.id}`} className={`tea-cover-link ${shadow ? 'tea-cover-link--shadow' : ''}`}>
      {img}
      {showCta && (
        <span className="tea-cover-cta">
          <span>Open the {city.short} Edit</span>
          <span aria-hidden="true">→</span>
        </span>
      )}
    </a>
  );
};

// Generic image placeholder (for editorial photography we don't have yet).
const Img = ({ tone = '', caption = 'photograph', style = {}, className = '', children, ...rest }) => (
  <div className={`tea-img ${tone} ${className}`} style={style} {...rest}>
    <span className="tea-img__caption">{caption}</span>
    {children}
  </div>
);

const Footer = () => (
  <footer className="tea-footer">
    <div>
      <div style={{ display:'flex', alignItems:'center', gap: 14, marginBottom: 18 }}>
        <Compass size={26} color="var(--gold)" />
        <div style={{ fontFamily:'var(--serif)', fontStyle:'italic', fontSize: 32, lineHeight: 1, letterSpacing:'-0.02em' }}>
          The Edit Abroad
        </div>
      </div>
      <p style={{ fontFamily:'var(--serif-body)', fontSize: 15, lineHeight: 1.55, color:'var(--ink-2)', maxWidth: 380, margin: 0 }}>
        A small library of luxury packing guides — what to take, where to stay, how to move through the world's most considered cities.
      </p>
    </div>
    <div>
      <h6>Shop</h6>
      <ul>
        <li><a>Every Edit</a></li>
        <li><a>The Complete Library</a></li>
        <li><a>Gift cards</a></li>
      </ul>
    </div>
    <div>
      <h6>Studio</h6>
      <ul>
        <li><a>About</a></li>
        <li><a>Journal</a></li>
        <li><a>Press · Trade</a></li>
        <li><a>Contact</a></li>
      </ul>
    </div>
    <div>
      <h6>Letters</h6>
      <p style={{ margin: '0 0 14px', color:'var(--ink-3)', fontSize: 12, lineHeight: 1.55 }}>
        Occasional dispatches from the next destination.
      </p>
      <div style={{ display:'flex', borderBottom:'1px solid var(--ink-2)', paddingBottom: 8 }}>
        <input placeholder="your email" style={{
          flex:1, border:0, background:'transparent', outline:'none',
          fontFamily:'var(--sans)', fontSize: 12, letterSpacing:'0.05em', color:'var(--ink)'
        }} />
        <span style={{ fontSize: 10, letterSpacing:'0.22em', textTransform:'uppercase', color:'var(--ink)' }}>Submit →</span>
      </div>
    </div>
  </footer>
);

const FooterRule = () => (
  <div style={{
    padding:'18px 56px 28px', display:'flex', justifyContent:'space-between',
    fontFamily:'var(--sans)', fontSize: 10, letterSpacing:'0.18em', textTransform:'uppercase',
    color:'var(--ink-3)', borderTop:'1px solid var(--line-soft)'
  }}>
    <span>© 2026 The Edit Abroad</span>
    <span>theeditabroad.com</span>
    <span>Terms · Privacy</span>
  </div>
);

Object.assign(window, { Wordmark, Compass, Nav, CityCover, Img, Footer, FooterRule });
