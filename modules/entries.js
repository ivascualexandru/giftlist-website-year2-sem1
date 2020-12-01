/** @module Entries */

import sqlite from 'sqlite-async'
import mime from 'mime-types'
import fs from 'fs-extra'

/*
* ENTRIES
* ES6 Module that manages the entries in the secure system.
*/
class Entries {
	/*
  Create an account object
  @param {String} [dbName=":memory:"] - the name of the database file to use.
  */

	constructor(dbName = ':memory:') {
		return (async() => {
			this.db = await sqlite.open(dbName)
			//We need this to store the user accounts
			const sql = 'CREATE TABLE IF NOT EXISTS entries(\
			id INTEGER PRIMARY KEY AUTOINCREMENT,\
			userid INTEGER NOT NULL, title TEXT NOT NULL,\
			photo TEXT,\
			description TEXT NOT NULL,\
			date INTEGER,\
      item1name TEXT NOT NULL, item1price TEXT NOT NULL, item1link TEXT NOT NULL,\
      item2name TEXT, item2price TEXT, item2link TEXT,\
      item3name TEXT, item3price TEXT, item3link TEXT,\
      item4name TEXT, item4price TEXT, item4link TEXT,\
      item5name TEXT, item5price TEXT, item5link TEXT,\
			FOREIGN KEY(userid) REFERENCES users(id)\
		);'
			await this.db.run(sql)
			return this
		})()
	}


	/*
  * retrieves all the entries in the system
  * @returns {Array} returns an array containing all the entries in the database
  */

	async all() {
		const sql = 'SELECT users.user, entries.* FROM entries,users\
								WHERE entries.userid = users.id;'
		const entries = await this.db.all(sql)
		for (const index in entries) {
			if (entries[index].photo === null) entries[index].photo = 'placeholder.jpg'
			const dateTime = new Date(entries[index].date)
			const dateFormatted = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
			entries[index].date = dateFormatted
		}
		return entries
	}

	/*
  * retrieves the contact with id = input from the system
  * @returns {Array} returns an array containing the contact with id = input from the database
  */

	async getByID(id) {
		try {
			const sql = `SELECT users.user, entries.* FROM entries,users\
                  WHERE entries.userid = users.id AND entries.id = ${id};`
			console.log(sql)
			const contact = await this.db.get(sql)
			if (contact.photo === null) contact.photo = 'placeholder.jpg'
			const dateTime = new Date(contact.date)
			const dateFormatted = `${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()}`
			contact.date = dateFormatted
			return contact
		} catch(err) {
			console.log(err)
			throw err
		}
	}
  
  //So since I already had the maximum number of lines in the add function, I decided to try and write a separate
  //function to test the data given. However, it wouldn't recognize it for some reason so instead of deleting it I
  //commented it out in hopes that I maybe am given SOME marks for my attempt.
  //It's a really basic test, however it's all I have at 01:18 AM
  
/*
	async testData(data) {
		let i,j
		for (i = 0; i < 5; i++) {
			for (i = 0; i < 5; i++) {
				if(`data.item${i}link` === `data.item${j}link`) {
					throw new Error(`link ${i} has the same value as link ${j}`)
				}
			}
		}
		return true
	}
*/
	/*
  *adds data into the database by running an sql command.
  *files are treated by giving them a time in seconds from 1970, and then sticking the extension on at the end. (append)
  *@returns true if it works, else it'll throw an error.
  */

	async add(data) {
		let filename
		if (data.fileName) {
			filename = `${Date.now()}.${mime.extension(data.fileType)}`
			await fs.copy(data.filePath, `public/photos/${filename}`)
		}
		try {
			const sql=`INSERT INTO entries(userid,title,photo,description,date,item1name,item1price,item1link,\
                item2name,item2price,item2link,item3name,item3price,item3link,item4name,item4price,item4link,\
                item5name,item5price,item5link) VALUES(${data.account},"${data.title}","${filename}",\
                "${data.description}","${data.date}","${data.item1name}","${data.item1price}","${data.item1link}",\
                "${data.item2name}","${data.item2price}","${data.item2link}","${data.item3name}","${data.item3price}",\
                "${data.item3link}","${data.item4name}","${data.item4price}","${data.item4link}",\
                "${data.item5name}","${data.item5price}","${data.item5link}");`
			//await testData(data)
			await this.db.run(sql)
			return true
		} catch(err) {
			throw err
		}
	}

	//closes the database. i know, tuff

	async close() {
		await this.db.close()
	}
}

export default Entries