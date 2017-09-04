let Task = require("./models/task")
const Table = require("cli-table")

class App {
  run(argv) {
    let subcmd = argv._[0]

    switch (subcmd) {
      case "list": {
        this.listTask()
        break
      }
      case "create": {
        let title = argv.title
        let description = argv.description
        let done = argv.done

        this.createTask(title, description, done)
        break
      }
      case "show": {
        let id = argv._[1]
        this.showTask(id)
        break
      }
      default: {
        console.log("undefine!")
        break
      }
    }
  }

  listTask() {
    let table = new Table({
      head: ["ID", "title", "description", "done"]
    })
    Task.findAll().then((tasks) => {
      tasks.forEach((a) => {
        table.push([a.id, a.title, a.description, a.done])
      })
      console.log(table.toString())
    })
  }

  showTask(id) {
    Task.findById(id).then((task) => {
      let table = new Table({
        colWidths: [10,50]
      })

      table.push(["ID", task.id])
      table.push(["title", task.title])
      table.push(["description", task.description])
      table.push(["done", task.done])
      table.push(["create_at", task.createdAt])
      table.push(["update_at", task.updatedAt])

      console.log(table.toString())
    })
  }

  createTask(title, description, done) {
    Task.create({
      title: title,
      description: description,
      done: done
    })
  }

  deleteTask() {
  }

  updateTask() {
  }
}

module.exports = new App
