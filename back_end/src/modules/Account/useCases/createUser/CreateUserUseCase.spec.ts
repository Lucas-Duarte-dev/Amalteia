import {IUserRepository} from "@module/Account/repositories/IUserRepository";
import {CreateUserUseCase} from "@module/Account/useCases/createUser/CreateUserUseCase";
import {UserRepository} from "@module/Account/repositories/in-memory/UserRepository";
import {compare} from "bcrypt";

let userRepository: IUserRepository;
let userUseCase: CreateUserUseCase;

beforeEach(() => {
   userRepository = new UserRepository();
   userUseCase = new CreateUserUseCase(userRepository);
});


describe('Create User', () => {
    it('Should be able to create a new user', () => {

        expect(async () => {
            await userUseCase.execute({
                name: 'Lucas',
                email: 'test@example.com',
                password: '12345'
            });
        }).toBeCalled();
    });
})