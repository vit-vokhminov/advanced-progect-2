import React, { memo, ReactNode } from 'react';
import { useMobileDetected } from '@/shared/lib/hooks/useMobileDetected';

interface Props {
    children: ReactNode;
}

export const BrowserView = memo((props: Props) => {
    const { children } = props;

    const isMobile = useMobileDetected();

    if (!isMobile) {
        return <>{children}</>;
    }

    return null;
});
