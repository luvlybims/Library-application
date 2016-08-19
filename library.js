/** 
 * Class to to model an library system
 * @constructor {Array.<string>} books to be processed
 */
class Library
{ 
    constructor() 
    {    
    	
    	 this.library = []; 
    }

/**
 * Takes the title and author as parameter and adds a new book to the library
 * @param {string} title title to be added
 * @param {string} author author to be added
 */
add(title,author) 
 {
 	
     if (typeof  title === 'string' && typeof  author === 'string')
         {  
         	var newbook = (`[${title}] by [${author}]`);
            this.library.push(newbook);
            return this.library;
         }
     else
         {
         	return 'Title and Author must be string'
         }
 }
 
 /**
 * Takes the title and author as parameter and removes a book from the library
 * @param {string} title title to be removed
 * @param {string} author author to be removed
 */
remove(title,author) 
  { 
     if (typeof  title === 'string' && typeof  author === 'string')
         {  
  	        var newbook = (`[${title}] by [${author}]`);
  	        for (let book_id = 0; book_id <= this.library.length-1; book_id++)
             {
       	     if (newbook === this.library[book_id]) 
                {      
                  this.library.splice(book_id, 1); //remove the book at the given book_id
                }
             }
         }
       else
       {
       	return 'Title and Author must be string'
       }
 }
 
 /**
 * Gets all books from the library
 * @return {string} returns the books in the library
 */
getBooks()
   {
      return this.library;
   }
}

//Test Cases   
var myLibrary = new Library();
myLibrary.add('Self-motivation','Adams Cowell');
myLibrary.add('Teaching on Leadership','Miles Stone');
myLibrary.add('Animal Farm','John Bull');
myLibrary.add('Beauty and the Beast','Disney Books');
myLibrary.remove('Self-motivation','Adams Cowell');
myLibrary.getBooks();
    	