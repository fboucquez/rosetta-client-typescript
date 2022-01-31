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
import { SubAccountIdentifier, SubAccountIdentifierFromJSON, SubAccountIdentifierToJSON } from './';

/**
 * The account_identifier uniquely identifies an account within a network. All fields in the account_identifier are utilized to determine this uniqueness (including the metadata field, if populated).
 * @export
 * @interface AccountIdentifier
 */
export interface AccountIdentifier {
    /**
     * The address may be a cryptographic public key (or some encoding of it) or a provided username.
     * @type {string}
     * @memberof AccountIdentifier
     */
    address: string;
    /**
     *
     * @type {SubAccountIdentifier}
     * @memberof AccountIdentifier
     */
    sub_account?: SubAccountIdentifier;
    /**
     * Blockchains that utilize a username model (where the address is not a derivative of a cryptographic public key) should specify the public key(s) owned by the address in metadata.
     * @type {any}
     * @memberof AccountIdentifier
     */
    metadata?: any;
}

export function AccountIdentifierFromJSON(json: any): AccountIdentifier {
    return AccountIdentifierFromJSONTyped(json, false);
}

export function AccountIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountIdentifier {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        address: json['address'],
        sub_account: !exists(json, 'sub_account') ? undefined : SubAccountIdentifierFromJSON(json['sub_account']),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function AccountIdentifierToJSON(value?: AccountIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        address: value.address,
        sub_account: SubAccountIdentifierToJSON(value.sub_account),
        metadata: value.metadata,
    };
}
