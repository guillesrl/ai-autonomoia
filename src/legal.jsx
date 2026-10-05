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
  return <Layout title="Política de privacidad" updated="5 de octubre de 2026">
    <p>En Autonomo IA tratamos los datos personales con responsabilidad y únicamente para atender tu solicitud, preparar una auditoría o propuesta y prestar nuestros servicios de automatización. Esta política se aplica al sitio <a href="https://guillers.es">guillers.es</a> y se interpreta conforme a la <strong>Llei 29/2021, del 28 d’octubre, qualificada de protecció de dades personals</strong> del Principado de Andorra.</p>
    <Section title="1. Responsable del tratamiento">
      <p><strong>Responsable:</strong> Autonomo IA<br /><strong>Contacto:</strong> <a href="mailto:guillesrl@gmail.com">guillesrl@gmail.com</a><br /><strong>Teléfono:</strong> <a href="tel:+376615808">+376 615 808</a><br /><strong>Domicilio:</strong> Andorra</p>
      <p>La identificación legal completa y el número de registro tributario se incorporarán a esta política cuando estén disponibles.</p>
    </Section>
    <Section title="2. Datos que recogemos">
      <p>En el formulario de contacto podemos tratar tu nombre, correo electrónico, teléfono, sector profesional, aceptación de esta política y la información que nos envíes. El formulario añade datos técnicos de la solicitud, como la fecha y hora, el origen del formulario y los identificadores necesarios para gestionar el envío.</p>
      <p>El sitio puede recibir o registrar, cuando sea técnicamente necesario para su funcionamiento y seguridad, la dirección IP, navegador, sistema operativo, dispositivo, idioma, página de procedencia y registros de errores o accesos. Google Analytics 4 está configurado en modo sin almacenamiento en el dispositivo, sin cookies de analítica y con la IP anonimizada.</p>
    </Section>
    <Section title="3. WhatsApp, inteligencia artificial y automatizaciones">
      <p>El sitio incluye un enlace para contactar por WhatsApp. Al utilizarlo, la comunicación se realiza directamente mediante WhatsApp y queda sujeta a la política de privacidad de Meta/WhatsApp y a la configuración de tu dispositivo. No tenemos acceso a los datos de tu cuenta de WhatsApp que no nos comuniques voluntariamente.</p>
      <p>El formulario de esta web envía los datos facilitados al webhook de n8n utilizado para recibir y gestionar solicitudes. Actualmente la web no incorpora un chatbot de IA propio ni ejecuta conversaciones de IA dentro de la página. Si solicitas nuestros servicios, podremos tratar mensajes, números de teléfono, datos de agenda, consultas y otra información necesaria para configurar, mantener o dar soporte a automatizaciones, asistentes de IA, WhatsApp, CRM, calendarios y otras herramientas que se acuerden contigo.</p>
      <p>Cuando una automatización utilice un proveedor de IA o una herramienta externa, el tratamiento se realizará únicamente en la medida necesaria para prestar el servicio y conforme a la configuración y condiciones del proyecto correspondiente.</p>
    </Section>
    <Section title="4. Finalidades y bases jurídicas">
      <p>Usamos los datos para responder a tu consulta, preparar una auditoría o propuesta, mantener las comunicaciones necesarias, gestionar la relación comercial, prestar soporte y proteger la seguridad del sitio y de nuestros sistemas.</p>
      <p>La base jurídica es tu consentimiento al enviar el formulario, la aplicación de medidas precontractuales solicitadas por ti, el interés legítimo en mantener la seguridad y gestionar la relación profesional y, cuando corresponda, el cumplimiento de obligaciones legales.</p>
    </Section>
    <Section title="5. Proveedores y destinatarios">
      <p>No vendemos ni alquilamos tus datos. Podemos comunicarlos a proveedores que actúan por nuestra cuenta y solo en la medida necesaria para prestar el servicio: alojamiento y despliegue de la web, recepción y automatización de formularios mediante n8n, correo electrónico, analítica web sin cookies, comunicación mediante WhatsApp/Meta y herramientas de IA, agenda, CRM o soporte que se contraten o configuren para un proyecto.</p>
      <p>Estos proveedores deben aplicar las garantías y contratos exigibles. En la actualidad, el formulario de la web utiliza un webhook de n8n autoalojado en <a href="https://n8n.guillers.es">n8n.guillers.es</a> y la web utiliza Google Analytics 4 en modo cookieless. Las fuentes tipográficas se cargan desde Google Fonts. Los enlaces externos, como WhatsApp, quedan sujetos a sus propios responsables y políticas.</p>
    </Section>
    <Section title="6. Transferencias internacionales">
      <p>Algunos proveedores tecnológicos, incluidos Google, Meta/WhatsApp o determinados proveedores de IA y software utilizados en proyectos, pueden tratar datos fuera de Andorra o del Espacio Económico Europeo. Cuando exista una transferencia internacional, se aplicarán las garantías previstas por la normativa aplicable, como decisiones de adecuación, cláusulas contractuales tipo u otras medidas legalmente válidas.</p>
      <p>El enlace de WhatsApp y las herramientas externas solo se activan o utilizan según la interacción del usuario o la configuración del servicio contratado. No transferimos datos a proveedores de IA desde esta página salvo que sean necesarios para un servicio solicitado y configurado.</p>
    </Section>
    <Section title="7. Conservación de los datos">
      <p>Los datos enviados mediante el formulario se conservarán durante un máximo de 24 meses desde la última comunicación relacionada con la solicitud, salvo que exista una relación contractual, una obligación legal o una reclamación que justifique conservarlos durante más tiempo.</p>
      <p>Los datos necesarios para la relación contractual, facturación o defensa de derechos se conservarán durante los plazos legales aplicables. Los registros técnicos y de seguridad se conservarán durante un máximo de 12 meses, salvo que sea necesario conservarlos para investigar un incidente. Las comunicaciones de soporte y de herramientas de automatización se eliminarán o anonimizarán cuando dejen de ser necesarias y, como criterio general, en un plazo máximo de 12 meses desde la última interacción.</p>
    </Section>
    <Section title="8. Cookies y tecnologías similares">
      <p>Esta web no utiliza cookies propias de seguimiento ni de publicidad. Google Analytics 4 está configurado sin almacenamiento en el dispositivo, con el consentimiento analítico denegado por defecto, sin Google Signals y con la dirección IP anonimizada. Por ello no se utiliza un banner para cookies no necesarias.</p>
      <p>El navegador puede realizar conexiones técnicas a servicios externos, como Google Fonts, y los enlaces a terceros pueden establecer sus propias cookies cuando abandonas esta web. Puedes configurar tu navegador para bloquear o eliminar cookies; algunas funciones externas podrían verse afectadas.</p>
    </Section>
    <Section title="9. Tus derechos">
      <p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación del tratamiento o portabilidad escribiendo a <a href="mailto:guillesrl@gmail.com">guillesrl@gmail.com</a>. También puedes retirar el consentimiento cuando el tratamiento se base en él. Podremos pedir información adicional únicamente cuando sea necesario para verificar tu identidad.</p>
      <p>Si consideras que el tratamiento no se ajusta a la normativa, puedes presentar una reclamación ante la <a href="https://www.apda.ad/" target="_blank" rel="noreferrer">Agència Andorrana de Protecció de Dades (APDA)</a>.</p>
    </Section>
    <Section title="10. Seguridad y cambios">
      <p>Aplicamos medidas técnicas y organizativas razonables, incluido el uso de HTTPS, controles de acceso y medidas de protección del alojamiento y de los sistemas que intervienen en la gestión de solicitudes. Ningún sistema conectado a internet puede garantizar una seguridad absoluta.</p>
      <p>Esta política puede actualizarse para reflejar cambios legales, técnicos, de proveedores o de servicio. La fecha de actualización indicará la versión vigente.</p>
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
