import {Router} from "express";
import {adaptRoute} from "@core/infra/adapter/ExpressRouteAdapter";
import createUserController from "@infra/http/factory/controller/makeCreateUserController";

const accountRoutes = Router();


accountRoutes.post("/", adaptRoute(createUserController()));

export {accountRoutes};