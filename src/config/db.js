
const mongose = require('mongoose');
require('dotenv').config(({  path:'../../.env'}));


async function  connect_db()
{
    try{   await mongose.connect(process.env.MONGO_URI) ; console.log("success");  process.exit()} 
    catch (error) { console.error("Error db ", error); process.exit(1)} 
}

connect_db()