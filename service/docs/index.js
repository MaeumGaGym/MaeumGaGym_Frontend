const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'src')))
// 애초에 잘못된 경로를 참조하면 오청이 너무 많이 가니 잠깐 막아둠
// app.use((req, res) => {
//     res.redirect('/index.html')
// })

app.get('/favicon.ico', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/favicon.ico'))
})

app.get(['/:path', '/:path/:a'], (req, res) => {
    const dataPath = path.resolve(__dirname, 'src', `${req.params.path}${req.params.a ? '/' + req.params.a : ''}`)
    const statsObj = fs.statSync(dataPath)

    if (statsObj.isFile() && dataPath.split('/').at(-1).split('.').at(-1) === 'html') {
        res.sendFile(dataPath)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
