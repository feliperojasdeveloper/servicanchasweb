const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "Piscina Rectangular", price: "$5000" },
    { id: 2, name: "Piscina Ovalada", price: "$6000" },
    { id: 3, name: "Piscina Infinity", price: "$8000" },
  ];
  res.json(products);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});