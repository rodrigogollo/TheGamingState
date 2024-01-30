import { Request, Response } from 'express';
import * as RatingsService from '../models/ratings.service'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

export const getAllRatings = async (req: Request, res: Response) => {
  try {
    const ratings = await RatingsService.getAllRatings();
    res.json(ratings);
  } catch (e) {
    let message;
    if (e instanceof PrismaClientKnownRequestError) message = e.meta?.cause
    else String(e)
    res.send(message).status(500)
  }
}

export const getRatingsByUserId = async (req: Request, res: Response) => {  
  const { userId } = req.params;

  try {
    const ratings = await RatingsService.getRatingsByUserId(userId)
    res.json(ratings)
  } catch (e) {
    let message;
    if (e instanceof PrismaClientKnownRequestError) message = e.meta?.cause
    else String(e)
    res.send(message).status(500)
  } 
}

export const getRatingsByIGDBgameId = async (req: Request, res: Response) => {
  const { IGDBgameId } = req.params;

  try {
    const ratings = await RatingsService.getRatingsByIGDBgameId(IGDBgameId);
    res.json(ratings)
  } catch (e) {
    let message;
    if (e instanceof PrismaClientKnownRequestError) message = e.meta?.cause
    else String(e)
    res.send(message).status(500)
  }
}

export const create = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { title, IGDBgameId } = req.body;
  
  if (!title || !IGDBgameId) {
    res.sendStatus(400);
  }
  try {
    const ratings = await RatingsService.create(userId, title, IGDBgameId);
    res.json(ratings);
  } catch (e) {
    let message;
    if (e instanceof PrismaClientKnownRequestError) message = e.meta?.cause
    else String(e)
    res.send(message).status(500)
  }
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params; 
  try {
    const ratings = await RatingsService.update(id, req.body); 
    res.json(ratings);
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
    const ratings = await RatingsService.deleteUserRate(id); 
    res.json(ratings);
  } catch (e) {
    let message;
    if (e instanceof PrismaClientKnownRequestError) message = e.meta?.cause
    else String(e)
    res.send(message).status(500)
  }
}
