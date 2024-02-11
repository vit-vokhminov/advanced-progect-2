import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('получить username из store', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: '123123',
            },
        };
        expect(getLoginUsername(state as StateSchema)).toEqual('123123');
    });
    test('получить пустой username из store', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginUsername(state as StateSchema)).toEqual('');
    });
});
