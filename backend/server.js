require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const helmet = require('helmet');
const commentRoutes = require('./routes/comments');

const app = express();

connectDB();

app.use(cors({
    origin: 'https://upbeat-alignment.railway.internal',
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Authorization', 'Content-Type']
  }));

app.use(express.json());
app.use(helmet());
app.use('/images', express.static('public/images', {
    setHeaders: (res, path, stat) => {
      res.header('Access-Control-Allow-Origin', 'https://generous-insight.railway.internal');
      res.header('Cross-Origin-Resource-Policy', 'cross-origin');
    }
  }));

app.get('/api', (req, res) => {
    res.send('API is running...');
});

app.use('/api', commentRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur démarré sur le port ${PORT}`);
});