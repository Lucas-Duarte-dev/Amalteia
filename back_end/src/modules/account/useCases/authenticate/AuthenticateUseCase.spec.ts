import {IUserRepository} from "@module/account/repositories/IUserRepository";
import {UserRepository} from "@module/account/repositories/in-memory/UserRepository";
import {AuthenticateUseCase} from "@module/account/useCases/authenticate/AuthenticateUseCase";
import {CreateUserUseCase} from "@module/account/useCases/register/CreateUserUseCase";

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
            password: '12345',
            password_confirmed: '12345'
        });
    })

    it('Should be able create a new token for user with valid credentials', async () => {
       const result = await authenticateUseCase.execute('test@example.test', '12345');

       expect(result).toHaveProperty('token');
    });

    it('Should not be able send a new token to the user with invalid email', () => {
        const expected = {message: 'Unauthorized', statusCode: 401};

        expect(async () => {
            await authenticateUseCase.execute('invalid@example.test', '12345');
        }).rejects.toEqual(expected);
    });

    it('Should not be able send a new token to the user with invalid password', () => {
        const expected = {message: 'Unauthorized', statusCode: 401};

        expect(async () => {
            await authenticateUseCase.execute('test@example.test', '1234');
        }).rejects.toEqual(expected);
    });

    it('Should received user object without password', async () => {
        const result = await authenticateUseCase.execute('test@example.test', '12345');

        const expected = {
                created_at: result.user.created_at,
                id: result.user.id,
                isAdmin: false,
                name: 'Lucas',
                email: 'test@example.test',
                updated_at: result.user.updated_at
        }

        expect(result.user).toEqual(expected);
    });
});