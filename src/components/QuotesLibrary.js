import React, {useState} from "react";
import { Columns } from 'react-bulma-components';
import { Resizable, ResizableBox } from 'react-resizable';
import { Link } from "react-router-dom";

const QuotesLibrary = () => {

   const [frames, setFrames] = useState([{links: "this is a link"}])

   


return (
<>

    <div id="quoteslibrary" style={{position:"relative"}}
    >
    
        {/* Where all the iframes are !! */}
        <div 
        style={{
            position: "absolute",
            backgroundColor:"green",
            height: "460px",
            marginTop: "355px",
            width:"748px",
            marginLeft:"593px",
            
        }}
        >
            {/* <iframe style={{}}
            src="https://v6p9d9t4.ssl.hwcdn.net/html/1071128/WebBuild/index.html?v=1542781917" 
            width="100%" height="100%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            */}

            <iframe 
            src="https://static.bumpworthy.com/bumps/8739.d.mp4" 
            width="100%" height="100%"frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="false" ></iframe>

        
        {/* iframes go here! */}
        

        </div>

    <div id="test"> 
    <ResizableBox style={{marginLeft: "136px"}} width={1000} height={100} draggableOpts={{grid: [25, 25]}}
    minConstraints={[100, 100]} maxConstraints={[300, 300]}>
         
         
        <img  src="../bggb_black.png"
        style={{
            marginLeft:"317px",
            minHeight: "10%",
            marginTop: "172px",
            marginBottom: "-15px", 
            width: "1514px",
            minWidth: "1027px",
        }}
        ></img> 
        </ResizableBox>    
        </div>
        </div>







</>





)}
export default QuotesLibrary

