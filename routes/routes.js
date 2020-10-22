
import Router from 'koa-router'

import publicRouter from './public.js'
import glRouter from'./gl.js'

const mainRouter = new Router()

const nestedRoutes = [publicRouter, glRouter]
for (const router of nestedRoutes) {
	mainRouter.use(router.routes())
	mainRouter.use(router.allowedMethods())
}

export default mainRouter
