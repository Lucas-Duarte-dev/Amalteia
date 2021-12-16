import {Router} from "express";
import {accountRoutes} from "@infra/http/routes/account.routes";
import {categoryRoutes} from "@infra/http/routes/category.routes";

const routes = Router();

routes.use('/account', accountRoutes);
routes.use('/category', categoryRoutes);

export {routes};