import {Controller} from "@core/infra/Controller";
import {forbidden, HttpResponse, ok} from "@core/infra/HttpResponse";
import {UpdateCategoryUseCase} from "@module/categories/useCases/update/UpdateCategoryUseCase";
import exp from "constants";

interface IUpdateCategoryControllerRequest {
    old_name: string;
    new_name: string
}

class UpdateCategoryController implements Controller {

    constructor(private updateCategory: UpdateCategoryUseCase) {}

    async handle({old_name, new_name}: IUpdateCategoryControllerRequest): Promise<HttpResponse> {
        try {
            const category = await this.updateCategory.execute(old_name, new_name);

            return ok(category);
        } catch (err) {
            return forbidden(err);
        }
    }
}

export {UpdateCategoryController};