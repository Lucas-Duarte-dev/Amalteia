import {Controller} from "@core/infra/Controller";
import {created,forbidden, HttpResponse} from "@core/infra/HttpResponse";
import {CreateUserUseCase} from "@module/account/useCases/register/CreateUserUseCase";

type CreateUserControllerRequest = {
    name: string,
    email: string,
    password: string
}

class CreateUserController implements Controller {

    constructor(
       private createUserUseCase: CreateUserUseCase
    ) {}

    async handle({name, email, password}: CreateUserControllerRequest): Promise<HttpResponse> {
        try {
            await this.createUserUseCase.execute({name, email, password});

            return created();
        } catch (err) {
            return forbidden(err);
        }
    }

}

export {CreateUserController};