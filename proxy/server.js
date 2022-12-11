const express = require("express");
const fetch = require("node-fetch");
const cores = require("cors");
const app = express();

app.use(cores());

app.get("/*", (req, res) => {
  const url = req.originalUrl.replace("/", "https://");

  fetch(url)
    .then((data) => data.json())
    .then((response) => res.json({ data: response }))
    .catch((err) => res.json(err.message));
});

app.listen(3000, () => {
  console.log("linstenint on port http://localhost:3000/");
});
