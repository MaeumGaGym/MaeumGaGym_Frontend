let fs = require('fs');
const path = require('path')
const express = require('express')
const app = express()
const port = 3000

app.use(express.static(path.resolve(__dirname, 'src')))
app.use((req, res) => {
    res.redirect('/index.html')
})

app.get(['/:path', '/:path/:a'], (req, res) => {
    const dataPath = path.resolve(__dirname, 'src', `${req.params.path}${req.params.a ? ' ' + req.params.a : ''}`)

    const statsObj = fs.statSync(dataPath)

    if (statsObj.isFile() && dataPath.split('/').at(-1).split('.').at(-1) === 'html') {
        res.sendFile(dataPath)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
