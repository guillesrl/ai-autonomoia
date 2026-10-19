import React from 'react';

export function Stats() {
  const items = [
    { value: '24/7', label: 'Atención a consultas y solicitudes' },
    { value: 'A medida', label: 'Flujos ajustados a cada negocio' },
    { value: '30 min', label: 'Primera auditoría gratuita' },
    { value: 'Soporte', label: 'Acompañamiento tras el lanzamiento' },
  ];

  return (
    <section style={{
      paddingBlock: 'var(--space-20)', paddingInline: 'var(--container-pad)',
      background: 'var(--bg-inverted)', color: 'var(--fg-inverted)',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{ marginBottom: 48, maxWidth: 600 }}>
          <div style={{
            fontSize: 12, fontWeight: 600, letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--color-blue-300)',
            marginBottom: 14, display: 'inline-flex', alignItems: 'center', gap: 8,
          }}>
            <span style={{ width: 20, height: 1, background: 'var(--color-blue-300)' }} />
            Cómo colaboramos
          </div>
          <h2 style={{
            fontSize: 'clamp(32px, 3.5vw, 44px)', fontWeight: 700, lineHeight: 1.1,
            letterSpacing: '-0.025em', color: 'white',
          }}>
            Una automatización adaptada a tu forma de trabajar.
          </h2>
        </div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          borderTop: '1px solid rgba(255,255,255,0.1)',
        }}>
          {items.map((item, i) => (
            <div key={item.value} style={{
              padding: '32px 24px', paddingLeft: i === 0 ? 0 : 24,
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              borderRight: i < items.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}>
              <div style={{
                fontSize: 'clamp(28px, 3vw, 52px)', fontWeight: 800,
                color: 'white', letterSpacing: '-0.04em', lineHeight: 1.1,
                marginBottom: 12,
              }}>{item.value}</div>
              <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.4 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
