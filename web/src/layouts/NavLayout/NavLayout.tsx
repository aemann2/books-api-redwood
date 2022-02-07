import { Link, routes } from '@redwoodjs/router'

type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
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
        </ul>
      </nav>
      {children}
    </>
  )
}

export default NavLayout
