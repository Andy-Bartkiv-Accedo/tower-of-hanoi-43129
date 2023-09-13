const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

const testTowers = require('./testTowers');

app.use(express.json());

app.listen(
  PORT,
  console.log('Towers Test running at:', PORT)
);

app.post('/test', (req, res) => {
  const { arrTowers, moves } = req.body;

  if (!arrTowers || !moves) {
    res.status(418).send({ 
      error: 'You need to provide a JSON with two valid arrays [arrTowers] and [moves]' 
    })
  }

  res.send(testTowers(arrTowers, moves));

});