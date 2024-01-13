import { Router } from 'express'
import { getUserRatings, create, update, deleteUserRating } from '../controllers/user-ratings'

const router = Router();

router.get('/:userId', getUserRatings);
router.post('/:userId', create);
router.put('/:id', update);
router.delete('/:id', deleteUserRating);

export default router;
