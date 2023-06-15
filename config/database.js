const mongoose = require ("mongoose")

/*On line four(4), our dataBase name (set07) is assign as the variable
 to the url for mongoDB, in the creation of our dataBase*/
const Set07 = "mongodb://0.0.0.0:27017/Set07"

/* from line eighy(8) dwon to line fourteen(14) 
a function is created to connect to our mongodb server. */
const newDatabase = async () =>{
    try {
        const database = await mongoose.Connection(Set07)
        console.log("")
        console.log("Set07 Database now ready for consumption")
    } catch (error) {
        console.log("An error occured in our database")
        
    }
}

module.exports = newDatabase