const task = require("./controllers/task")
const inquirer = require("inquirer")

let prompt = (key) => {
  let q = [{
    name: key,
    type: "input",
    message: "Enter " + key
  }]
  return inquirer.prompt(q).then((answer) => {
    return answer[key]
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
        let title = argv.title || prompt("title")
        let description = argv.description || prompt("description")
        let done = argv.done || false

        task.create(title, description, done)
        break
      }
      case "show": {
        let id = argv._[1]
        task.show(id)
        break
      }
      case "delete": {
        let id = argv._[1]
        task.delete(id)
        break
      }
      case "update": {
        let id = argv._[1]
        let title = argv.title
        let description = argv.description
        let done = argv.done

        task.update(id, title, description, done)
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
