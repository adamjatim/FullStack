import express from "express";
import { 
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser
} from "../controllers/UserController.js"

const router = express.Router();

router.get('/Users', getUsers);
router.get('/Users/:id', getUsersById);
router.post('/Users', createUser);
router.patch('/Users/:id', updateUser);
router.delete('/Users/:id', deleteUser);

export default router;