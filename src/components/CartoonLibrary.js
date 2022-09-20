import React, {useState, useEffect} from "react";
import { Columns } from 'react-bulma-components';
import { Resizable, ResizableBox } from 'react-resizable';
import { Link } from "react-router-dom";

const CartoonLibrary = () => {

    
    const [cartoons, setCartoons] = useState([])
   
    useEffect(() => {
    const getData = async() => {
    let req = await fetch("http://localhost:3000/cartoons") 
    let res = await req.json()
    console.log(res)
    setCartoons(res)
    } 
    getData() 
}, []) 


let displayShow1 = function(){
    
    document.getElementById('load-show1').showModal()
}

let displayShow2 = function(){
    
    document.getElementById('load-show2').showModal()
}


let displayShow3 = function(){
    
    document.getElementById('load-show3').showModal()
}


return (
<>

    <div id="cartoonlibrary-bg">
            <div id="test"> 
    <ResizableBox style={{marginLeft: "24px", marginBottom:"23px"}} width={1000} height={100} draggableOpts={{grid: [25, 25]}}
    minConstraints={[100, 100]} maxConstraints={[300, 300]}>
        <Columns>
        <Columns.Column></Columns.Column>
         <Columns.Column size={5} style={{ padding: "-10px"}}>
        <img  src="../bggb84.png"
        style={{
            marginLeft:"-29px",
            minHeight: "10%",
            marginTop: "150px",
            marginBottom: "-15px", 
            width: "1514px",
            minWidth: "1027px",
            overflow: "hidden"
        }}
        ></img> 
       
       
        </Columns.Column>
        <Columns.Column></Columns.Column>

        </Columns> 

        {/* Where all the buttons to launch the cartoons are held! */}
        {/* 
         */}
        {/* Banner! */}
        <p className="nes-container is-rounded" 
       
        style={{
            zIndex: "5",
            minWidth:"500px",
            marginRight: "598px",
            marginTop: "-720px",
            marginLeft: "562px",
            height:"68px",
            color: "black",
            stroke: "ActiveBorder",
            fontSize: "18px",
            fontWeight: "",textAlign: "center", backgroundColor:" white", color: "black"}}
            >Fun. fun. fun. shows. 
            
        </p> 

       
            {/* Button - Show 1 */}
            <button 
            onClick={displayShow1}
            className="nes-btn" 
            style={{
                marginBottom: "-140px", 
                marginLeft:"854px", 
                marginTop:"32px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                Play Me!
                </button> <br/>

            {/* Button - Show 2 */}
            <button
            onClick={displayShow2}
            to="" className="nes-btn" 
            style={{
                marginBottom: "-100px", 
                marginLeft:"573px", 
                marginTop:"25px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                Play Me!
                </button> <br/>

            {/* Button - Show 3 */}
            <button 
            onClick={displayShow3}
            to="" className="nes-btn" 
            style={{
                marginBottom: "-204px", 
                marginLeft:"853px", 
                marginTop:"25px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                PLAY ME !!!
                </button> <br/>

            {/* Button - Show 4 */}
            <button to="" className="nes-btn" 
            style={{
                marginBottom: "-306px", 
                marginLeft:"572px", 
                marginTop:"25px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                Play Me!
                </button> <br/>

            {/* Button - Show 5 */}
            <button to="" className="nes-btn" 
            style={{
                marginBottom: "-100px", 
                marginLeft:"573px", 
                marginTop:"25px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                No, Play Me!
                </button> <br/>
            </ResizableBox>


{cartoons.map(cartoon => {
        <div id="cartoons-container" key={cartoon.link}>

        
        {/* Where all the iframes are !! */}
        <dialog id="load-show1" className="nes-dialog is-rounded"
        
       
        style={{

            position: "absolute",
            
            height: "499px", 
            marginTop: "-465px",
            width:"786px",
            marginLeft:"389px",}}>
            
            <iframe 
            src={cartoon.link}
            width="100%" height="100%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="false" ></iframe>
 
        </dialog>

        <dialog id="load-show2" className="nes-dialog is-rounded"
       
        style={{
        
            position: "absolute",
            height: "499px", 
            marginTop: "-465px",
            width:"786px",
            marginLeft:"389px",}}>
           

            <iframe 
            src={cartoons.link2}
            width="100%" height="100%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="false" ></iframe>

        </dialog>
        <dialog id="load-show3" className="nes-dialog is-rounded"
       
        style={{
        
            position: "absolute",
            height: "499px", 
            marginTop: "-465px",
            width:"786px",
            marginLeft:"389px",}}>
           

            <iframe 
            src={cartoons.link3}
            width="100%" height="100%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="false" ></iframe>

        </dialog>
        {/* iframe end */}
        

       
                            
          </div>
        
        })}
      
    
     </div>

</div>





</>





)}
export default CartoonLibrary
