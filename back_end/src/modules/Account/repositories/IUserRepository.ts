import {ICreateUserDTO} from "@module/Account/dto/ICreateUserDTO";
import {User} from "@module/Account/entity/User";

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    find(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
}

export {IUserRepository};