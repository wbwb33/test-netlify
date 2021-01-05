const express = require('express');
const app = express();
const port = process.env.PORT || 3030;

const json = JSON.parse(`
{
  "status": "success",
  "message": {
    "action": "get order pool",
    "data": [
      {
        "product": "Abc Kecap Manis Botol 135Ml",
        "keyword": "Kecap"
      },
      {
        "product": "AQUA Botol 600ml",
        "keyword": "Air Putih"
      },
      {
        "product": "Molto Sekali Bilas Blue All In One 300Ml",
        "keyword": "Pewangi Pakaian"
      },
      {
        "product": "Rinso Matic Front Load 1Kg",
        "keyword": "Deterjen Bubuk"
      },
      {
        "product": "YOU C1000 Orange Water 500ml",
        "keyword": "Minuman Vitamin C"
      }
    ]
  }
}
`);

app.get('/', (req, res) => res.send(json));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));