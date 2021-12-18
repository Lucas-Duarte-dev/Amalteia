import {ICreateUserDTO} from "@module/account/dto/ICreateUserDTO";
import {User} from "@module/account/entity/User";

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
}

export {IUserRepository};