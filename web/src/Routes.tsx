import NavLayout from './layouts/NavLayout/NavLayout'
import { Router, Route, Set, Private } from '@redwoodjs/router'
import BooksLayout from 'src/layouts/BooksLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NavLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/login" page={LoginPage} name="login" />
        <Route path="/signup" page={SignupPage} name="signup" />
        <Route path="/forgot-password" page={ForgotPasswordPage} name="forgotPassword" />
        <Route path="/reset-password" page={ResetPasswordPage} name="resetPassword" />
        <Private unauthenticated="login">
          <Route path="/books/{id:Int}" page={BookBookPage} name="book" />
          <Set wrap={BooksLayout}>
            <Route path="/books/new" page={BookNewBookPage} name="newBook" />
            <Route path="/books" page={BookBooksPage} name="books" />
          </Set>
        </Private>
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
