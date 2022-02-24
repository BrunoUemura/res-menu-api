import { Response, NextFunction, Request } from 'express';
import FindAllMenuService from '@src/application/service/menu/FindAllMenuService';
import AbstractController from '@src/application/controller/AbstractController';

export default class FindAllMenuController implements AbstractController {
  async handle(
    _request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction> {
    try {
      const service = new FindAllMenuService();
      const result = await service.execute();
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
