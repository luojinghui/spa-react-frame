/**
 * Created Date: 2017/12/22
 * Author: luojinghui
 */

const express = require('express');
const path = require('path');
const Loadable = require('react-loadable');

const app = express();

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// app.listen(9000);
Loadable.preloadAll().then(() => {
  app.listen(9000, () => {
    console.log('Running on http://localhost:3000/');
  });
});















// import React from 'react';
// import ReactDOMServer from 'react-dom/server';
// import App from './components/App';
// import Loadable from 'react-loadable';
//
// const express = require('express');
// const path = require('path');
//
// const app = express();
//
// app.use(express.static(path.join(__dirname, 'build')));
//
// app.get('/*', function (req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
//
// // app.get('/', (req, res) => {
// //   res.send(`
// //     <!doctype html>
// //     <html lang="en">
// //       <head>...</head>
// //       <body>
// //         <div id="app">${ReactDOMServer.renderToString(<App/>)}</div>
// //         <script src="/dist/main.js"></script>
// //       </body>
// //     </html>
// //   `);
// // });
//
// Loadable.preloadAll().then(() => {
//   app.listen(3000, () => {
//     console.log('Running on http://localhost:3000/');
//   });
// });