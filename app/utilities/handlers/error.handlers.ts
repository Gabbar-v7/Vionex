/**
 * Wraps a promise and returns a tuple of [error, value].
 * Useful for avoiding try/catch blocks.
 *
 * @param promise - The promise to wrap
 * @returns A promise that resolves to [Error, undefined] on failure, or [undefined, T] on success
 */
export async function catchError<T>(promise: Promise<T>): Promise<[undefined, T] | [Error, undefined]> {
    return promise
        .then(data => {
            return [undefined, data] as [undefined, T]
        })
        .catch(error => {
            return [error, undefined]
        })
}

/**
 * Wraps a promise and catches only specified error types, returning a tuple of [error, value].
 * 
 * Useful when you want to selectively catch specific custom error types without using try/catch.
 * This pattern provides type-safe error handling while allowing unhandled errors to bubble up.
 * 
 * @template T - The type of the resolved value of the promise
 * @template E - The error type that extends the built-in Error class
 * 
 * @param promise - The promise to handle
 * @param errorsToCatch - An optional array of error constructor classes to catch 
 *                        (e.g., [TypeError, ValidationError, CustomError]).
 *                        If omitted, any error will be caught and returned in the tuple.
 *                        If provided, only errors that are instances of these classes will be caught.
 * 
 * @returns A promise that resolves to:
 *          - [undefined, T] if the promise resolves successfully
 *          - [E, undefined] if the promise rejects with a caught error
 *          - throws the original error if it's not in the `errorsToCatch` array
 */
export function catchTypedError<T, E extends Error>(
    promise: Promise<T>,
    errorsToCatch: (new (...args: any[]) => E)[]
): Promise<[undefined, T] | [E, undefined]> {
    return promise
        .then(data => {
            return [undefined, data] as [undefined, T]
        })
        .catch(error => {
            if (errorsToCatch.some(ErrorClass => error instanceof ErrorClass)) {
                return [error, undefined]
            }
            throw error
        })
}


/**
 * Takes an array of promises and collects any errors that occur during their execution.
 * 
 * This function starts all promises immediately and attaches `.catch` handlers
 * to collect errors into an array. It does **not** wait for promises to settle,
 * so the returned array may be empty if the promises haven't rejected yet.
 * 
 * @param promise - An array of promises to monitor for errors
 * @returns An array of errors that were caught during promise execution (likely empty unless promises reject quickly)
 */
export async function catchMultiErrors<T>(promises: Promise<T>[]): Promise<Error[]> {
    const results = await Promise.allSettled(promises);
    return results
        .filter((r): r is PromiseRejectedResult => r.status === 'rejected')
        .map(r => r.reason instanceof Error ? r.reason : new Error(String(r.reason)));
}