import { router } from '@/server/trpc/trpc'

import { authRouter } from './auth'
import { exampleRouter } from './example'

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
})

export type AppRouter = typeof appRouter;
