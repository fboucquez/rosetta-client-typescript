/*
 * Copyright 2022 Fernando Boucquez
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { expect } from 'chai';
import { it } from 'mocha';
import { RosettaRestClientFactory } from 'rosetta-client-typescript';

describe('RosettaRestClientFactory', () => {
    it('constructor', async () => {
        const factory = new RosettaRestClientFactory({ url: 'http://localhost:8080' });
        expect(factory).not.undefined;
        expect(factory.account()).not.undefined;
        expect(factory.network()).not.undefined;
        expect(factory.block()).not.undefined;
        expect(factory.call()).not.undefined;
        expect(factory.events()).not.undefined;
        expect(factory.network()).not.undefined;
        expect(factory.construction()).not.undefined;
        expect(factory.mempool()).not.undefined;
        expect(factory.search()).not.undefined;

        // const network = factory.network();
        // const networks = await network.networkList({});
        // console.log(networks);
        // console.log(await network.networkOptions({network_identifier: networks.network_identifiers[0]}));
        // console.log(await network.networkOptions({
        //     network_identifier: {
        //         network: 'abc', blockchain: 'bcd'
        //     }
        // }));
    });
});
