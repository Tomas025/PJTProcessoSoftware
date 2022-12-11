const mongoose = require('mongoose');

async function connetiodb(){
    await mongoose.connect('mongodb+srv://gabriel:gbr81828182@cluster0.spv2phu.mongodb.net/test');
}

module.exports = connetiodb;