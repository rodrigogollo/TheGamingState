import { Router } from 'express'
import { getUserRates, create, update, deleteUserRate } from '../controllers/userRates'

const router = Router();

router.get('/:userId', getUserRates);
router.post('/:userId', create);
router.put('/:id', update);
router.delete('/:id', deleteUserRate);

export default router;
