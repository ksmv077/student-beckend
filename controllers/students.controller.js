const Student = require("../models/Student.model");

const studentControllers = {
  postStudent: async (req, res) => {
    try {
      const student = await Student.create({
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age,
      });
      res.json(student);
    } catch (error) {
      res.json(error);
    }
  },
  deleteStudent: async (req, res) => {
    try {
      const student = await Student.findByIdAndRemove(req.params.id);
      res.json(student);
    } catch (error) {
      res.json(error);
    }
  },
  getStudent: async (req, res) => {
    try {
      const student = await Student.find();
      res.json(student);
    } catch (error) {
      res.json(error);
    }
  },
  patchStudent: async (req, res) => {
    try {
      const student = await Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name
      });
      res.json(student);
    } catch (error) {
      res.json(error);
    }
  },
};

module.exports = studentControllers;