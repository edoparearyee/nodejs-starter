import * as express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  const status = 200;
  const description = 'Node.js App';
  res.status(status).json({ status, description });
});

export default router;
