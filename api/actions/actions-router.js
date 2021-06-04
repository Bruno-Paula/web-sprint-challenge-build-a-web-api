/**
 *  ACTIONS CONTROLLER
 */

const server = require('express')
const router = server.Router()
const Action = require('./actions-model')
const {validateId, validateEntries} = require('./actions.middleware')
/**
 *  Display:  an arry with all actions.
 *  METHOD: GET
 *  URL: /api/actions
 *  @Params:
 */

router.get('/', async (req, res, next) => {
  try {
    const actions = await Action.get()
    res.status(200).json(actions)
  } catch (error) {
    next(error)
  }
})

/**
 *  Display: a single project by ID.
 *  METHOD: GET
 *  URL: /api/Actions/:id
 *  @Params: project ID
 */

router.get('/:id', validateId, (req, res) => {
  res.status(200).json(req.action)
})

/**
 *  Display: Returns the newly created.
 *  METHOD: POST
 *  URL: /api/Actions
 *  @Params:
 */

router.post('/', validateEntries, async (req, res) => {
  try {
    const data = req.data
    const dataResponse = await Action.insert(data)
    res.status(201).json(dataResponse)
  } catch (error) {
    next(error)
  }
})

/**
 *  Display: Returns the updated project.
 *  METHOD: PUT
 *  URL: /api/Actions/:id
 *  @Params: project ID
 */

router.put('/:id', validateId, validateEntries, async (req, res, next) => {
  try {
    const updatedData = await req.data
    const data = await Action.update(req.params.id, updatedData)
    res.status(200).json(data)
  } catch (error) {
    next(error)
  }
})

/**
 *  Display: Delete a Single project.
 *  METHOD: DELETE
 *  URL: /api/Actions/:id
 *  @Params: project ID
 */

router.delete('/:id', validateId, async (req, res, next) => {
  try {
    await Action.remove(req.params.id)
    res.status(200).json({message: `Action was deleted successfully.`})
  } catch (error) {
    next(error)
  }
})

/**
 *  Display: Returns an array of action that belonging to a project with the given id
 *  METHOD: GET
 *  URL: /api/Actions/:id/actions
 *  @Params: project ID
 */

// router.get('/:id/actions', projectId, async (req, res, next) => {
//   try {
//     const data = await Project.getProjectActions(req.params.id)
//     res.status(200).json(data)
//   } catch (error) {
//     next(error)
//   }
// })

router.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status,
  })
})
module.exports = router
