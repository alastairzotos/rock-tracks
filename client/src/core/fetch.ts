import fetch from 'node-fetch';
import { from } from 'rxjs';

export interface IRequest {
    url: string;
    method: 'GET'|'POST';
    query?: Object;
}

export interface IResponse<T> {
    status: number;
    body?: T;
    error?: boolean;
}

const createQueryString = (query: Object): string =>
    Object.keys(query).map(key => `${key}=${query[key]}`).join('&');

const performFetch = async<T = any>(req: IRequest): Promise<IResponse<T>> => {
    let response: any;

    if (req.query) {
        req.url += '?' + createQueryString(req.query);
    }

    try {
        response = await fetch(req.url, {
            method: req.method,
        });

        return {
            status: response.status,
            body: await response.json()
        };

    } catch (e) {
        throw {
            status: response.status,
            error: true
        };
    }
}

export const fetch$ = <T = any>(req: IRequest) => {
    return from(performFetch<T>(req));
};
