import {UserRepository} from "@module/Account/repositories/in-memory/UserRepository";
import {CreateUserUseCase} from "@module/Account/useCases/createUser/CreateUserUseCase";
import {CreateUserController} from "@module/Account/useCases/createUser/CreateUserController";

export default function makeCreateUserController() {
    const userRepository = new UserRepository();

    const createUserUseCase = new CreateUserUseCase(userRepository);

    return new CreateUserController(createUserUseCase);
}