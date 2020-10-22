/** @module Contacts */

import sqlite from 'sqlite-async'

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
return contacts
}}

export default Contacts
