import type { Prisma } from '@prisma/client'

import { db } from 'src/lib/db'

export const books = () => {
  return db.book.findMany()
}

export const book = ({ id }: Prisma.BookWhereUniqueInput) => {
  return db.book.findUnique({
    where: { id },
  })
}

interface CreateBookArgs {
  input: Prisma.BookCreateInput
}

export const createBook = ({ input }: CreateBookArgs) => {
  return db.book.create({
    data: input,
  })
}

interface UpdateBookArgs extends Prisma.BookWhereUniqueInput {
  input: Prisma.BookUpdateInput
}

export const updateBook = ({ id, input }: UpdateBookArgs) => {
  return db.book.update({
    data: input,
    where: { id },
  })
}

export const deleteBook = ({ id }: Prisma.BookWhereUniqueInput) => {
  return db.book.delete({
    where: { id },
  })
}
