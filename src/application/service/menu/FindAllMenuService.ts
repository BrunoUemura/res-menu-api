import Menu from '@src/application/model/Menu';
import AbstractService from '@src/application/service/AbstractService';
import menuRepository from '@src/application/repository/MenuRepository';

export default class FindAllMenuService implements AbstractService {
  async execute(): Promise<Menu[]> {
    return await menuRepository.findMany();
  }
}
