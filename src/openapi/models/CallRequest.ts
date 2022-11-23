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

import { NetworkIdentifier, NetworkIdentifierFromJSON, NetworkIdentifierToJSON } from './';

/**
 * CallRequest is the input to the `/call` endpoint.
 * @export
 * @interface CallRequest
 */
export interface CallRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof CallRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     * Method is some network-specific procedure call. This method could map to a network-specific RPC endpoint, a method in an SDK generated from a smart contract, or some hybrid of the two. The implementation must define all available methods in the Allow object. However, it is up to the caller to determine which parameters to provide when invoking `/call`.
     * @type {string}
     * @memberof CallRequest
     */
    method: string;
    /**
     * Parameters is some network-specific argument for a method. It is up to the caller to determine which parameters to provide when invoking `/call`.
     * @type {any}
     * @memberof CallRequest
     */
    parameters: any;
}

export function CallRequestFromJSON(json: any): CallRequest {
    return CallRequestFromJSONTyped(json, false);
}

export function CallRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CallRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: NetworkIdentifierFromJSON(json['network_identifier']),
        method: json['method'],
        parameters: json['parameters'],
    };
}

export function CallRequestToJSON(value?: CallRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        method: value.method,
        parameters: value.parameters,
    };
}