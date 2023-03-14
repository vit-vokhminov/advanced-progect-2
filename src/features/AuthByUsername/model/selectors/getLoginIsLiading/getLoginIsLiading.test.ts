import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginIsLiading } from './getLoginIsLiading';

describe('getLoginError', () => {
    test('получить isLoading из store', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginIsLiading(state as StateSchema)).toBe(true);
    });
    test('получить пустой isLoading из store', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginIsLiading(state as StateSchema)).toBe(false);
    });
});
