import { useEffect, useState } from "react";
import "../assets/css/carousel.css"
import placeholder from "../assets/media/no_image_to_show_.jpg";
import {Buffer} from 'buffer';
const Carousel = (props) => {

  const [image,setImage] = useState([]);

  useEffect(() => {

          let imagesInitial = props.images

        let imagesFinal = []

        if(props.images !== undefined){

          for(let i = 0; i < props.images.length; i++){
            imagesFinal[i] = new Buffer(imagesInitial[i]).toString("base64")
          }
        
          setImage(imagesFinal)
        }
  },[])

    let imageListZero = (image.length === 0 ) ? <li data-target={"#myCarousel"+props.carouselId} data-slide-to="0" className="active"></li> : null
    let imageListOne = (image.length >= 1) ? <li data-target={"#myCarousel"+props.carouselId} data-slide-to="0" className="active"></li> : null
    let imageListTwo = (image.length >= 2) ? <li data-target={"#myCarousel"+props.carouselId} data-slide-to="1"></li> : null
    let imageListThree = (image.length >= 3) ? <li data-target={"#myCarousel"+props.carouselId} data-slide-to="2"></li> : null

    let imageDisplayZero = (imageListZero) ? <div className="item active">
    <img className="size" src={placeholder} alt="Los Angeles" style={{width:"100%"}}/>
    </div> : null

    let imageDisplayOne = (imageListOne) ? <div className="item active">
    <img className="size" src={`data:image/png;base64,${image[0]}`} alt="Los Angeles" style={{width:"100%"}}/>
    </div> : null

    let imageDisplayTwo = (imageListTwo) ? <div className="item">
    <img className="size" src={`data:image/png;base64,${image[1]}`} alt="Chicago" style={{width:"100%"}}/>
    </div> : null

    let imageDisplayThree = (imageListThree) ? <div className="item">
    <img className="size" src={`data:image/png;base64,${image[2]}`} alt="Chicago" style={{width:"100%"}}/>
    </div> : null



  return(
    <div className="container-carousel ">  
  <div style={{marginTop:"10px"}} id={"myCarousel"+props.carouselId} className="carousel slide shadow" data-ride="carousel">
  
    <ol className="carousel-indicators">
      {imageListZero}
      {imageListOne}
      {imageListTwo}
      {imageListThree}
    </ol>

   
    <div className="carousel-inner">
      {imageDisplayZero}
      {imageDisplayOne}
      {imageDisplayTwo}
      {imageDisplayThree}
    </div>
    {/* {nextPrevButtons} */}
   
   
  </div>
</div>
  )


}
export default Carousel