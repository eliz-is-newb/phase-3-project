import {React, useState} from "react";
import { Columns } from 'react-bulma-components';
import { Resizable, ResizableBox } from 'react-resizable';
import FavoriteListPopUp from "./FavoriteListPopUp";
import Magic8Ball from "./Magic8Ball";
import { Link } from "react-router-dom";



const Home = () => {

    // for hover effect on ghost/fav-icon <span> tag
    const [isShown, setIsShown] = useState(false); 

    let handleClick1 = function(){
        document.getElementById('dialog-rounded').showModal()
    }

    let handleClick2 = function(){
        document.getElementById('magic8ball').showModal()
    }



return (
    <>
    <div id="test"> 
    <ResizableBox style={{marginLeft: "171px"}} width={1000} height={100} draggableOpts={{grid: [25, 25]}}
    minConstraints={[100, 100]} maxConstraints={[300, 300]}>
        <Columns>
        <Columns.Column></Columns.Column>
         <Columns.Column size={5} style={{ padding: "-10px"}}>
        <img  src="../bggbfuck1.png"
        style={{
            minHeight: "10%",
            marginTop: "197px",
            marginBottom: "-15px", 
            width: "1000px",
            minWidth: "1000px",
        }}
        ></img> 
       
       
        </Columns.Column>
        <Columns.Column></Columns.Column>

        </Columns> 

        <div>
        {/* Welcome Stranger Banner */}
        <p className="nes-container is-rounded" style={{
            
            
            minWidth:"600px",
            marginRight: "555px",
            marginTop: "-711px",
            marginLeft: "445px",
            minHeight:"90px",
            marginBottom:"-60px",
            color: "white",
            stroke: "ActiveBorder",
            fontSize: "16px",
            fontWeight: "",textAlign: "center", backgroundColor:"black"}}>
            Welcome to the "Bright" Side, Curious Stranger. <br />
            Pick your poison!
        </p> 
        
        <br />
        {/* BUTTONS ! */}
        <div
         style={{
            minWidth: "10px",

            marginTop: "30px",
            padding: "2px",
            marginLeft: "600px",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent: "center",
            
        }}
        >
        {/* Game Button */}
        <Link to="/gamelibrary" className="nes-btn" style={{marginBottom: "-100px", marginRight:"-95px", marginTop:"25px", fontSize: "16px", cursor: "pointer", width: "300px", stroke:"ButtonHighlight"}}
        >
        Brain dead games for <br /> burnt-out coders</Link> <br/>
        {/* Cartoons Button */}
        <Link to="/cartoonlibrary" className="nes-btn" href="#" style={{marginBottom: "-2px", marginRight:"-100px", marginTop:"90px", fontSize: "16px", width:"140px", cursor: "pointer", height:'45px', stroke:"ButtonHighlight"}}
        >Cartoons </Link>
        <br /> 
        {/* Magic 8 Ball button */}
        <a className="nes-btn" onClick={handleClick2}
        style={{
            marginBottom: "2px", 
            cursor: "pointer", 
            stroke:"ButtonHighlight", 
            marginRight:"-104px", 
            width: "200px", 
            marginTop:"-5px"}}
        >
        <Magic8Ball/>
        <p 
       
        style={{fontSize: "16px",}}>Magic 8 Ball</p>
        </a>
        </div>
       
       <div>
       </div>

       </div>
        
        {/* this is for the stage for favorite counter. Where span (down below) says "1" */}
        <div>
        <div style={{ marginTop: "40px",
            padding: "2px",
            marginTop: "-306px",
            marginLeft: "1074px"}}>
        <a href="#" className="nes-badge is-icon">
        <span className="is-error" 
        style={{backgroundColor: "red", color: "white", minWidth: "5", height: "17px", fontSize: "10px", fontWeight: "bold", cursor: "auto",
                boxShadow: "0 0.3em red, 0 -0.3em red, 0.3em 0 red, -0.3em 0 red", width: "22px", left: "-14px", marginTop: "15px", textAlign: "center"}}
        // Right here
               >1</span> 
        {/* HOVER ! */}
        <span className="is-warning" id="favbutton" 
        onClick={handleClick1}

        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        style={{
            top: "3px", 
            left:"2px", 
            width: "70px",
            boxShadow: "0 0.3em black, 0 -0.2em black, 0.2em 0 black, -0.2em 0 black",
            }}>
            <img src="../favghost.png"style={{cursor: "pointer"}}></img></span>
        </a></div>
        <FavoriteListPopUp />

        {isShown && (
        <span className="nes-badge" 
        style={{
            color: "white" ,
            backgroundColor:"red", 
            width: "260px",
            boxShadow: "0 0.3em red, 0 -0.3em red, 0.3em 0 red, -0.3em 0 red", 
            padding:"3px",
            fontSize: "16px", 
            textAlign: "center", 
            marginTop: "-25px", 
            marginLeft:"800px"}}>Boo! I ate ur favs!</span> )}
        </div>
        


       </ResizableBox>
        
    </div>



    </>
)
}

export default Home