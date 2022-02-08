import NavLayout from './layouts/NavLayout/NavLayout'
import { Router, Route, Set } from '@redwoodjs/router'
import BooksLayout from 'src/layouts/BooksLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/books/{id:Int}" page={BookBookPage} name="book" />
        <Set wrap={BooksLayout}>
          <Route path="/books/new" page={BookNewBookPage} name="newBook" />
          <Route path="/books/{id:Int}/edit" page={BookEditBookPage} name="editBook" />
          <Route path="/books" page={BookBooksPage} name="books" />
        </Set>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
