import {ICarWithAuth} from "./ICarWithAuth";

export interface ICarPaginatedModel {
    total_items: number;
    total_pages: number;
    prev: string;
    next: string;
    items: ICarWithAuth[];
}
