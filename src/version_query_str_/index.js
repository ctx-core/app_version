import { version_, version_params__I } from '../version_/index.js'
/**
 * version query param
 * @returns {string}
 */
export function version_query_str_(params) {
	return `v=${encodeURIComponent(version_(params))}`
}
