import App from './components/App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/api/moments', (req, res) => {
    res.json([
      {
        id: 'e8WVP3ClDsM',
        artists: 'Skream b2b Disclosure',
        location: 'W Hotel London',
        description:
          'Skream doing what he does best - getting messy. Probably banned for life at this hotel but was it worth it? Absolutely.',
        start: '3995',
        position: 3,
      },
      {
        id: 'uiU0dR-FUuM',
        artists: 'ROD b2b Tripeo',
        location: 'Nijmegen',
        description:
          'Tripeo and ROD push the party to the next level with this banger - and the crowd know it.',
        start: '3840',
        position: 2,
      },
      {
        id: 'qQaEWVYuyXU',
        artists: 'DJ EZ',
        location: 'RBMA London',
        description:
          'A masterclass from the UK garage god that is DJ EZ. Watching him push the CDJs to their limits is truely impressive.',
        start: '840',
        position: 1,
      },
    ]);
  })
  .get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
          <html lang="">
          <head>
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta charset="utf-8" />
              <title>Boiler Room - Top 3 Moments</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              ${
                assets.client.css
                  ? `<link rel="stylesheet" href="${assets.client.css}">`
                  : ''
              }
              ${
                process.env.NODE_ENV === 'production'
                  ? `<script src="${assets.client.js}" defer></script>`
                  : `<script src="${
                      assets.client.js
                    }" defer crossorigin></script>`
              }
          </head>
          <body>
              <main id="root">${markup}</main>
          </body>
        </html>`
      );
    }
  });

export default server;
