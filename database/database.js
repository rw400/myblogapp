let mongoose = require('mongoose');

const server = 'localhost:27017';
const dbName = 'dbdata';

// const connectionString = "mongodb://" + server + "/" + dbName;
const connectionString = `mongodb://${server}/${dbName}`;

const connect = () => {
	mongoose.connect(connectionString)
		.then(() => { console.log(`Connected to mongodb at : ${connectionString}`)})
		.catch(err => { console.log(err)});
};

module.exports = connect;

