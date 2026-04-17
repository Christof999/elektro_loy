import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const openingHours = [
  { day: 'Montag – Freitag', time: '08:00 – 17:00 Uhr' },
  { day: 'Samstag', time: 'nach Vereinbarung' },
  { day: 'Sonntag', time: 'geschlossen' },
];

/* Emil: specify exact transition properties — never 'all' */
const inputBase = {
  border: '1.5px solid var(--border)',
  borderRadius: 'var(--r-md)',
  padding: '0.7rem 1rem',
  fontSize: '0.92rem',
  color: 'var(--text-primary)',
  outline: 'none',
  width: '100%',
  background: 'var(--bg-white)',
  transition: 'border-color 150ms cubic-bezier(0.23, 1, 0.32, 1)',
  fontFamily: 'inherit',
};

const labelStyle = {
  fontWeight: 600,
  fontSize: '0.8rem',
  color: 'var(--text-primary)',
  letterSpacing: '0.01em',
};

function Field({ label, name, value, onChange, required, placeholder, type = 'text' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        style={inputBase}
        onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.12)'; }}
        onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
      />
    </div>
  );
}

export default function Kontakt() {
  useReveal();
  const [form, setForm] = useState({ name: '', email: '', telefon: '', betreff: '', nachricht: '', bereich: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  return (
    <>
      {/* ── Hero ── */}
      <section style={{
        paddingTop: '8rem', paddingBottom: '5rem',
        background: 'linear-gradient(155deg, #080e1a 0%, #0d1f38 55%, #0a1520 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse 60% 70% at 70% 60%, rgba(245,158,11,0.06) 0%, transparent 65%)',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.4rem' }}>
            <div style={{ width: 28, height: 3, background: 'var(--primary)', borderRadius: 2 }} />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>
              Kontakt
            </span>
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 900,
            color: '#fff', lineHeight: 1.08, marginBottom: '1rem',
            letterSpacing: '-0.03em', maxWidth: 540,
          }}>
            Sprechen wir über Ihr Projekt
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.52)', fontSize: '1.05rem', maxWidth: 460, lineHeight: 1.75 }}>
            Kostenlose und unverbindliche Erstberatung –
            wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section" style={{ background: 'var(--bg-light)', borderBottom: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>

            {/* Left: Info cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

              {/* Direct contact */}
              <div className="card reveal" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem' }}>Direkt erreichen</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="tel:+4998318809600"
                    style={{ display: 'flex', gap: '0.9rem', alignItems: 'center', textDecoration: 'none' }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 'var(--r-sm)',
                      background: 'var(--primary-bg)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <Phone size={17} color="var(--primary-dark)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Telefon</div>
                      <span style={{
                        fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem',
                        transition: 'color 150ms cubic-bezier(0.23,1,0.32,1)',
                      }}>09831 880960</span>
                    </div>
                  </a>

                  <a href="https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See"
                    target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', gap: '0.9rem', alignItems: 'flex-start', textDecoration: 'none' }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 'var(--r-sm)',
                      background: 'var(--primary-bg)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <MapPin size={17} color="var(--primary-dark)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>Adresse</div>
                      <span style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.55 }}>
                        Am Gewerbepark 4<br />91735 Muhr am See
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Opening hours */}
              <div className="card reveal" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '0.65rem', alignItems: 'center', marginBottom: '1.1rem' }}>
                  <Clock size={16} color="var(--primary-dark)" />
                  <h3 style={{ fontWeight: 700, fontSize: '1rem' }}>Öffnungszeiten</h3>
                </div>
                {openingHours.map(({ day, time }, i) => (
                  <div key={day} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.65rem 0',
                    borderBottom: i < openingHours.length - 1 ? '1px solid var(--border)' : 'none',
                  }}>
                    <span style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{day}</span>
                    <span style={{ fontSize: '0.86rem', fontWeight: 600, color: 'var(--text-primary)' }}>{time}</span>
                  </div>
                ))}
              </div>

              {/* Maps link */}
              <a
                href="https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See"
                target="_blank" rel="noopener noreferrer"
                className="card reveal"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  padding: '1.05rem', textDecoration: 'none',
                  color: 'var(--text-secondary)', fontWeight: 600, fontSize: '0.88rem',
                }}
              >
                <MapPin size={15} color="var(--primary-dark)" /> In Google Maps öffnen
              </a>
            </div>

            {/* Right: Contact form */}
            <div className="card reveal" style={{ padding: '2.25rem' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  {/* Emil: entry from scale(0.95) + opacity, never scale(0) */}
                  <div style={{
                    width: 60, height: 60, borderRadius: '50%',
                    background: 'rgba(16,185,129,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1.25rem',
                    /* @starting-style equivalent: element was just inserted */
                    animation: 'popIn 300ms cubic-bezier(0.23,1,0.32,1) both',
                  }}>
                    <CheckCircle size={28} color="#10b981" />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Vielen Dank!</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, fontSize: '0.9rem' }}>
                    Ihre Anfrage ist bei uns eingegangen. Wir melden uns
                    schnellstmöglich bei Ihnen zurück.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    style={{
                      marginTop: '1.5rem', background: 'none', border: 'none',
                      color: 'var(--primary-dark)', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem',
                      transition: 'opacity 150ms ease',
                    }}
                    onMouseEnter={e => e.target.style.opacity = '0.7'}
                    onMouseLeave={e => e.target.style.opacity = '1'}
                  >
                    Weitere Anfrage senden
                  </button>
                  <style>{`@keyframes popIn{from{transform:scale(0.85);opacity:0}to{transform:scale(1);opacity:1}}`}</style>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <div style={{ marginBottom: '0.25rem' }}>
                    <h3 style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '0.3rem' }}>Kostenlose Anfrage</h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Pflichtfelder sind mit * markiert.</p>
                  </div>

                  {/* Bereich */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={labelStyle}>Bereich</label>
                    <select
                      name="bereich" value={form.bereich} onChange={handleChange}
                      style={inputBase}
                      onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    >
                      <option value="">Bitte wählen…</option>
                      <option>Elektrotechnik</option>
                      <option>Energietechnik / Photovoltaik</option>
                      <option>E-Mobilität / Wallbox</option>
                      <option>Smart Home</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
                    <Field label="Name *" name="name" value={form.name} onChange={handleChange} required placeholder="Max Mustermann" />
                    <Field label="Telefon" name="telefon" value={form.telefon} onChange={handleChange} placeholder="09831 …" type="tel" />
                  </div>
                  <Field label="E-Mail *" name="email" value={form.email} onChange={handleChange} required placeholder="max@beispiel.de" type="email" />
                  <Field label="Betreff *" name="betreff" value={form.betreff} onChange={handleChange} required placeholder="z.B. Photovoltaik Neubau" />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    <label style={labelStyle}>Nachricht *</label>
                    <textarea
                      name="nachricht" value={form.nachricht} onChange={handleChange} required rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben…"
                      style={{ ...inputBase, resize: 'vertical' }}
                      onFocus={e => { e.target.style.borderColor = 'var(--primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(245,158,11,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border)'; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ justifyContent: 'center', marginTop: '0.25rem', opacity: loading ? 0.7 : 1 }}
                    disabled={loading}
                  >
                    {loading ? 'Wird gesendet…' : <><Send size={15} /> Anfrage senden</>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
