import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let [currIndex, setCurrIndex] = useState(0);

    function moveBackward(){
        if(currIndex<0){
            setCurrIndex(images.length-1)
        }else{
            setCurrIndex(currIndex-1)
        }

    }

    function moveForward(){
        if(currIndex == images.length-1){
            setCurrIndex(0)
        }else{
            setCurrIndex(currIndex+1)
        }
    }

    return (
        <>
            <div className="main-container">
                <div className="prevbutt">
                    <button onClick={moveBackward} className="prevbutt"><ArrowBackIosIcon /></button>
                </div>
                <div className="image_container">
                    <div className="title_box">
                        <h2 className="title">{images[currIndex].title}</h2>
                    </div>
                    <div className="image_box">
                        <img src={images[currIndex].img} alt="" className="image"/>
                    </div>
                    <div className="subtitle_box">
                        <h3 className="subtile">{images[currIndex].subtitle}</h3>
                    </div>
                </div>
                <div className="nxtbutt">
                    <button onClick={moveForward} className="nextbutt"><ArrowForwardIosIcon /></button>  
                </div>
            </div>

        </>
    )
}

export default Carousel;