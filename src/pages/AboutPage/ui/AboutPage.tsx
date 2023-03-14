import React from 'react';
import { useTranslation } from 'react-i18next';

export const AboutPage = () => {
    const { t } = useTranslation();

    return <div data-testid='AboutPage'>{t('О сайте')}</div>;
};

export default AboutPage;
