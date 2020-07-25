import { NextApiRequest, NextApiResponse } from 'next';

type Middleware = (
  req: NextApiRequest,
  res: NextApiResponse,
  results: any,
) => void;

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
const initMiddleware = (middleware: any): any => {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware((_req: any, _res: any, result: any) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
};

export default initMiddleware;
