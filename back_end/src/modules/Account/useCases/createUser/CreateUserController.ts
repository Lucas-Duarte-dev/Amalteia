import {Controller} from "@core/infra/Controller";
import {created, fail, HttpResponse} from "@core/infra/HttpResponse";
import {CreateUserUseCase} from "@module/Account/useCases/createUser/CreateUserUseCase";
import {container} from "tsyringe";

type CreateUserControllerRequest = {
    name: string,
    email: string,
    password: string
}

class CreateUserController implements Controller {
    async handle({name, email, password}: CreateUserControllerRequest): Promise<HttpResponse> {
        try {
            const createUserUseCase = container.resolve(CreateUserUseCase);

            await createUserUseCase.execute({name, email, password});

            return created();
        } catch (err) {
            return fail(err);
        }
    }

}

export {CreateUserController};