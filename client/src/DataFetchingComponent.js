import {useState,useEffect} from 'react' ;
import {message} from 'antd' ;

const DataFetchingComponent = () => {
    const [data,setData] = useState([])
    
    useEffect(() =>  {
        const handleApiFetching = async() => {
             try {
                 let fetchResponse = await fetch("http://localhost:3500/v1/api/getAllCards") ;
                 if(!fetchResponse){
                     message.error('Unable to get images') ;
                 }
                 else { 
                    let updatedData = Array.from(fetchResponse)
                    setData(updatedData) ;
                 }
             }
             catch(error){
                 console.log(error) ;
                 message.error('Server side error occured') ;
             }
        }
      handleApiFetching()},[]) 
      return  ( 
        (data?.map((item) =>  
            <div  key = {item._id}>     
            <div>   
                     <li className = "cardContainerWrapping">
                                <p className = "fetchImagesParagraph">{item.author}</p>  
                               <img src = {item.imageUrl} className = "fetchImages" /> 
                     </li>        
            </div>
        </div>    
            )

        )    
      )
}

export default DataFetchingComponent;