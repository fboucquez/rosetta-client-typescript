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
    MetadataRequest,
    MetadataRequestToJSON,
    NetworkListResponse,
    NetworkListResponseFromJSON,
    NetworkOptionsResponse,
    NetworkOptionsResponseFromJSON,
    NetworkRequest,
    NetworkRequestToJSON,
    NetworkStatusResponse,
    NetworkStatusResponseFromJSON,
} from '../models';
import * as runtime from '../runtime';

export interface NetworkListRequest {
    metadataRequest: MetadataRequest;
}

export interface NetworkOptionsRequest {
    networkRequest: NetworkRequest;
}

export interface NetworkStatusRequest {
    networkRequest: NetworkRequest;
}

/**
 *
 */
export class NetworkApi extends runtime.BaseAPI {
    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * Get List of Available Networks
     */
    async networkListRaw(
        requestParameters: NetworkListRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<NetworkListResponse>> {
        if (requestParameters.metadataRequest === null || requestParameters.metadataRequest === undefined) {
            throw new runtime.RequiredError(
                'metadataRequest',
                'Required parameter requestParameters.metadataRequest was null or undefined when calling networkList.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/network/list`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: MetadataRequestToJSON(requestParameters.metadataRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkListResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns a list of NetworkIdentifiers that the Rosetta server supports.
     * Get List of Available Networks
     */
    async networkList(metadataRequest: MetadataRequest, initOverrides?: RequestInit): Promise<NetworkListResponse> {
        const response = await this.networkListRaw({ metadataRequest: metadataRequest }, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * Get Network Options
     */
    async networkOptionsRaw(
        requestParameters: NetworkOptionsRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<NetworkOptionsResponse>> {
        if (requestParameters.networkRequest === null || requestParameters.networkRequest === undefined) {
            throw new runtime.RequiredError(
                'networkRequest',
                'Required parameter requestParameters.networkRequest was null or undefined when calling networkOptions.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/network/options`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: NetworkRequestToJSON(requestParameters.networkRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkOptionsResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns the version information and allowed network-specific types for a NetworkIdentifier. Any NetworkIdentifier returned by /network/list should be accessible here. Because options are retrievable in the context of a NetworkIdentifier, it is possible to define unique options for each network.
     * Get Network Options
     */
    async networkOptions(networkRequest: NetworkRequest, initOverrides?: RequestInit): Promise<NetworkOptionsResponse> {
        const response = await this.networkOptionsRaw({ networkRequest: networkRequest }, initOverrides);
        return await response.value();
    }

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * Get Network Status
     */
    async networkStatusRaw(
        requestParameters: NetworkStatusRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<NetworkStatusResponse>> {
        if (requestParameters.networkRequest === null || requestParameters.networkRequest === undefined) {
            throw new runtime.RequiredError(
                'networkRequest',
                'Required parameter requestParameters.networkRequest was null or undefined when calling networkStatus.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/network/status`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: NetworkRequestToJSON(requestParameters.networkRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => NetworkStatusResponseFromJSON(jsonValue));
    }

    /**
     * This endpoint returns the current status of the network requested. Any NetworkIdentifier returned by /network/list should be accessible here.
     * Get Network Status
     */
    async networkStatus(networkRequest: NetworkRequest, initOverrides?: RequestInit): Promise<NetworkStatusResponse> {
        const response = await this.networkStatusRaw({ networkRequest: networkRequest }, initOverrides);
        return await response.value();
    }
}
