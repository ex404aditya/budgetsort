

const port = process.env.PORT || 4000

Bun.serve({
    port: port,
    fetch(req) {
        return new Response("first time from bun");
    }
})

console.log("server running!sum bithc in the cosmos");