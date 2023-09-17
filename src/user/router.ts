import { Elysia } from 'elysia'
import { hello } from './controller'

/* The code is creating a new instance of the `Elysia` class and assigning it to the `router` constant.
The `Elysia` class is likely a custom router class or framework used for handling HTTP requests and
routing. */
export const router = new Elysia({ prefix: '/user' })
    .get('/hello', hello)

export default router