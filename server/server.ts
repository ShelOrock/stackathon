import express, { Application } from 'express';
import path from 'path';

const app: Application = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../public')));

app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

export default app;
