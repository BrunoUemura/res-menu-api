import { Response, NextFunction, Request } from 'express';
import FindMenuByCategoryService from '@src/application/service/menu/FindMenuByCategoryService';
import AbstractController from '@src/application/controller/AbstractController';

export default class FindMenuByCategoryController
  implements AbstractController
{
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction> {
    try {
      const { category } = request.params;
      const service = new FindMenuByCategoryService();
      const result = await service.execute(category);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
