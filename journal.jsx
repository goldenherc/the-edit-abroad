// Journal — magazine-style listing of articles.
// Edit the POSTS array to add, edit or remove articles.
// Replace image URLs with your own photography when ready.

const JOURNAL_POSTS = [
  {
    slug: 'the-case-for-the-linen-suit',
    title: 'The case for the linen suit',
    date: '18 May 2026',
    category: 'Wardrobe',
    image: 'https://images.unsplash.com/photo-1581553680321-4fffae59fccd?w=1400&q=75&auto=format&fit=crop',
    excerpt: 'One piece, three meals, four climates. Why the linen suit is the most photographed and least packed item in travel.',
    readMin: 4,
    featured: true,
  },
  {
    slug: 'what-to-leave-home',
    title: 'What to leave home: a list',
    date: '04 May 2026',
    category: 'Packing',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=1200&q=75&auto=format&fit=crop',
    excerpt: 'The eleven items we used to bring everywhere and the eleven things we replaced them with.',
    readMin: 6,
  },
  {
    slug: 'shoulder-seasons',
    title: 'On packing for shoulder seasons',
    date: '22 April 2026',
    category: 'Wardrobe',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&q=75&auto=format&fit=crop',
    excerpt: 'A capsule that handles a Lisbon spring, a Marrakech October, an Ibiza shoulder week.',
    readMin: 5,
  },
  {
    slug: 'hotel-breakfast-ranked',
    title: 'The hotel breakfast, ranked',
    date: '09 April 2026',
    category: 'Field notes',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=75&auto=format&fit=crop',
    excerpt: 'A purely subjective ranking of the morning rooms we kept thinking about.',
    readMin: 8,
  },
  {
    slug: 'why-we-still-print-maps',
    title: 'Why we still print maps',
    date: '28 March 2026',
    category: 'Process',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1200&q=75&auto=format&fit=crop',
    excerpt: 'On phones that die, neighborhoods that look the same on a screen, and a paper habit that refuses to leave our suitcase.',
    readMin: 3,
  },
  {
    slug: 'reading-list-slow-travel',
    title: 'A reading list for slow travel',
    date: '14 March 2026',
    category: 'Reading',
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1200&q=75&auto=format&fit=crop',
    excerpt: 'Twelve books we keep recommending when someone asks how to travel like this.',
    readMin: 5,
  },
];

// Single post card for the grid
const JournalCard = ({ post }) => (
  React.createElement('a', {
    href: '/journal/' + post.slug,
    style: { color: 'inherit', textDecoration: 'none', display: 'block' }
  },
    React.createElement('img', {
      src: post.image, alt: post.title,
      style: { aspectRatio: '4/3', width: '100%', objectFit: 'cover', display: 'block' }
    }),
    React.createElement('div', {
      style: {
        marginTop: 16, display: 'flex', justifyContent: 'space-between',
        fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.2em',
        textTransform: 'uppercase', color: 'var(--ink-3)'
      }
    },
      React.createElement('span', null, post.category),
      React.createElement('span', null, post.date)
    ),
    React.createElement('div', {
      style: {
        fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 500,
        fontSize: 32, lineHeight: 1.05, letterSpacing: '-0.02em', marginTop: 12
      }
    }, post.title),
    React.createElement('p', {
      className: 'tea-body', style: { marginTop: 10, fontSize: 15 }
    }, post.excerpt)
  )
);

