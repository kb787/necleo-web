import {useState,useEffect} from 'react' ;
import {message} from 'antd' ;

const ImageFetchingCard = () => {
    const [data,setData] = useState([])
    
    useEffect(() =>  {
        const handleApiFetching = async() => {
             try {
                 let fetchResponse = await fetch("https://picsum.photos/v2/list?page=1&limit=6") ;
                 if(!fetchResponse){
                     message.error('Unable to get images') ;
                 }
                 else { 
                    let jsonData = await fetchResponse.json() ;
                    setData(jsonData) ;
                 }
             }
             catch(error){
                 console.log(error) ;
                 message.error('Server side error occured') ;
             }
        }
      handleApiFetching()},[]) 
      return  ( 
     <ul className = "imageCardSets"> 
       {
        (data?.map((item) =>   
            <div  key = {item.id}>     
            <div>   
            
                     <li className = "cardContainerWrapping">
                                <p className = "fetchImagesParagraph">{item.author}</p>  
                               <img src = {item.download_url} className = "fetchImages" /> 
                     </li>
                             
            </div>
        </div>    
            )

        ) 
       }
        </ul>       
      )
   
}

export default ImageFetchingCard;