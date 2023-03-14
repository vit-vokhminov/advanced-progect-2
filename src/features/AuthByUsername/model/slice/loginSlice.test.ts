import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('изменить username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('123123')
            )
        ).toEqual({ username: '123123' });
    });

    test('изменить password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123123')
            )
        ).toEqual({ password: '123123' });
    });
});
