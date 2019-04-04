export default (req, res) => {
  res.send(`
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Fun Cricket</title>
    </head>
    <body>
      <div id="root"></div>
      <script src="${__ASSETS__.runtime.js}"></script>
      <script src="${__ASSETS__.vendors.js}"></script>
      <script src="${__ASSETS__.main.js}"></script>
    </body>
  </html>
`);
};
