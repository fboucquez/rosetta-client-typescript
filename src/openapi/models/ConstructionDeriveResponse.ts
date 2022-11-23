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
import { AccountIdentifier, AccountIdentifierFromJSON, AccountIdentifierToJSON } from './';

/**
 * ConstructionDeriveResponse is returned by the `/construction/derive` endpoint.
 * @export
 * @interface ConstructionDeriveResponse
 */
export interface ConstructionDeriveResponse {
    /**
     * [DEPRECATED by `account_identifier` in `v1.4.4`] Address in network-specific format.
     * @type {string}
     * @memberof ConstructionDeriveResponse
     */
    address?: string;
    /**
     *
     * @type {AccountIdentifier}
     * @memberof ConstructionDeriveResponse
     */
    account_identifier?: AccountIdentifier;
    /**
     *
     * @type {any}
     * @memberof ConstructionDeriveResponse
     */
    metadata?: any;
}

export function ConstructionDeriveResponseFromJSON(json: any): ConstructionDeriveResponse {
    return ConstructionDeriveResponseFromJSONTyped(json, false);
}

export function ConstructionDeriveResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionDeriveResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        address: !exists(json, 'address') ? undefined : json['address'],
        account_identifier: !exists(json, 'account_identifier') ? undefined : AccountIdentifierFromJSON(json['account_identifier']),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function ConstructionDeriveResponseToJSON(value?: ConstructionDeriveResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        address: value.address,
        account_identifier: AccountIdentifierToJSON(value.account_identifier),
        metadata: value.metadata,
    };
}