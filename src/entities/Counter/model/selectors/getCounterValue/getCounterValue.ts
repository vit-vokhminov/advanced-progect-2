//import { createSelector } from '@reduxjs/toolkit';
//import { getCounter } from '../getCounter/getCounter';
//import { CounterSchema } from '../../types/counterSchema';

// export const getCounterValue = createSelector(
//     getCounter,
//     (counter: CounterSchema) => counter.value
// );

// использование кастомной обёртки
import { buildSelector } from '@/shared/lib/store';

export const [useSelectorCounterValue, getCounterValue] = buildSelector(
    state => state.counter.value
);
