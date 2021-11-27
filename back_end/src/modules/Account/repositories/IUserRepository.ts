import {User} from "@module/Account/entities/User";

interface IUserRepository {
    create(data: User): Promise<void>;
    find(): Promise<any>;
    findByEmail(email: string): Promise<any>;
}

export {IUserRepository};