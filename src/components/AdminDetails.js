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

    let hello = function(){
        document.getElementById('admin-main-menu').showModal()
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

    <button onClick={hello}
        style={{cursor: "pointer", marginLeft: "10%", marginTop:"4%", width:"50%"}}
            className="nes-btn">Hello Admin, Click for Directory</button>
    
    <section>

            

    
    <dialog className="nes-dialog is-rounded" id="admin-main-menu" 
    style={{marginTop: "356px"}}
    >
        <form method="dialog">
        {/* Title! */}
        <p class="title">Menu</p>
        <br/>
        
        {/* Buttons! */}
        <p>"Entertaining 1950's Lobotomy Simulators"</p> 
        <p style={{fontSize:"16px", textAlign:"center"}}>(Game Library)</p>
        <br/>

        {/* 1 */}
       
        <Link to="/admin-gamelibrary"
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">View</Link>
        <br/>

        <br/>
        <p style={{marginLeft: "170px"}}>"Mind Lube"</p> 
        <p style={{fontSize:"16px", textAlign:"center"}}>(Cartoon Libary)</p>

        <br />
        {/* 2 */}

        
        <Link to="/admin-cartoonlibrary"
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">View</Link>
        <br />
        <br/>
        <p>"What I Felt Was Inspirational Today..."</p>
        <p style={{fontSize:"16px", textAlign:"center"}}>(Magic 8-Ball Library)</p>

        <br/>
    
        {/* 3 */}

      
        <Link to="/admin-quoteslibrary"
        style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
            className="nes-btn">View</Link>
        <br/>
        <br/>
        <menu className="dialog-menu">
            <button style={{
            cursor: "pointer", 
            marginTop: "-40px",
            marginLeft: "334px",
            width: "65px",
            height:"65px"
        }}>
           <Link to="/admin"> <img src="../x-btn1.png" alt="close"/> </Link>
            
        </button>
        </menu>
        </form>
    </dialog>
    </section>
    {/* ################################### End ########################################### */}

    {/*############################# Game Library Pop-Up ################################## */}
    <GamesContainer />
    {/*############################# Cartoon Library Pop-Up ################################## */}
    <CartoonsContainer />
    {/* /* ###################################################################################  */}

    {/*############################# Quotes Library Pop-Up ############################ */}
    <QuotesContainer />
    {/* ################################################################################### */}
hi NOO WAYYYY!
    </>





)

} 
export default AdminDetails