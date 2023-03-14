import { RouteProps } from 'react-router-dom';
// eslint-disable-next-line fsd-vit-plugin/layer-imports-vit
import { UserRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
