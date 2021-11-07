import {Controller} from "@core/infra/Controller";
import {created, fail, HttpResponse} from "@core/infra/HttpResponse";
import {CreateUserUseCase} from "@module/Account/useCases/createUser/CreateUserUseCase";

type CreateUserControllerRequest = {
    name: string,
    email: string,
    password: string
}

class CreateUserController implements Controller {

    constructor(
       private createUserUseCase: CreateUserUseCase
    ) {}

    async handle(request: CreateUserControllerRequest): Promise<HttpResponse> {

        const {name, email, password} = request;

        try {
            await this.createUserUseCase.execute({name, email, password});

            return created();
        } catch (err) {
            return fail(err);
        }
    }

}

export {CreateUserController};