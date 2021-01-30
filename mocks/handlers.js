import { rest } from 'msw'
import cards from '../public/files/cards.json';

export const handlers = [
    rest.get('http://localhost:3000/api/cards', async (req, res, ctx) => {
        return await res(
            ctx.delay(500),
            ctx.status(202, 'Mocked Status'),
            ctx.json(cards.slice(0, 10))
        )
    }),
    rest.get('http://localhost:3000/api/cards/:id', async (req, res, ctx) => {
        return await res(
            ctx.delay(500),
            ctx.status(202, 'Mocked Status'),
            ctx.json(cards.filter((card) => card.id === "AS")[0])
        )
    })
]