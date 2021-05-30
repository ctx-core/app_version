export function version_(params?:version_params__I) {
	return (
		(params && (params.CACHE_VERSION || params.VERSION))
		|| process.env.CACHE_VERSION
		|| process.env.VERSION
		|| Math.random()
	)
}
export interface version_params__I {
	CACHE_VERSION?:string
	VERSION?:string
}
