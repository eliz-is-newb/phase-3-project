import React, {useState} from "react";
import { Link } from "react-router-dom";
const Magic8Ball = () => {

return (

 <>
 <section>


   
   <dialog className="nes-dialog is-rounded" id="magic8ball">
       <form method="dialog">
       <p class="title">WARNING: You've clicked the "Magic 8 Ball" Button!!!</p>
       <br/>
       <p>If you're sure... if this choice was not a mis-click...</p>
       <br />
       <p>If you don't want to rethink your choice here ... for any possible reason.</p>
       <br/>
       <p>Then please :) </p>
       <br />
       <p>Think of a question, any burning question.</p>
       <br />
       <p>We'll do our best to answer it.</p>
       <br/>
       

       <menu className="dialog-menu">
        {/*Put link/path to the iframes display for quotes, here! (in one of these buttons) */}
           <button style={{cursor: "pointer", marginRight: "1px"}}
           className="nes-btn">No! Go Back!</button>

           <Link to="/quoteslibrary" style={{cursor: "pointer", marginLeft: "22px"}}
           className="nes-btn is-blood">I'm Ready</Link>
       </menu>
       </form>
   </dialog>
   </section>
 </>   




    
)}
export default Magic8Ball