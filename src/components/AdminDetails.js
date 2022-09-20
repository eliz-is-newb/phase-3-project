import React from "react"; 

import { Link } from "react-router-dom";
import GamesContainer from "./GamesContainer";
import CartoonsContainer from "./CartoonsContainer";
import QuotesContainer from "./QuotesContainer";
import './FTFY.css';


const AdminDetails = ({ }) => {





// this page is set up for:
//    * password-protected admin details
//    * satisfying our CRUD element 
//    * Fetches: GET, POST, UPDATE, DELETE 
//    * Iterating over our data and making changes 
 

    // admin menu set up: -- these are onClicks to open pop-ups 

    let games = function(){
        document.getElementById('games-div').showModal()
    }

    let cartoons = function(){
        document.getElementById('cartoons-div').showModal()
    }

    let quotes = function(){
        document.getElementById('quotes-div').showModal()
    }

    // this page should contain:
    //    * the most basic css:
    //          * iteration of data with delete button 
    //          * iteration of data with update button for the keys: 
    //                 * games => (name, desc, link, image)
    //                 * quotes => (link)
    //                 * cartoons => (name, desc, link, image)
    //          * 3 forms to add new data (for each library) 




    return (
        <>
        <div id="admin-bg">
        <br></br>
        <br/>
        <div style={{marginLeft:"30%", marginTop:"10%", width:"40%", backgroundColor: "white"}}
        className="nes-container is-rounded">
        <p  className="title">Admin Page</p></div>
        <br/>
        <br/>
    {/* ############################ Admin Menu in Pop-Up ############################### */}

    {/* <button onClick={hello}
        style={{cursor: "pointer", marginLeft: "10%", marginTop:"4%", width:"50%"}}
            className="nes-btn">Hello Admin, Click for Directory</button> */}
<div style={{position: "relative"}}>
    <img style={{cursor: "pointer", position:"absolute", top:"31px", left:"452px", width:"7.5%"}}
    src="../foldericon.png" alt="folder"/>
    <button onClick={games}
        style={{cursor: "pointer", fontFamily:"intro-font", fontSize:"12px", position:"absolute", top:"129px", left:"422px", width:"12%"}}
            className="nes-btn">games folder</button>



    <img style={{cursor: "pointer", position:"absolute", top:"31px", left:"691px", width:"7.5%"}}
    src="../foldericon.png" alt="folder"/>
    <button onClick={cartoons}
        style={{cursor: "pointer", fontFamily:"intro-font", fontSize:"12px", position:"absolute", top:"129px", left:"665px", width:"12%"}}
           className="nes-btn">cartoons folder</button> 
           


    <img style={{cursor: "pointer", position:"absolute", top:"31px", left:"929px", width:"7.5%"}}
    src="../foldericon.png" alt="folder"/>
    <button onClick={quotes}
        style={{cursor: "pointer", fontFamily:"intro-font", fontSize:"12px", position:"absolute", top:"129px", left:"899px", width:"12%"}}
            className="nes-btn">quotes folder</button>
  </div>  
  

            

    {/* ################################### End ########################################### */}

    {/*############################# Game Library Pop-Up ################################## */}
  
    <dialog className="nes-dialog is-rounded" id="games-div">
    <GamesContainer/>
    <form method="dialog">
    <menu class="dialog-menu">
        
    <button className="nes-btn"
    style={{
        cursor: "pointer", 
        marginTop: "-277px",
        marginLeft: "596px",
        width: "65px",
        height:"65px"
    }}
    > <img src="../x-btn1.png" alt="close"/> </button>
    </menu> 
    </form>
    </dialog>

    {/*############################# Cartoon Library Pop-Up ################################## */}
    <dialog className="nes-dialog is-rounded" id="cartoons-div">
    <CartoonsContainer />
    <form method="dialog">
    <menu class="dialog-menu">
    <button className="nes-btn"
    style={{
        cursor: "pointer", 
        marginTop: "-277px",
        marginLeft: "596px",
        width: "65px",
        height:"65px"
    }}
    > <img src="../x-btn1.png" alt="close"/> </button>
    </menu> 
    </form>
    </dialog>
    {/* /* ###################################################################################  */}

    {/*############################# Quotes Library Pop-Up ############################ */}
    <dialog className="nes-dialog is-rounded" id="quotes-div">
    <QuotesContainer />
    <form method="dialog">
    <menu class="dialog-menu">
    <button className="nes-btn"
    style={{
        cursor: "pointer", 
        marginTop: "-277px",
        marginLeft: "596px",
        width: "65px",
        height:"65px"
    }}
    > <img src="../x-btn1.png" alt="close"/> </button>
    </menu> 
    </form>
    </dialog>
    {/* ################################################################################### */}
    </div>
    </>
    





)

} 
export default AdminDetails