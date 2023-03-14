import React from 'react';

export function useMobileDetected() {
    const [isMobile, setIsMobile] = React.useState<boolean>(false);

    React.useEffect(() => {
        function handleResize() {
            const mobile = window.matchMedia;
            if (!mobile) return false;

            const device = mobile('(pointer:coarse)');
            setIsMobile(device.matches);
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile;
}
