export function _version(params?:_version_params_I) {
	return (
		(params && (params.CACHE_VERSION || params.VERSION))
		|| process.env.CACHE_VERSION
		|| process.env.VERSION
		|| Math.random()
	)
}
export interface _version_params_I {
	CACHE_VERSION?:string
	VERSION?:string
}
