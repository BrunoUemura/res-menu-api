import AbstractService from '@src/application/service/AbstractService';
import menuRepository from '@src/application/repository/MenuRepository';
import Menu from '@src/application/model/Menu';
import RequestResponse from '@src/application/model/RequestResponse';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';

export default class CreateMenuService implements AbstractService {
  async execute(newData: Menu): Promise<RequestResponse> {
    await menuRepository.create({ data: newData });
    return {
      status: HttpStatusCodes.CREATED,
      message: 'Menu created successfully',
    };
  }
}
