import AbstractService from '@src/application/service/AbstractService';
import menuRepository from '@src/application/repository/MenuRepository';
import Menu from '@src/application/model/Menu';
import RequestResponse from '@src/application/model/RequestResponse';
import { HttpStatusCodes } from '@src/util/enum/HttpStatusCodes';
import NotFoundError from '@src/util/error/NotFoundError';

export default class UpdateMenuService implements AbstractService {
  async execute(newData: Menu): Promise<RequestResponse> {
    const menu = await menuRepository.findFirst({
      where: {
        id: newData.id,
      },
    });

    if (!menu) throw new NotFoundError(`Menu ${newData.id} not found`);

    await menuRepository.update({
      where: { id: newData.id },
      data: newData,
    });

    return {
      status: HttpStatusCodes.OK,
      message: `Menu ${newData.id} updated successfully`,
    };
  }
}
