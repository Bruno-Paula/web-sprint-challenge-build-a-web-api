const Action = require('./actions-model')

class Validade {
  validateId = async (req, res, next) => {
    const {id} = req.params
    try {
      const data = await Action.get(req.params.id)

      if (!data) {
        next({status: 404, message: `Action with ID# ${id} Not Found!`})
      } else {
        req.action = data
        next()
      }
    } catch (error) {
      next(error)
    }
  }

  validateEntries = (req, res, next) => {
    const {project_id, description, notes, completed} = req.body

    if (
      !project_id ||
      !description ||
      typeof completed !== 'boolean' ||
      !notes
    ) {
      next({status: 400, message: 'Missing fields or Invalid Fields'})
    } else {
      req.data = {
        project_id: Number(project_id),
        description: description.trim(),
        notes: notes.trim(),
        completed: completed || false,
      }
      next()
    }
  }
}

module.exports = new Validade()
