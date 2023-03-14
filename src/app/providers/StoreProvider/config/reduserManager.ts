import {
    AnyAction,
    combineReducers,
    Reducer,
    ReducersMapObject,
} from '@reduxjs/toolkit';
import { reducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(
    initialReducers: ReducersMapObject<StateSchema>
): reducerManager {
    // Создайте объект, который сопоставляет ключи с reducers
    const reducers = { ...initialReducers };

    // Create the initial combinedReducer
    let combinedReducer = combineReducers(reducers);

    // Массив, который хранит названия редюсеров которые хочу удалить
    let keysToRemove: StateSchemaKey[] = [];

    return {
        // объект с вмонтированными редюсерами
        getReducerMap: () => reducers,

        // Функция корневого reducer, предоставляемая этим объектом
        // Это будет передано в store
        reduce: (state: StateSchema, action: AnyAction) => {
            // Если в массиве keysToRemove что-то есть то удаляю
            if (keysToRemove.length > 0) {
                state = { ...state };
                for (let key of keysToRemove) {
                    delete state[key];
                }
                keysToRemove = [];
            }

            // Delegate to the combined reducer
            return combinedReducer(state, action);
        },

        // добавляет new reducer
        add: (key: StateSchemaKey, reducer: Reducer) => {
            if (!key || reducers[key]) {
                return;
            }

            // Добавляет новый reducer с указанным ключом
            reducers[key] = reducer;

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },

        // Удаляет reducer с помощью указанного ключа
        remove: (key: StateSchemaKey) => {
            if (!key || !reducers[key]) {
                return;
            }

            // Удалите его из сопоставления reducer
            delete reducers[key];

            // Добавьте ключ в список ключей для очистки
            keysToRemove.push(key);

            // Generate a new combined reducer
            combinedReducer = combineReducers(reducers);
        },
    };
}
