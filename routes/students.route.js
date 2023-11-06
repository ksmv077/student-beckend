const expresss = require('express')
const studentControllers = require('../controllers/students.controller')

const app = expresss()

app.get('/students', studentControllers.getStudent)

app.post('/students/', studentControllers.postStudent)

app.delete('/students/:id', studentControllers.deleteStudent)

app.patch('/students/:id', studentControllers.patchStudent)

module.exports = app