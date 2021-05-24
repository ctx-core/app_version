import { _versioned } from './_versioned'
import type { _version_params_I } from './_version'
/**
 * _versioned with ctx
 * @param {*}ctx
 * @returns {string}
 */
export function __versioned(params:_version_params_I) {
	return function __versioned(url:string) {
		return _versioned(url, params)
	}
}
