import { Request, Response } from 'express';
import { dbConfig, Swatch } from './models';

interface HelloResponse {
  hello: string;
}

export const rootHandler = (_req: Request, res: Response) => {
  return res.send('API is working 🤓');
};

export const colorHandler = async (req: Request, res: Response) => {

  const response = await Swatch.findAll();

  return res.json(response);
};
