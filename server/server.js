import express from 'express'
import path from 'path'
import cors from 'cors'
import bodyParser from 'body-parser'
import sockjs from 'sockjs'
import { renderToStaticNodeStream } from 'react-dom/server'
import React from 'react'

import cookieParser from 'cookie-parser'
import config from './config'
import Html from '../client/html'

const Root = () => ''

try {
  // eslint-disable-next-line import/no-unresolved
  // ;(async () => {
  //   const items = await import('../dist/assets/js/root.bundle')
  //   console.log(JSON.stringify(items))

  //   Root = (props) => <items.Root {...props} />
  //   console.log(JSON.stringify(items.Root))
  // })()
  console.log(Root)
} catch (ex) {
  console.log(' run yarn build:prod to enable ssr')
}

let connections = []

const port = process.env.PORT || 8090
const server = express()
const shortid = require('shortid')

const { writeFile, readFile } = require('fs').promises

const middleware = [
  cors(),
  express.static(path.resolve(__dirname, '../dist/assets')),
  bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }),
  bodyParser.json({ limit: '50mb', extended: true }),
  cookieParser()
]

middleware.forEach((it) => server.use(it))

const saveFile = (file) => {
  writeFile(`${__dirname}/task.json`, file, { encoding: 'utf8' })
}

const openFile = async () => {
  const file = await readFile(`${__dirname}/task.json`, { encoding: 'utf8' })
    .then((data) => data)
    .catch(() => {
      const newFile = []
      saveFile(JSON.stringify(newFile))
      return openFile()
    })
  return file
}

server.post('/api/v1/tasks/:category', async (req, res) => {
  const newTask = {
    taskId: shortid.generate(),
    title: req.body.title,
    status: 'new',
    isDeleted: false,
    _createdAt: +new Date(),
    _deletedAt: null
  }
  let file = await openFile().then((data) => JSON.parse(data))
  file = [...file, newTask]

  saveFile(JSON.stringify(file))

  res.json(file)
})

server.patch('/api/v1/tasks/:category/:id', async (req, res) => {
  const file = await openFile().then((data) => JSON.parse(data))
  const { taskId, newStatus } = req.body
  const indexOfEditTask = file.findIndex((item) => item.taskId === taskId)
  file[indexOfEditTask].status = newStatus
  saveFile(JSON.stringify(file))
  res.json(file)
})

server.put('/api/v1/tasks/:category/:id', async (req, res) => {
  const file = await openFile().then((data) => JSON.parse(data))
  const { taskId } = req.body
  const indexOfEditTask = file.findIndex((item) => item.taskId === taskId)
  file[indexOfEditTask].isDeleted = true
  saveFile(JSON.stringify(file))
  res.json(file)
})

server.use('/api/', (req, res) => {
  res.status(404)
  res.end()
})

const [htmlStart, htmlEnd] = Html({
  body: 'separator',
  title: 'Skillcrucial - Become an IT HERO'
}).split('separator')

server.get('/', (req, res) => {
  const appStream = renderToStaticNodeStream(<Root location={req.url} context={{}} />)
  res.write(htmlStart)
  appStream.pipe(res, { end: false })
  appStream.on('end', () => {
    res.write(htmlEnd)
    res.end()
  })
})

server.get('/*', (req, res) => {
  const initialState = {
    location: req.url
  }

  return res.send(
    Html({
      body: '',
      initialState
    })
  )
})

const app = server.listen(port)

if (config.isSocketsEnabled) {
  const echo = sockjs.createServer()
  echo.on('connection', (conn) => {
    connections.push(conn)
    conn.on('data', async () => {})

    conn.on('close', () => {
      connections = connections.filter((c) => c.readyState !== 3)
    })
  })
  echo.installHandlers(app, { prefix: '/ws' })
}
console.log(`Serving at http://localhost:${port}`)
