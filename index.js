#!/usr/bin/env node

const app = require("./lib/app/index")
const minimist = require("minimist")

let argv = minimist(process.argv.slice(2), {
  string: ["title", "description"],
  boolean: ["done"]
})
app.run(argv)
