import { derived } from 'svelte/store'
import { _b } from '@ctx-core/object'
import { b__CACHE_VERSION, b__VERSION } from '@ctx-core/env/store'
export const b__version__app = _b('__version__app', ctx=>
	derived([
			b__CACHE_VERSION(ctx),
			b__VERSION(ctx),
		],
		([CACHE_VERSION, VERSION])=>
			CACHE_VERSION
			|| VERSION
			|| Math.random()))
export const __version__app = b__version__app()
export const b__query__version__app = _b('__query__version__app', ctx=>
	derived(
		b__version__app(ctx),
		(version__app:string)=>
			`v=${encodeURIComponent(version__app)}`))
export const __query__version__app = b__query__version__app()
