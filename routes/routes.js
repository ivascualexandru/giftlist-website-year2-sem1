
import Router from 'koa-router'

import publicRouter from './public.js'
import secureRouter from'./secure.js'
import infoRouter from './newevent.js'

const mainRouter = new Router()

const nestedRoutes = [publicRouter, secureRouter, infoRouter]
for (const router of nestedRoutes) {
	mainRouter.use(router.routes())
	mainRouter.use(router.allowedMethods())
}

export default mainRouter
