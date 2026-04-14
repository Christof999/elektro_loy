import { Award, Users, MapPin, ThumbsUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '20+', label: 'Jahre Erfahrung' },
  { icon: Users, value: '500+', label: 'Zufriedene Kunden' },
  { icon: MapPin, value: 'Regional', label: 'Verwurzelt in der Region' },
  { icon: ThumbsUp, value: '4.4★', label: 'Google-Bewertung' },
];

export default function UeberUns() {
  return (
    <section id="ueber-uns" style={{ background: '#fff', padding: '5rem 0' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}>
          {/* Left: Text */}
          <div>
            <span className="section-badge">Über uns</span>
            <h2 className="section-title">
              Ihre regionale Fachfirma für<br />
              <span style={{ color: 'var(--primary)' }}>Energie & Elektro</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1rem' }}>
              Als inhabergeführtes Familienunternehmen steht die Loy GmbH & Co. KG seit über zwei 
              Jahrzehnten für kompetente Beratung, sorgfältige Ausführung und persönlichen Service 
              rund um Energie und Elektrotechnik.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.5rem', fontSize: '1rem' }}>
              Von unserem Standort in Muhr am See aus sind wir für Sie in der Region Ansbach, 
              Gunzenhausen, Nürnberg und Ingolstadt tätig. Unsere Kunden schätzen die persönliche 
              Betreuung und die Tatsache, dass wir jede Aufgabe – egal ob klein oder groß – mit 
              derselben Sorgfalt angehen.
            </p>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: '1rem' }}>
              Wir glauben: <strong style={{ color: 'var(--text-primary)' }}>Wenn Sie an das glauben, 
              was Sie tun, können Sie Großes erreichen.</strong> Diese Überzeugung trägt uns täglich.
            </p>
          </div>

          {/* Right: Visual & Stats */}
          <div>
            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1rem',
              marginBottom: '1.5rem',
            }}>
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    style={{
                      background: 'var(--bg-light)',
                      borderRadius: 14,
                      padding: '1.5rem',
                      border: '1px solid var(--border)',
                      textAlign: 'center',
                    }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: 10,
                      background: 'rgba(243,146,0,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      margin: '0 auto 0.75rem',
                    }}>
                      <Icon size={20} color="var(--primary)" />
                    </div>
                    <div style={{ fontWeight: 800, fontSize: '1.6rem', color: 'var(--text-primary)', lineHeight: 1 }}>
                      {s.value}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginTop: '0.3rem', fontWeight: 500 }}>
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Testimonial Banner */}
            <div style={{
              background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)',
              borderRadius: 14,
              padding: '1.5rem',
              color: '#fff',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>⭐⭐⭐⭐⭐</div>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.6, fontStyle: 'italic', color: 'rgba(255,255,255,0.9)', marginBottom: '0.75rem' }}>
                "War absolut begeistert, von der Auftragserteilung bis zur Installation waren es keine 
                8 Wochen, dazu zuverlässig und zu einem fairen Preis."
              </p>
              <div style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 600 }}>
                – Timo Schmid, Google-Rezension
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
