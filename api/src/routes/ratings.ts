import { Router } from 'express'
import { getAllRatings, getRatingsByUserId, getRatingsByIGDBgameId, create, update, deleteUserRating } from '../controllers/ratings'

const router = Router();

router.get('/', getAllRatings);
router.get('/:userId', getRatingsByUserId);
router.get('/game/:IGDBgameId', getRatingsByIGDBgameId);
router.post('/:userId', create);
router.put('/:id', update);
router.delete('/:id', deleteUserRating);

export default router;
