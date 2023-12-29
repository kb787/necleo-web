const cardDataModel = require('./cardModel') ;
const express = require('express') ;
const getCardsRouter = express.Router() ;
const postCardsRouter = express.Router() ;
const updateCardsRouter = express.Router() ;
const deleteCardsRouter = express.Router() ;
const Middleware = require('./middleware') ;

const handlePostNewCard = async(req,res) => {
      const {author,imageUrl} = req.body ;
      console.log(req.body) ;
      try {
            if((!author) || (!imageUrl))
            {
               return res.status(404).send({message:'Enter all fields is mandatory',success:false}) ;
            }
            let postCardResponse = await new cardDataModel(
                {
                    author,imageUrl
                }
            ) ;
            let savedCardResponse = await postCardResponse.save();
            console.log(savedCardResponse) ;
            return res.status(201).send({message:'Successfully posted new card ', success:true , savedCardResponse}) ;
      }
      catch(error) {
          console.log(error) ;
          return res.status(500).send({message:'Unable to perform the request'}) ; 
      }
}

const getAllPrevCards = async(req,res) => {
     const {author,imageUrl} = req.body ;
     console.log(req.body) ;

     try {
          let cardFetchResponse = await cardDataModel.find() ;
          console.log(cardFetchResponse) ;
          let convertedResponse =  Array.from(cardFetchResponse)
          return res.send({convertedResponse}) ;
     }
     catch(error) {
         console.log(error) ;
         return res.status(500).send({message:'Unable to perform the request'}) ;
     }
}

const deleteCardById = async(req,res) => {
     try {
           let delResponse = await cardDataModel.findByIdAndRemove(req.cardId) ;
           console.log(delResponse) ;
           return res.status(200).send({message :'Successfully removed the item' , delResponse}) ;
     }
     catch(error) {
         console.log(error) ;
         return res.status(500).send({message:'Unable to perform your request'}) ;
     }
}

const updateCardById = async(req,res) => {
     try {
          let updatedResponse = await cardDataModel.findByIdAndUpdate(req.cardId,req.body,{new:true}) ;
          console.log(updatedResponse) ;
          return res.status(201).send({message:'Successfully updated the data',updatedResponse}) ; 
     }
     catch(error) {
         console.log(error) ;
         return res.status(500).send({message:'Unable to perform the request'}) ;
     }
}

getCardsRouter.get('/getAllCards',getAllPrevCards) ;
postCardsRouter.post('/postCard',handlePostNewCard) ;
updateCardsRouter.put('/putCards/:id',Middleware,updateCardById) ;
deleteCardsRouter.delete('/deleteCards/:id',Middleware,deleteCardById) ;

module.exports = {
    getCardsRouter:getCardsRouter,
    postCardsRouter:postCardsRouter ,
    updateCardsRouter:updateCardsRouter,
    deleteCardsRouter:deleteCardsRouter,
}


