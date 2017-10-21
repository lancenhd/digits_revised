import { Contacts } from '../../api/contacts/contacts.js';
import { _ } from 'meteor/underscore';

/**
 * A list of Contacts to pre-fill the Collection.
 * @type {*[]}
 */
const contactSeeds = [
  {
    first: 'Lancen',
    last: 'Daclison',
    address: '94-1095 Kuhaulua St',
    telephone: '808-342-3669',
    email: 'lancenhd@hawaii.edu',
  },
  {
    first: 'Lancen',
    last: 'Daclison2',
    address: '94-1095 Kuhaulua St',
    telephone: '808-342-3669',
    email: 'lancenhd@hawaii.edu',
  },
  {
    first: 'Lancen',
    last: 'Daclison3',
    address: '94-1095 Kuhaulua St',
    telephone: '808-342-3669',
    email: 'lancenhd@hawaii.edu',
  },
  {
    first: 'Lancen',
    last: 'Daclison4',
    address: '94-1095 Kuhaulua St',
    telephone: '808-342-3669',
    email: 'lancenhd@hawaii.edu',
  },
  { name: 'Basket', quantity: 3 },
  { name: 'Bicycle', quantity: 2 },
];

/**
 * Initialize the Stuff collection if empty with seed data.
 */
if (Contacts.find().count() === 0) {
  _.each(contactSeeds, function seedContacts(stuff) {
    Contacts.insert(stuff);
  });
}
