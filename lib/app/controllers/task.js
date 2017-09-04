const Task = require("../models/task")
const view = require("../views/task")

class TaskController {
  list() {
    Task.findAll().then((tasks) => {
      view.render(tasks)
    })
  }

  show(id) {
    Task.findById(id).then((task) => {
      view.render(task)
    })
  }

  create(title, description, done) {
    Task.create({
      title: title,
      description: description,
      done: done
    })
  }

  delete(id) {
    Task.findById(id).then((task) => {
      task.destroy()
    })
  }

  update(id, title, description, done) {
    Task.findById(id).then((task) => {
      task.update({
        title: title,
        description: description,
        done: done
      }).then(() => {
        this.show(id)
      })
    })
  }
}

module.exports = new TaskController
