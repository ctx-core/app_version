import { _versioned } from './_versioned'
import type { _version_params_I } from './_version'
/**
 * _versioned with ctx
 * @param {*}ctx
 * @returns {string}
 */
export function __versioned(params?:_version_params_I) {
	return function _versioned__versioned(url:string) {
		return _versioned(url, params)
	}
}
