/**
 * ctx-core version etag functions
 * @module @ctx-core/version__app/etag
 */
import { atob_Uint32Array_ } from '@ctx-core/atob'
export const protocol_version = 0
/**
 * Extracts weak ETag formatted with:
 *
 * - log2(64 ^ 32) ~ 192 bits
 * - {Uint32} protocol version
 * - {Uint32} CACHE_VERSION
 * - {Uint32} timestamp (optional)
 * - 96 bits - rest
 * @param {string} etag - base64 encoded etag format
 */
export function etag_ctx_(etag:string):etag_ctx_T {
	const etag$ = etag.replace('-', '')
	const atob_Uint32Array = atob_Uint32Array_(etag$)
	const protocol_version = atob_Uint32Array[0]
	const CACHE_VERSION = atob_Uint32Array[1]
	const timestamp = atob_Uint32Array[2]
	const etag_ctx:etag_ctx_T = {
		protocol_version,
		CACHE_VERSION,
		timestamp
	}
	return etag_ctx
}
export interface etag_ctx_T {
	protocol_version:number
	CACHE_VERSION:number
	timestamp:number
}
export {
	etag_ctx_ as _etag_ctx,
	etag_ctx_ as _ctx__etag,
}
