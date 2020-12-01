
import test from 'ava'
import Contacts from '../modules/contacts.js'


test(' ADD NEW  : it works with 5 items', async test => {
	test.plan(1)
  const contact = await new Contacts()
  let data = 
      {
        account: 1,
        title: "Test Event",
        filename: "testphoto.jpg",
        description: "This is a test events description. Pay this no mind",
        date: "2020-11-15 15:31:40",
        item1name: "Test item 1",
        item1link: "abc",
        item1price: "16",
        item2name: "Test item 2",
        item2link: "abcd",
        item2price: "16",
        item3name: "Test item 3",
        item3link: "abcg",
        item3price: "18",
        item4name: "Test item 4",
        item4link: "abcf",
        item4price: "11",
        item5name: "Test item 5",
        item5link: "abcd",
        item5price: "15"
      }
  try {
    const addData = await contact.add(data)
    test.is(addData,true,'Cannot add data')
	} catch(err) {
    test.fail(err.message, 'error thrown')
	} finally {
    contact.close()
	}
})

test(' ADD NEW  : it works with 4 items', async test => {
	test.plan(1)
  const contact = await new Contacts()
  let data = 
      {
        account: 1,
        title: "Test Event",
        filename: "testphoto.jpg",
        description: "This is a test events description. Pay this no mind",
        date: "2020-11-15 15:31:40",
        item1name: "Test item 1",
        item1link: "abc",
        item1price: "16",
        item2name: "Test item 2",
        item2link: "abcd",
        item2price: "16",
        item3name: "Test item 3",
        item3link: "abcg",
        item3price: "18",
        item4name: "Test item 4",
        item4link: "abcf",
        item4price: "11",
        item5name: "",
        item5link: "",
        item5price: ""
      }
  try {
    const addData = await contact.add(data)
    test.is(addData,true,'Cannot add data')
	} catch(err) {
    test.fail(err.message, 'error thrown')
	} finally {
    contact.close()
	}
})

test(' ADD NEW  : it works with 3 items', async test => {
	test.plan(1)
  const contact = await new Contacts()
  let data = 
      {
        account: 1,
        title: "Test Event",
        filename: "testphoto.jpg",
        description: "This is a test events description. Pay this no mind",
        date: "2020-11-15 15:31:40",
        item1name: "Test item 1",
        item1link: "abc",
        item1price: "16",
        item2name: "Test item 2",
        item2link: "abcd",
        item2price: "16",
        item3name: "Test item 3",
        item3link: "abcg",
        item3price: "18",
        item4name: "",
        item4link: "",
        item4price: "",
        item5name: "",
        item5link: "",
        item5price: ""
      }
  try {
    const addData = await contact.add(data)
    test.is(addData,true,'Cannot add data')
	} catch(err) {
    test.fail(err.message, 'error thrown')
	} finally {
    contact.close()
	}
})

test(' ADD NEW  : it works with 2 items', async test => {
	test.plan(1)
  const contact = await new Contacts()
  let data = 
      {
        account: 1,
        title: "Test Event",
        filename: "testphoto.jpg",
        description: "This is a test events description. Pay this no mind",
        date: "2020-11-15 15:31:40",
        item1name: "Test item 1",
        item1link: "abc",
        item1price: "16",
        item2name: "Test item 2",
        item2link: "abcd",
        item2price: "16",
        item3name: "",
        item3link: "",
        item3price: "",
        item4name: "",
        item4link: "",
        item4price: "",
        item5name: "",
        item5link: "",
        item5price: ""
      }
  try {
    const addData = await contact.add(data)
    test.is(addData,true,'Cannot add data')
	} catch(err) {
    test.fail(err.message, 'error thrown')
	} finally {
    contact.close()
	}
})

test(' ADD NEW  : it works with 1 item', async test => {
	test.plan(1)
  const contact = await new Contacts()
  let data = 
      {
        account: 1,
        title: "Test Event",
        filename: "testphoto.jpg",
        description: "This is a test events description. Pay this no mind",
        date: "2020-11-15 15:31:40",
        item1name: "Test item 1",
        item1link: "abc",
        item1price: "16",
        item2name: "",
        item2link: "",
        item2price: "",
        item3name: "",
        item3link: "",
        item3price: "",
        item4name: "",
        item4link: "",
        item4price: "",
        item5name: "",
        item5link: "",
        item5price: ""
      }
  try {
    const addData = await contact.add(data)
    test.is(addData,true,'Cannot add data')
	} catch(err) {
    test.fail(err.message, 'error thrown')
	} finally {
    contact.close()
	}
})

test(' ADD NEW  : actual links in item links', async test => {
	test.plan(2)
  var CheckIfLinks
  const contact = await new Contacts()
  let data = 
      {
        account: 1,
        title: "Test Event",
        filename: "testphoto.jpg",
        description: "This is a test events description. Pay this no mind",
        date: "2020-11-15 15:31:40",
        item1name: "Test item 1",
        item1link: "https://www.amazon.com/Regis-Cabernet-Sauvignon-alcoholic-wine/dp/B071NQ6BVC/ref=sr_1_25?dchild=1&keywords=Wine&qid=1604157753&sr=8-25",
        item1price: "16",
        item2name: "Test item 2",
        item2link: "https://www.amazon.com/Fruit-Loom-Cushion-Defense-Ankle/dp/B07VF6N878/ref=sr_1_6?dchild=1&keywords=Socks&qid=1604157793&sr=8-6",
        item2price: "16",
        item3name: "Test item 3",
        item3link: "https://www.amazon.com/Minoisome-Collapsible-Organizer-Decorative-Organizing/dp/B088CVZGVD/ref=sr_1_2?dchild=1&keywords=Basket&qid=1604157816&sr=8-2",
        item3price: "18",
        item4name: "Test item 4",
        item4link: "https://www.amazon.com/Spider-Box%EF%BC%8CWooden-Surprise-Box%EF%BC%8CHandmade-Practical/dp/B07L5ZMVGL/ref=sr_1_7?dchild=1&keywords=Spider+Toy&qid=1604157860&sr=8-7",
        item4price: "11",
        item5name: "Test item 5",
        item5link: "https://www.amazon.com/Adorable-Happy-Birthday-Teddy-Plays/dp/B001CRLLZS/ref=sr_1_20?dchild=1&keywords=Happy+Birthday+Gifts&qid=1605120977&sr=8-20",
        item5price: "15"
      }
  try {
    var link1 = data.item1link.includes("https://www.")
    var link2 = data.item2link.includes("https://www.")
    var link3 = data.item3link.includes("https://www.")
    var link4 = data.item4link.includes("https://www.")
    var link5 = data.item5link.includes("https://www.")
    if(link1 && link2 && link3 && link4 && link5) {
      var CheckIfLinks = true
    }
    else {
      var CheckIfLinks = false
    }
    const addData = await contact.add(data)
    test.is(addData,true,'Cannot add data')
    test.is(CheckIfLinks,true,'Not links in links db')
	} catch(err) {
    test.fail(err.message, 'error thrown')
	} finally {
    contact.close()
	}
})
