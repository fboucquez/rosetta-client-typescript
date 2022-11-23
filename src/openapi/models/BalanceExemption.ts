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
import { Currency, CurrencyFromJSON, CurrencyToJSON, ExemptionType, ExemptionTypeFromJSON, ExemptionTypeToJSON } from './';

/**
 * BalanceExemption indicates that the balance for an exempt account could change without a corresponding Operation. This typically occurs with staking rewards, vesting balances, and Currencies with a dynamic supply. Currently, it is possible to exempt an account from strict reconciliation by SubAccountIdentifier.Address or by Currency. This means that any account with SubAccountIdentifier.Address would be exempt or any balance of a particular Currency would be exempt, respectively. BalanceExemptions should be used sparingly as they may introduce significant complexity for integrators that attempt to reconcile all account balance changes. If your implementation relies on any BalanceExemptions, you MUST implement historical balance lookup (the ability to query an account balance at any BlockIdentifier).
 * @export
 * @interface BalanceExemption
 */
export interface BalanceExemption {
    /**
     * SubAccountAddress is the SubAccountIdentifier.Address that the BalanceExemption applies to (regardless of the value of SubAccountIdentifier.Metadata).
     * @type {string}
     * @memberof BalanceExemption
     */
    sub_account_address?: string;
    /**
     *
     * @type {Currency}
     * @memberof BalanceExemption
     */
    currency?: Currency;
    /**
     *
     * @type {ExemptionType}
     * @memberof BalanceExemption
     */
    exemption_type?: ExemptionType;
}

export function BalanceExemptionFromJSON(json: any): BalanceExemption {
    return BalanceExemptionFromJSONTyped(json, false);
}

export function BalanceExemptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): BalanceExemption {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        sub_account_address: !exists(json, 'sub_account_address') ? undefined : json['sub_account_address'],
        currency: !exists(json, 'currency') ? undefined : CurrencyFromJSON(json['currency']),
        exemption_type: !exists(json, 'exemption_type') ? undefined : ExemptionTypeFromJSON(json['exemption_type']),
    };
}

export function BalanceExemptionToJSON(value?: BalanceExemption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        sub_account_address: value.sub_account_address,
        currency: CurrencyToJSON(value.currency),
        exemption_type: ExemptionTypeToJSON(value.exemption_type),
    };
}
