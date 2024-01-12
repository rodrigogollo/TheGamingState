import { Request, Response } from 'express';
import * as UserRatesService from '../models/userRates.service'

export const getUserRates = async (req: Request, res: Response) => {  
  const { userId } = req.params;
  const rates = await UserRatesService.getUserRates(userId)
  res.json(rates)
}

export const create = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { title, IGDBgameId } = req.body;
  
  if (!title && !IGDBgameId) {
    res.sendStatus(400);
  }
  const rate = await UserRatesService.create(userId, title, IGDBgameId);
  res.json(rate);
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params; 
  const rate = await UserRatesService.update(id, req.body); 
  res.json(rate);
}

export const deleteUserRate = async (req: Request, res: Response) => {
  const { id } = req.params; 
  const rate = await UserRatesService.deleteUserRate(id); 
  res.json(rate);
}
