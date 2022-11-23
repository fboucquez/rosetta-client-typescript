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
import {
    AccountIdentifier,
    AccountIdentifierFromJSON,
    AccountIdentifierToJSON,
    Currency,
    CurrencyFromJSON,
    CurrencyToJSON,
    NetworkIdentifier,
    NetworkIdentifierFromJSON,
    NetworkIdentifierToJSON,
} from './';

/**
 * AccountCoinsRequest is utilized to make a request on the /account/coins endpoint.
 * @export
 * @interface AccountCoinsRequest
 */
export interface AccountCoinsRequest {
    /**
     *
     * @type {NetworkIdentifier}
     * @memberof AccountCoinsRequest
     */
    network_identifier: NetworkIdentifier;
    /**
     *
     * @type {AccountIdentifier}
     * @memberof AccountCoinsRequest
     */
    account_identifier: AccountIdentifier;
    /**
     * Include state from the mempool when looking up an account's unspent coins. Note, using this functionality breaks any guarantee of idempotency.
     * @type {boolean}
     * @memberof AccountCoinsRequest
     */
    include_mempool: boolean;
    /**
     * In some cases, the caller may not want to retrieve coins for all currencies for an AccountIdentifier. If the currencies field is populated, only coins for the specified currencies will be returned. If not populated, all unspent coins will be returned.
     * @type {Array<Currency>}
     * @memberof AccountCoinsRequest
     */
    currencies?: Array<Currency>;
}

export function AccountCoinsRequestFromJSON(json: any): AccountCoinsRequest {
    return AccountCoinsRequestFromJSONTyped(json, false);
}

export function AccountCoinsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountCoinsRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        network_identifier: NetworkIdentifierFromJSON(json['network_identifier']),
        account_identifier: AccountIdentifierFromJSON(json['account_identifier']),
        include_mempool: json['include_mempool'],
        currencies: !exists(json, 'currencies') ? undefined : (json['currencies'] as Array<any>).map(CurrencyFromJSON),
    };
}

export function AccountCoinsRequestToJSON(value?: AccountCoinsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        network_identifier: NetworkIdentifierToJSON(value.network_identifier),
        account_identifier: AccountIdentifierToJSON(value.account_identifier),
        include_mempool: value.include_mempool,
        currencies: value.currencies === undefined ? undefined : (value.currencies as Array<any>).map(CurrencyToJSON),
    };
}
