import { _version, _version_params_I } from './_version'
/**
 * versioned file
 * @param {*}ctx
 * @param {string} url
 * @returns {string}
 */
export function _versioned(url:string, params:_version_params_I) {
	return `${url}?${_version(params)}`
}
