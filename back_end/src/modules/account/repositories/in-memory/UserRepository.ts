import {IUserRepository} from "@module/account/repositories/IUserRepository";
import {ICreateUserDTO} from "@module/account/dto/ICreateUserDTO";
import {User} from "@module/account/entity/User";

class UserRepository implements IUserRepository {

    private readonly users: User[];
    private static instance: UserRepository;

    constructor() {
        this.users = [];
    }

    public static getInstance(): UserRepository {
        if (!UserRepository.instance) {
            UserRepository.instance = new UserRepository();
        }

        return UserRepository.instance;
    }

    async create({name, password, email}: ICreateUserDTO): Promise<void> {

        const user = new User();

        Object.assign(user, {
            name,
            password,
            email
        });

        this.users.push(user);
    }

    async find(): Promise<User[]> {
        return this.users;
    }

    async findByEmail(email: string): Promise<User> {
        return this.users.find(user => user.email === email);
    }

    async findById(id: string): Promise<User> {
        return this.users.find(user => user.id === id);
    }
}

export {UserRepository}