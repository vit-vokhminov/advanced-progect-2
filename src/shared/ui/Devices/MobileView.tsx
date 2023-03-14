import React, { memo, ReactNode } from 'react';
import { useMobileDetected } from '@/shared/lib/hooks/useMobileDetected';

interface MobileViewProps {
    children: ReactNode;
}

export const MobileView = memo((props: MobileViewProps) => {
    const { children } = props;

    const isMobile = useMobileDetected();

    if (isMobile) {
        return <>{children}</>;
    }

    return null;
});
