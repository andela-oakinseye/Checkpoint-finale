import faker from 'faker';
import bcrypt from 'bcrypt-nodejs';
import db from './../app/models/index';

db.Role.truncate({ cascade: true });
db.User.truncate({ cascade: true });
db.Document.truncate({ cascade: true });

const helper = {
  testRole1: {
    id: 1,
    title: 'Regular'
  },

  testRole2: {
    id: 2,
    title: 'Admin'
  },

  testRole3: {
    id: 2,
    title: 'Guests'
  },

  aUser: {
    username: 'brainyfarm',
    firstname: 'Olawale',
    lastname: 'Akinseye',
    email: 'brainyfarm@gmail.com',
    password: 'password'
  },

  adminUser: {
    username: 'admin',
    firstname: 'Olawale',
    lastname: 'Akinseye',
    email: 'admin@dms.com',
    password: 'password'
  },

  ordinaryUserLogin: {
    email: 'ordinary@dms.com',
    password: 'password'
  },

  aUserUpdateData: {
    email: 'brainyfarmer@gmail.com',
    password: 'password',
  },

  ordinaryUser: {
    id: 2
  },

  sampleUser: {
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  anotherSampleUser: {
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },
  yetAnotherSampleUser: {
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  },

  sampleUserWithNoEmail: {
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    password: faker.internet.password()
  },
  invalidUser: {
    username: faker.internet.userName(),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: 'kkkkk',
    password: faker.internet.password()
  },
  samplePublicDocument: {
    title: faker.company.catchPhrase(),
    content: faker.company.catchPhrase(),
    access: 'public'
  },
  samplePrivateDocument: {
    title: faker.company.catchPhrase(),
    content: faker.company.catchPhrase(),
    access: 'private'
  },
  sampleDocument: {
    title: faker.company.catchPhrase(),
    content: faker.company.catchPhrase(),
  }

};

const defaultUsers = [
  {
    id: 1,
    username: 'admin',
    firstname: 'Olawale',
    lastname: 'Akinseye',
    email: helper.adminUser.email,
    password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
    role: 2
  },
  {
    id: 2,
    username: 'ordinary',
    firstname: 'Ordinary',
    lastname: 'Guy',
    email: 'ordinary@dms.com',
    password: bcrypt.hashSync('password', bcrypt.genSaltSync(8)),
    role: 1
  }
];

const defaultDocuments = [
  {
    title: faker.company.catchPhrase(),
    content: faker.company.catchPhrase(),
    owner: 2,
    access: 'public'
  },

  {
    id: 7,
    title: faker.company.catchPhrase(),
    content: faker.company.catchPhrase(),
    access: 'public',
    owner: 2
  },
  {
    id: 10,
    title: faker.company.catchPhrase(),
    content: faker.company.catchPhrase(),
    access: 'private',
    owner: 2
  }];

const defaultRoles = [
  {
    id: 1,
    title: 'Regular'
  },
  {
    id: 2,
    title: 'Admin'
  }
];

/**
 * populate Default Data
 * self invoking
 * @return {undefined}
 */
const populateData = () => {
  console.log(defaultDocuments, defaultUsers, defaultRoles);
  db.Role.bulkCreate(defaultRoles);
  db.User.bulkCreate(defaultUsers);
  db.Document.bulkCreate(defaultDocuments);
};
export {
  helper,
  populateData
};
