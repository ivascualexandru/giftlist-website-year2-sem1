
import Router from 'koa-router'

const router = new Router({ prefix: '/newevent' })


async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
	await next()
}

router.use(checkAuth)


/**
 * The page the browser accesses to prompt the user to input information for new events
 *
 * @name Add New Event
 * @route {GET} /newevent
 */
router.get('/', async ctx => {
	try {
		await ctx.render('newevent', ctx.hbs)
	} catch(err) {
		await ctx.render('error', ctx.hbs)
	}
})


export default router
