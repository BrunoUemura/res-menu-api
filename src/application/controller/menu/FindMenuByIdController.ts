import { Response, NextFunction, Request } from 'express';
import FindMenuByIdService from '@src/application/service/menu/FindMenuByIdService';
import AbstractController from '@src/application/controller/AbstractController';

export default class FindMenuByIdController implements AbstractController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction> {
    try {
      const { id } = request.params;
      const service = new FindMenuByIdService();
      const result = await service.execute(id);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
