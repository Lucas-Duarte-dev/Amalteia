import {Router} from "express";
import {adaptRoute} from "@core/infra/adapter/ExpressRouteAdapter";
import {CreateUserController} from "@module/Account/useCases/createUser/CreateUserController";

const accountRoutes = Router();

const createUserController = new CreateUserController();

accountRoutes.post("/", adaptRoute(createUserController));


export {accountRoutes};