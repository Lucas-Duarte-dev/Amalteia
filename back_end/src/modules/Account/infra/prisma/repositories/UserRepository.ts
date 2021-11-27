import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import prisma from "@infra/prisma";
import {IUserDTO} from "@module/Account/dto/IUserDTO";
import {User} from "@module/Account/entities/User";

class UserRepository implements IUserRepository {
    async create(data: User): Promise<void> {
        await prisma.user.create({data});
    }

    async find(): Promise<any> {
        await prisma.user.findMany();
    }

    async findByEmail(email: string): Promise<any> {
        await prisma.user.findFirst({where: {
            email
        }});
    }

}

export {UserRepository};