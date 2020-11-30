
import test from 'ava'
import Accounts from '../modules/accounts.js'
import Contacts from '../modules/contacts.js'

test('REGISTER : register and log in with a valid account', async test => {
	test.plan(1)
	const account = await new Accounts() // no database specified so runs in-memory
	try {
		await account.register('doej', 'password', 'doej@gmail.com')
	  const login = await account.login('doej', 'password')
		test.is(login, true, 'unable to log in')
	} catch(err) {
		test.fail('error thrown')
	} finally {
		account.close()
	}
})

test('REGISTER : register a duplicate username', async test => {
	test.plan(1)
	const account = await new Accounts()
	try {
		await account.register('doej', 'password', 'doej@gmail.com')
		await account.register('doej', 'password', 'doej@gmail.com')
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'username "doej" already in use', 'incorrect error message')
	} finally {
		account.close()
	}
})

test('REGISTER : error if blank username', async test => {
	test.plan(1)
	const account = await new Accounts()
	try {
		await account.register('', 'password', 'doej@gmail.com')
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'missing field', 'incorrect error message')
	} finally {
		account.close()
	}
})

test('REGISTER : error if blank password', async test => {
	test.plan(1)
	const account = await new Accounts()
	try {
		await account.register('doej', '', 'doej@gmail.com')
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'missing field', 'incorrect error message')
	} finally {
		account.close()
	}
})

test('REGISTER : error if blank email', async test => {
	test.plan(1)
	const account = await new Accounts()
	try {
		await account.register('doej', 'password', '')
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'missing field', 'incorrect error message')
	} finally {
		account.close()
	}
})

test('REGISTER : error if duplicate email', async test => {
	test.plan(1)
	const account = await new Accounts()
	try {
		await account.register('doej', 'password', 'doej@gmail.com')
		await account.register('bloggsj', 'newpassword', 'doej@gmail.com')
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'email address "doej@gmail.com" is already in use', 'incorrect error message')
	} finally {
		account.close()
	}
})

test('LOGIN    : invalid username', async test => {
	test.plan(1)
	const account = await new Accounts()
	try {
		await account.register('doej', 'password', 'doej@gmail.com')
		await account.login('roej', 'password')
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'username "roej" not found', 'incorrect error message')
	} finally {
		account.close()
	}
})

test('LOGIN    : invalid password', async test => {
	test.plan(1)
	const account = await new Accounts()
	try {
		await account.register('doej', 'password', 'doej@gmail.com')
		await account.login('doej', 'bad')
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'invalid password for account "doej"', 'incorrect error message')
	} finally {
		account.close()
	}
})

test('ADD NEW  : check if link', async test => {
	test.plan(1)
	const account = await new Accounts()
  const contact = await new Contacts()
  try {
    //let data
    let data.accountNo = 1
    let data.title = "Test Event"
    let data.filename = "testphoto.jpg"
    let data.description = "This is a test events description. Pay this no mind"
    let data.date = "2020-11-15 15:31:40"
    let data.item1name = "Test item 1"
    let data.item1link = "https://www.amazon.com/Samsung-Inch-Internal-MZ-76E1T0B-AM/dp/B078DPCY3T/ref=lp_16225007011_1_2?s=computers-intl-ship&ie=UTF8&qid=1606745162&sr=1-2"
    let data.item1price = "16"
    const addData = await contacts.add(data)
    test.is(addData,true,"Cannot add data");
	} catch(err) {
    test.fail('error thrown')
	} finally {
		account.close()
	}
})