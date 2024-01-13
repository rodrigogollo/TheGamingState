import { Router } from 'express'
import { getUserProfile, create, update } from '../controllers/user-profile'

const router = Router();

router.get('/:userId', getUserProfile);
router.post('/:userId', create);
router.put('/:userId', update);

export default router;
