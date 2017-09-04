const Task = require("../models/task")
const view = require("../views/task")

class TaskController {
  list() {
    Task.findAll().then(tasks => {
      view.render(tasks)
    }).catch(e => {
      view.error(e)
    })
  }

  show(id) {
    Task.findById(id).then(task => {
      view.render(task)
    }).catch(e => {
      view.error(e, {id: id})
    })
  }

  create(title, description, done) {
    Task.create({
      title: title,
      description: description,
      done: done
    }).then(() => {
      this.list()
    }
    ).catch(e => {
      view.error(e, {title: title, description: description, done: done})
    })
  }

  delete(id) {
    Task.findById(id).then(task => {
      task.destroy()
    }).then(() => {
      this.list()
    }).catch(e => {
      view.error(e, {id: id})
    })
  }

  update(id, title, description, done) {
    Task.findById(id).then(task => {
      task.update({
        title: title,
        description: description,
        done: done
      }).then(() => {
        this.show(id)
      })
    }).catch(e => {
      view.error(e, {id: id})
    })
  }

  intaractive(id, callback) {
    Task.findById(id).then(task => {
      callback(task)
    }).catch(e => {
      view.error(e, {id: id})
    })
  }

  get(id) {
    let _task = null
    Task.findById(id).then(task => {
      _task = task
    }).catch(e => {
      view.error(e, {id: id})
    })
    return _task
  }
}

module.exports = new TaskController
