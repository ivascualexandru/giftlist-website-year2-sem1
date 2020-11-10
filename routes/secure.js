
import Router from 'koa-router'

const router = new Router({ prefix: '/secure' })

import Contacts from '../modules/contacts.js'
const dbName = 'website.db'

async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
	await next()
}

router.use(checkAuth)

router.get('/', async ctx => {
	const contacts = await new Contacts(dbName)
	try {
		const records = await contacts.all()
		console.log(records)
		ctx.hbs.records = records
		await ctx.render('secure', ctx.hbs)
	} catch(err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
	}
})

router.get('/add', async ctx => {
	await ctx.render('add', ctx.hbs)
})

router.post('/add', async ctx => {
	const contacts = await new Contacts(dbName)
	try {
		ctx.request.body.account = ctx.session.userid
		if (ctx.request.files.photo.name) {
			ctx.request.body.filePath = ctx.request.files.photo.path
			ctx.request.body.fileName = ctx.request.files.photo.name
			ctx.request.body.fileType = ctx.request.files.photo.type
    ctx.request.body.account = ctx.session.userid
    }
    await contacts.add(ctx.request.body)
		return ctx.redirect('/secure?msg=new event added')
	} catch(err) {
		console.log(err)
		await ctx.render('error', ctx.hbs)
	} finally {
		contacts.close()
	}
	console.log('adding new event')
})

export default router
