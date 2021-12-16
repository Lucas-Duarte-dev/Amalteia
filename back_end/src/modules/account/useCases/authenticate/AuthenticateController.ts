import {Controller} from "@core/infra/Controller";
import {AuthenticateUseCase} from "@module/account/useCases/authenticate/AuthenticateUseCase";
import {HttpResponse, ok, unauthorized} from "@core/infra/HttpResponse";

interface IAuthenticateUseControllerRequest {
    email: string;
    password: string;
}

class AuthenticateController implements Controller {

    constructor(
       private authenticateUseCase: AuthenticateUseCase
    ) {}

    async handle({email, password}: IAuthenticateUseControllerRequest): Promise<HttpResponse> {
        try {
          const userAuthenticate = await this.authenticateUseCase.execute(email, password);

          return ok(userAuthenticate);
        } catch (err) {
          return unauthorized(err);
        }
    }
}

export {AuthenticateController}