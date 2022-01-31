/* tslint:disable */
/* eslint-disable */
/**
 * Rosetta
 * Build Once. Integrate Your Blockchain Everywhere.
 *
 * The version of the OpenAPI document: 1.4.10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
    ConstructionCombineRequest,
    ConstructionCombineRequestToJSON,
    ConstructionCombineResponse,
    ConstructionCombineResponseFromJSON,
    ConstructionDeriveRequest,
    ConstructionDeriveRequestToJSON,
    ConstructionDeriveResponse,
    ConstructionDeriveResponseFromJSON,
    ConstructionHashRequest,
    ConstructionHashRequestToJSON,
    ConstructionMetadataRequest,
    ConstructionMetadataRequestToJSON,
    ConstructionMetadataResponse,
    ConstructionMetadataResponseFromJSON,
    ConstructionParseRequest,
    ConstructionParseRequestToJSON,
    ConstructionParseResponse,
    ConstructionParseResponseFromJSON,
    ConstructionPayloadsRequest,
    ConstructionPayloadsRequestToJSON,
    ConstructionPayloadsResponse,
    ConstructionPayloadsResponseFromJSON,
    ConstructionPreprocessRequest,
    ConstructionPreprocessRequestToJSON,
    ConstructionPreprocessResponse,
    ConstructionPreprocessResponseFromJSON,
    ConstructionSubmitRequest,
    ConstructionSubmitRequestToJSON,
    TransactionIdentifierResponse,
    TransactionIdentifierResponseFromJSON,
} from '../models';
import * as runtime from '../runtime';

export interface ConstructionCombineOperationRequest {
    constructionCombineRequest: ConstructionCombineRequest;
}

export interface ConstructionDeriveOperationRequest {
    constructionDeriveRequest: ConstructionDeriveRequest;
}

export interface ConstructionHashOperationRequest {
    constructionHashRequest: ConstructionHashRequest;
}

export interface ConstructionMetadataOperationRequest {
    constructionMetadataRequest: ConstructionMetadataRequest;
}

export interface ConstructionParseOperationRequest {
    constructionParseRequest: ConstructionParseRequest;
}

export interface ConstructionPayloadsOperationRequest {
    constructionPayloadsRequest: ConstructionPayloadsRequest;
}

export interface ConstructionPreprocessOperationRequest {
    constructionPreprocessRequest: ConstructionPreprocessRequest;
}

export interface ConstructionSubmitOperationRequest {
    constructionSubmitRequest: ConstructionSubmitRequest;
}

/**
 *
 */
