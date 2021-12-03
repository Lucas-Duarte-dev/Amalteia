import "reflect-metadata";
import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {CreateUserUseCase} from "@module/Account/useCases/createUser/CreateUserUseCase";
import {UserRepository} from "@module/Account/repositories/in-memory/UserRepository";

interface UserData {
    name: string,
    email: string,
    password: string
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
       password: '12345'
   }
});


describe('Create User', () => {

    it('Should be able create a new user', async () => {
        const expected = "test@example.test";
        await userUseCase.execute(userData);

        const user = await userRepository.findByEmail(expected);

        expect(user.email).toEqual(expected);
    });

    it('Should be not able create a new user with same email',  () => {
        const expected =  {"message": "User already exists", "statusCode": 400};

        expect( async () => {
            await userUseCase.execute(userData);
            await userUseCase.execute(userData);
        }).rejects.toEqual(expected);
    });
})