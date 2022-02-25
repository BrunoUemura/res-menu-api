import { Response, NextFunction, Request } from 'express';
import UpdateMenuService from '@src/application/service/menu/UpdateMenuService';
import AbstractController from '@src/application/controller/AbstractController';
import AuthValidation from '@src/validation/AuthValidation';
import RequestValidation from '@src/validation/RequestValidation';

export default class UpdateMenuController implements AbstractController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction> {
    try {
      await AuthValidation.execute(request);
      await RequestValidation.validate(request);

      const data = request.body;
      const service = new UpdateMenuService();
      const result = await service.execute(data);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
