import { rest } from 'msw'
import { setupServer } from 'msw/node'
import {posts} from './MockData/Posts'

const server = setupServer(
    rest.get('https://jsonplaceholder.typicode.com/posts', (req, res, ctx) => {
        return res (
            ctx.status(200),
            ctx.json(posts)
        )
    })
)

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export { server, rest }