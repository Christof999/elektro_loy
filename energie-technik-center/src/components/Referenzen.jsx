const reviews = [
  {
    name: 'Jan Reimann',
    rating: 5,
    text: 'Top Firma, manchmal dauerts aber es wird jedes Problem gelöst.',
    time: 'vor 4 Monaten',
  },
  {
    name: 'diamtsternchen40',
    rating: 5,
    text: 'Planung, Beratung, termingerechte Ausführung, Monteure sorgfältig und freundlich, alles an einem Tag fertig!',
    time: 'vor einem Jahr',
  },
  {
    name: 'Timo Schmid',
    rating: 5,
    text: 'War absolut begeistert, von der Auftragserteilung bis zur Installation waren es keine 8 Wochen, dazu zuverlässig und zu einem fairen Preis. Ich kann Frau Loy und ihr Team nur weiterempfehlen!',
    time: 'vor 3 Jahren',
  },
];

function Stars({ count }) {
  return (
    <div style={{ display: 'flex', gap: '2px' }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} style={{ color: i < count ? '#f39200' : '#e2e8f0', fontSize: '1.1rem' }}>★</span>
      ))}
    </div>
  );
}

export default function Referenzen() {
  return (
    <section id="referenzen" style={{ background: 'var(--bg-light)', padding: '5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-badge">Kundenstimmen</span>
          <h2 className="section-title">Das sagen unsere Kunden</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Über 29 Bewertungen auf Google mit einem Durchschnitt von 4,4 von 5 Sternen – 
            wir sind stolz auf das Vertrauen unserer Kunden.
          </p>
        </div>

        {/* Overall Rating Badge */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '2.5rem',
        }}>
          <div style={{
            background: '#fff',
            borderRadius: 14,
            padding: '1.25rem 2.5rem',
            border: '1px solid var(--border)',
            display: 'flex',
            alignItems: 'center',
            gap: '1.25rem',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '2.8rem', color: 'var(--text-primary)', lineHeight: 1 }}>4,4</div>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginTop: '0.2rem' }}>von 5 Sternen</div>
            </div>
            <div style={{ width: 1, height: 48, background: 'var(--border)' }} />
            <div>
              <div style={{ display: 'flex', gap: 3, marginBottom: '0.3rem' }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} style={{ color: i < 4 ? '#f39200' : '#e2e8f0', fontSize: '1.4rem' }}>★</span>
                ))}
              </div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
                29 Google-Rezensionen
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
        }}>
          {reviews.map((r) => (
            <div
              key={r.name}
              style={{
                background: '#fff',
                borderRadius: 14,
                padding: '1.75rem',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
              }}
            >
              <Stars count={r.rating} />
              <p style={{
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                fontSize: '0.95rem',
                fontStyle: 'italic',
                flexGrow: 1,
              }}>
                "{r.text}"
              </p>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>{r.name}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-light)' }}>{r.time}</div>
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.78rem', color: 'var(--text-light)',
              }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                Rezension aus Google
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
