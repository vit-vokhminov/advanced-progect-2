import { Button } from '@/shared/ui/Button';
//import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
//import { counterActions } from '../model/slice/counterSlice';
//import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useSelectorCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { useCounterActions } from '../model/slice/counterSlice';

export const Counter = () => {
    //const dispatch = useDispatch();
    const { t } = useTranslation();

    //const counterValue = useSelector(getCounterValue);
    const counterValue = useSelectorCounterValue();
    const { decrement, increment, add } = useCounterActions();

    const handleIncrement = () => {
        //dispatch(counterActions.increment());
        increment();
    };

    const handleDecrement = () => {
        //dispatch(counterActions.decrement());
        decrement();
    };

    const handleAddFive = () => {
        add(5);
    };

    return (
        <div>
            <h1 data-testid='value-title'>{counterValue}</h1>
            <Button data-testid='decrement-btn' onClick={handleDecrement}>
                {t('decrement')}
            </Button>
            <Button onClick={handleIncrement} data-testid='increment-btn'>
                {t('increment')}
            </Button>
            <Button onClick={handleAddFive} data-testid='increment-btn5'>
                {t('add5')}
            </Button>
        </div>
    );
};
