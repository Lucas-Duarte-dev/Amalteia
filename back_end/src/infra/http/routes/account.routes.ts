import {Router} from "express";
import {adaptRoute} from "@core/infra/adapter/ExpressRouteAdapter";
import {makeCreateUserController} from "@infra/http/factories/controllers/CreateUserControllerFactory";

const accountRoutes = Router();

accountRoutes.post("/", adaptRoute(makeCreateUserController()));


export {accountRoutes};