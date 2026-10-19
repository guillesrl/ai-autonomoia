# Autonomo IA — Landing

Landing page de [guillers.es](https://guillers.es): servicio de automatizaciones IA y asistentes conversacionales por WhatsApp para PYMES.

> Comprobación de autodespliegue seguro en Easypanel: 24 de septiembre de 2026.

## Stack

- React 18 + Vite 6
- ES modules, sin framework CSS (CSS custom properties + inline styles)
- Tipografías: fuentes del sistema (sin Google Fonts)
- Analytics: Google Analytics 4 solo tras consentimiento explícito
- Formulario: webhook a n8n self-hosted
- Deploy: Easypanel (auto-deploy desde GitHub) + alternativa Nginx en VPS

## Estructura

```
.
├── src/
│   ├── components/   # Hero, Features, Stats, FAQ, ContactForm, Footer
│   ├── App.jsx       # Navbar + WhatsAppButton + layout
│   ├── main.jsx      # Entry point
│   └── styles.css    # Design tokens + responsive
├── public/           # Assets servidos tal cual: og-image, logo, favicons,
│                     # robots.txt, sitemap.xml, llms.txt
├── deploy/           # nginx.conf + DEPLOY.md
├── index.html        # SEO meta + JSON-LD + GA4
├── vite.config.js
└── package.json
```

## Desarrollo

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # output → dist/
npm run preview    # sirve el build en local
```

El proxy de Vite redirige `/api/contact` al webhook de n8n para evitar CORS en desarrollo. En producción el formulario hace POST directo a `https://n8n.guillers.es/webhook/contacto-landing` (CORS debe estar configurado en el nodo Webhook).

### Variables de entorno

Crea un `.env.local` opcional para sobreescribir defaults:

```
VITE_N8N_WEBHOOK_URL=https://n8n.guillers.es/webhook/contacto-landing
```

## SEO

- Meta tags primarios (title, description, canonical, robots, theme-color)
- Open Graph + Twitter Cards con imagen 1200×630
- JSON-LD: `ProfessionalService`, `WebSite`, `Service` (con `OfferCatalog`), `FAQPage`
- `sitemap.xml` y `robots.txt` con allowlist de crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, etc.)
- `llms.txt` en formato Markdown para Answer Engine Optimization

## Privacidad y proveedores

- El formulario envía los datos al webhook autoalojado de n8n. La ubicación del servidor, las copias de seguridad, la retención de ejecuciones y los accesos deben mantenerse documentados.
- Google Analytics 4 no se carga hasta que el visitante acepta la analítica. Si la rechaza, no se solicita el script de Google. La preferencia se guarda localmente y puede cambiarse desde «Configurar analítica» en el pie de página.
- Google Fonts se eliminó para evitar una conexión de terceros antes de una decisión del visitante.
- WhatsApp/Meta, correo, hosting y cualquier proveedor de IA pueden implicar transferencias internacionales. Antes de usarlos con datos personales hay que registrar país de tratamiento, encargado/subencargados, contrato y mecanismo de transferencia.
- No se debe publicar aquí ningún token, contraseña ni secreto de autenticación del webhook. El webhook de producción requiere una revisión independiente de su autenticación y del proxy/backend que lo consume.

Eventos custom trackados:
- `generate_lead` al recibir respuesta 2xx del webhook y haber aceptado analítica
- `whatsapp_click` al pulsar el botón flotante y haber aceptado analítica

## Deploy

### Easypanel (actual)

Configurado como servicio tipo App con auto-deploy desde la rama `main`:

- Repositorio: `guillesrl/autonomoia` · Rama `main`
- Install Command: `npm install`
- Build Command: `npm run build`
- Start Command: `npm start` (ejecuta `serve -s dist -l $PORT`)
- Node fijado a 20 vía `.nvmrc`

Cada push a `main` dispara un build + redeploy automático.

CORS del webhook de n8n: el nodo Webhook tiene configurado el origen `https://guillers.es` en "Allowed Origins (CORS)". En desarrollo local Vite hace de proxy para evitar CORS.

### Alternativa: Nginx en VPS

Ver [`deploy/DEPLOY.md`](./deploy/DEPLOY.md). Resumen:

```bash
npm run build
rsync -avz --delete ./dist/ USER@HOST:/var/www/guillers.es/dist/
```

Nginx sirve `dist/` con HTTPS (Let's Encrypt), HSTS, CSP, gzip y cache headers optimizados (1 año immutable para assets con hash, HTML siempre fresco).

## Licencia

Propietario — uso interno de Autonomo IA.
