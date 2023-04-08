/* tslint:disable */
/* eslint-disable */
/**
 * Deepfence ThreatMapper
 * Deepfence Runtime API provides programmatic control over Deepfence microservice securing your container, kubernetes and cloud deployments. The API abstracts away underlying infrastructure details like cloud provider,  container distros, container orchestrator and type of deployment. This is one uniform API to manage and control security alerts, policies and response to alerts for microservices running anywhere i.e. managed pure greenfield container deployments or a mix of containers, VMs and serverless paradigms like AWS Fargate.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: community@deepfence.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UtilsReportFilters } from './UtilsReportFilters';
import {
    UtilsReportFiltersFromJSON,
    UtilsReportFiltersFromJSONTyped,
    UtilsReportFiltersToJSON,
} from './UtilsReportFilters';

/**
 * 
 * @export
 * @interface ModelGenerateReportReq
 */
export interface ModelGenerateReportReq {
    /**
     * 
     * @type {number}
     * @memberof ModelGenerateReportReq
     */
    duration?: ModelGenerateReportReqDurationEnum;
    /**
     * 
     * @type {UtilsReportFilters}
     * @memberof ModelGenerateReportReq
     */
    filters?: UtilsReportFilters;
    /**
     * 
     * @type {string}
     * @memberof ModelGenerateReportReq
     */
    report_type: ModelGenerateReportReqReportTypeEnum;
}


/**
 * @export
 */
export const ModelGenerateReportReqDurationEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_7: 7,
    NUMBER_30: 30,
    NUMBER_60: 60,
    NUMBER_90: 90,
    NUMBER_180: 180
} as const;
export type ModelGenerateReportReqDurationEnum = typeof ModelGenerateReportReqDurationEnum[keyof typeof ModelGenerateReportReqDurationEnum];

/**
 * @export
 */
export const ModelGenerateReportReqReportTypeEnum = {
    Pdf: 'pdf',
    Xlsx: 'xlsx'
} as const;
export type ModelGenerateReportReqReportTypeEnum = typeof ModelGenerateReportReqReportTypeEnum[keyof typeof ModelGenerateReportReqReportTypeEnum];


/**
 * Check if a given object implements the ModelGenerateReportReq interface.
 */
export function instanceOfModelGenerateReportReq(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "report_type" in value;

    return isInstance;
}

export function ModelGenerateReportReqFromJSON(json: any): ModelGenerateReportReq {
    return ModelGenerateReportReqFromJSONTyped(json, false);
}

export function ModelGenerateReportReqFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelGenerateReportReq {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'filters': !exists(json, 'filters') ? undefined : UtilsReportFiltersFromJSON(json['filters']),
        'report_type': json['report_type'],
    };
}

export function ModelGenerateReportReqToJSON(value?: ModelGenerateReportReq | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'duration': value.duration,
        'filters': UtilsReportFiltersToJSON(value.filters),
        'report_type': value.report_type,
    };
}

