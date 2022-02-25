import { Response, NextFunction, Request } from 'express';
import CreateMenuService from '@src/application/service/menu/CreateMenuService';
import AbstractController from '@src/application/controller/AbstractController';
import AuthValidation from '@src/validation/AuthValidation';
import RequestValidation from '@src/validation/RequestValidation';

export default class CreateMenuController implements AbstractController {
  async handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction> {
    try {
      await AuthValidation.execute(request);
      await RequestValidation.validate(request);

      const data = request.body;
      const service = new CreateMenuService();
      const result = await service.execute(data);
      return response.json(result);
    } catch (err) {
      next(err);
    }
  }
}
