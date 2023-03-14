//import { render } from '@testing-library/react';
import { fireEvent, screen } from '@testing-library/react';
//import { withTranslation } from 'react-i18next';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Sidebar } from '../Sidebar/Sidebar';

describe('Sidebar', () => {
    test('with only first param', () => {
        //const SidebarWithTranclation = withTranslation()(Sidebar);
        //render(<SidebarWithTranclation />);
        componentRender(<Sidebar />);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        //componentRender(<Sidebar />);
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});
