import {container} from "tsyringe";
import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {UserRepository} from "@module/Account/repositories/typeorm/UserRepository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);