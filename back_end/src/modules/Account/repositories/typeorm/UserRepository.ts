import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {getRepository, Repository} from "typeorm";
import {User} from "@module/Account/entity/User";
import {ICreateUserDTO} from "@module/Account/dto/ICreateUserDTO";

class UserRepository implements IUserRepository {
    
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }
    
    async create({name, email, password}: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({name, email, password});

        await this.repository.save(user);
    }

    async find(): Promise<User[]> {
        return await this.repository.find();
    }

    async findByEmail(email: string): Promise<User> {
        return await this.repository.findOne({where: {
                email
            }});
    }
}

export {UserRepository};