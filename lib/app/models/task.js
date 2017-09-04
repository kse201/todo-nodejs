const Sequelize = require("sequelize")
const sequelize = new Sequelize("todo", "", "", {
  host: "localhost",
  dialect: "sqlite",
  storage: process.env.HOME + "/.todo.sqlite"
})

let Task = sequelize.define("Task", {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  done: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

sequelize.sync()
module.exports = Task
