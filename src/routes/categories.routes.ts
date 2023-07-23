import { Router } from "express";

import { ensureAuthenticated } from "../shared/infra/http/middlwares/ensureAuthenticated";

import { CreateCategoryController } from "../modules/categories/useCases/createCategory/CreateCategoryController";
import { GetAllCategoriesController } from "../modules/categories/useCases/getAllCategories/GetAllCategoriesController";
import { GetCategoryController } from "../modules/categories/useCases/getCategory/GetCategoryController";
import { UpdateCategoryController } from "../modules/categories/useCases/updateCategory/UpdateCategoryController";
import { DeleteCategoryController } from "../modules/categories/useCases/deleteCategory/DeleteCategoryController";

const categoriesRouter = Router();
const createCategoryController = new CreateCategoryController;
const getAllCategoriesController = new GetAllCategoriesController;
const getCategoryController = new GetCategoryController;
const updateCategoryController = new UpdateCategoryController;
const deleteCategoryController = new DeleteCategoryController;

categoriesRouter.use(ensureAuthenticated);

categoriesRouter.post('/', createCategoryController.execute);
categoriesRouter.get('/', getAllCategoriesController.execute);
categoriesRouter.get('/:id', getCategoryController.execute);
categoriesRouter.put('/:id', updateCategoryController.execute);
categoriesRouter.delete('/:id', deleteCategoryController.execute);

export { categoriesRouter };
