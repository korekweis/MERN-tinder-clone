 /**
  * this will create the structure of the tindercards in the database
  */

 import mongoose from 'mongoose';

//creating a structure
//this structure should be followed in postman 
const cardSchema = mongoose.Schema({
    name: String, 
    imgUrl: String
})

//export the schema 
export default mongoose.model('Cards', cardSchema);