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

import {
    PublicKey,
    PublicKeyFromJSON,
    PublicKeyToJSON,
    SignatureType,
    SignatureTypeFromJSON,
    SignatureTypeToJSON,
    SigningPayload,
    SigningPayloadFromJSON,
    SigningPayloadToJSON,
} from './';

/**
 * Signature contains the payload that was signed, the public keys of the keypairs used to produce the signature, the signature (encoded in hex), and the SignatureType. PublicKey is often times not known during construction of the signing payloads but may be needed to combine signatures properly.
 * @export
 * @interface Signature
 */
export interface Signature {
    /**
     *
     * @type {SigningPayload}
     * @memberof Signature
     */
    signing_payload: SigningPayload;
    /**
     *
     * @type {PublicKey}
     * @memberof Signature
     */
    public_key: PublicKey;
    /**
     *
     * @type {SignatureType}
     * @memberof Signature
     */
    signature_type: SignatureType;
    /**
     *
     * @type {string}
     * @memberof Signature
     */
    hex_bytes: string;
}

export function SignatureFromJSON(json: any): Signature {
    return SignatureFromJSONTyped(json, false);
}

export function SignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Signature {
    if (json === undefined || json === null) {
        return json;
    }
    return {
        signing_payload: SigningPayloadFromJSON(json['signing_payload']),
        public_key: PublicKeyFromJSON(json['public_key']),
        signature_type: SignatureTypeFromJSON(json['signature_type']),
        hex_bytes: json['hex_bytes'],
    };
}

export function SignatureToJSON(value?: Signature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        signing_payload: SigningPayloadToJSON(value.signing_payload),
        public_key: PublicKeyToJSON(value.public_key),
        signature_type: SignatureTypeToJSON(value.signature_type),
        hex_bytes: value.hex_bytes,
    };
}
