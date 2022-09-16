import React, {useState} from "react";
import { Link } from "react-router-dom";

const AdminDetails = ({adminInput, setAdminInput}) => {

// this page is set up for:
//    * password-protected admin details
//    * satisfying our CRUD element 
//    * Fetches: GET, POST, UPDATE, DELETE 
//    * Iterating over our data and making changes 

// this page should contain:
//    * the most basic css:
//          * iteration of data with delete button 
//          * iteration of data with update button for the keys: 
//                 * games => (name, desc, link, image)
//                 * quotes => (link)
//                 * cartoons => (name, desc, link, image)
//          * 3 forms to add new data (for each library) 





// some insight:
// Set state and render password input if false or render protected component if true
return (
    <>
<section>

        

   
<dialog className="nes-dialog is-rounded" id="dialog-rounded"
style={{marginTop: "356px"}}
>
    <form method="dialog">
     {/* Title! */}
    <p class="title">Your Favorites:</p>
    <br/>
    
    {/* Buttons! */}
    
    <p>"Entertaining 1950's Lobotomy Simulators"</p> 
    <br/>

     {/* 1 */}
    <button style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
        className="nes-btn">View</button>
    <br/>

     <br/>
    <p style={{marginLeft: "170px"}}>"Mind Lube"</p> 
    <br />
    {/* 2 */}
   
    <button style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
        className="nes-btn">View</button>
    <br />
    <br/>
    <p>"What I Felt Was Inspirational Today..."</p> 
    <br/>

    {/* 3 */}
    <button style={{cursor: "pointer", marginLeft: "181px", width:"100px"}}
        className="nes-btn">View</button>
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
        <img src="../x-btn1.png"/>
        
       </button>
    </menu>
    </form>
</dialog>
</section>

</>





)}
export default AdminDetails