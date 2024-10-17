import app from './app'

const port = process.env.PORT || 4000

Bun.serve({
    port: port,
    static: {
        "/": new Response("sum bithc in the cosmos")
    },
    fetch: app.fetch
})

console.log("server running!");