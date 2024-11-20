export interface ICategory {
    id?: number;
    name: string;
}
export interface IWebtoon {
    id?: string;
    title: string;
    description: string;
    poster: string;
    categories: ICategory[];
}