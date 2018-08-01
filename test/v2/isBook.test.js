const test = require('tape')

const { isBook } = require('../../')

test('isBook / book schema', t => {

  const simpleBook = {
    type: 'bookclub',
    authors: 'Ursula le Guin',
    title: 'The Dispossessed'
  }
  t.ok(isBook(simpleBook), 'validates simple book')

  const incompleteBook = {
    type: 'bookclub',
    authors: 'Ursula le Guin'
  }
  t.notOk(isBook(incompleteBook), 'invalidates incompleteBook book')
  t.equal(incompleteBook.errors[0].message, 'is required', 'provides error messages')

  const multiAuthorBook = {
    type: 'bookclub',
    authors: ['Ursula le Guin', 'Terry Pratchett'],
    title: 'The Dispossessed'
  }
  t.ok(isBook(multiAuthorBook), 'validates multi-author book')

  const multiImageBook = {
    type: 'bookclub',
    authors: 'Ursula le Guin',
    title: 'The Dispossessed',
    image: [{
      link: "&a9RiJHjzC/AZnZbBUKydTCfuHVeGEmQjTFaVPwt3MmM=.sha256",
      name: "disposessed.jpg",
      size: 43390,
      type: "image/jpeg"
    }, {
      link: "&a9RiJHjzC/AZnZbBUKydTCfuHVeGEmQjTFaVPwt3MmM=.sha256",
      name: "disposessed2.jpg",
      size: 43390,
      type: "image/jpeg"
    }]
  }
  t.ok(isBook(multiImageBook), 'validates multi-image book')
  
  const completeBook = {
    type: 'bookclub',
    authors: 'Ursula le Guin',
    title: 'The Dispossessed',
    series: '',
    seriesNo: '',
    description: 'A goodie',
    image: {
      link: "&a9RiJHjzC/AZnZbBUKydTCfuHVeGEmQjTFaVPwt3MmM=.sha256",
      name: "disposessed.jpg",
      size: 43390,
      type: "image/jpeg"
    }
  }
  t.ok(isBook(completeBook), 'validates a book with all attributes')

  t.end()
})

