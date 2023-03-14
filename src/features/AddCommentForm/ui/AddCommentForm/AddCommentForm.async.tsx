import { FC, lazy } from 'react';
import { AddCommentFormProps } from './AddCommentForm';

export const AddCommentFormAsync = lazy<FC<AddCommentFormProps>>(
    () => import('./AddCommentForm')
);

//export const AddCommentFormAsync = React.lazy(() => import('./AddCommentForm'));
