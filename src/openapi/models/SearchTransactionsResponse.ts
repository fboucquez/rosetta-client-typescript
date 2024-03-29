/* tslint:disable */
/* eslint-disable */
/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.13
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists } from '../runtime';
import { BlockTransaction, BlockTransactionFromJSON, BlockTransactionToJSON } from './';

/**
 * SearchTransactionsResponse contains an ordered collection of BlockTransactions that match the query in SearchTransactionsRequest. These BlockTransactions are sorted from most recent block to oldest block.
 * @export
 * @interface SearchTransactionsResponse
 */
export interface SearchTransactionsResponse {
    /**
     * transactions is an array of BlockTransactions sorted by most recent BlockIdentifier (meaning that transactions in recent blocks appear first). If there are many transactions for a particular search, transactions may not contain all matching transactions. It is up to the caller to paginate these transactions using the max_block field.
     * @type {Array<BlockTransaction>}
     * @memberof SearchTransactionsResponse
     */
    transactions: Array<BlockTransaction>;
    /**
     * total_count is the number of results for a given search. Callers typically use this value to concurrently fetch results by offset or to display a virtual page number associated with results.
     * @type {number}
     * @memberof SearchTransactionsResponse
     */
    total_count: number;
    /**
     * next_offset is the next offset to use when paginating through transaction results. If this field is not populated, there are no more transactions to query.
     * @type {number}
     * @memberof SearchTransactionsResponse
     */
    next_offset?: number;
}

export function SearchTransactionsResponseFromJSON(json: any): SearchTransactionsResponse {
    return SearchTransactionsResponseFromJSONTyped(json, false);
}

export function SearchTransactionsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchTransactionsResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        transactions: (json['transactions'] as Array<any>).map(BlockTransactionFromJSON),
        total_count: json['total_count'],
        next_offset: !exists(json, 'next_offset') ? undefined : json['next_offset'],
    };
}

export function SearchTransactionsResponseToJSON(value?: SearchTransactionsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        transactions: (value.transactions as Array<any>).map(BlockTransactionToJSON),
        total_count: value.total_count,
        next_offset: value.next_offset,
    };
}
