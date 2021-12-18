import {Controller} from "@core/infra/Controller";
import {created,forbidden, HttpResponse} from "@core/infra/HttpResponse";
import {CreateUserUseCase} from "@module/account/useCases/register/CreateUserUseCase";

type CreateUserControllerRequest = {
    name: string,
    email: string,
    password: string,
    password_confirmed: string
}

class CreateUserController implements Controller {

    constructor(
       private createUserUseCase: CreateUserUseCase
    ) {}

    async handle({name, email, password, password_confirmed}: CreateUserControllerRequest): Promise<HttpResponse> {
        try {
            await this.createUserUseCase.execute({name, email, password, password_confirmed});

            return created();
        } catch (err) {
            return forbidden(err);
        }
    }

}

export {CreateUserController};