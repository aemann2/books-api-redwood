import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { routes, navigate } from '@redwoodjs/router'

const DELETE_BOOK_MUTATION = gql`
  mutation DeleteBookMutation($id: Int!) {
    deleteBook(id: $id) {
      id
    }
  }
`

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const Book = ({ book }) => {
  const [deleteBook] = useMutation(DELETE_BOOK_MUTATION, {
    onCompleted: () => {
      toast.success('Book deleted')
      navigate(routes.books())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete book ' + id + '?')) {
      deleteBook({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Book {book.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{book.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{book.title}</td>
            </tr>
            <tr>
              <th>Author</th>
              <td>{book.author}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(book.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(book.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Book
