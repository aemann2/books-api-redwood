import { Link, routes } from '@redwoodjs/router'

type NavLayoutProps = {
  children?: React.ReactNode
}

const NavLayout = ({ children }: NavLayoutProps) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <header>
              <h1>
                <Link to={routes.home()}>Home</Link>
              </h1>
            </header>
          </li>
          <li>
            <Link to={routes.books()}>Books</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  )
}

export default NavLayout
