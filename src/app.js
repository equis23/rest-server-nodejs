const express = require('express');

const app = express();

app.listen(8080, (err) => {
  if (err) return console.log(err);
  console.log('server up and running at http://localhost:8080');
})
