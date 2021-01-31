import { _version } from './_version'
/**
 * version query param
 * @returns {string}
 */
export function _version_query_str(opts?) {
	return `v=${encodeURIComponent(_version(opts))}`
}
