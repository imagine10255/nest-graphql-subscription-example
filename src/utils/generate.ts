import {ulid} from 'ulid';


/**
 * 產生 ULID
 */
export const generateId = (): string => {
    return ulid().toLowerCase();
}
