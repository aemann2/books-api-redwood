import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BookCreateArgs>({
  book: {
    one: { data: { title: 'String', author: 'String' } },
    two: { data: { title: 'String', author: 'String' } },
  },
})

export type StandardScenario = typeof standard
