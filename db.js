const mongoose = require('mongoose')
require('dotenv').config()
//define mongodb url
//const mongoUrl = 'mongodb://127.0.0.1:27017/hotels'
const mongoUrl = process.env.MONGODB_URL
//const mongoUrl = process.env.MONGODB_URL_LOCAL
main().catch(err => console.log(err));

async function main() {
    await  mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
}
//mongoose maintains a default connection object representing the mongo db connection
const db = mongoose.connection;

//define event listeners for database connection
db.on('connected', () => { console.log('Connected to MongoDB server'); })
db.on('error', (err) => { console.error('MongoDB connection error', err); })
db.on('disconnected', () => { console.log('MongoDB disconnected'); })

//export connection

module.exports = db;