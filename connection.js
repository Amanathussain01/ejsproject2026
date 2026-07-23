const mongoose = require('mongoose');
async function connect(){
    try {
        await mongoose.connect('mongodb+srv://reelo_db_user:Amanat123%40@cluster0.iyrbpdy.mongodb.net/list_db')
        console.log("db connected......")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connect