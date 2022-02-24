import { NextFunction, Request, Response, Router } from 'express';

import menu from '@src/application/routes/menu.routes';
// import order from '@src/application/routes/order.routes';
import NotFoundError from '@src/util/error/NotFoundError';

const routes = Router();

routes.use('/api/v1', menu);

routes.use((req: Request, _res: Response, next: NextFunction) => {
  if (!req.route) {
    return next(new NotFoundError('Route not found'));
  }
  next();
});

export default routes;
