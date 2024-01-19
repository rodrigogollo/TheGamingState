import { Router } from 'express';
import { getGames, getGameById } from '../controllers/game';
const router = Router();

router.get('/', getGames);
router.get('/:gameId', getGameById);

export default router;
