import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentList } from './CommentList';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = args => (
    <CommentList {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comments: [
        {
            id: '1',
            text: 'hello world',
            user: { id: '1', username: 'Vasya' },
        },
        {
            id: '2',
            text: 'Comment 2',
            user: { id: '1', username: 'Petya' },
        },
    ],
};
Normal.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Loading = Template.bind({});
Loading.args = {
    comments: [],
    isLoading: true,
};
Loading.decorators = [ThemeDecorator(Theme.NORMAL)];
