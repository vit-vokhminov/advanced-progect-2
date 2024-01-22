import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';
import { getFeatureFlag } from '@/shared/lib/features';

export const MainPage = () => {
    const { t } = useTranslation();
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');
console.log('isCounterEnabled', isCounterEnabled);
    return (
        <Page data-testid='MainPage'>
            {t('Главная страница')}
            {isCounterEnabled && <Counter />}
        </Page>
    );
};

export default MainPage;
