import {IUserRepository} from "@module/account/repositories/IUserRepository";
import {getRepository, Repository} from "typeorm";
import {User} from "@module/account/entity/User";
import {ICreateUserDTO} from "@module/account/dto/ICreateUserDTO";

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

    async findById(id: string): Promise<User> {
        return await this.repository.findOne({
            where: {
                id
            }
        });
    }
}

export {UserRepository};