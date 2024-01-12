import { Router } from 'express'
import { getUsers, create, update, deleteUser } from '../controllers/user'

const router = Router();

router.get('/', getUsers);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteUser);

export default router;
