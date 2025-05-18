require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const productRoutes = require('./routes/productRoutes');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MONGO DB'))
  .catch(err => console.error(err));

app.use('/api/products', productRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor backend en el puerto: ${PORT}`);
});