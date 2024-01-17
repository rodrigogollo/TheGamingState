import { Request, Response } from 'express';
import * as GameService from '../models/game.service'


export const getGames = async (req: Request, res: Response) => {
  const games = await GameService.getGames();
  res.json(games);
}

export const getGameById = async (req: Request, res: Response) => {
 const { gameId } = req.params;

  const game = await GameService.getGameById(gameId);
  res.json(game);
}
