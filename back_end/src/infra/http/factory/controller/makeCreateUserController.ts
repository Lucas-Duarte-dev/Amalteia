import {UserRepository} from "@module/account/repositories/in-memory/UserRepository";
import {CreateUserUseCase} from "@module/account/useCases/register/CreateUserUseCase";
import {CreateUserController} from "@module/account/useCases/register/CreateUserController";

export default function makeCreateUserController() {
    const userRepository = new UserRepository();

    const createUserUseCase = new CreateUserUseCase(userRepository);

    return new CreateUserController(createUserUseCase);
}