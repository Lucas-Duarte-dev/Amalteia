import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {User} from "@module/Account/entities/User";
import {prisma} from "@infra/prisma";

class UserRepository implements IUserRepository {
    async create({name, email, password}: User): Promise<void> {
        await prisma.user.create({name, email, password});
    }

}

export {UserRepository};