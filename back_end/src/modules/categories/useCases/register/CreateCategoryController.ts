import {Controller} from "@core/infra/Controller";
import {forbidden, HttpResponse, ok} from "@core/infra/HttpResponse";
import {CreateCategoryUseCase} from "@module/categories/useCases/register/CreateCategoryUseCase";


interface ICreateCategoryControllerRequest {
    name: string;
    description: string;
}

class CreateCategoryController implements Controller {
    constructor(
        private createCategoryUseCase: CreateCategoryUseCase
    ) {}

    async handle({name, description}: ICreateCategoryControllerRequest): Promise<HttpResponse> {
        try {
            await this.createCategoryUseCase.execute({name, description});

            return ok();
        } catch (err) {
            return forbidden(err);
        }

    }
}

export {CreateCategoryController}