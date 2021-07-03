import { Request, Response } from 'express';
import path from 'path';
import { Swatch } from './db/models';

export const rootHandler = (_req: Request, res: Response) => {
  return res.sendFile(path.join(__dirname, '../build', 'index.html'));
};

export const colorHandler = async (req: Request, res: Response) => {

  const response = await Swatch.findAll();

  return res.json(response);
};
