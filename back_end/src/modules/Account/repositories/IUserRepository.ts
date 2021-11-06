import {User} from "@module/Account/entities/User";

interface IUserRepository {
    create(data: User): Promise<void>
}

export {IUserRepository};