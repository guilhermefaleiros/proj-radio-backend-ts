import { Router, Request, Response } from 'express';
import UserService from '../services/UserService';

const usersRouter = Router();

const userService = new UserService();

usersRouter.post('/', async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const user = {
    name,
    email,
    password,
    admin: true,
  };

  const userCreated = await userService.create(user);

  if (userCreated.status) {
    const { status, error } = userCreated;
    return res.status(status).json(error);
  }

  return res.status(200).json(userCreated);
});

export default usersRouter;
