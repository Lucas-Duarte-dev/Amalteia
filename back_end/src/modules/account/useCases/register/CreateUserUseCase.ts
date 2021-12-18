import {IUserRepository} from "@module/account/repositories/IUserRepository";
import {hash} from "bcrypt";
import {inject, injectable} from "tsyringe";
import {DomainException} from "@infra/http/error/DomainException";

type IRequest = {
    name: string,
    email: string,
    password: string,
    password_confirmed: string
}

class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute({name, email, password, password_confirmed}: IRequest): Promise<void | DomainException > {

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new DomainException('User already exists');
        }

        if(password !== password_confirmed) {
            throw new DomainException('Password not match', 403);
        }

        const passwordHash = await hash(password, 8);

        const user = {name, email, password: passwordHash, password_confirmed: passwordHash};

        await this.userRepository.create(user);
    }
}

export  {CreateUserUseCase};