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

import {
    SearchTransactionsRequest,
    SearchTransactionsRequestToJSON,
    SearchTransactionsResponse,
    SearchTransactionsResponseFromJSON,
} from '../models';
import * as runtime from '../runtime';

export interface SearchTransactionsOperationRequest {
    searchTransactionsRequest: SearchTransactionsRequest;
}

/**
 *
 */
export class SearchApi extends runtime.BaseAPI {
    /**
     * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Search for Transactions
     */
    async searchTransactionsRaw(
        requestParameters: SearchTransactionsOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<SearchTransactionsResponse>> {
        if (requestParameters.searchTransactionsRequest === null || requestParameters.searchTransactionsRequest === undefined) {
            throw new runtime.RequiredError(
                'searchTransactionsRequest',
                'Required parameter requestParameters.searchTransactionsRequest was null or undefined when calling searchTransactions.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/search/transactions`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: SearchTransactionsRequestToJSON(requestParameters.searchTransactionsRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => SearchTransactionsResponseFromJSON(jsonValue));
    }

    /**
     * `/search/transactions` allows the caller to search for transactions that meet certain conditions. Some conditions include matching a transaction hash, containing an operation with a certain status, or containing an operation that affects a certain account. `/search/transactions` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Search for Transactions
     */
    async searchTransactions(
        searchTransactionsRequest: SearchTransactionsRequest,
        initOverrides?: RequestInit,
    ): Promise<SearchTransactionsResponse> {
        const response = await this.searchTransactionsRaw({ searchTransactionsRequest: searchTransactionsRequest }, initOverrides);
        return await response.value();
    }
}
