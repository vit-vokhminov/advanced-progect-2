import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';
import { ToggleFeatures } from '@/shared/lib/features';

export const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid='MainPage'>
            {t('Главная страница')}
            <ToggleFeatures
                feature='isCounterEnabled'
                on={<Counter />}
                off={null}
            />
        </Page>
    );
};

export default MainPage;
