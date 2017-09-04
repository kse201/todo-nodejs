#!/usr/bin/env node

const app = require("./lib/app/index")
const minimist = require("minimist")

let argv = minimist(process.argv.slice(2))
app.run(argv)
