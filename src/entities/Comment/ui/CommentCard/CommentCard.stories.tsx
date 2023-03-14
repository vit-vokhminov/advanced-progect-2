import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = args => (
    <CommentCard {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
};
Normal.decorators = [ThemeDecorator(Theme.NORMAL)];

export const Loading = Template.bind({});
Loading.args = {
    comment: {
        id: '1',
        text: 'hello world',
        user: { id: '1', username: 'Vasya' },
    },
    isLoading: true,
};
Loading.decorators = [ThemeDecorator(Theme.NORMAL)];
