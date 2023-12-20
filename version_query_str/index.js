/// <reference types="./index.d.ts" />
import { version_ } from '../version/index.js'
/**
 * version query param
 * @param {version__params_T}params
 * @returns {string}
 */
export function version_query_str_(
	params
) {
	return `v=${encodeURIComponent(version_(params))}`
}
