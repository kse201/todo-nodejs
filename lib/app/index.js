const task = require("./controllers/task")
const inquirer = require("inquirer")

let createPrompt = () => {
  let questions = [
    {
      name: "title",
      type: "input",
      message: "Enter title"
    }, {
      name: "description",
      type: "input",
      message: "Enter description"
    }
  ]

  inquirer.prompt(questions).then(answer => {
    let title = answer.title
    let description = answer.description
    let done = false

    task.create(title, description, done)
  })
}

let cb_update = (_task) => {
  let questions = [
    {
      name: "title",
      type: "input",
      default: _task.title,
      message: "Enter title"
    }, {
      name: "description",
      type: "input",
      default: _task.description,
      message: "Enter description"
    }, {
      name: "done",
      type: "list",
      default: _task.done.toString(),
      choices: ["true", "false"],
      message: "Enter status"
    }
  ]

  inquirer.prompt(questions).then(answer => {
    task.update(_task.id, answer.title, answer.description, answer.done)
  })
}

let cb_delete = (_task) => {
  let questions = [
    {
      type: "confirm",
      name: "confirm",
      message: "Delete task?"
    }
  ]

  inquirer.prompt(questions).then(answer => {
    if (answer.confirm) {
      task.delete(_task.id)
    } else {
      console.log("Canceled")
    }
  })
}

class App {
  run(argv) {
    let subcmd = argv._[0]

    switch (subcmd) {
      case "list": {
        task.list()
        break
      }
      case "create": {
        createPrompt()
        break
      }
      case "show": {
        let id = argv._[1]

        task.show(id)
        break
      }
      case "delete": {
        let id = argv._[1]
        task.show(id)
        task.intaractive(id, cb_delete)
        break
      }
      case "update": {
        let id = argv._[1]

        task.interactive(id, cb_update)
        break
      }
      default: {
        console.log("undefine!")
        break
      }
    }
  }
}


module.exports = new App
