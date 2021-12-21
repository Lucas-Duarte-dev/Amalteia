import {Router} from "express";
import {adaptRoute} from "@core/infra/adapter/ExpressRouteAdapter";
import makeCreateCategoryController from "@infra/http/factory/controller/makeCreateCategoryController";
import makeUpdateCategoryController from "@infra/http/factory/controller/makeUpdateCategoryController";

const categoryRoutes = Router();

categoryRoutes.post('/', adaptRoute(makeCreateCategoryController()));
categoryRoutes.put('/', adaptRoute(makeUpdateCategoryController()));

export {categoryRoutes};