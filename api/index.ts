import express from "express";
import cors from "cors";

const app = express();

const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.end('pong!');
})

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})
