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

    it('Should not be able create a new user when email passed already exists', async () => {
         await userUseCase.execute(userData);

        expect( async () => {
            await userUseCase.execute(userData);
        }).toThrowError();
    })
})