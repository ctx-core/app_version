import { version_ } from '../version_/index.js'
/**
 * version query param
 * @returns {string}
 */
export function version_query_str_(params) {
	return `v=${encodeURIComponent(version_(params))}`
}
