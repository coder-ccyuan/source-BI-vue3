/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChartControllerService {
    /**
     * analysis
     * @param file file
     * @param goal goal
     * @param type type
     * @returns any OK
     * @throws ApiError
     */
    public static analysisUsingPost(
        file: Blob,
        goal?: string,
        type?: string,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/chart/analysis',
            query: {
                'goal': goal,
                'type': type,
            },
            formData: {
                'file': file,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
