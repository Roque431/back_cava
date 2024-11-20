import express from 'express';
import { getUsua, createUser,  loginUser, deleteUser,updateUser} from '../controllers/user.controller';

const router = express.Router();

router.get('/user',getUsua);
router.post('/user',createUser);
router.post('/userlogin',loginUser)
router.delete('/user/:id',deleteUser);
router.put('/user/:id',updateUser)

export default router;