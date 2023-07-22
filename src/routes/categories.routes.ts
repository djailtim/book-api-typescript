import { Router } from "express";

import { CreateCategoryController } from "../modules/categories/useCases/createCategory/CreateCategoryController";
import { GetAllCategoriesController } from "../modules/categories/useCases/getAllCategories/GetAllCategoriesController";
import { GetCategoryController } from "../modules/categories/useCases/getCategory/GetCategoryController";

const categoriesRouter = Router();
const createCategoryController = new CreateCategoryController;
const getAllCategoriesController = new GetAllCategoriesController;
const getCategoryController = new GetCategoryController;

categoriesRouter.post('/', createCategoryController.execute);
categoriesRouter.get('/', getAllCategoriesController.execute);
categoriesRouter.get('/:id', getCategoryController.execute);

export { categoriesRouter };