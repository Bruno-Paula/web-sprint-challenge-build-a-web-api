const Project = require('./projects-model')

class Validade {
  projectId = async (req, res, next) => {
    const {id} = req.params
    try {
      const data = await Project.get(req.params.id)

      if (!data) {
        next({status: 404, message: `Project with ID# ${id} Not Found!`})
      } else {
        req.project = data
        next()
      }
    } catch (error) {
      next(error)
    }
  }

  validateEntries = (req, res, next) => {
    const {name, description, completed} = req.body
    console.log(typeof completed)

    if (!name || !description || typeof completed !== 'boolean') {
      next({status: 400, message: 'Missing fields or Invalid Fields'})
    } else {
      req.data = {
        name: name.trim(),
        description: description.trim(),
        completed: completed || false,
      }
      next()
    }
  }
}

module.exports = new Validade()
