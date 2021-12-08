import {IUserRepository} from "@module/account/repositories/IUserRepository";
import {DomainException} from "@infra/http/error/DomainException";
import {compare} from 'bcrypt';
import {sign} from 'jsonwebtoken'
import {User} from "@module/account/entity/User";

interface IResponse {
    user: User,
    token: string
}

class AuthenticateUseCase {

    constructor(
       private userRepository: IUserRepository
    ) {}

    async execute(email: string, password: string): Promise<IResponse> {
        const user = await this.userRepository.findByEmail(email);

        if (!user) {
            throw new DomainException('Unauthorized', 401);
        }

        const passwordMath = await compare(password, user.password);

        if(!passwordMath) {
            throw new DomainException('Unauthorized', 401);
        }

        const token = sign({name: user.name, email}, `${process.env.SECRET}`, {
            subject: user.id,
            expiresIn: '1d'
        });

        return {user, token};
    }
}

export {AuthenticateUseCase};