import NavLayout from './layouts/NavLayout/NavLayout'
import { Router, Route, Set } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavLayout}>
        <Route path="/books" page={BooksPage} name="books" />
        <Route path="/" page={HomePage} name="home" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
