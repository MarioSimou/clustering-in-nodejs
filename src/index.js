import express from 'express'

const app = express(),
      port = process.env.PORT || 8000;

console.log(process.env.NODE_ENV)
app.get('/' , ( req ,res ) => {
    res.set({'Content-Type' : 'text/html' })
    res.send('<h1>hello world</h1>')
})

app.listen( port , () => process.stdout.write(`🚀🚀 The server is running at http://localhost:${ port }`) )