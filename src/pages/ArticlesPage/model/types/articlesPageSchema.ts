import { EntityState } from '@reduxjs/toolkit';
import {
    Article,
    ArticleView,
    ArticleSortField,
    ArticleType,
} from '@/entities/Article';
import { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article> {
    isLoading?: boolean;
    error?: string;

    // pagination
    page: number;
    limit: number;
    hasMore: boolean; // есть ли ещё порция которую можно подгрузить

    // filters
    view: ArticleView;
    order: SortOrder; // порядок сортировки
    sort: ArticleSortField; // сортировка по дате || заголовку || кол.просмотров
    search: string; // текст поиска
    type: ArticleType;

    _inited: boolean;
}
