export interface IPagination<T = any> {
    rows: T[],
    info: {
        totalItems: number,
        totalPages: number,
    },
    meta: {
        currentPage: number,
        pageLimit: number,
    }
}
export interface IRows<T> {
    rows: T[],
}

export interface IBaseRes<T = any> {
    data: T,
    message?: string,
}

export type TResPagination = IBaseRes<IPagination>

export interface ICreateDataRes<T = any> {
    data: {newId: number, newData?: T},
    message: string
}

export interface IUpdateDataRes {
    data: {updateCount: number},
    message: string
}

export interface IDeleteDataRes {
    data: {deleteCount: number},
    message: string
}

export interface IOption {
    text: string,
    value: string|number
}
