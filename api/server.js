const express = require('express')
const server = express()

const actionsRouter = require('./actions/actions-router')
const projectRouter = require('./projects/projects-router')

// Middlewares
server.use(express.json())

// Controllers

// ACTIONS CRONTROLLER
server.use('/api/actions', actionsRouter)
// PROJECT CRONTROLLER
server.use('/api/projects', projectRouter)

module.exports = server
