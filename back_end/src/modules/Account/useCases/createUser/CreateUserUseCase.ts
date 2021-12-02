import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {hash} from "bcrypt";
import {inject, injectable} from "tsyringe";
import {DomainException} from "@infra/http/error/DomainException";

type IRequest = {
    name: string,
    email: string,
    password: string
}

@injectable()
class CreateUserUseCase {
    constructor(
        @inject('UserRepository')
        private userRepository: IUserRepository
    ) {}

    async execute({name, email, password}: IRequest): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new DomainException('User already exists');
        }

        const passwordHash = await hash(password, 8);

        const user = {name, email, password: passwordHash};

        await this.userRepository.create(user);
    }
}

export  {CreateUserUseCase};