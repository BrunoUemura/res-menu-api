import { Request } from 'express';
import BadRequestError from '@src/util/error/BadRequestError';
import Menu from '@src/application/model/Menu';

export default class RequestValidation {
  static async validate(request: Request) {
    const body = request.body;

    try {
      if (request.method === 'POST' || request.method === 'PUT') {
        await this.validateMenuBody(body);
      }
    } catch (error) {
      throw error;
    }
  }

  static async validateMenuBody(body: Menu) {
    const isEmpty = Object.keys(body).length === 0;

    if (isEmpty) {
      throw new BadRequestError('Missing request body content');
    }
    if (!body.title) {
      throw new BadRequestError('Missing title in request body');
    }
    if (!body.image) {
      throw new BadRequestError('Missing image in request body');
    }
    if (!body.price) {
      throw new BadRequestError('Missing price in request body');
    }
    if (!body.category) {
      throw new BadRequestError('Missing category in request body');
    }
  }
}
