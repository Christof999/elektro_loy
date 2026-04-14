import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const kontaktDaten = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '09831 880960',
    href: 'tel:+4998318809600',
  },
  {
    icon: MapPin,
    label: 'Adresse',
    value: 'Am Gewerbepark 4\n91735 Muhr am See',
    href: 'https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See',
  },
  {
    icon: Clock,
    label: 'Öffnungszeiten',
    value: 'Mo–Fr: 08:00–17:00 Uhr\nSa: nach Vereinbarung',
    href: null,
  },
];

export default function Kontakt() {
  const [form, setForm] = useState({ name: '', email: '', telefon: '', betreff: '', nachricht: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real setup, this would connect to a backend/email service
    setSent(true);
  };

  return (
    <section id="kontakt" style={{ background: 'linear-gradient(135deg, #0f3460 0%, #1a1a2e 100%)', padding: '5rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-badge" style={{ background: 'rgba(243,146,0,0.2)', color: 'var(--primary)' }}>
            Kontakt
          </span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Sprechen wir über<br />
            <span style={{ color: 'var(--primary)' }}>Ihr Projekt</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.7)', margin: '0 auto' }}>
            Kontaktieren Sie uns für eine kostenlose und unverbindliche Erstberatung. 
            Wir melden uns schnellstmöglich bei Ihnen.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
        }}>
          {/* Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {kontaktDaten.map((k) => {
              const Icon = k.icon;
              const content = (
                <div style={{
                  display: 'flex', gap: '1rem', alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: 12,
                  padding: '1.25rem 1.5rem',
                  transition: 'background 0.2s',
                  textDecoration: 'none',
                }}
                  onMouseEnter={e => { if (k.href) e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                  onMouseLeave={e => { if (k.href) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                >
                  <div style={{
                    width: 42, height: 42, borderRadius: 10,
                    background: 'rgba(243,146,0,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={20} color="var(--primary)" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
                      {k.label}
                    </div>
                    <div style={{ color: '#fff', fontWeight: 500, fontSize: '0.95rem', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {k.value}
                    </div>
                  </div>
                </div>
              );

              return k.href ? (
                <a key={k.label} href={k.href} target={k.href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                  {content}
                </a>
              ) : (
                <div key={k.label}>{content}</div>
              );
            })}

            {/* Map Embed placeholder */}
            <div style={{
              borderRadius: 12,
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              height: 200,
              position: 'relative',
            }}>
              <iframe
                title="Standort Loy GmbH"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyD-placeholder&q=Am+Gewerbepark+4,+91735+Muhr+am+See"
              />
              {/* Fallback overlay when key is not set */}
              <a
                href="https://maps.google.com/?q=Am+Gewerbepark+4,+91735+Muhr+am+See"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(15,52,96,0.85)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexDirection: 'column', gap: '0.5rem',
                  color: '#fff', textDecoration: 'none',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.background = 'rgba(15,52,96,0.7)'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(15,52,96,0.85)'}
              >
                <MapPin size={28} color="var(--primary)" />
                <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>In Google Maps öffnen</span>
                <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)' }}>Am Gewerbepark 4, Muhr am See</span>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: '#fff',
            borderRadius: 16,
            padding: '2.25rem',
          }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                <CheckCircle size={52} color="var(--success)" style={{ margin: '0 auto 1rem' }} />
                <h3 style={{ fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem' }}>Vielen Dank!</h3>
                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Ihre Nachricht wurde übermittelt. Wir melden uns schnellstmöglich bei Ihnen.
                </p>
                <button
                  onClick={() => setSent(false)}
                  style={{ marginTop: '1.5rem', background: 'none', border: 'none', color: 'var(--primary)', fontWeight: 600, cursor: 'pointer', fontSize: '0.95rem' }}
                >
                  Weitere Anfrage senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.25rem', color: 'var(--text-primary)' }}>
                  Kostenlose Anfrage
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-light)', marginBottom: '0.25rem' }}>
                  Alle Felder mit * sind Pflichtfelder.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <InputField label="Name *" name="name" value={form.name} onChange={handleChange} required placeholder="Max Mustermann" />
                  <InputField label="Telefon" name="telefon" value={form.telefon} onChange={handleChange} placeholder="09831 ..." type="tel" />
                </div>
                <InputField label="E-Mail *" name="email" value={form.email} onChange={handleChange} required placeholder="max@beispiel.de" type="email" />
                <InputField label="Betreff *" name="betreff" value={form.betreff} onChange={handleChange} required placeholder="z.B. Photovoltaikanlage" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>Ihre Nachricht *</label>
                  <textarea
                    name="nachricht"
                    value={form.nachricht}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                    style={{
                      border: '1.5px solid var(--border)',
                      borderRadius: 8,
                      padding: '0.7rem 1rem',
                      fontSize: '0.95rem',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'vertical',
                      fontFamily: 'inherit',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--primary)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                <button type="submit" className="btn-primary" style={{ justifyContent: 'center', marginTop: '0.25rem' }}>
                  Anfrage senden <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function InputField({ label, name, value, onChange, required, placeholder, type = 'text' }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
      <label style={{ fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)' }}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        style={{
          border: '1.5px solid var(--border)',
          borderRadius: 8,
          padding: '0.7rem 1rem',
          fontSize: '0.95rem',
          color: 'var(--text-primary)',
          outline: 'none',
          transition: 'border-color 0.2s',
          fontFamily: 'inherit',
        }}
        onFocus={e => e.target.style.borderColor = 'var(--primary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border)'}
      />
    </div>
  );
}
