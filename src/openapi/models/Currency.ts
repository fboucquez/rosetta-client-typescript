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
/**
 * Currency is composed of a canonical Symbol and Decimals. This Decimals value is used to convert an Amount.Value from atomic units (Satoshis) to standard units (Bitcoins).
 * @export
 * @interface Currency
 */
export interface Currency {
    /**
     * Canonical symbol associated with a currency.
     * @type {string}
     * @memberof Currency
     */
    symbol: string;
    /**
     * Number of decimal places in the standard unit representation of the amount. For example, BTC has 8 decimals. Note that it is not possible to represent the value of some currency in atomic units that is not base 10.
     * @type {number}
     * @memberof Currency
     */
    decimals: number;
    /**
     * Any additional information related to the currency itself. For example, it would be useful to populate this object with the contract address of an ERC-20 token.
     * @type {any}
     * @memberof Currency
     */
    metadata?: any;
}

export function CurrencyFromJSON(json: any): Currency {
    return CurrencyFromJSONTyped(json, false);
}

export function CurrencyFromJSONTyped(json: any, ignoreDiscriminator: boolean): Currency {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        symbol: json['symbol'],
        decimals: json['decimals'],
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function CurrencyToJSON(value?: Currency | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        symbol: value.symbol,
        decimals: value.decimals,
        metadata: value.metadata,
    };
}
