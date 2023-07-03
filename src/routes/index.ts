import * as express from 'express';
import axios from 'axios';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://dummyjson.com/products/1');
    const status = 200;
    const description = 'Node.js App';
    res.status(status).json({ status, description, data: response.data });
  } catch (e) {
    console.error(e);
    res.status(500).json({ status: 500, description: 'something went wrong' });
  }
});

export default router;
