let fs = require('graceful-fs')
let dir = require('node-dir')
let concat = require('concatenate-files')
let walk = require('fs-walk')
let _ = require('lodash')


//const dirNum = process.argv[2]

//console.log("param: " + dirNum)

let dirs = fs.readFileSync("/Users/mtbutler/Desktop/yf/directory-list.json")
let directories = JSON.parse(dirs)

let chunkedDirs = _.chunk(directories, 50)

let counter = fs.readFileSync("/Users/mtbutler/Desktop/yf/counter.txt")
let nextCounter = _.toNumber(counter) + 1
fs.writeFileSync("/Users/mtbutler/Desktop/yf/counter.txt", nextCounter)
console.log(" counter: " + counter)

_.forEach(chunkedDirs[counter], function (value) {
  var fileList = fs.readdirSync("/Users/mtbutler/Desktop/yf/" + value + '/' + value)
  var fileListFull = []
  _.forEach(fileList, function (data) {
    fileListFull.push("/Users/mtbutler/Desktop/yf/" + value + '/' + value + '/' + data)
  })
  concat(fileListFull, "/Users/mtbutler/Desktop/yf/" + value + '.txt', function (err) {
    if (err) throw err
    console.log('done')
  })
})