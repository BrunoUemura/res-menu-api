import { NextFunction, Request, Response } from 'express';

export default interface AbstractController {
  handle(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<Response | NextFunction>;
}
