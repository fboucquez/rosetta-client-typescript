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

import { EventsBlocksRequest, EventsBlocksRequestToJSON, EventsBlocksResponse, EventsBlocksResponseFromJSON } from '../models';
import * as runtime from '../runtime';

export interface EventsBlocksOperationRequest {
    eventsBlocksRequest: EventsBlocksRequest;
}

/**
 *
 */
export class EventsApi extends runtime.BaseAPI {
    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Get a range of BlockEvents
     */
    async eventsBlocksRaw(
        requestParameters: EventsBlocksOperationRequest,
        initOverrides?: RequestInit,
    ): Promise<runtime.ApiResponse<EventsBlocksResponse>> {
        if (requestParameters.eventsBlocksRequest === null || requestParameters.eventsBlocksRequest === undefined) {
            throw new runtime.RequiredError(
                'eventsBlocksRequest',
                'Required parameter requestParameters.eventsBlocksRequest was null or undefined when calling eventsBlocks.',
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request(
            {
                path: `/events/blocks`,
                method: 'POST',
                headers: headerParameters,
                query: queryParameters,
                body: EventsBlocksRequestToJSON(requestParameters.eventsBlocksRequest),
            },
            initOverrides,
        );

        return new runtime.JSONApiResponse(response, (jsonValue) => EventsBlocksResponseFromJSON(jsonValue));
    }

    /**
     * `/events/blocks` allows the caller to query a sequence of BlockEvents indicating which blocks were added and removed from storage to reach the current state. Following BlockEvents allows lightweight clients to update their state without needing to implement their own syncing logic (like finding the common parent in a reorg). `/events/blocks` is considered an \"indexer\" endpoint and Rosetta implementations are not required to complete it to adhere to the Rosetta spec. However, any Rosetta \"indexer\" MUST support this endpoint.
     * [INDEXER] Get a range of BlockEvents
     */
    async eventsBlocks(eventsBlocksRequest: EventsBlocksRequest, initOverrides?: RequestInit): Promise<EventsBlocksResponse> {
        const response = await this.eventsBlocksRaw({ eventsBlocksRequest: eventsBlocksRequest }, initOverrides);
        return await response.value();
    }
}
