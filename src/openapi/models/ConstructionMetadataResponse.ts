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
import { Amount, AmountFromJSON, AmountToJSON } from './';

/**
 * The ConstructionMetadataResponse returns network-specific metadata used for transaction construction. Optionally, the implementer can return the suggested fee associated with the transaction being constructed. The caller may use this info to adjust the intent of the transaction or to create a transaction with a different account that can pay the suggested fee. Suggested fee is an array in case fee payment must occur in multiple currencies.
 * @export
 * @interface ConstructionMetadataResponse
 */
export interface ConstructionMetadataResponse {
    /**
     *
     * @type {any}
     * @memberof ConstructionMetadataResponse
     */
    metadata: any;
    /**
     *
     * @type {Array<Amount>}
     * @memberof ConstructionMetadataResponse
     */
    suggested_fee?: Array<Amount>;
}

export function ConstructionMetadataResponseFromJSON(json: any): ConstructionMetadataResponse {
    return ConstructionMetadataResponseFromJSONTyped(json, false);
}

export function ConstructionMetadataResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConstructionMetadataResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        metadata: json['metadata'],
        suggested_fee: !exists(json, 'suggested_fee') ? undefined : (json['suggested_fee'] as Array<any>).map(AmountFromJSON),
    };
}

export function ConstructionMetadataResponseToJSON(value?: ConstructionMetadataResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        metadata: value.metadata,
        suggested_fee: value.suggested_fee === undefined ? undefined : (value.suggested_fee as Array<any>).map(AmountToJSON),
    };
}
