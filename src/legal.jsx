import React from 'react';
import { createRoot } from 'react-dom/client';
import { Logo } from './components/Footer.jsx';
import './styles.css';

const pageStyle = {
  maxWidth: 800,
  margin: '0 auto',
  padding: '48px var(--container-pad) 80px',
};

function Header() {
  return (
    <header style={{ borderBottom: '1px solid var(--border-default)', padding: '18px var(--container-pad)' }}>
      <a href="/" aria-label="Volver a la página de inicio" style={{ textDecoration: 'none' }}><Logo /></a>
    </header>
  );
}

function Layout({ title, updated, children }) {
  return (
    <>
      <Header />
      <main style={pageStyle} className="legal-page">
        <a href="/" style={{ color: 'var(--fg-accent)', fontSize: 14, textDecoration: 'none', fontWeight: 600 }}>← Volver al inicio</a>
        <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: 'var(--fg-primary)', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '24px 0 12px' }}>{title}</h1>
        <p style={{ color: 'var(--fg-tertiary)', marginBottom: 40 }}>Última actualización: {updated}</p>
        {children}
      </main>
      <footer style={{ borderTop: '1px solid var(--border-default)', padding: '28px var(--container-pad)', textAlign: 'center', color: 'var(--fg-tertiary)', fontSize: 13 }}>
        © 2026 Autonomo IA · <a href="/privacidad">Privacidad</a> · <a href="/aviso-legal">Aviso legal</a>
      </footer>
    </>
  );
}

const Section = ({ title, children }) => <section style={{ padding: 0, marginBottom: 30 }}><h2>{title}</h2>{children}</section>;

export function PrivacyPage() {
  return <Layout title="Política de privacidad" updated="24 de septiembre de 2026">
    <p>En Autonomo IA tratamos los datos personales con responsabilidad y únicamente para atender tu solicitud y ofrecer nuestros servicios de automatización.</p>
    <Section title="1. Responsable del tratamiento">
      <p><strong>Responsable:</strong> Autonomo IA<br /><strong>Contacto:</strong> <a href="mailto:guillesrl@gmail.com">guillesrl@gmail.com</a><br /><strong>Teléfono:</strong> <a href="tel:+376615808">+376 615 808</a><br /><strong>Ubicación:</strong> Andorra</p>
    </Section>
    <Section title="2. Datos que recogemos">
      <p>Cuando completas el formulario podemos tratar tu nombre, correo electrónico, teléfono, sector profesional y el contenido que nos comuniques. También pueden tratarse datos técnicos imprescindibles para el funcionamiento y seguridad del sitio.</p>
    </Section>
    <Section title="3. Finalidad y base jurídica">
      <p>Usamos estos datos para responder a tu consulta, preparar una auditoría o propuesta solicitada y mantener las comunicaciones necesarias sobre ella. La base jurídica es tu consentimiento al enviar el formulario y, cuando corresponda, la aplicación de medidas precontractuales solicitadas por ti.</p>
    </Section>
    <Section title="4. Conservación y destinatarios">
      <p>Conservaremos los datos durante el tiempo necesario para atender la solicitud y cumplir las obligaciones legales aplicables. No vendemos tus datos ni los cedemos a terceros salvo a proveedores necesarios para prestar el servicio —como alojamiento, correo o automatización—, bajo las garantías y contratos exigibles.</p>
    </Section>
    <Section title="5. Tus derechos">
      <p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento o portabilidad de tus datos escribiendo a <a href="mailto:guillesrl@gmail.com">guillesrl@gmail.com</a>. Si consideras que el tratamiento no se ajusta a la normativa aplicable, puedes presentar una reclamación ante la autoridad de protección de datos competente.</p>
    </Section>
    <Section title="6. Seguridad y cambios">
      <p>Aplicamos medidas técnicas y organizativas razonables para proteger la información. Esta política puede actualizarse para reflejar cambios legales, técnicos o de servicio; la fecha de actualización indicará la versión vigente.</p>
    </Section>
  </Layout>;
}

export function LegalNoticePage() {
  return <Layout title="Aviso legal" updated="24 de septiembre de 2026">
    <Section title="1. Titular del sitio">
      <p>Este sitio web, accesible en <a href="https://guillers.es">guillers.es</a>, es titularidad de Autonomo IA. Para cualquier consulta puedes contactar en <a href="mailto:guillesrl@gmail.com">guillesrl@gmail.com</a> o en el teléfono <a href="tel:+376615808">+376 615 808</a>. Actividad: diseño, despliegue y soporte de automatizaciones de inteligencia artificial para empresas.</p>
    </Section>
    <Section title="2. Objeto y uso del sitio">
      <p>El sitio ofrece información sobre los servicios de Autonomo IA y permite solicitar una auditoría o contacto comercial. Quien lo utiliza se compromete a hacerlo de forma lícita, diligente y respetuosa, sin perjudicar la seguridad, disponibilidad o derechos de terceros.</p>
    </Section>
    <Section title="3. Propiedad intelectual">
      <p>Los contenidos, textos, diseños, marcas, logotipos y demás elementos del sitio están protegidos por la normativa aplicable. No se permite su reproducción, distribución, transformación o comunicación pública sin autorización previa y por escrito del titular, salvo los usos legalmente permitidos.</p>
    </Section>
    <Section title="4. Enlaces y responsabilidad">
      <p>Este sitio puede incluir enlaces a páginas de terceros. Autonomo IA no controla ni asume responsabilidad sobre sus contenidos, disponibilidad o políticas. La información publicada tiene carácter informativo y no constituye una oferta vinculante; las condiciones de cada servicio se concretarán en la propuesta o contrato correspondiente.</p>
    </Section>
    <Section title="5. Protección de datos">
      <p>El tratamiento de datos personales se rige por la <a href="/privacidad">Política de privacidad</a>. Al utilizar el formulario, declaras que los datos facilitados son veraces y que cuentas con legitimación para proporcionarlos.</p>
    </Section>
    <Section title="6. Legislación aplicable">
      <p>Este aviso se interpreta conforme a la normativa aplicable al titular y al servicio prestado, sin perjuicio de los derechos imperativos que correspondan a las personas consumidoras y usuarias.</p>
    </Section>
  </Layout>;
}

export function mountLegalPage(Page) {
  createRoot(document.getElementById('root')).render(<Page />);
}
