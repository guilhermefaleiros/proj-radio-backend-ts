import bcrypt from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import jwt from 'jsonwebtoken';

import UserRepository from '../repositories/UserRepository';

interface SessionDTO {
  email: string;
  password: string;
}

class SessionService {
  public async create(userData: SessionDTO): Promise<any> {
    const userRepository = getCustomRepository(UserRepository);
    const { email, password } = userData;

    const user = await userRepository.findOne({ email });

    if (!user) {
      return {
        status: 404,
        error: 'User not found',
      };
    }

    const isLogged = await bcrypt.compare(password, user.password_hash);

    if (!isLogged) {
      return {
        status: 401,
        error: 'Incorrect password',
      };
    }

    const { id, name } = user;

    const token = jwt.sign({ id }, 'levelaocontrarioelevel', {
      expiresIn: '7d',
    });

    return {
      user: {
        email,
        name,
      },
      token,
    };
  }
}

export default SessionService;
