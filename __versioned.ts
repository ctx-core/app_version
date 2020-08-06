import { _versioned } from './_versioned'
/**
 * _versioned with ctx
 * @param {*}ctx
 * @returns {string}
 */
export function __versioned(ctx) {
	return function _versioned__versioned(url) {
		return _versioned(ctx, url)
	}
}
