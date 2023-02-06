export type PostParams = {
    userId?: number,
    id?: number,
    title: string,
    body: string,
}

export type FilterParams = {
    sort: string,
    query: string,
}