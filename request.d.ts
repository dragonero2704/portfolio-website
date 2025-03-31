export declare function cached(
    callback: Function<Promise<unknown>>,
    options?:options
): Function<Promise<unknown>>

export declare function cachedFetch(
    route:string,
    options?: options
)

interface options {
    revalidate:number
}