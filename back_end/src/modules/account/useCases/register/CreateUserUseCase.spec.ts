import "reflect-metadata";
import {IUserRepository} from "@module/account/repositories/IUserRepository";
import {CreateUserUseCase} from "@module/account/useCases/register/CreateUserUseCase";
import {UserRepository} from "@module/account/repositories/in-memory/UserRepository";
import {compare} from "bcrypt";
import exp from "constants";

interface UserData {
    name: string,
    email: string,
    password: string,
    password_confirmed: string
}

let userRepository: IUserRepository;
let userUseCase: CreateUserUseCase;
let userData: UserData;

beforeEach(() => {
   userRepository = new UserRepository();
   userUseCase = new CreateUserUseCase(userRepository);

    userData = {
       name: 'Lucas',
       email: 'test@example.test',
       password: '12345',
       password_confirmed: '12345'
   }
});


describe('Create User', () => {

    it('Should be able create a new user', async () => {
        const expected = "test@example.test";
        await userUseCase.execute(userData);

        const user = await userRepository.findByEmail(expected);

        expect(user.email).toEqual(expected);
    });

    it('Should create a hash for password user', async () => {
        const expected = true;

        await userUseCase.execute(userData);

        const user = await userRepository.findByEmail("test@example.test");

        const result = await compare('12345', user.password);

        expect(result).toEqual(expected);
    });

    it('Should not be able create a new user when password dont match', () => {
        const expected =  {"message": "Password not match", "statusCode": 403};

        expect(async () => {
            await userUseCase.execute({
                name: 'Test',
                email: 'test@example.test',
                password: '12345',
                password_confirmed: '1234'
            });
        }).rejects.toEqual(expected);
    });

    it('Should be not able create a new user with same email',  () => {
        const expected =  {"message": "User already exists", "statusCode": 400};

        expect( async () => {
            await userUseCase.execute(userData);
            await userUseCase.execute(userData);
        }).rejects.toEqual(expected);
    });
})