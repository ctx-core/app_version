import { _version, _version_params_I } from './_version'
/**
 * version query param
 * @returns {string}
 */
export function _version_query_str(params?:_version_params_I) {
	return `v=${encodeURIComponent(_version(params))}`
}
