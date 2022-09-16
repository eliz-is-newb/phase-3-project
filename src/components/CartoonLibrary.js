import React, {useState} from "react";
import { Columns } from 'react-bulma-components';
import { Resizable, ResizableBox } from 'react-resizable';
import { Link } from "react-router-dom";

const CartoonLibrary = () => {

   const [frames, setFrames] = useState([{links: "this is a link"}])



return (
<>

    <div id="cartoonlibrary-bg">
            <div id="test"> 
    <ResizableBox style={{marginLeft: "184px"}} width={1000} height={100} draggableOpts={{grid: [25, 25]}}
    minConstraints={[100, 100]} maxConstraints={[300, 300]}>
        <Columns>
        <Columns.Column></Columns.Column>
         <Columns.Column size={5} style={{ padding: "-10px"}}>
        <img  src="../bggb84.png"
        style={{
            marginLeft:"-29px",
            minHeight: "10%",
            marginTop: "172px",
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
        <div id="cartoon-button-container">

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
            <Link to="" className="nes-btn" 
            style={{
                marginBottom: "-140px", 
                marginLeft:"854px", 
                marginTop:"32px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                Play Me!
                </Link> <br/>
            {/* Button - Show 2 */}
            <Link to="" className="nes-btn" 
            style={{
                marginBottom: "-100px", 
                marginLeft:"573px", 
                marginTop:"25px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                Play Me!
                </Link> <br/>

            {/* Button - Show 3 */}
            <Link to="" className="nes-btn" 
            style={{
                marginBottom: "-204px", 
                marginLeft:"853px", 
                marginTop:"25px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                PLAY ME !!!
                </Link> <br/>

            {/* Button - Show 4 */}
            <Link to="" className="nes-btn" 
            style={{
                marginBottom: "-306px", 
                marginLeft:"572px", 
                marginTop:"25px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                Play Me!
                </Link> <br/>

            {/* Button - Show 5 */}
            <Link to="" className="nes-btn" 
            style={{
                marginBottom: "-100px", 
                marginLeft:"573px", 
                marginTop:"25px", 
                fontSize: "16px", 
                cursor: "pointer", 
                width: "200px", 
                stroke:"ButtonHighlight"}}> 
                No, Play Me!
                </Link> <br/>


        </div>

    </ResizableBox>
     </div>

</div>





</>





)}
export default CartoonLibrary
