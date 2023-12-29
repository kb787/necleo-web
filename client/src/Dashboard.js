import image from "D:/taskInternship/client/src/images/image.png"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome' 
import {faFile,faRectangleList} from '@fortawesome/free-regular-svg-icons'
import {faCartFlatbedSuitcase,faCirclePlay,faCircleQuestion,faMessage,faOutdent,faFileCirclePlus} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'
import ImageFetchingCard from "./ImageFetchingCard" 
import DataFetchingComponent from "./DataFetchingComponent"
import {useState} from 'react' 
import axios from 'axios' ;
import {message} from 'antd' ;

const Dashboard = () => {
   const [author,setAuthor] = useState('') ;
   const [imageUrl,setImageUrl] = useState('') ;
   const [popupOpen,setPopupOpen] = useState(false) ;

    const handleOpenPopup = () => {
        setPopupOpen(true) ;
    }
    const handleClosePopup = () => {
        setAuthor('') ;
        setImageUrl('') ;
        setPopupOpen(false) ;
    }
    
    const handleFormPosting = async() => {
      try {
            if((!author) || (!imageUrl) ) {
                message.error('Entering all fields is mandatory') ;
            }
            let postResponse = await axios.post("http://localhost:3500/v2/api/postCard", {
                 author : author,
                 imageUrl:imageUrl
            })
            console.log(postResponse) ;
            if(postResponse.data.success){
                message.success('Successfully added the card')
                handleClosePopup();
            }
            else {
               message.error('Unable to add the card. Fill up all the fields')
            } 
      }
      catch(error) {
            console.log(error) ;
            message.error('Server side error occured') ;
      }
  }

    return (
        <div className = "Dashboard">
            <div className = "mainContainer">
                <div className = "mainContainerGroup1">
                <div className = "mainContainerGroup3">
                      <div className = "mainContainer3ParentGroup"> 
                        <div className = "mainContainer3ChildSubgroup">
                           <p className = "mainContainer3ChildSubgroupText1">Free Trial</p>
                           <p className = "mainContainer3ChildSubgroupText2">Extend free trail</p> 
                        </div> 
                        <p className = "mainContainer3ChildSubgroupText1">|</p> 
                        <p className = "mainContainer3ParentGroupText3">2 days left</p>
                       <img src = {image} className = "mainContainer3ParentGroupImage" />
                      </div>
                   </div> 
                     <h5 className = "pageHeading">Necleo</h5>
                     <div className = "itemCollection">
                     <FontAwesomeIcon icon = {faFile} className = "iconStyling" />
                     <p className = "pageHeadingElements">My Projects</p>
                     </div>
                     <br/>
                     <div className = "itemCollection">
                     <FontAwesomeIcon icon = {faRectangleList} className = "iconStyling"/>   
                     <p className = "pageHeadingElements">Sample Projects</p>
                     </div>
                     <br/>
                     <div className = "itemCollection">
                     <FontAwesomeIcon icon = {faCartFlatbedSuitcase} className = "iconStyling"/>    
                     <p className = "pageHeadingElements">Apps</p>
                     </div>
                     <br/>
                     <div className = "itemCollection">
                     <FontAwesomeIcon icon = {faCirclePlay} className = "iconStyling"   />    
                     <p className = "pageHeadingElements">Intro to Necleo</p>
                     </div>
                     <br/>
                     <div className = "itemCollection"> 
                      <FontAwesomeIcon icon = {faCircleQuestion} className = "iconStyling" /> 
                      <p className = "pageHeadingElements">Help & Support</p>
                     </div>
                     <br/>
                     <div className = "itemCollection"> 
                    <FontAwesomeIcon icon = {faMessage} className = "iconStyling" /> 
                     <p className = "pageHeadingElements">Feedback</p>
                    </div>  
                    <br/>
                    <div className = "itemCollection"> 
                  <FontAwesomeIcon icon = {faOutdent} className = "iconStyling" /> 
                    <p className = "pageHeadingElements">Collapse</p>
                  </div> 
                     <br/>
                </div> 
              {/*  
                <div className = "mainContainerGroup2">
                  <div className = "itemCollection"> 
                  <FontAwesomeIcon icon = {faCircleQuestion} className = "iconStyling" /> 
                    <p className = "pageHeadingElements">Help & Support</p>
                  </div> 
                  <br/> 
                  <div className = "itemCollection"> 
                  <FontAwesomeIcon icon = {faMessage} className = "iconStyling" />  
                    <p className = "pageHeadingElements">Feedback</p>
                  </div> 
                  <br/>
                  <div className = "itemCollection">  
                    <FontAwesomeIcon icon = {faOutdent} className = "iconStyling" /> 
                    <p className = "pageHeadingElements">Collapse</p>
                  </div>  
                </div> 
    */}  
                <div className = "subContainer">
                     <h3 className = "subContainerHeading">My Projects</h3>
                     <div className = "childContainer">
                         <div className = "grandChildContainer">
                            <div className = "grandChildIcon">
                            <FontAwesomeIcon icon = {faFileCirclePlus} className = "grandChildIconStyling" onClick = {handleOpenPopup}/>
                            { popupOpen && (
                                        <div className="Popup">
                                        <div className="mainContainerPopup" onClick={(e) => e.stopPropagation()}>
                                          <p className = "cardParagraph">Enter card details</p>
                                          <input className = "popupInput" placeholder='Enter author name' value = {author} onChange = {(e) => setAuthor(e.target.value)} />
                                          <br/>
                                          <input className = "popupInput" placeholder='Enter url of image' value = {imageUrl} onChange = {(e) => setImageUrl(e.target.value)} />
                                          <ul className = "buttonCollection"> 
                                            <li><button className = "popupButton" onClick = {handleFormPosting}>Add Card</button> </li> 
                                            <li><button className = "popupButton" onClick = {handleClosePopup}>Close</button> </li>
                                          </ul>   
                                        </div>
                                      </div>
                            )
                            }
                            </div> 
                         </div>  
                         <p className = "childContainerPara1">Click on icon to create a new project</p>
                         <p className = "childContainerPara2">or try a <p className = "childSubContinerParaChild">sample project</p></p>
                      </div> 
                      <h3 className = "subContainerHeading">My Previous projects</h3>             
                      <div className = "cardContainer">
                            <ImageFetchingCard/>
                      </div>
                </div>
                </div>  
            </div>
    )
}

export default Dashboard ;