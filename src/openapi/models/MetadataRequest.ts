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
 * A MetadataRequest is utilized in any request where the only argument is optional metadata.
 * @export
 * @interface MetadataRequest
 */
export interface MetadataRequest {
    /**
     *
     * @type {any}
     * @memberof MetadataRequest
     */
    metadata?: any;
}

export function MetadataRequestFromJSON(json: any): MetadataRequest {
    return MetadataRequestFromJSONTyped(json, false);
}

export function MetadataRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): MetadataRequest {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        metadata: !exists(json, 'metadata') ? undefined : json['metadata'],
    };
}

export function MetadataRequestToJSON(value?: MetadataRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        metadata: value.metadata,
    };
}
