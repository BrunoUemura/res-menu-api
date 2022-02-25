import { Router } from 'express';
import FindAllMenuController from '@src/application/controller/menu/FindAllMenuController';
import FindMenuByIdController from '@src/application/controller/menu/FindMenuByIdController';
import FindMenuByCategoryController from '@src/application/controller/menu/FindMenuByCategoryController';
import CreateMenuController from '@src/application/controller/menu/CreateMenuController';
import UpdateMenuController from '@src/application/controller/menu/UpdateMenuController';
import DeleteMenuController from '@src/application/controller/menu/DeleteMenuController';

const menu = Router();

menu.get('/menu', new FindAllMenuController().handle);
menu.get('/menu/id/:id', new FindMenuByIdController().handle);
menu.get('/menu/category/:category', new FindMenuByCategoryController().handle);
menu.post('/menu', new CreateMenuController().handle);
menu.put('/menu', new UpdateMenuController().handle);
menu.delete('/menu/:id', new DeleteMenuController().handle);

export default menu;
