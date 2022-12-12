const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const taskSchema = new Schema({
  id: ObjectId,
  name: String,
  category: String,
  dateTimeInitial: String,
  dateTimeFinal: String,
  finished: {type: Boolean, default: false}
});

const taskModel = mongoose.model('tasks', taskSchema);

module.exports = taskModel;