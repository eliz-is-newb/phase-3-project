import {React, useState} from "react";
import { Columns } from 'react-bulma-components';
import { Resizable, ResizableBox } from 'react-resizable';
import FavoriteListPopUp from "./FavoriteListPopUp";
import Magic8Ball from "./Magic8Ball";
import { Link } from "react-router-dom";
import AdminDetails from "./AdminDetails";
import InputForAdmin from "./InputForAdmin";



const Home = () => {

    // for hover effect on ghost/fav-icon <span> tag
    const [isShown, setIsShown] = useState(false); 

    // for CRUD requirement
    const [isAdmin, setIsAdmin] = useState(false);
    const [showAdminInput, setShowAdminInput] = useState(false)
    const [isAdminInputTrue, setIsAdminInputTrue] = useState("");
    
    //have a string as a key, if the input matches that key
   

    let toggleInput = function(){
        setShowAdminInput(showAdminInput => !showAdminInput)
    }

    
    

    
    let handleClick2 = function(){
        document.getElementById('magic8ball').showModal()
    }
    // if input for admin box is true, show 'admin' .showModal (global)
    // onSubmit 
    // if not true, clear box and display placeholder text 
     



return (
    <>
    <div id="test"> 
    <ResizableBox style={{marginLeft: "184px"}} width={1000} height={100} draggableOpts={{grid: [25, 25]}}
    minConstraints={[100, 100]} maxConstraints={[300, 300]}>
        <Columns>
        <Columns.Column></Columns.Column>
         <Columns.Column size={5} style={{ padding: "-10px"}}>
            {/* GAMEBOY DIV IMG SHIT THAT I SHOULDNT HAVE TOUCHED HAHAHA */}
        <img  src="../bggb23.png"
        style={{
            marginLeft:"-29px",
            minHeight: "10%",
            marginTop: "172px",
            marginBottom: "-15px", 
            width: "1514px",
            minWidth: "1027px",
        }}
        ></img> 
       
       
        </Columns.Column>
        <Columns.Column></Columns.Column>

        </Columns> 

        <div>
        {/* Welcome Stranger Banner */}
        <p className="nes-container is-rounded" style={{
            
            
            minWidth:"688px",
            marginTop: "-736px",
            marginLeft: "461px",
            minHeight:"90px",
            marginBottom:"79px",
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
            marginLeft: "590px",
            display: "flex",
            flexDirection: "column",
            alignItems:"center",
            justifyContent: "center",
            
        }}
        >
        {/* Game Button */}
        <Link to="/gamelibrary" className="nes-btn" 
        style={{
            marginBottom: "-106px", 
            marginRight:"-11px", 
            marginTop:"14px", 
            fontSize: "14px", 
            cursor: "pointer", 
            width: "227px", 
            stroke:"ButtonHighlight"}}
        >
        Brain dead games for <br /> burnt-out coders</Link> <br/>
        {/* Cartoons Button */}
        <Link to="/cartoonlibrary" className="nes-btn" href="#" 
        style={{
            paddingTop:"13px",
            marginBottom: "-3px", 
            marginRight:"376px", 
            marginTop:"22px", 
            fontSize: "14px", 
            width:"120px", 
            cursor: "pointer", 
            height:'60px', 
            stroke:"ButtonHighlight"}}
        >Cartoons </Link>
        <br /> 
        {/* Magic 8 Ball button */}
        <Link to="/quoteslibrary"  className="nes-btn" 
        style={{
        
           
            marginBottom: "-5px", 
            cursor: "pointer", 
            stroke:"ButtonHighlight", 
            marginRight:"-403px", 
            width: "120px", 
            marginTop:"-81px",
            height: "60px"
        }}
        >
        <Magic8Ball/>
        <p 
       
        style={{fontSize: "14px",}}>Magic 8 Ball</p>
        </Link>
        </div>
       
       <div>
       </div>

       </div>
        
        {/* Power Off/ Hover "Power" button */}
        <div>
        <div style={{ 
           
            marginTop: "75px",
            padding: "2px",
            marginTop: "80px",
            marginLeft: "423px"}}>
        <span href="#" className="nes-badge is-icon"
        style={{
            // just hiding this element
            display: "none",
            backgroundColor: "gray", 
            color: "white", 
            minWidth: "7", 
            height: "21px", 
            fontSize: "10px", 
            fontWeight: "bold", 
            cursor: "auto",
            boxShadow: "0 0.3em gray, 0 -0.3em gray, 0.3em 0 gray, -0.3em 0 gray", 
            width: "20px", 
            left: "-33px",
            marginTop: "15px", 
            textAlign: "center"}}
        // Right here
               >i</span> 
        {/* HOVER ! */}
        <Link to="/" className="nes-btn is-lil-darkie" id="favbutton" 
        
       
            // copy pasta for actual button
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        style={{
            zIndex: "20",
            backgroundColor: "black",
            padding:"3px",
            top: "-2px", 
            left:"-3px", 
            width: "50px",
            height: "48px",
            boxShadow: "3 0.9em black, 3 -0.9em black, 0.2em 3 black, -0.2em 3 black",
            }}>
            <img src="../powerbtn1.png"style={{cursor: "pointer"}}></img></Link>
        </div> 
      
      

        {isShown && (
        <p className="nes-badge" 
        style={{
            position: "absolute",
            color: "white" ,
            backgroundColor:"black", 
            width: "255px",
            boxShadow: "0 0.1em white, 0 -0.1em white, 0.1em 0 white, -0.1em 0 white", 
            paddingTop:"7px",
            height: "33px",
            fontSize: "13px", 
            textAlign: "center", 
            marginTop: "-45px", 
            marginLeft:"499px",
            cursor: "pointer",
            marginRight: "-150px",
            marginBottom: "-150px"
            }}>Power Off?</p> )}
        </div>
        

        {/* Control Panel ! - "Admin controls" */}
        <div style={{ 
            marginTop: "75px",
            padding: "2px",
            marginTop: "80px",
            marginLeft: "397px",
            marginRight: "206px"
            }}>
    
        {/* HOVER ! */}
        <div className="nes-btn is-lil-darkie"
       
       
            // copy pasta for actual button

        onClick={toggleInput}
        onMouseEnter={() => setIsAdmin(true)}
        onMouseLeave={() => setIsAdmin(false)}
        style={{
            cursor: "pointer",
            backgroundColor: "black",
            scrollPaddingTop:"5px",
            paddingBottom:"4",
            top:  "-142px", 
            left: "705px", 
            width: "44px",
            height: "45px",
            boxShadow: "3 0.9em black, 3 -0.9em black, 0.2em 3 black, -0.2em 3 black",
            }}>
                {/* On click for admin input - here */}
            <img src="../adminlock.png"
            style={{cursor: "pointer"}}
            
            ></img></div>
        
            {isAdmin && (
        <p className="nes-badge" 
        style={{
            zIndex: "18",
            color: "white" ,
            backgroundColor:"black", 
            width: "105px",
            boxShadow: "0 0.1em white, 0 -0.1em white, 0.1em 0 white, -0.1em 0 white", 
            paddingTop:"7px",
            height: "33px",
            fontSize: "13px", 
            textAlign: "center", 
            marginTop: "-187px", 
            marginLeft:"575px",
            cursor: "pointer"
            // set text here dodo bird lol
            }}>admin?</p> )}
            
            

            {/* Admin Details Pop-up */}
            <AdminDetails />
            {/* <InputForAdmin setAdminInput={setIsAdminInputTrue} adminInput={isAdminInputTrue} /> */}
            <div id="input-container">
            
            {showAdminInput
                ? <InputForAdmin setAdminInput={setIsAdminInputTrue} adminInput={isAdminInputTrue} />
                : null
            
            }
            </div>
          
           
           
            </div>

            <div>

            </div>
        

    </ResizableBox>
      
        
    </div>



    </>
)
}

export default Home