const Journal = () => {
  const [featured, ...rest] = JOURNAL_POSTS;
  return React.createElement('div', { className: 'tea-page', style: { width: '100%' } },
    React.createElement(Nav, null),

    React.createElement('section', { style: { padding: '80px 56px 24px' } },
      React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' } },
        React.createElement('div', null,
          React.createElement('div', { className: 'tea-eyebrow', style: { marginBottom: 22, color: 'var(--gold)' } },
            'The Studio Journal · Dispatches & field notes'
          ),
          React.createElement('div', { className: 'tea-display', style: { fontSize: 160, letterSpacing: '-0.03em' } }, 'Journal.')
        ),
        React.createElement('div', { className: 'tea-body', style: { fontSize: 18, maxWidth: 360, paddingBottom: 12 } },
          'Notes from the road and the drawing board. New writing every other week.'
        )
      )
    ),

    React.createElement('section', {
      style: {
        padding: '14px 56px', borderTop: '1px solid var(--ink)',
        borderBottom: '1px solid var(--line-soft)', display: 'flex',
        justifyContent: 'space-between', alignItems: 'center'
      }
    },
      React.createElement('div', { style: { display: 'flex', gap: 8, alignItems: 'center' } },
        React.createElement('span', { className: 'tea-label', style: { marginRight: 14, color: 'var(--ink-3)' } }, 'Browse'),
        ['All', 'Wardrobe', 'Packing', 'Field notes', 'Process', 'Reading'].map((f, i) =>
          React.createElement('span', {
            key: f, className: 'tea-pill',
            style: {
              background: i === 0 ? 'var(--ink)' : 'transparent',
              color: i === 0 ? 'var(--bg)' : 'var(--ink-2)',
              borderColor: i === 0 ? 'var(--ink)' : 'var(--line)'
            }
          }, f)
        )
      ),
      React.createElement('span', { className: 'tea-label' }, 'Sort most recent')
    ),

    React.createElement('section', { style: { padding: '72px 56px 56px' } },
      React.createElement('a', {
        href: '/journal/' + featured.slug,
        style: {
          display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64,
          alignItems: 'center', color: 'inherit', textDecoration: 'none'
        }
      },
        React.createElement('img', {
          src: featured.image, alt: featured.title,
          style: { aspectRatio: '5/4', width: '100%', objectFit: 'cover', display: 'block' }
        }),
        React.createElement('div', null,
          React.createElement('div', { className: 'tea-eyebrow', style: { marginBottom: 22, color: 'var(--gold)' } },
            '◊ Featured · ' + featured.category
          ),
          React.createElement('div', {
            style: {
              fontFamily: 'var(--serif)', fontStyle: 'italic', fontWeight: 500,
              fontSize: 80, lineHeight: 0.95, letterSpacing: '-0.02em'
            }
          }, featured.title),
          React.createElement('p', { className: 'tea-body', style: { marginTop: 28, fontSize: 19, maxWidth: 540 } },
            featured.excerpt
          ),
          React.createElement('div', {
            style: {
              marginTop: 32, display: 'flex', alignItems: 'center', gap: 18,
              fontFamily: 'var(--sans)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase'
            }
          },
            React.createElement('span', { style: { color: 'var(--ink)' } }, featured.date),
            React.createElement('span', { style: { color: 'var(--mute)' } }, '·'),
            React.createElement('span', { style: { color: 'var(--ink-3)' } }, featured.readMin + ' min read'),
            React.createElement('span', { style: { color: 'var(--gold)', marginLeft: 'auto' } }, 'Read →')
          )
        )
      )
    ),

    React.createElement('section', { style: { padding: '24px 56px 96px' } },
      React.createElement('div', { className: 'tea-eyebrow', style: { marginBottom: 28 } }, 'More recent'),
      React.createElement('div', {
        style: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 36, rowGap: 64 }
      },
        rest.map(p => React.createElement(JournalCard, { key: p.slug, post: p }))
      )
    ),

    React.createElement('section', { style: { padding: '96px 56px', background: 'var(--bg-2)' } },
      React.createElement('div', {
        style: { display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 80, alignItems: 'center' }
      },
        React.createElement('div', null,
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 } },
            React.createElement(Compass, { size: 28, color: 'var(--gold)' }),
            React.createElement('div', { className: 'tea-eyebrow' }, 'The Letter')
          ),
          React.createElement('div', { className: 'tea-display', style: { fontSize: 64 } },
            'An occasional letter from the studio.'
          ),
          React.createElement('p', { className: 'tea-body', style: { fontSize: 18, marginTop: 22, maxWidth: 520 } },
            "New journal entries, the next Edit going live, and the occasional packing list we couldn't fit anywhere else."
          )
        ),
        React.createElement('div', null,
          React.createElement('div', { style: { display: 'flex', borderBottom: '1px solid var(--ink)', paddingBottom: 12 } },
            React.createElement('input', {
              placeholder: 'your email',
              style: {
                flex: 1, border: 0, background: 'transparent', outline: 'none',
                fontFamily: 'var(--serif-body)', fontSize: 18, fontStyle: 'italic', color: 'var(--ink-2)'
              }
            }),
            React.createElement('button', { className: 'tea-btn', style: { padding: '8px 18px' } }, 'Subscribe →')
          ),
          React.createElement('div', { className: 'tea-meta', style: { marginTop: 14, color: 'var(--ink-3)' } },
            'No spam. Unsubscribe in one click.'
          )
        )
      )
    ),

    React.createElement(Footer, null),
    React.createElement(FooterRule, null)
  );
};

window.Journal = Journal;
