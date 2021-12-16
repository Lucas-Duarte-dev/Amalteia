import {Router} from "express";
import {adaptRoute} from "@core/infra/adapter/ExpressRouteAdapter";
import makeCreateCategoryController from "@infra/http/factory/controller/makeCreateCategoryController";

const categoryRoutes = Router();

categoryRoutes.post('/', adaptRoute(makeCreateCategoryController()));

export {categoryRoutes};