export class ConstructionApi extends runtime.BaseAPI {
    /**
     * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
     * Create Network Transaction from Signatures
     */
    async constructionCombineRaw(
        requestParameters: ConstructionCombineOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<ConstructionCombineResponse>> {
        if (requestParameters.constructionCombineRequest === null || requestParameters.constructionCombineRequest === undefined) {
            throw new runtime.RequiredError(
                'constructionCombineRequest',
                'Required parameter requestParameters.constructionCombineRequest was null or undefined when calling constructionCombine.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/construction/combine`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConstructionCombineRequestToJSON(requestParameters.constructionCombineRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ConstructionCombineResponseFromJSON(jsonValue));
    }

    /**
     * Combine creates a network-specific transaction from an unsigned transaction and an array of provided signatures. The signed transaction returned from this method will be sent to the `/construction/submit` endpoint by the caller.
     * Create Network Transaction from Signatures
     */
    async constructionCombine(
        constructionCombineRequest: ConstructionCombineRequest,
        initOverrides?: RequestInit,
    ): Promise<ConstructionCombineResponse> {
        const response = await this.constructionCombineRaw({ constructionCombineRequest: constructionCombineRequest }, initOverrides);
        return await response.value();
    }

    /**
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * Derive an AccountIdentifier from a PublicKey
     */
    async constructionDeriveRaw(
        requestParameters: ConstructionDeriveOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<ConstructionDeriveResponse>> {
        if (requestParameters.constructionDeriveRequest === null || requestParameters.constructionDeriveRequest === undefined) {
            throw new runtime.RequiredError(
                'constructionDeriveRequest',
                'Required parameter requestParameters.constructionDeriveRequest was null or undefined when calling constructionDerive.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/construction/derive`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConstructionDeriveRequestToJSON(requestParameters.constructionDeriveRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ConstructionDeriveResponseFromJSON(jsonValue));
    }

    /**
     * Derive returns the AccountIdentifier associated with a public key. Blockchains that require an on-chain action to create an account should not implement this method.
     * Derive an AccountIdentifier from a PublicKey
     */
    async constructionDerive(
        constructionDeriveRequest: ConstructionDeriveRequest,
        initOverrides?: RequestInit,
    ): Promise<ConstructionDeriveResponse> {
        const response = await this.constructionDeriveRaw({ constructionDeriveRequest: constructionDeriveRequest }, initOverrides);
        return await response.value();
    }

    /**
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * Get the Hash of a Signed Transaction
     */
    async constructionHashRaw(
        requestParameters: ConstructionHashOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<TransactionIdentifierResponse>> {
        if (requestParameters.constructionHashRequest === null || requestParameters.constructionHashRequest === undefined) {
            throw new runtime.RequiredError(
                'constructionHashRequest',
                'Required parameter requestParameters.constructionHashRequest was null or undefined when calling constructionHash.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/construction/hash`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConstructionHashRequestToJSON(requestParameters.constructionHashRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionIdentifierResponseFromJSON(jsonValue));
    }

    /**
     * TransactionHash returns the network-specific transaction hash for a signed transaction.
     * Get the Hash of a Signed Transaction
     */
    async constructionHash(
        constructionHashRequest: ConstructionHashRequest,
        initOverrides?: RequestInit,
    ): Promise<TransactionIdentifierResponse> {
        const response = await this.constructionHashRaw({ constructionHashRequest: constructionHashRequest }, initOverrides);
        return await response.value();
    }

    /**
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * Get Metadata for Transaction Construction
     */
    async constructionMetadataRaw(
        requestParameters: ConstructionMetadataOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<ConstructionMetadataResponse>> {
        if (requestParameters.constructionMetadataRequest === null || requestParameters.constructionMetadataRequest === undefined) {
            throw new runtime.RequiredError(
                'constructionMetadataRequest',
                'Required parameter requestParameters.constructionMetadataRequest was null or undefined when calling constructionMetadata.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/construction/metadata`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConstructionMetadataRequestToJSON(requestParameters.constructionMetadataRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ConstructionMetadataResponseFromJSON(jsonValue));
    }

    /**
     * Get any information required to construct a transaction for a specific network. Metadata returned here could be a recent hash to use, an account sequence number, or even arbitrary chain state. The request used when calling this endpoint is created by calling `/construction/preprocess` in an offline environment. You should NEVER assume that the request sent to this endpoint will be created by the caller or populated with any custom parameters. This must occur in `/construction/preprocess`. It is important to clarify that this endpoint should not pre-construct any transactions for the client (this should happen in `/construction/payloads`). This endpoint is left purposely unstructured because of the wide scope of metadata that could be required.
     * Get Metadata for Transaction Construction
     */
    async constructionMetadata(
        constructionMetadataRequest: ConstructionMetadataRequest,
        initOverrides?: RequestInit,
    ): Promise<ConstructionMetadataResponse> {
        const response = await this.constructionMetadataRaw({ constructionMetadataRequest: constructionMetadataRequest }, initOverrides);
        return await response.value();
    }

    /**
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`).
     * Parse a Transaction
     */
    async constructionParseRaw(
        requestParameters: ConstructionParseOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<ConstructionParseResponse>> {
        if (requestParameters.constructionParseRequest === null || requestParameters.constructionParseRequest === undefined) {
            throw new runtime.RequiredError(
                'constructionParseRequest',
                'Required parameter requestParameters.constructionParseRequest was null or undefined when calling constructionParse.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/construction/parse`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConstructionParseRequestToJSON(requestParameters.constructionParseRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ConstructionParseResponseFromJSON(jsonValue));
    }

    /**
     * Parse is called on both unsigned and signed transactions to understand the intent of the formulated transaction. This is run as a sanity check before signing (after `/construction/payloads`) and before broadcast (after `/construction/combine`).
     * Parse a Transaction
     */
    async constructionParse(
        constructionParseRequest: ConstructionParseRequest,
        initOverrides?: RequestInit,
    ): Promise<ConstructionParseResponse> {
        const response = await this.constructionParseRaw({ constructionParseRequest: constructionParseRequest }, initOverrides);
        return await response.value();
    }

    /**
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * Generate an Unsigned Transaction and Signing Payloads
     */
    async constructionPayloadsRaw(
        requestParameters: ConstructionPayloadsOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<ConstructionPayloadsResponse>> {
        if (requestParameters.constructionPayloadsRequest === null || requestParameters.constructionPayloadsRequest === undefined) {
            throw new runtime.RequiredError(
                'constructionPayloadsRequest',
                'Required parameter requestParameters.constructionPayloadsRequest was null or undefined when calling constructionPayloads.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/construction/payloads`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConstructionPayloadsRequestToJSON(requestParameters.constructionPayloadsRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ConstructionPayloadsResponseFromJSON(jsonValue));
    }

    /**
     * Payloads is called with an array of operations and the response from `/construction/metadata`. It returns an unsigned transaction blob and a collection of payloads that must be signed by particular AccountIdentifiers using a certain SignatureType. The array of operations provided in transaction construction often times can not specify all \"effects\" of a transaction (consider invoked transactions in Ethereum). However, they can deterministically specify the \"intent\" of the transaction, which is sufficient for construction. For this reason, parsing the corresponding transaction in the Data API (when it lands on chain) will contain a superset of whatever operations were provided during construction.
     * Generate an Unsigned Transaction and Signing Payloads
     */
    async constructionPayloads(
        constructionPayloadsRequest: ConstructionPayloadsRequest,
        initOverrides?: RequestInit,
    ): Promise<ConstructionPayloadsResponse> {
        const response = await this.constructionPayloadsRaw({ constructionPayloadsRequest: constructionPayloadsRequest }, initOverrides);
        return await response.value();
    }

    /**
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * Create a Request to Fetch Metadata
     */
    async constructionPreprocessRaw(
        requestParameters: ConstructionPreprocessOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<ConstructionPreprocessResponse>> {
        if (requestParameters.constructionPreprocessRequest === null || requestParameters.constructionPreprocessRequest === undefined) {
            throw new runtime.RequiredError(
                'constructionPreprocessRequest',
                'Required parameter requestParameters.constructionPreprocessRequest was null or undefined when calling constructionPreprocess.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/construction/preprocess`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConstructionPreprocessRequestToJSON(requestParameters.constructionPreprocessRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => ConstructionPreprocessResponseFromJSON(jsonValue));
    }

    /**
     * Preprocess is called prior to `/construction/payloads` to construct a request for any metadata that is needed for transaction construction given (i.e. account nonce). The `options` object returned from this endpoint will be sent to the `/construction/metadata` endpoint UNMODIFIED by the caller (in an offline execution environment). If your Construction API implementation has configuration options, they MUST be specified in the `/construction/preprocess` request (in the `metadata` field).
     * Create a Request to Fetch Metadata
     */
    async constructionPreprocess(
        constructionPreprocessRequest: ConstructionPreprocessRequest,
        initOverrides?: RequestInit,
    ): Promise<ConstructionPreprocessResponse> {
        const response = await this.constructionPreprocessRaw(
            { constructionPreprocessRequest: constructionPreprocessRequest },
            initOverrides,
        );
        return await response.value();
    }

    /**
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * Submit a Signed Transaction
     */
    async constructionSubmitRaw(
        requestParameters: ConstructionSubmitOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<TransactionIdentifierResponse>> {
        if (requestParameters.constructionSubmitRequest === null || requestParameters.constructionSubmitRequest === undefined) {
            throw new runtime.RequiredError(
                'constructionSubmitRequest',
                'Required parameter requestParameters.constructionSubmitRequest was null or undefined when calling constructionSubmit.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/construction/submit`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: ConstructionSubmitRequestToJSON(requestParameters.constructionSubmitRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => TransactionIdentifierResponseFromJSON(jsonValue));
    }

    /**
     * Submit a pre-signed transaction to the node. This call should not block on the transaction being included in a block. Rather, it should return immediately with an indication of whether or not the transaction was included in the mempool. The transaction submission response should only return a 200 status if the submitted transaction could be included in the mempool. Otherwise, it should return an error.
     * Submit a Signed Transaction
     */
    async constructionSubmit(
        constructionSubmitRequest: ConstructionSubmitRequest,
        initOverrides?: RequestInit,
    ): Promise<TransactionIdentifierResponse> {
        const response = await this.constructionSubmitRaw({ constructionSubmitRequest: constructionSubmitRequest }, initOverrides);
        return await response.value();
    }
}
