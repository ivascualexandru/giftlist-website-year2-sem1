
import test from 'ava'
import Entries from '../modules/entries.js'


test(' ADD NEW  : it works with 5 items', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: 'Test item 2',
      	item2link: 'abcd',
      	item2price: '16',
      	item3name: 'Test item 3',
      	item3link: 'abcg',
      	item3price: '18',
      	item4name: 'Test item 4',
      	item4link: 'abcf',
      	item4price: '11',
      	item5name: 'Test item 5',
      	item5link: 'abcd',
      	item5price: '15'
      }
	try {
		const addData = await entry.add(data)
		test.is(addData,true,'Cannot add data')
	} catch(err) {
		test.fail(err.message, 'error thrown')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : it works with 4 items', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: 'Test item 2',
      	item2link: 'abcd',
      	item2price: '16',
      	item3name: 'Test item 3',
      	item3link: 'abcg',
      	item3price: '18',
      	item4name: 'Test item 4',
      	item4link: 'abcf',
      	item4price: '11',
      	item5name: '',
      	item5link: '',
      	item5price: ''
      }
	try {
		const addData = await entry.add(data)
		test.is(addData,true,'Cannot add data')
	} catch(err) {
		test.fail(err.message, 'error thrown')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : it works with 3 items', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: 'Test item 2',
      	item2link: 'abcd',
      	item2price: '16',
      	item3name: 'Test item 3',
      	item3link: 'abcg',
      	item3price: '18',
      	item4name: '',
      	item4link: '',
      	item4price: '',
      	item5name: '',
      	item5link: '',
      	item5price: ''
      }
	try {
		const addData = await entry.add(data)
		test.is(addData,true,'Cannot add data')
	} catch(err) {
		test.fail(err.message, 'error thrown')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : it works with 2 items', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: 'Test item 2',
      	item2link: 'abcd',
      	item2price: '16',
      	item3name: '',
      	item3link: '',
      	item3price: '',
      	item4name: '',
      	item4link: '',
      	item4price: '',
      	item5name: '',
      	item5link: '',
      	item5price: ''
      }
	try {
		const addData = await entry.add(data)
		test.is(addData,true,'Cannot add data')
	} catch(err) {
		test.fail(err.message, 'error thrown')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : it works with 1 item', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: '',
      	item2link: '',
      	item2price: '',
      	item3name: '',
      	item3link: '',
      	item3price: '',
      	item4name: '',
      	item4link: '',
      	item4price: '',
      	item5name: '',
      	item5link: '',
      	item5price: ''
      }
	try {
		const addData = await entry.add(data)
		test.is(addData,true,'Cannot add data')
	} catch(err) {
		test.fail(err.message, 'error thrown')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : not all item 1 fields filled in', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '',
      	item2name: '',
      	item2link: '',
      	item2price: '',
      	item3name: '',
      	item3link: '',
      	item3price: '',
      	item4name: '',
      	item4link: '',
      	item4price: '',
      	item5name: '',
      	item5link: '',
      	item5price: ''
      }
	try {
		await entry.add(data)
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'not all item 1 fields filled in', 'incorrect error message')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : not all item 2 fields filled in', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: '',
      	item2link: 'abcd',
      	item2price: '16',
      	item3name: '',
      	item3link: '',
      	item3price: '',
      	item4name: '',
      	item4link: '',
      	item4price: '',
      	item5name: '',
      	item5link: '',
      	item5price: ''
      }
	try {
		await entry.add(data)
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'not all item 2 fields filled in', 'incorrect error message')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : not all item 3 fields filled in', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: 'Test item 2',
      	item2link: 'abcd',
      	item2price: '16',
      	item3name: 'Test item 3',
      	item3link: '',
      	item3price: '67',
      	item4name: '',
      	item4link: '',
      	item4price: '',
      	item5name: '',
      	item5link: '',
      	item5price: ''
      }
	try {
		await entry.add(data)
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'not all item 3 fields filled in', 'incorrect error message')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : not all item 4 fields filled in', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: 'Test item 2',
      	item2link: 'abcd',
      	item2price: '16',
      	item3name: 'Test item 3',
      	item3link: 'abcg',
      	item3price: '18',
      	item4name: 'Test item 4',
      	item4link: 'abcf',
      	item4price: '',
      	item5name: '',
      	item5link: '',
      	item5price: ''
      }
	try {
		await entry.add(data)
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'not all item 4 fields filled in', 'incorrect error message')
	} finally {
		entry.close()
	}
})

test(' ADD NEW  : not all item 5 fields filled in', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data =
      {
      	account: 1,
      	title: 'Test Event',
      	filename: 'testphoto.jpg',
      	description: 'This is a test events description. Pay this no mind',
      	date: '2020-11-15 15:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abc',
      	item1price: '16',
      	item2name: 'Test item 2',
      	item2link: 'abcd',
      	item2price: '16',
      	item3name: 'Test item 3',
      	item3link: 'abcg',
      	item3price: '18',
      	item4name: 'Test item 4',
      	item4link: 'abcf',
      	item4price: '11',
      	item5name: 'Test item 5',
      	item5link: 'abcd',
      	item5price: ''
      }
	try {
		await entry.add(data)
		test.fail('error not thrown')
	} catch(err) {
		test.is(err.message, 'not all item 5 fields filled in', 'incorrect error message')
	} finally {
		entry.close()
	}
})
