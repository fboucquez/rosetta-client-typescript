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

import { exists } from '../runtime';
import {
    NetworkIdentifier,
    NetworkIdentifierFromJSON,
    NetworkIdentifierToJSON,
    Operation,
    OperationFromJSON,
    OperationToJSON,
    PublicKey,
    PublicKeyFromJSON,
    PublicKeyToJSON,
} from './';

/**
 * ConstructionPayloadsRequest is the request to `/construction/payloads`. It contains the network, a slice of operations, and arbitrary metadata that was returned by the call to `/construction/metadata`. Optionally, the request can also include an array of PublicKeys associated with the AccountIdentifiers returned in ConstructionPreprocessResponse.
 * @export
 * @interface ConstructionPayloadsRequest
 */
export interface ConstructionPayloadsRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof ConstructionPayloadsRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     *
     * @type {Array<Operation>}
     * @memberof ConstructionPayloadsRequest
     */
    operations: Array<Operation>;
    /**
     *
     * @type {any}
     * @memberof ConstructionPayloadsRequest
     */
    metadata?: any;
    /**
     *
     * @type {Array<PublicKey>}
     * @memberof ConstructionPayloadsRequest
     */
    public_keys?: Array<PublicKey>;
}

export function ConstructionPayloadsRequestFromJSON(json: any): ConstructionPayloadsRequest {
    return ConstructionPayloadsRequestFromJSONTyped(json, false);
}

export function ConstructionPayloadsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionPayloadsRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: NetworkIdentifierFromJSON(json['network_identifier']),
        operations: (json['operations'] as Array<any>).map(OperationFromJSON),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
        public_keys: !exists(json, 'public_keys') ? undefined : (json['public_keys'] as Array<any>).map(PublicKeyFromJSON),
    };
}

export function ConstructionPayloadsRequestToJSON(value?: ConstructionPayloadsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        operations: (value.operations as Array<any>).map(OperationToJSON),
        metadata: value.metadata,
        public_keys: value.public_keys === undefined ? undefined : (value.public_keys as Array<any>).map(PublicKeyToJSON),
    };
}
