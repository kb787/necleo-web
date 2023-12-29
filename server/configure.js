const mongoose = require('mongoose') ;
const dotenv = require('dotenv') ;
const colors = require('colors') ;

dotenv.config() ;

const Configure = async() => {
    try  {
        await mongoose.connect(process.env.mongodb_uri) ;
        console.log(`Successfully connected to database`.bgGreen) ; 
    } 
    catch(error) {
        console.log(error) ;
        console.log(`Unbale to connect to database`.bgRed) ;
    }
}

module.exports = Configure ;