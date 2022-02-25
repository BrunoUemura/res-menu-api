import { Response, NextFunction, Request } from 'express';
import DeleteMenuService from '@src/application/service/menu/DeleteMenuService';
import AbstractController from '@src/application/controller/AbstractController';
import AuthValidation from '@src/validation/AuthValidation';

export default class DeleteMenuController implements AbstractController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction> {
    try {
      await AuthValidation.execute(request);

      const { id } = request.params;
      const service = new DeleteMenuService();
      const result = await service.execute(id);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
