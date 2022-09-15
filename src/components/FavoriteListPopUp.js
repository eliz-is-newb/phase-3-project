import React, {useState} from "react";

const FavoriteListPopUp = () => {

return (

 <>
 <section>

        

   
   <dialog className="nes-dialog is-rounded" id="dialog-rounded">
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
          }}
           className="nes-btn is-snapchat"> 
           <img src="../x-btn1.png"/>
           
          </button>
       </menu>
       </form>
   </dialog>
   </section>
 </>   




    
)}
export default FavoriteListPopUp