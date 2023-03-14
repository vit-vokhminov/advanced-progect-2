import React, { Suspense, useEffect } from 'react';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { PageLoader } from '@/widgets/PageLoader';
import { getUserInited, userActions } from '@/entities/User';
import { useDispatch, useSelector } from 'react-redux';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const inited = useSelector(getUserInited);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('App', {}, [theme])}>
            {/* обёртка Suspense нужна для i18next */}
            <Suspense fallback={<PageLoader />}>
                <Navbar />
                <div className='content-page'>
                    <Sidebar />
                    {inited && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
};

export default App;
