/**
 * @extends Error
 */
declare class ExtendableError extends Error {
    private status;
    private isPublic;
    constructor(message: string, status: number, isPublic: boolean);
}
/**
 * Class representing an API error.
 * @extends ExtendableError
 */
declare class APIError extends ExtendableError {
    /**
     * Creates an API error.
     * @param {string} message - Error message.
     * @param {number} status - HTTP status code of error.
     * @param {boolean} isPublic - Whether the message should be visible to user or not.
     */
    constructor(message: any, status?: number, isPublic?: boolean);
}
export default APIError;
