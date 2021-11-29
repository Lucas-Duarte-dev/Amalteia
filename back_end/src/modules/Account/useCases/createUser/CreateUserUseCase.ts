import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {hash} from "bcrypt";

type IRequest = {
    name: string,
    email: string,
    password: string
}

class CreateUserUseCase {
    constructor(
        private userRepository: IUserRepository
    ) {}

    async execute({name, email, password}: IRequest): Promise<void> {

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if (!!userAlreadyExists) {
            throw new Error('User already exists');
        }

        const passwordHash = await hash(password, 8);

        const user = {name, email, password: passwordHash};

        await this.userRepository.create(user);
    }
}

export  {CreateUserUseCase};