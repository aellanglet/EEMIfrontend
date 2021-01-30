import { rest } from 'msw'

export const handlers = [
    rest.get('cards', (req, res, ctx) => {
        return res(
            ctx.json({
                custom: 'data'
            })
        )
    }),
]