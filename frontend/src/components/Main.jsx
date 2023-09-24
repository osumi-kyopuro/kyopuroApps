import React from "react";
import icon from "./atcoder.png";


const imgStyle={
    alt:"運営者のアイコン",
    width:"100%",
    height:"100%",
};

const box={
    position:"relative"
};

const message={
    position: "absolute",
    top: "50%",
    left: "50%",
    fontSize:"300%",
    transform: "translate(-50%,-50%)"
}




export const Main=()=>{
    const {alt,width,height}=imgStyle;
    return (
        <div style={box}>
            <h1 style={message}>あなたの競プロ学習の助けになりたい！！</h1>
            <img src={icon} alt={alt} width={width} height={height}/>  
        </div>
    );
};