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

/**
 * SignatureType is the type of a cryptographic signature. * ecdsa: `r (32-bytes) || s (32-bytes)` - `64 bytes` * ecdsa_recovery: `r (32-bytes) || s (32-bytes) || v (1-byte)` - `65 bytes` * ed25519: `R (32-byte) || s (32-bytes)` - `64 bytes` * schnorr_1: `r (32-bytes) || s (32-bytes)` - `64 bytes`  (schnorr signature implemented by Zilliqa where both `r` and `s` are scalars encoded as `32-bytes` values, most significant byte first.) * schnorr_poseidon: `r (32-bytes) || s (32-bytes)` where s = Hash(1st pk || 2nd pk || r) - `64 bytes`  (schnorr signature w/ Poseidon hash function implemented by O(1) Labs where both `r` and `s` are scalars encoded as `32-bytes` values, least significant byte first. https://github.com/CodaProtocol/signer-reference/blob/master/schnorr.ml )
 * @export
 * @enum {string}
 */
export enum SignatureType {
    ecdsa = 'ecdsa',
    ecdsa_recovery = 'ecdsa_recovery',
    ed25519 = 'ed25519',
    schnorr_1 = 'schnorr_1',
    schnorr_poseidon = 'schnorr_poseidon',
}

export function SignatureTypeFromJSON(json: any): SignatureType {
    return SignatureTypeFromJSONTyped(json, false);
}

export function SignatureTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SignatureType {
    return json as SignatureType;
}

export function SignatureTypeToJSON(value?: SignatureType | null): any {
    return value as any;
}