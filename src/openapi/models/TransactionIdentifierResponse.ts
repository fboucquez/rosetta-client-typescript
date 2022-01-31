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
import { TransactionIdentifier, TransactionIdentifierFromJSON, TransactionIdentifierToJSON } from './';

/**
 * TransactionIdentifierResponse contains the transaction_identifier of a transaction that was submitted to either `/construction/hash` or `/construction/submit`.
 * @export
 * @interface TransactionIdentifierResponse
 */
export interface TransactionIdentifierResponse {
    /**
     *
     * @type {TransactionIdentifier}
     * @memberof TransactionIdentifierResponse
     */
    transaction_identifier: TransactionIdentifier;
    /**
     *
     * @type {any}
     * @memberof TransactionIdentifierResponse
     */
    metadata?: any;
}

export function TransactionIdentifierResponseFromJSON(json: any): TransactionIdentifierResponse {
    return TransactionIdentifierResponseFromJSONTyped(json, false);
}

export function TransactionIdentifierResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionIdentifierResponse {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        transaction_identifier: TransactionIdentifierFromJSON(json['transaction_identifier']),
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function TransactionIdentifierResponseToJSON(value?: TransactionIdentifierResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        transaction_identifier: TransactionIdentifierToJSON(value.transaction_identifier),
        metadata: value.metadata,
    };
}
