import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import prisma from "@infra/prisma";
import {IUserDTO} from "@module/Account/dto/IUserDTO";

class UserRepository implements IUserRepository {
    async create({name, email, password}: IUserDTO): Promise<void> {
        await prisma.user.create({data: {
                name,
                email,
                password,
            }
        });
    }

}

export {UserRepository};