import Menu from '@src/application/model/Menu';
import AbstractService from '@src/application/service/AbstractService';
import menuRepository from '@src/application/repository/MenuRepository';

export default class FindMenuByCategoryService implements AbstractService {
  async execute(category: string): Promise<Menu> {
    const formattedCategory = category.replace('_', ' ');
    return await menuRepository.findFirst({
      where: { category: formattedCategory },
    });
  }
}
