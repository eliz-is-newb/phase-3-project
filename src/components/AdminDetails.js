import React from "react"; 

import { Link } from "react-router-dom";
import GamesContainer from "./GamesContainer";
import CartoonsContainer from "./CartoonsContainer";
import QuotesContainer from "./QuotesContainer";


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
    {/* ############################ Admin Menu in Pop-Up ############################### */}

    {/* <button onClick={hello}
        style={{cursor: "pointer", marginLeft: "10%", marginTop:"4%", width:"50%"}}
            className="nes-btn">Hello Admin, Click for Directory</button> */}


    <button onClick={games}
        style={{cursor: "pointer", marginLeft: "10%", marginTop:"8%", width:"50%"}}
            className="nes-btn">games folder</button>

    
    <button onClick={cartoons}
        style={{cursor: "pointer", marginLeft: "10%", marginTop:"8%", width:"50%"}}
            className="nes-btn">cartoons folder</button>


    <button onClick={quotes}
        style={{cursor: "pointer", marginLeft: "10%", marginTop:"8%", width:"50%"}}
            className="nes-btn">quotes folder</button>
    
  

            

    {/* ################################### End ########################################### */}

    {/*############################# Game Library Pop-Up ################################## */}
  
    <dialog className="nes-dialog is-rounded" id="games-div">
    <GamesContainer/>
    <form method="dialog">
    <menu class="dialog-menu">
    <button className="nes-btn"
    style={{
        cursor: "pointer", 
        marginTop: "-1177px",
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
        marginTop: "-1177px",
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
        marginTop: "-1177px",
        marginLeft: "596px",
        width: "65px",
        height:"65px"
    }}
    > <img src="../x-btn1.png" alt="close"/> </button>
    </menu> 
    </form>
    </dialog>
    {/* ################################################################################### */}

    </>





)

} 
export default AdminDetails