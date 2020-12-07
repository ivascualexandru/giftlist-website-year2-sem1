
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
<<<<<<< HEAD
=======

test(' ADD NEW  : get specific ID', async test => {
	test.plan(1)
	const entry = await new Entries()
	const data1 =
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
      	item5price: '30'
      }
	const data2 =
      {
      	account: 1,
      	title: 'Test Event 2',
      	filename: 'testphoto2.jpg',
      	description: 'This is another test events description. Pay this no mind',
      	date: '2020-11-15 16:31:40',
      	item1name: 'Test item 1',
      	item1link: 'abcd',
      	item1price: '116',
      	item2name: 'Test item 2',
      	item2link: 'abgcd',
      	item2price: '165',
      	item3name: 'Test item 3',
      	item3link: 'abcge',
      	item3price: '189',
      	item4name: 'Test item 4',
      	item4link: 'abcef',
      	item4price: '111',
      	item5name: 'Test item 5',
      	item5link: 'abced',
      	item5price: '21'
      }
	try {
		await entry.add(data1)
		await entry.add(data2)
		const hopefullyItem2 = await entry.getByID(2)
		console.log(hopefullyItem2)
		test.is(hopefullyItem2,data2,'Cannot add data')
	} catch(err) {
		test.fail(err.message, 'error thrown')
	} finally {
		entry.close()
	}
})
>>>>>>> ec71792837d01952d9ddcad4f17dd04092c8fcf6
