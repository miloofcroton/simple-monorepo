import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';
import initMiddleware from '../../../middleware/init';

const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ['GET', 'POST', 'OPTIONS'],
  }),
);

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> => {
  await cors(req, res);

  return res.send(`From server: ${req.query.word}`);
};

export default handler;
