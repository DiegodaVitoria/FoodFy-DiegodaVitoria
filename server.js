const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const receivers = require("./data")

server.use(express.static('public'))


server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})


server.get("/layout", function(req, res) {
    return res.render("layout")
})

server.get("/", function(req, res) {
    return res.render("index")
})

server.get("/sobre", function(req, res) {
    return res.render("sobre")
})

server.get("/receitas", function(req, res) {
    return res.render("receitas")
})


server.get("/modulo", function(req, res) {
    return res.render("modulo", {items: receivers})
})

server.listen(5001, function(){
    console.log("servidor rodando")
})