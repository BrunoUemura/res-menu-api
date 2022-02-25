import { Request } from 'express';
import jwt from 'jsonwebtoken';
import UnauthorizedError from '@src/util/error/UnauthorizedError';

export default class AuthValidation {
  static async execute(req: Request) {
    try {
      await this.validateToken(req);
    } catch (error) {
      throw error;
    }
  }

  private static async validateToken(req: Request) {
    try {
      const { authorization } = req.headers;

      if (!authorization) {
        throw new UnauthorizedError('Missing JWT token');
      }

      const token = authorization.replace('Bearer', '').trim();
      if (!token) {
        throw new UnauthorizedError('Missing JWT token');
      }

      jwt.verify(token, String(process.env.JWT_SECRET));

      const result = jwt.decode(token);

      return;
    } catch (error) {
      throw error;
    }
  }

  public static async retrieveToken(req: Request) {
    const { authorization } = req.headers;
    const token = authorization.replace('Bearer', '').trim();
    return jwt.decode(token);
  }
}
