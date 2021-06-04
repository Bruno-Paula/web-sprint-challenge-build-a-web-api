/**
 *  PROJECT CONTROLLER
 */
const server = require('express')
const router = server.Router()

const Project = require('./projects-model')
const {projectId, validateEntries} = require('./project-middleware')
/**
 *  Display:  an arry with all projects.
 *  METHOD: GET
 *  URL: /api/projects
 *  @Params:
 */

router.get('/', async (req, res, next) => {
  try {
    const projects = await Project.get()
    res.status(200).json(projects)
  } catch (error) {
    next(error)
  }
})

/**
 *  Display: a single project by ID.
 *  METHOD: GET
 *  URL: /api/projects/:id
 *  @Params: project ID
 */

router.get('/:id', projectId, (req, res) => {
  res.status(200).json(req.project)
})

/**
 *  Display: Returns the newly created.
 *  METHOD: POST
 *  URL: /api/projects
 *  @Params:
 */

router.post('/', validateEntries, async (req, res) => {
  try {
    const data = req.data
    const dataResponse = await Project.insert(data)
    res.status(201).json(dataResponse)
  } catch (error) {
    res.json(error)
  }
})

/**
 *  Display: Returns the updated project.
 *  METHOD: PUT
 *  URL: /api/projects
 *  @Params: project ID
 */

router.put('/:id', projectId, (req, res) => {
  res.status(200).json(123)
})

/**
 *  Display: Delete a Single project.
 *  METHOD: DELETE
 *  URL: /api/projects/:id
 *  @Params: project ID
 */

router.put('/:id', (req, res) => {
  res.status(200).json(123)
})

/**
 *  Display: Returns an array of action that belonging to a project with the given id
 *  METHOD: GET
 *  URL: /api/projects/:id/actions
 *  @Params: project ID
 */

router.get('/api/projects/:id/actions', (req, res) => {
  res.status(200).json(123)
})

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status,
  })
})
module.exports = router
