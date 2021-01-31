if (typeof window === 'undefined') {
    const { server } = require('./server')
    server.listen({
        onUnhandledRequest(req) {
            console.error(
                'server : Found an unhandled %s request to %s',
                req.method,
                req.url.href,
            )
        },
    })
} else {
    const { worker } = require('./browser')
    worker.start({
        onUnhandledRequest(req) {
            console.error(
                'browser : Found an unhandled %s request to %s',
                req.method,
                req.url.href,
            )
        },
    })
}