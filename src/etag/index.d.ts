/**
 * ctx-core version etag functions
 * @module @ctx-core/version__app/etag
 */
export declare const protocol_version:number
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
export declare function etag_o_(etag:string):etag_o_T
export {
	etag_o_ as etag_ctx_,
	etag_o_ as _etag_ctx,
	etag_o_ as _ctx__etag,
}
export interface etag_o_T {
	protocol_version:number
	CACHE_VERSION:number
	timestamp:number
}
export declare type etag_ctx_T = etag_o_T

