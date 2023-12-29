const express = require('express') ;
const app = express() ;
const http = require('http') ;
const server = http.createServer(app) ;
const cors = require('cors') ;
const Configure = require('./configure') ;
const {getCardsRouter,postCardsRouter,updateCardsRouter,deleteCardsRouter} = require('./controller')

Configure() ;
const corsOptions = {
      origin:'http://localhost:3000'
}

app.use(express.json()) ;
app.use(cors(corsOptions)) ;
app.use('/v1/api',getCardsRouter) ;
app.use('/v2/api',postCardsRouter) ;
app.use('/v3/api',updateCardsRouter) ;
app.use('/v4/api',deleteCardsRouter) ;

server.listen("3500", () => {
     console.log("App launched successfully") ;
})

