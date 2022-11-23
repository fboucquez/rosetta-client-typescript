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
    MempoolResponse,
    MempoolResponseFromJSON,
    MempoolTransactionRequest,
    MempoolTransactionRequestToJSON,
    MempoolTransactionResponse,
    MempoolTransactionResponseFromJSON,
    NetworkRequest,
    NetworkRequestToJSON,
} from '../models';
import * as runtime from '../runtime';

export interface MempoolRequest {
    networkRequest: NetworkRequest;
}

export interface MempoolTransactionOperationRequest {
    mempoolTransactionRequest: MempoolTransactionRequest;
}

/**
 *
 */
export class MempoolApi extends runtime.BaseAPI {
    /**
     * Get all Transaction Identifiers in the mempool
     * Get All Mempool Transactions
     */
    async mempoolRaw(requestParameters: MempoolRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<MempoolResponse>> {
        if (requestParameters.networkRequest === null || requestParameters.networkRequest === undefined) {
            throw new runtime.RequiredError(
                'networkRequest',
                'Required parameter requestParameters.networkRequest was null or undefined when calling mempool.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/mempool`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: NetworkRequestToJSON(requestParameters.networkRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MempoolResponseFromJSON(jsonValue));
    }

    /**
     * Get all Transaction Identifiers in the mempool
     * Get All Mempool Transactions
     */
    async mempool(networkRequest: NetworkRequest, initOverrides?: RequestInit): Promise<MempoolResponse> {
        const response = await this.mempoolRaw({ networkRequest: networkRequest }, initOverrides);
        return await response.value();
    }

    /**
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * Get a Mempool Transaction
     */
    async mempoolTransactionRaw(
        requestParameters: MempoolTransactionOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<MempoolTransactionResponse>> {
        if (requestParameters.mempoolTransactionRequest === null || requestParameters.mempoolTransactionRequest === undefined) {
            throw new runtime.RequiredError(
                'mempoolTransactionRequest',
                'Required parameter requestParameters.mempoolTransactionRequest was null or undefined when calling mempoolTransaction.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/mempool/transaction`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: MempoolTransactionRequestToJSON(requestParameters.mempoolTransactionRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => MempoolTransactionResponseFromJSON(jsonValue));
    }

    /**
     * Get a transaction in the mempool by its Transaction Identifier. This is a separate request than fetching a block transaction (/block/transaction) because some blockchain nodes need to know that a transaction query is for something in the mempool instead of a transaction in a block. Transactions may not be fully parsable until they are in a block (ex: may not be possible to determine the fee to pay before a transaction is executed). On this endpoint, it is ok that returned transactions are only estimates of what may actually be included in a block.
     * Get a Mempool Transaction
     */
    async mempoolTransaction(
        mempoolTransactionRequest: MempoolTransactionRequest,
        initOverrides?: RequestInit,
    ): Promise<MempoolTransactionResponse> {
        const response = await this.mempoolTransactionRaw({ mempoolTransactionRequest: mempoolTransactionRequest }, initOverrides);
        return await response.value();
    }
}
