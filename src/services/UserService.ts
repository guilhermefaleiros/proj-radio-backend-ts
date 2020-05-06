import bcrypt from 'bcryptjs';
import { getCustomRepository } from 'typeorm';

import UserRepository from '../repositories/UserRepository';

interface UserDTO {
  name: string;
  email: string;
  password: string;
  admin: boolean;
}

class UserService {
  public async create(userData: UserDTO): Promise<any> {
    const userRepository = getCustomRepository(UserRepository);
    const { name, email, password, admin } = userData;

    const userExists = userRepository.findOne({ email });

    if (userExists) {
      return {
        status: 401,
        error: 'User already exists',
      };
    }

    const passwordHash = await bcrypt.hash(password, 8);

    const user = {
      name,
      email,
      admin,
      password_hash: passwordHash,
    };

    const userCreated = await userRepository.create(user);
    await userRepository.save(userCreated);

    return userCreated;
  }
}

export default UserService;
