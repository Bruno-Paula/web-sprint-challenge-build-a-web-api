const Project = require('./projects-model')

class Validade {
  projectId = async (req, res, next) => {
    try {
      const data = await Project.get(req.params.id)

      if (!data) {
        next({status: 404, message: 'Project Not Found!'})
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
  }
}

module.exports = new Validade()
