import type { FindBooks } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Link, routes } from '@redwoodjs/router'

import Books from 'src/components/Book/Books'

export const QUERY = gql`
  query FindBooks {
    books {
      id
      title
      author
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No books yet. '}
      <Link
        to={routes.newBook()}
        className="rw-link"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ books }: CellSuccessProps<FindBooks>) => {
  return <Books books={books} />
}
