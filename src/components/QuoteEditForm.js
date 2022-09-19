import React from "react";
import { useState } from "react";

function CartoonEditForm({ handleUpdate, newChange, addNewChanges, quote}) {

    const [openUpdateForm, setOpenUpdateForm] = useState(false) // update 

    let toggleEditInput = function(e){
        setOpenUpdateForm(!openUpdateForm)
        e.preventDefault()
    }
    return(
        <>
         <button onClick={toggleEditInput}
        style={{cursor: "pointer", marginLeft: "147px", width:"250px", marginTop:"-2px", fontSize:"18px", marginBottom:"0px"}}
            className="nes-btn">Edit!</button>
            {/* ---------form here--------------- */}


            {/* ternary to display the form on pop-up/modal */}
            {openUpdateForm
                    ? <> 
                    <form className="nes-field" 
                    onSubmit={(e)=>handleUpdate(e,quote.id)} //patch
                    onChange={addNewChanges} //patch
                    // change this submit 
                    // style={{position: "absolute", zIndex: "90", top:"732px"}}
                    >
                        <br/>
                        {/*  title */}
                    <label for="link_field">Title?</label>
                    <input 
                        id="name_field"
                        name="quote"
                        value={newChange.quote}
                        type="text" 
                        className="nes-input" 
                        placeholder="Change title"/>
                        <br/>
                        <button className="nes-btn" type="submit"> submit </button>

                    {/* end of form */}
                  
                    
                    </form></>

                    : null
                
            }
            
        
        </>

    )
}

export default CartoonEditForm

