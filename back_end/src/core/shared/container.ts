import {container} from "tsyringe";
import {IUserRepository} from "@module/account/repositories/IUserRepository";
import {UserRepository} from "@module/account/repositories/typeorm/UserRepository";

container.registerSingleton<IUserRepository>(
    "UserRepository",
    UserRepository
);
