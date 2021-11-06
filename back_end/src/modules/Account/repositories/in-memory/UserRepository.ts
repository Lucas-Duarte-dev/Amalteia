import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {User} from "@module/Account/entities/User";

class UserRepository implements IUserRepository {

    constructor(public users: User[] = []) {}

    async create(data: User): Promise<void> {
        this.users.push(data);
    }
}

export {UserRepository}