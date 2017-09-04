const Table = require("cli-table")
const util = require("util")

class TaskView {
  render (object) {
    if (util.isArray(object)) {
      this.list(object)
    } else {
      this.show(object)
    }
  }
  list (tasks) {
    let table = new Table({
      head: ["ID", "title", "description", "done"]
    })
    tasks.forEach((a) => {
      table.push([a.id, a.title, a.description, a.done])
    })
    console.log(table.toString())
  }
  show (task) {
    let table = new Table({
      colWidth: [20, 20, 20]
    })

    table.push(["ID", task.id])
    table.push(["title", task.title])
    table.push(["description", task.description])
    table.push(["done", task.done])
    table.push(["create_at", task.createdAt])
    table.push(["update_at", task.updatedAt])

    console.log(table.toString())
  }
  error(e, params) {
    console.error(e.message)
    console.error("Params: ", params)
  }
}

module.exports = new TaskView
