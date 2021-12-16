import {Router} from "express";
import {adaptRoute} from "@core/infra/adapter/ExpressRouteAdapter";
import makeAuthenticateUserController from "@infra/http/factory/controller/makeAuthenticateUserController";
import makeCreateUserController from "@infra/http/factory/controller/makeCreateUserController";

const accountRoutes = Router();


accountRoutes.post('/', adaptRoute(makeCreateUserController()));

accountRoutes.post('/auth', adaptRoute(makeAuthenticateUserController()))

export {accountRoutes};