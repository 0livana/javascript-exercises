const books = [
  {
    title: 'Robert Kiyosaki',
    author: 'Rich Dad Poor Dad'
  },
  {
    title: 'William Shakespare',
    author: 'Book2'
  }
]

const getTheTitles = function(books) {
    let titles = [];
    for(const book of books){
        titles.push(book.title)
    }
    return titles
};

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
