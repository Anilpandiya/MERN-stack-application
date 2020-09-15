const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//schema
const ToDoSchema = new Schema({
    action: {
        type: String,
        required: [true, 'The todo text field is required']
    }
})

//model

const ToDo = mongoose.model('todo', ToDoSchema);

module.exports = ToDo;