import { Response, NextFunction, Request } from 'express';
import SignInService from '@src/application/service/auth/SignInService';
import AbstractController from '@src/application/controller/AbstractController';

export default class SignInController implements AbstractController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction> {
    try {
      const data = request.body;
      const service = new SignInService();
      const result = await service.execute(data);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
