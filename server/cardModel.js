const mongoose = require('mongoose') ;

const cardSchema = mongoose.Schema(
    {
        author : {
            type:String ,
        } ,
        imageUrl : {
            type:String 
        }
    }
)

let cardDataModel ;
if(mongoose.model.carddatas){
     return mongoose.model('carddatas') ;
}  

cardDataModel = mongoose.model('carddatas',cardSchema) ;
module.exports  = cardDataModel ;