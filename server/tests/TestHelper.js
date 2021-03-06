import bcrypt from 'bcrypt-nodejs';

/**
 * hashPassword
 * convert plain test to a bcrypt hash
 * @param {String} plainPassword plain test
 * @returns {String} bcrypt hash value of the plain password
 */
const hashPassword = plainPassword =>
  bcrypt.hashSync(plainPassword, bcrypt.genSaltSync(8));

/* Default User Data to Populate */
const defaultPassword = 'password';
const sampleUserData = {
  admin: {
    id: 1,
    username: 'admin',
    email: 'admin@epicdocuments.com',
    password: hashPassword(defaultPassword),
    firstname: 'Admin',
    lastname: 'Olawale',
    role: 2
  },
  regular: {
    id: 2,
    username: 'regular',
    email: 'regular@epicdocuments.com',
    password: hashPassword(defaultPassword),
    firstname: 'Regular',
    lastname: 'Bayonle',
    role: 1
  },
  james: {
    id: 3,
    username: 'james',
    email: 'james@epicdocuments.com',
    password: hashPassword(defaultPassword),
    firstname: 'James',
    lastname: 'Smith',
    role: 1
  },
  sampleDocument1: {
    title: 'Alice in Wonderland',
    content: 'Alice is now in Nigeria for real',
    access: 'public',
    owner: 2
  },
  sampleDocument2: {
    title: 'The Martian',
    content: 'Andy Weirs is a very good writer and the Mart...',
    access: 'private',
    owner: 2
  },
  sampleDocument3: {
    title: 'Ralia - The Sugar Girl',
    content: 'Accusation of an old witch who turns out to be innocent!',
    access: 'public',
    owner: 2
  },

  freeUserData: {
    username: 'smith.',
    email: 'smith2@epicdocuments.com',
    password: defaultPassword,
    firstname: 'Smith',
    lastname: 'Trudy'
  },
  freeUserDataEmailUpdate: {
    email: 'smith@epicdocuments.com',
  },
  badUserDataWithNoEmail: {
    username: 'judy',
    password: defaultPassword,
    firstname: 'Judy',
    lastname: 'Todd'
  },
  rogueUser: {
    email: 'idonotexist@epicdocuments.com',
    password: defaultPassword
  },
  freeDocument: {
    title: 'Mickey Mouse',
    content: 'Mickey Mouse and the Rat',
    access: 'private'
  },
  freeDocument2: {
    title: 'Tom and Jerry',
    content: 'Tom and Jerry are fighters',
  },
  documentWithNoTitle: {
    content: 'Tom and Jerry are fighters',
  }
};

export {
  sampleUserData,
  defaultPassword
};
