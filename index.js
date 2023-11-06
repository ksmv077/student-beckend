const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.use(express.json());
app.use(require("./routes/students.route.js"));

mongoose.connect("mongodb+srv://imran:12344321@cluster0.pv1kzvp.mongodb.net/")
  .then(() => console.log('Успешно соединились с сервером MongoDB'))
  .catch(() => console.log('Ошибка при соединении с сервером MongoDB'))

app.listen(3000, () => {
  console.log('Сервер запущен успешно')
})