import {
    GetListParams,
    GetListResult,
    GetOneParams,
    GetOneResult,
    GetManyParams,
    GetManyResult,
} from '../types';

export const canReplyWithCache = (type, payload, resourceState) => {
    const now = new Date();
    switch (type) {
        case 'getList':
            return (
                resourceState &&
                resourceState.list &&
                resourceState.list.validity &&
                resourceState.list.validity[
                    JSON.stringify(payload as GetListParams)
                ] > now
            );
        case 'getOne':
            return (
                resourceState &&
                resourceState.validity &&
                resourceState.validity[(payload as GetOneParams).id] > now
            );
        case 'getMany':
            return (
                resourceState &&
                resourceState.validity &&
                (payload as GetManyParams).ids.every(
                    id => resourceState.validity[id] > now
                )
            );
        default:
            return false;
    }
};

export const getResultFromCache = (type, payload, resourceState) => {
    switch (type) {
        case 'getList': {
            const data = resourceState.data;
            const ids = resourceState.list.idsForQuery[JSON.stringify(payload)];
            return {
                data: ids.map(id => data[id]),
                total: resourceState.list.total, // FIXME should be request dependent
            } as GetListResult;
        }
        case 'getOne':
            return { data: resourceState.data[payload.id] } as GetOneResult;
        case 'getMany':
            return {
                data: payload.ids.map(id => resourceState.data[id]),
            } as GetManyResult;
        default:
            throw new Error('cannot reply with cache for this method');
    }
};
