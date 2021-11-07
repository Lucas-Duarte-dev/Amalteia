import {Router} from "express";
import {accountRoutes} from "@infra/http/routes/account.routes";

const routes = Router();

routes.use("/account", accountRoutes);

export {routes};