import { Request, Response } from 'express';
import * as UserService from '../models/user.service'

export const getUsers = async (req: Request, res: Response) => {  
  const users = await UserService.all()
  res.json(users)
}

export const create = async (req: Request, res: Response) => {
  const { first_name, last_name, email } = req.body;
  
  if (!first_name && !last_name && !email) {
    res.sendStatus(400);
  }
  const user = await UserService.create(first_name, last_name, email);
  res.json(user);
}

export const update = async (req: Request, res: Response) => {
  const { id } = req.params; 
  const user = await UserService.update(id, req.body); 
  res.json(user);
}

export const deleteUser = async (req: Request, res: Response) => {
  const { id } = req.params; 
  const user = await UserService.deleteUser(id); 
  res.json(user);
}