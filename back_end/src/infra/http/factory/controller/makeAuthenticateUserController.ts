import {UserRepository} from "@module/account/repositories/in-memory/UserRepository";
import {AuthenticateUseCase} from "@module/account/useCases/authenticate/AuthenticateUseCase";
import {AuthenticateController} from "@module/account/useCases/authenticate/AuthenticateController";


export default function makeAuthenticateUserController() {
    const userRepository = UserRepository.getInstance();

    const authenticateUserUseCase = new AuthenticateUseCase(userRepository);

    return new AuthenticateController(authenticateUserUseCase);
}