import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginIsLiading = (state: StateSchema) =>
    state?.loginForm?.isLoading || false;
