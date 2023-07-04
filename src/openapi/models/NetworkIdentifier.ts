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
import { SubNetworkIdentifier, SubNetworkIdentifierFromJSON, SubNetworkIdentifierToJSON } from './';

/**
 * The network_identifier specifies which network a particular object is associated with.
 * @export
 * @interface NetworkIdentifier
 */
export interface NetworkIdentifier {
    /**
     *
     * @type {string}
     * @memberof NetworkIdentifier
     */
    blockchain: string;
    /**
     * If a blockchain has a specific chain-id or network identifier, it should go in this field. It is up to the client to determine which network-specific identifier is mainnet or testnet.
     * @type {string}
     * @memberof NetworkIdentifier
     */
    network: string;
    /**
     *
     * @type {SubNetworkIdentifier}
     * @memberof NetworkIdentifier
     */
    sub_network_identifier?: SubNetworkIdentifier;
}

export function NetworkIdentifierFromJSON(json: any): NetworkIdentifier {
    return NetworkIdentifierFromJSONTyped(json, false);
}

export function NetworkIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): NetworkIdentifier {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        blockchain: json['blockchain'],
        network: json['network'],
        sub_network_identifier: !exists(json, 'sub_network_identifier')
            ? undefined
            : SubNetworkIdentifierFromJSON(json['sub_network_identifier']),
    };
}

export function NetworkIdentifierToJSON(value?: NetworkIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        blockchain: value.blockchain,
        network: value.network,
        sub_network_identifier: SubNetworkIdentifierToJSON(value.sub_network_identifier),
    };
}