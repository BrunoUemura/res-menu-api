import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import AbstractService from '@src/application/service/AbstractService';
import userRepository from '@src/application/repository/UserRepository';
import User from '@src/application/model/User';
import RequestResponse from '@src/application/model/RequestResponse';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';
import UnauthorizedError from '@src/util/error/UnauthorizedError';

export default class SignInService implements AbstractService {
  async execute(data: User): Promise<RequestResponse> {
    const user = await userRepository.findFirst({
      where: { username: data.username },
    });
    if (!user) throw new NotFoundError('User not registered');

    const match = await bcrypt.compare(data.password, user.password);
    if (!match) throw new UnauthorizedError('Incorrect credentials');

    const payload = { id: user.id };
    const expiration = { expiresIn: '1h' };
    const token = jwt.sign(payload, String(process.env.JWT_SECRET), expiration);

    return {
      status: HttpStatusCodes.OK,
      message: 'Successfully authenticated',
      token,
    };
  }
}
