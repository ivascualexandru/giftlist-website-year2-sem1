
import Router from 'koa-router'

const router = new Router({ prefix: '/secure' })

import Entries from '../modules/entries.js'
const dbName = 'website.db'

async function checkAuth(ctx, next) {
	console.log('secure router middleware')
	console.log(ctx.hbs)
	if(ctx.hbs.authorised !== true) return ctx.redirect('/login?msg=you need to log in&referrer=/secure')
	await next()
}

router.use(checkAuth)

router.get('/', async ctx => {
	const entries = await new Entries(dbName)
	try {
<<<<<<< HEAD
		const records = await entries.all()
=======
		const records = await contacts.all()
>>>>>>> stage1part3
		console.log(records)
		ctx.hbs.records = records
		await ctx.render('secure', ctx.hbs)
	} catch(err) {
		ctx.hbs.error = err.message
		await ctx.render('error', ctx.hbs)
	}
})

router.get('/details/:id', async ctx => {
<<<<<<< HEAD
  const entries = await new Entries(dbName)
  try {
    console.log(`record: ${ctx.params.id}`)
    ctx.hbs.contact = await entries.getByID(ctx.params.id)
    console.log(ctx.hbs)
    ctx.hbs.id = ctx.params.id
    await ctx.render('details', ctx.hbs)
  } catch(err){
    console.log(err)
    await ctx.render('error', ctx.hbs)
  }
=======
	const contacts = await new Contacts(dbName)
	try {
		console.log(`record: ${ctx.params.id}`)
		ctx.hbs.contact = await contacts.getByID(ctx.params.id)
		console.log(ctx.hbs)
		ctx.hbs.id = ctx.params.id
		await ctx.render('details', ctx.hbs)
	} catch(err) {
		console.log(err)
		await ctx.render('error', ctx.hbs)
	}
>>>>>>> stage1part3
})

router.get('/add', async ctx => {
	await ctx.render('add', ctx.hbs)
})

router.post('/add', async ctx => {
	const entries = await new Entries(dbName)
	try {
		ctx.request.body.account = ctx.session.userid
		if (ctx.request.files.photo.name) {
			ctx.request.body.filePath = ctx.request.files.photo.path
			ctx.request.body.fileName = ctx.request.files.photo.name
			ctx.request.body.fileType = ctx.request.files.photo.type
			ctx.request.body.account = ctx.session.userid
		}
		await entries.add(ctx.request.body)
		return ctx.redirect('/secure?msg=new event added')
	} catch(err) {
		console.log(err)
		await ctx.render('error', ctx.hbs)
	} finally {
		entries.close()
	}
	console.log('adding new event')
})

export default router
