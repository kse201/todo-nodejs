const Sequelize = require("sequelize")
const sequelize = new Sequelize("todo", "", "", {
  host: "localhost",
  dialect: "sqlite",
  storage: process.env.HOME + "/.todo.sqlite",
  logging: null
})

let Task = sequelize.define("Task", {
  title: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      notEmpty: true
    }
  },
  done: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

sequelize.sync()
module.exports = Task
