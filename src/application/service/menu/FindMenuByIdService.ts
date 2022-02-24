import Menu from '@src/application/model/Menu';
import AbstractService from '@src/application/service/AbstractService';
import menuRepository from '@src/application/repository/MenuRepository';

export default class FindMenuByIdService implements AbstractService {
  async execute(id: string): Promise<Menu> {
    return await menuRepository.findFirst({ where: { id } });
  }
}
