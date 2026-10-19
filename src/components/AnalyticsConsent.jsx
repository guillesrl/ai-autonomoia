import React from 'react';
import { getAnalyticsConsent, loadAnalytics, setAnalyticsConsent } from '../analytics.js';

export function AnalyticsConsent() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(!getAnalyticsConsent());
    const update = event => setVisible(event.detail !== 'granted' && event.detail !== 'denied');
    window.addEventListener('analytics-consent-changed', update);
    return () => window.removeEventListener('analytics-consent-changed', update);
  }, []);

  if (!visible) return null;

  const accept = () => {
    setAnalyticsConsent('granted');
    loadAnalytics();
    setVisible(false);
  };

  const reject = () => {
    setAnalyticsConsent('denied');
    setVisible(false);
  };

  return (
    <aside className="analytics-consent" role="dialog" aria-labelledby="analytics-consent-title" aria-describedby="analytics-consent-description">
      <div>
        <h2 id="analytics-consent-title">Privacidad y analítica</h2>
        <p id="analytics-consent-description">
          Usamos Google Analytics solo si lo autorizas para entender cómo se utiliza la web. Puedes aceptar o rechazar la analítica sin afectar al formulario ni al servicio.
          Consulta la <a href="/privacidad">política de privacidad</a>.
        </p>
      </div>
      <div className="analytics-consent-actions">
        <button type="button" className="analytics-consent-reject" onClick={reject}>Rechazar</button>
        <button type="button" className="analytics-consent-accept" onClick={accept}>Aceptar analítica</button>
      </div>
    </aside>
  );
}
