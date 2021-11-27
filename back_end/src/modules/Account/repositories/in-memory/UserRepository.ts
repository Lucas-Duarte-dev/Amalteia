import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {IUserDTO} from "@module/Account/dto/IUserDTO";
import {User} from "@module/Account/entities/User";

class UserRepository implements IUserRepository {

    private users: User[] = [];

    async create(data: User): Promise<void> {
        this.users.push(data);
    }

    async find(): Promise<any> {
        return this.users;
    }

    async findByEmail(email: string): Promise<any> {
        return this.users.filter(user => user.email === email);
    }
}

export {UserRepository}