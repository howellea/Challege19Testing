import express from 'express';
import path from 'node:path';
import db from './config/connection.js';
import routes from './routes/index.js';

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist')));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist/index.html'));
  });
}

// ✅ Wrap async init in a function
const startServer = async () => {
  try {
    await db();
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
  }
};

startServer();
