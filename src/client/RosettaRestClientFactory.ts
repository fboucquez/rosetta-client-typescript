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
import fetch from 'cross-fetch';
import {
    AccountApi,
    BlockApi,
    CallApi,
    Configuration,
    ConstructionApi,
    EventsApi,
    MempoolApi,
    Middleware,
    NetworkApi,
    SearchApi,
} from '../openapi';

/**
 * Params used to create a client factory.
 */
interface RestClientFactoryParams {
    /**
     * The rest url of the Rosetta service. E.g: http://localhost:8080/
     */
    url: string;

    /**
     * Optional fetch api.
     */
    fetchApi?: unknown;

    /**
     * Middleware for pre/post request customizations.
     */
    middleware?: Middleware[];
}

/**
 * Main class used to create Rosetta rest clients.
 *
 * These rest client would most likely be used for Rosetta e2e testing as this sdk brings server side dependencies (e.g. express) you may not want in a Rosetta client.
 *
 */
export class RosettaRestClientFactory {
    private readonly configuration: Configuration;

    /**
     * Constructor
     *
     * @param configs the config used to tune the client, including url, custom fetch implementation and middleware.
     */
    constructor(configs: RestClientFactoryParams) {
        const fetchApi = configs.fetchApi || (typeof window !== 'undefined' && window.fetch.bind(window)) || fetch;

        this.configuration = new Configuration({
            basePath: configs.url,
            fetchApi: fetchApi,
            middleware: configs.middleware || [],
        });
    }

    account(): AccountApi {
        return new AccountApi(this.configuration);
    }

    block(): BlockApi {
        return new BlockApi(this.configuration);
    }

    events(): EventsApi {
        return new EventsApi(this.configuration);
    }

    construction(): ConstructionApi {
        return new ConstructionApi(this.configuration);
    }

    call(): CallApi {
        return new CallApi(this.configuration);
    }

    mempool(): MempoolApi {
        return new MempoolApi(this.configuration);
    }

    network(): NetworkApi {
        return new NetworkApi(this.configuration);
    }

    search(): SearchApi {
        return new SearchApi(this.configuration);
    }
}
