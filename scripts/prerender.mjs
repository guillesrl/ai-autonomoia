import React from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const pages = [
  ['index.html', '/src/App.jsx', 'default'],
  ['privacidad/index.html', '/src/legal.jsx', 'PrivacyPage'],
  ['aviso-legal/index.html', '/src/legal.jsx', 'LegalNoticePage'],
];

const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
});

try {
  for (const [filename, modulePath, exportName] of pages) {
    const module = await vite.ssrLoadModule(modulePath);
    const markup = renderToString(React.createElement(module[exportName]));
    const path = resolve('dist', filename);
    const html = await readFile(path, 'utf8');
    const placeholder = '<div id="root"></div>';
    if (!html.includes(placeholder)) throw new Error('No root placeholder in ' + filename);
    await writeFile(path, html.replace(placeholder, '<div id="root">' + markup + '</div>'));
    console.log('Prerendered ' + filename);
  }
} finally {
  await vite.close();
}
