import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse): void => {
  return res.send(req.query.word);
};

export default handler;
