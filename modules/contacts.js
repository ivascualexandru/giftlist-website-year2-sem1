/** @module Contacts */

import sqlite from 'sqlite-async'
import mime from 'mime-types'
import fs from 'fs-extra'

/*
* CONTACTS
* ES6 Module that manages the contacts in the CRM system.
*/
class Contacts {
	/*
  Create an account object
  @param {String} [dbName=":memory:"] - the name of the database file to use.
  */

	constructor(dbName = ':memory:') {
		return (async() => {
			this.db = await sqlite.open(dbName)
			//We need this to store the user accounts
			const sql = 'CREATE TABLE IF NOT EXISTS contacts(\
			id INTEGER PRIMARY KEY AUTOINCREMENT,\
			userid INTEGER NOT NULL,\
			title TEXT NOT NULL,\
			photo TEXT,\
			description TEXT NOT NULL,\
			date INTEGER,\
      item1name TEXT NOT NULL,\
      item1price TEXT NOT NULL,\
      item1link TEXT NOT NULL,\
      item2name TEXT,\
      item2price TEXT,\
      item2link TEXT,\
      item3name TEXT,\
      item3price TEXT,\
      item3link TEXT,\
      item4name TEXT,\
      item4price TEXT,\
      item4link TEXT,\
      item5name TEXT,\
      item5price TEXT,\
      item5link TEXT,\
			FOREIGN KEY(userid) REFERENCES users(id)\
		);'
			await this.db.run(sql)
			return this
		})()
	}


	/*
* retrieves all the contacts in the system
* @returns {Array} returns an array containing all the contacts in the database
*/

	async all() {
		const sql = 'SELECT users.user, contacts.* FROM contacts,users\
								WHERE contacts.userid = users.id;'
		const contacts = await this.db.all(sql)
		for (const index in contacts) {
			if (contacts[index].photo === null) contacts[index].photo = 'placeholder.jpg'
			const dateTime = new Date(contacts[index].date)
			const dateFormatted = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
			contacts[index].date = dateFormatted
		}
		return contacts
	}

	async add(data) {
		console.log('ADD')
		console.log(data)
    let filename
    if (data.fileName) {
      filename = `${Date.now()}.${mime.extension(data.fileType)}`
      console.log(filename)
      await fs.copy(data.filePath, `public/photos/${filename}`)
    }
    try {
  const sql=`INSERT INTO contacts(userid, title, photo, description, date, items, item2, item3, item4, item5)\
  VALUES(${data.account}, "${data.title}", "${filename}", "${data.description}", "${data.date}", "${data.items}",\
  "${data.item2}", "${data.item3}", "${data.item4}", "${data.item5}");`
  console.log(sql)
  await this.db.run(sql)
	return true
  } catch(err) {
  console.log(err)
  throw(err)
  }
}

	async close() {
		await this.db.close()
	}
}

export default Contacts
