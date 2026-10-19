# Autonomo IA — Landing

Landing page de [guillers.es](https://guillers.es): servicio de automatizaciones IA y asistentes conversacionales por WhatsApp para PYMES.

Estado documentado: 19 de octubre de 2026. La versión publicada corresponde a la rama `main`.

## Stack

- React 18 + Vite 6
- ES modules, sin framework CSS (CSS custom properties + inline styles)
- Tipografías: fuentes del sistema (sin Google Fonts)
- Analytics: no instalado; se utiliza Google Search Console fuera de la web para SEO
- Formulario: POST directo desde el navegador al webhook autoalojado de n8n
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
├── index.html        # SEO meta + JSON-LD
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

En desarrollo, el proxy de Vite redirige `/api/contact` al webhook de n8n para evitar CORS. En producción, el formulario hace POST directo a `https://n8n.guillers.es/webhook/contacto-landing`; el webhook debe admitir el origen `https://guillers.es`. No hay un proxy de formulario desplegado. El 19 de octubre de 2026 se comprobó un envío real desde la web: el formulario mostró «Recibido» y llegó la notificación de nuevo cliente por Telegram.

### Variables de entorno

Opcionalmente, crea `.env.local` para cambiar la URL del webhook en el build. Las variables `VITE_` quedan expuestas al navegador: no pongas contraseñas ni tokens en ellas.

```
VITE_N8N_WEBHOOK_URL=https://n8n.guillers.es/webhook/contacto-landing
```

## SEO

- Meta tags primarios (title, description, canonical, robots, theme-color)
- Open Graph + Twitter Cards con imagen 1200×630
- JSON-LD: `ProfessionalService`, `WebSite`, `Service` (con `OfferCatalog`), `FAQPage`
- `sitemap.xml` y `robots.txt` con allowlist de crawlers de IA (GPTBot, ClaudeBot, PerplexityBot, etc.)
- `llms.txt` en formato Markdown para Answer Engine Optimization

Google Search Console: la propiedad de dominio `guillers.es` está verificada, el sitemap fue aceptado y se detectaron tres URL (`/`, `/privacidad`, `/aviso-legal`). La página principal figura como indexada. La indexación de las otras páginas depende de Google; el sitemap aceptado no garantiza su indexación.

## Privacidad y proveedores

- El formulario envía los datos al webhook autoalojado de n8n. La ubicación del servidor, las copias de seguridad, la retención de ejecuciones y los accesos deben mantenerse documentados.
- Google Analytics se eliminó de la web. No se solicita el script de Google ni se recogen métricas de comportamiento dentro de la página.
- Google Fonts se eliminó para evitar una conexión de terceros antes de una decisión del visitante.
- WhatsApp/Meta, correo, hosting y cualquier proveedor de IA pueden implicar transferencias internacionales. Antes de usarlos con datos personales hay que registrar país de tratamiento, encargado/subencargados, contrato y mecanismo de transferencia.
- No se debe publicar aquí ningún token, contraseña ni secreto de autenticación del webhook. El navegador envía la solicitud sin una credencial Basic; la protección contra abuso y la configuración de acceso del webhook se gestionan en n8n y en la infraestructura.

No se envían eventos de analítica desde la web.

## Deploy

### Easypanel (actual)

Configurado como servicio tipo App con auto-deploy desde la rama `main`:

- Repositorio: `guillesrl/ai-autonomoia` · Rama `main`
- Install Command: `npm install`
- Build Command: `npm run build`
- Start Command: `npm start` (sirve el contenido estático de `dist/`)
- Node fijado a 20 vía `.nvmrc`

Cada push a `main` dispara un build + redeploy automático.

Tras un cambio del formulario, comprueba tanto la respuesta en la web como la recepción real en n8n o Telegram. Una respuesta visual de éxito, por sí sola, no confirma la entrega al flujo.

### Alternativa: Nginx en VPS

Ver [`deploy/DEPLOY.md`](./deploy/DEPLOY.md). Resumen:

```bash
npm run build
rsync -avz --delete ./dist/ USER@HOST:/var/www/guillers.es/dist/
```

Nginx sirve `dist/` con HTTPS (Let's Encrypt), HSTS, CSP, gzip y cache headers optimizados (1 año immutable para assets con hash, HTML siempre fresco).

## Licencia

Propietario — uso interno de Autonomo IA.
