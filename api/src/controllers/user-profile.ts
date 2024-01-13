import { Request, Response } from 'express';
import * as UserProfileService from '../models/user-profile.service'

export const getUserProfile = async (req: Request, res: Response) => {  
  const { userId } = req.params;
  const profile = await UserProfileService.getUserProfile(userId)
  res.json(profile)
}

export const create = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { name, gender, age } = req.body;
  
  if (!name && !gender && !age) {
    res.sendStatus(400);
  }
  const profile = await UserProfileService.create(userId, name, gender, age);
  res.json(profile);
}

export const update = async (req: Request, res: Response) => {
  const { userId } = req.params; 
  const profile = await UserProfileService.update(userId, req.body); 
  res.json(profile);
}
