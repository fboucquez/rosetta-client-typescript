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
 * When fetching data by BlockIdentifier, it may be possible to only specify the index or hash. If neither property is specified, it is assumed that the client is making a request at the current block.
 * @export
 * @interface PartialBlockIdentifier
 */
export interface PartialBlockIdentifier {
    /**
     *
     * @type {number}
     * @memberof PartialBlockIdentifier
     */
    index?: number;
    /**
     *
     * @type {string}
     * @memberof PartialBlockIdentifier
     */
    hash?: string;
}

export function PartialBlockIdentifierFromJSON(json: any): PartialBlockIdentifier {
    return PartialBlockIdentifierFromJSONTyped(json, false);
}

export function PartialBlockIdentifierFromJSONTyped(json: any, ignoreDiscriminator: boolean): PartialBlockIdentifier {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        index: !exists(json, 'index') ? undefined : json['index'],
        hash: !exists(json, 'hash') ? undefined : json['hash'],
    };
}

export function PartialBlockIdentifierToJSON(value?: PartialBlockIdentifier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        index: value.index,
        hash: value.hash,
    };
}
