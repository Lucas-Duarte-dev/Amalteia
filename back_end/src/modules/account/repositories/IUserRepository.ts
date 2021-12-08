import {ICreateUserDTO} from "@module/account/dto/ICreateUserDTO";
import {User} from "@module/account/entity/User";

interface IUserRepository {
    create(data: ICreateUserDTO): Promise<void>;
    find(): Promise<User[]>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>
}

export {IUserRepository};