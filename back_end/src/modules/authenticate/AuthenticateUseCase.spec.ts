import {IUserRepository} from "@module/account/repositories/IUserRepository";
import {UserRepository} from "@module/account/repositories/in-memory/UserRepository";
import {AuthenticateUseCase} from "@module/authenticate/AuthenticateUseCase";
import {CreateUserUseCase} from "@module/account/useCases/register/CreateUserUseCase";
import {DomainException} from "@infra/http/error/DomainException";

let userRepository: IUserRepository;
let authenticateUseCase: AuthenticateUseCase;
let createUserUseCase: CreateUserUseCase;

describe('Authenticate User', () => {
    beforeEach(async () => {
        userRepository = new UserRepository();
        createUserUseCase = new CreateUserUseCase(userRepository);
        authenticateUseCase = new AuthenticateUseCase(userRepository);

        await createUserUseCase.execute({
            name: 'Lucas',
            email: 'test@example.test',
            password: '12345'
        });
    })

    it('Should be able create a new token for user with valid credentials', async () => {
       const result = await authenticateUseCase.execute('test@example.test', '12345');

       expect(result).toHaveProperty('token');
    });

    it('Should not be able send a new token to the user with invalid email',  () => {
      expect(async () => {
          await authenticateUseCase.execute('invalid@example.test', '12345');
      }).rejects.toEqual({message: 'Unauthorized', statusCode: 401});
    });

    it('Should not be able send a new token to the user with invalid password',  () => {
        expect(async () => {
            await authenticateUseCase.execute('test@example.test', '1234');
        }).rejects.toEqual({message: 'Unauthorized', statusCode: 401});
    });

});