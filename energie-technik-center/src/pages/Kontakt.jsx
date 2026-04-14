import { useState, useEffect } from 'react';
import { Phone, MapPin, Clock, Send, CheckCircle, Mail } from 'lucide-react';

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
        paddingTop: '7.5rem', paddingBottom: '3.5rem',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at 70% 50%, rgba(243,146,0,0.08) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="badge badge-dark">Kontakt</div>
          <h1 style={{
            fontSize: 'clamp(1.9rem, 4.5vw, 3rem)', fontWeight: 900,
            color: '#fff', lineHeight: 1.12, marginBottom: '0.9rem', letterSpacing: '-0.02em',
          }}>
            Sprechen wir über Ihr Projekt
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.05rem', maxWidth: 500, margin: '0 auto' }}>
            Kostenlose und unverbindliche Erstberatung – wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <svg viewBox="0 0 1440 50" fill="none" preserveAspectRatio="none" style={{ display: 'block', width: '100%' }}>
            <path d="M0 50L1440 50L1440 12C1200 45 960 0 720 20C480 40 240 4 0 28Z" fill="#f9fafb" />
          </svg>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="section" style={{ background: 'var(--bg-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', alignItems: 'start' }}>

            {/* Left: Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {/* Quick contact */}
              <div className="card reveal" style={{ padding: '1.75rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.05rem', marginBottom: '1.25rem' }}>Direkt erreichen</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <a href="tel:+4998318809600" style={{ display: 'flex', gap: '0.85rem', alignItems: 'center', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.querySelector('span').style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.querySelector('span').style.color = 'var(--text-primary)'}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(243,146,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={18} color="var(--primary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 500 }}>Telefon</div>
                      <span style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.95rem', transition: 'color 0.2s' }}>09831 880960</span>
                    </div>
                  </a>

                  <a href="https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See" target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', textDecoration: 'none' }}
                    onMouseEnter={e => e.currentTarget.querySelector('span').style.color = 'var(--primary)'}
                    onMouseLeave={e => e.currentTarget.querySelector('span').style.color = 'var(--text-primary)'}
                  >
                    <div style={{ width: 40, height: 40, borderRadius: 10, background: 'rgba(243,146,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={18} color="var(--primary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-light)', fontWeight: 500 }}>Adresse</div>
                      <span style={{ fontWeight: 500, color: 'var(--text-primary)', fontSize: '0.9rem', lineHeight: 1.5, transition: 'color 0.2s' }}>
                        Am Gewerbepark 4<br />91735 Muhr am See
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Opening hours */}
              <div className="card reveal" style={{ padding: '1.75rem' }}>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', marginBottom: '1.1rem' }}>
                  <Clock size={17} color="var(--primary)" />
                  <h3 style={{ fontWeight: 700, fontSize: '1.05rem' }}>Öffnungszeiten</h3>
                </div>
                {openingHours.map(({ day, time }) => (
                  <div key={day} style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '0.6rem 0', borderBottom: '1px solid var(--border)',
                  }}>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{day}</span>
                    <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-primary)' }}>{time}</span>
                  </div>
                ))}
              </div>

              {/* Map link */}
              <a
                href="https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See"
                target="_blank" rel="noopener noreferrer"
                className="card reveal"
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.6rem',
                  padding: '1.1rem', textDecoration: 'none',
                  color: 'var(--text-primary)', fontWeight: 600, fontSize: '0.9rem',
                  transition: 'border-color 0.2s, color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary)'; e.currentTarget.style.color = 'var(--primary)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <MapPin size={16} /> In Google Maps öffnen
              </a>
            </div>

            {/* Right: Form */}
            <div className="card reveal" style={{ padding: '2rem' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: '50%',
                    background: 'rgba(16,185,129,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 1rem',
                  }}>
                    <CheckCircle size={30} color="#10b981" />
                  </div>
                  <h3 style={{ fontWeight: 800, fontSize: '1.2rem', marginBottom: '0.5rem' }}>Vielen Dank!</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '0.92rem' }}>
                    Ihre Anfrage ist bei uns eingegangen. Wir melden uns schnellstmöglich bei Ihnen zurück.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}
                  >
                    Weitere Anfrage senden
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                  <h3 style={{ fontWeight: 800, fontSize: '1.15rem', marginBottom: '0.1rem' }}>Kostenlose Anfrage</h3>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-light)', marginBottom: '0.1rem' }}>
                    Pflichtfelder sind mit * markiert.
                  </p>

                  {/* Bereich wählen */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={labelStyle}>Bereich</label>
                    <select
                      name="bereich" value={form.bereich} onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    >
                      <option value="">Bitte wählen…</option>
                      <option>Elektrotechnik</option>
                      <option>Energietechnik / Photovoltaik</option>
                      <option>E-Mobilität / Wallbox</option>
                      <option>Smart Home</option>
                      <option>Sonstiges</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                    <Field label="Name *" name="name" value={form.name} onChange={handleChange} required placeholder="Max Mustermann" />
                    <Field label="Telefon" name="telefon" value={form.telefon} onChange={handleChange} placeholder="09831 …" type="tel" />
                  </div>
                  <Field label="E-Mail *" name="email" value={form.email} onChange={handleChange} required placeholder="max@beispiel.de" type="email" />
                  <Field label="Betreff *" name="betreff" value={form.betreff} onChange={handleChange} required placeholder="z.B. Photovoltaik Neubau" />

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    <label style={labelStyle}>Nachricht *</label>
                    <textarea
                      name="nachricht" value={form.nachricht} onChange={handleChange} required rows={4}
                      placeholder="Beschreiben Sie kurz Ihr Vorhaben…"
                      style={{ ...inputStyle, resize: 'vertical', fontFamily: 'inherit' }}
                      onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ justifyContent: 'center', marginTop: '0.25rem', opacity: loading ? 0.75 : 1 }}
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

const labelStyle = { fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)' };
const inputStyle = {
  border: '1.5px solid var(--border)', borderRadius: 7,
  padding: '0.65rem 0.9rem', fontSize: '0.92rem',
  color: 'var(--text-primary)', outline: 'none',
  transition: 'border-color 0.2s', width: '100%',
  background: '#fff',
};

function Field({ label, name, value, onChange, required, placeholder, type = 'text' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type} name={name} value={value} onChange={onChange}
        required={required} placeholder={placeholder}
        style={inputStyle}
        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
    </div>
  );
}
