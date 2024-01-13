import { Request, Response } from 'express';
import * as UserRatesService from '../models/user-ratings.service'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const getUserRatings = async (req: Request, res: Response) => {  
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
  try {
    const rate = await UserRatesService.update(id, req.body); 
    res.json(rate);
  } catch (e) {
    //TODO: CustomError response body { message: a, code: 1234, status: 500 }
    let message;
    if (e instanceof PrismaClientKnownRequestError) message = e.meta?.cause
    else String(e)
    res.send(message).status(500)
  }
}

export const deleteUserRating = async (req: Request, res: Response) => {
  const { id } = req.params; 
  try {
    const rate = await UserRatesService.deleteUserRate(id); 
    res.json(rate);
  } catch (e) {
    let message;
    if (e instanceof PrismaClientKnownRequestError) message = e.meta?.cause
    else String(e)
    res.send(message).status(500)
  }
}
