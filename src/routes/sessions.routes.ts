import { Router, Request, Response } from 'express';
import SessionService from '../services/SessionService';

const sessionRouter = Router();

const sessionService = new SessionService();

sessionRouter.post('/', async (req: Request, res: Response) => {
  const { email, password } = req.body;

  const session = await sessionService.create({ email, password });

  if (session.status) {
    return res.status(session.status).json({ error: session.error });
  }

  return res.status(200).json(session);
});

export default sessionRouter;
