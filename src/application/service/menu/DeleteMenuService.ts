import AbstractService from '@src/application/service/AbstractService';
import menuRepository from '@src/application/repository/MenuRepository';
import NotFoundError from '@src/util/error/NotFoundError';
import RequestResponse from '@src/application/model/RequestResponse';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';

export default class DeleteMenuService implements AbstractService {
  async execute(id: string): Promise<RequestResponse> {
    const menu = await menuRepository.findFirst({ where: { id } });

    if (!menu) throw new NotFoundError(`Menu ${id} not found`);

    await menuRepository.delete({ where: { id } });

    return {
      status: HttpStatusCodes.OK,
      message: `Menu ${id} deleted successfully`,
    };
  }
}
