import { Router } from 'express';
import FindAllMenuController from '../controller/menu/FindAllMenuController';
import FindMenuByIdController from '../controller/menu/FindMenuByIdController';
import FindMenuByCategoryController from '../controller/menu/FindMenuByCategoryController';

const menu = Router();

const findAllMenuController = new FindAllMenuController();
const findMenuByIdController = new FindMenuByIdController();
const findMenuByCategoryController = new FindMenuByCategoryController();

menu.get('/menu', findAllMenuController.handle);
menu.get('/menu/id/:id', findMenuByIdController.handle);
menu.get('/menu/category/:category', findMenuByCategoryController.handle);

export default menu;
