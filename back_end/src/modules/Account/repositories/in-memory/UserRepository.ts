import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {IUserDTO} from "@module/Account/dto/IUserDTO";

class UserRepository implements IUserRepository {

    private users = [];



    async create(data: IUserDTO): Promise<void> {
        this.users.push(data);
    }
}

export {UserRepository}