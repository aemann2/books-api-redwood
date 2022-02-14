import { Link, routes } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'

type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  return (
    <>
      <nav>
        <ul className="flex ml-4">
          <li className="mr-4">
            <header>
              <h1>
                <Link className="hover:text-sky-700" to={routes.home()}>
                  Home
                </Link>
              </h1>
            </header>
          </li>
          <li className="mr-4">
            <Link className="hover:text-sky-700" to={routes.books()}>
              Books
            </Link>
          </li>
          {isAuthenticated ? (
            <>
              <li className="mr-4">
                <span>Logged in as {currentUser.email}</span>
              </li>
              <li className="mr-4">
                <button className="hover:text-sky-700" onClick={logOut}>
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li className="mr-4">
              <Link className="hover:text-sky-700" to={routes.login()}>
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
      {children}
    </>
  )
}

export default NavLayout
