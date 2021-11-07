import {UserRepository} from "@module/Account/infra/prisma/repositories/UserRepository";
import {CreateUserUseCase} from "@module/Account/useCases/createUser/CreateUserUseCase";
import {CreateUserController} from "@module/Account/useCases/createUser/CreateUserController";

export function makeCreateUserController() {
    const userRepository = new UserRepository();

    const createUserUseCase = new CreateUserUseCase(userRepository);
    const createUserController = new CreateUserController(createUserUseCase);

    return createUserController;
}