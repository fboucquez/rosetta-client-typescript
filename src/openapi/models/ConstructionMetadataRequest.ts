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
import { NetworkIdentifier, NetworkIdentifierFromJSON, NetworkIdentifierToJSON, PublicKey, PublicKeyFromJSON, PublicKeyToJSON } from './';

/**
 * A ConstructionMetadataRequest is utilized to get information required to construct a transaction. The Options object used to specify which metadata to return is left purposely unstructured to allow flexibility for implementers. Options is not required in the case that there is network-wide metadata of interest. Optionally, the request can also include an array of PublicKeys associated with the AccountIdentifiers returned in ConstructionPreprocessResponse.
 * @export
 * @interface ConstructionMetadataRequest
 */
export interface ConstructionMetadataRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof ConstructionMetadataRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     * Some blockchains require different metadata for different types of transaction construction (ex: delegation versus a transfer). Instead of requiring a blockchain node to return all possible types of metadata for construction (which may require multiple node fetches), the client can populate an options object to limit the metadata returned to only the subset required.
     * @type {any}
     * @memberof ConstructionMetadataRequest
     */
    options?: any;
    /**
     *
     * @type {Array<PublicKey>}
     * @memberof ConstructionMetadataRequest
     */
    public_keys?: Array<PublicKey>;
}

export function ConstructionMetadataRequestFromJSON(json: any): ConstructionMetadataRequest {
    return ConstructionMetadataRequestFromJSONTyped(json, false);
}

export function ConstructionMetadataRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionMetadataRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: NetworkIdentifierFromJSON(json['network_identifier']),
        options: !exists(json, 'options') ? undefined : json['options'],
        public_keys: !exists(json, 'public_keys') ? undefined : (json['public_keys'] as Array<any>).map(PublicKeyFromJSON),
    };
}

export function ConstructionMetadataRequestToJSON(value?: ConstructionMetadataRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        options: value.options,
        public_keys: value.public_keys === undefined ? undefined : (value.public_keys as Array<any>).map(PublicKeyToJSON),
    };
}
