import { Router } from 'express'
import { getUsers, create, update, deleteUser } from '../controllers/users'

const router = Router();
router.get('/', getUsers);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteUser);

export default router;