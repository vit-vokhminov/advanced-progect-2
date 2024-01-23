import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';
import { getFeatureFlag, toggleFeatures } from '@/shared/lib/features';

export const MainPage = () => {
    const { t } = useTranslation();
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');

    const counter = toggleFeatures({
        name: 'isCounterEnabled',
        on: () => <Counter />,
        off: () => <Counter />,
    });

    return (
        <Page data-testid='MainPage'>
            {t('Главная страница')}
            {counter}
        </Page>
    );
};

export default MainPage;
