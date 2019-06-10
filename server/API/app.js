const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3010;

const STATIC_PATH = path.join(__dirname, '..', '..', 'client', 'build');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(STATIC_PATH));
app.set('views', STATIC_PATH);

app.get("*", (req, res) => {
  res.sendFile(`${STATIC_PATH}/index.html`);
});

console.log(`${STATIC_PATH}/index.html`);

app.listen(port, () => console.log("listening on port", port));
