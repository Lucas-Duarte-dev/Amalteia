import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {hash} from "bcrypt";

type IRequest = {
    name: string,
    email: string,
    password: string
}

class CreateUserUseCase {
    constructor(private userRepository: IUserRepository) {
    }

    async execute({name, email, password}: IRequest): Promise<void> {

        const userAlreadyExists = this.userRepository.find()

        const passwordHash = await hash(password, 8);

        await this.userRepository.create({name, email, password: passwordHash});
    }
}

export  {CreateUserUseCase};