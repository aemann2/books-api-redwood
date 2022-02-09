import React from 'react'
import {
  Form,
  Label,
  TextField,
  SelectField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'

const Search = () => {
  const handleSubmit = (input) => {
    console.log(input)
  }

  return (
    <div>
      <div>
        <Form onSubmit={handleSubmit}>
          <Label name="filters">Search By</Label>
          <SelectField name="filters" id="filters">
            <option value="">Keyword</option>
            <option value="intitle">Title</option>
            <option value="inauthor">Author</option>
            <option value="insubject">Subject</option>
            <option value="isbn">ISBN</option>
          </SelectField>
          <TextField
            name="search"
            validation={{ required: true }}
            errorClassName="error"
          />
          <Submit>Search</Submit>
          <div>
            <FieldError name="search" className="text-red-600" />
          </div>
        </Form>
      </div>
    </div>
  )
}

export default Search
