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
/**
 * 
 * @export
 * @interface ModelScanResultsMaskRequest
 */
export interface ModelScanResultsMaskRequest {
    /**
     * 
     * @type {boolean}
     * @memberof ModelScanResultsMaskRequest
     */
    mask_across_hosts_and_images?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ModelScanResultsMaskRequest
     */
    node_ids: Array<string> | null;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsMaskRequest
     */
    scan_id: string;
    /**
     * 
     * @type {string}
     * @memberof ModelScanResultsMaskRequest
     */
    scan_type: ModelScanResultsMaskRequestScanTypeEnum;
}


/**
 * @export
 */
export const ModelScanResultsMaskRequestScanTypeEnum = {
    SecretScan: 'SecretScan',
    VulnerabilityScan: 'VulnerabilityScan',
    MalwareScan: 'MalwareScan',
    ComplianceScan: 'ComplianceScan',
    CloudComplianceScan: 'CloudComplianceScan'
} as const;
export type ModelScanResultsMaskRequestScanTypeEnum = typeof ModelScanResultsMaskRequestScanTypeEnum[keyof typeof ModelScanResultsMaskRequestScanTypeEnum];


/**
 * Check if a given object implements the ModelScanResultsMaskRequest interface.
 */
export function instanceOfModelScanResultsMaskRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "node_ids" in value;
    isInstance = isInstance && "scan_id" in value;
    isInstance = isInstance && "scan_type" in value;

    return isInstance;
}

export function ModelScanResultsMaskRequestFromJSON(json: any): ModelScanResultsMaskRequest {
    return ModelScanResultsMaskRequestFromJSONTyped(json, false);
}

export function ModelScanResultsMaskRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelScanResultsMaskRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mask_across_hosts_and_images': !exists(json, 'mask_across_hosts_and_images') ? undefined : json['mask_across_hosts_and_images'],
        'node_ids': json['node_ids'],
        'scan_id': json['scan_id'],
        'scan_type': json['scan_type'],
    };
}

export function ModelScanResultsMaskRequestToJSON(value?: ModelScanResultsMaskRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mask_across_hosts_and_images': value.mask_across_hosts_and_images,
        'node_ids': value.node_ids,
        'scan_id': value.scan_id,
        'scan_type': value.scan_type,
    };
}

